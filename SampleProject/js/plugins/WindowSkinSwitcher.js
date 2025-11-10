//=============================================================================
// WindowSkinSwitcher.js
//=============================================================================
// ----------------------------------------------------------------------------
// (C)2021 maguros
// This plugin is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.0.4 2025/11/10 メッセージウィンドウ更新時のちらつきバグを修正およびスキン変更のセーブ/ロードに対応
// 1.0.3 2021/03/21 軽微な修正
// 1.0.2 2021/03/16 URLの間違いを修正
// 1.0.1 2021/03/15 ヘルプ文言の修正およびリファクタリング
// 1.0.0 2021/03/14 初版
// ----------------------------------------------------------------------------
// [X]: https://x.com/maguros3/
// [GitHub] : https://github.com/maguros/
//=============================================================================

/*:
 * @plugindesc ウィンドウスキン切り替えプラグイン
 * @target MZ
 * @url https://github.com/maguros/RPGMakerMZ_Plugins/blob/master/SampleProject/js/plugins/WindowSkinSwitcher.js
 * @author maguros
 * @base PluginCommonBase
 *
 * @param SkinInfoList
 * @text ウィンドウスキン一覧
 * @desc 切り替えるウィンドウスキンを登録します。何も登録されていない場合はデフォルトのウィンドウが表示されます。
 * @type struct<SkinInfo>[]
 * 
 * @command SWITCH_SKIN
 * @text ウィンドウスキン切り替え
 * @desc ウィンドウスキンを指定したスキンIDに対応するスキンに切り替えます。
 * 
 * @arg skin_id
 * @text スキンID
 * @desc 切り替えるウィンドウのスキンIDです。該当IDがない場合はデフォルトのウィンドウが表示されます。
 * @default 0
 * @type number
 * 
 * @arg keep_skin
 * @text スキン保持設定
 * @desc スキンの変更内容をセーブ時に保存するか選択できます。保存したくない場合はOFFを選択してください。
 * @default true
 * @type boolean
 * 
 * @command RESET_SKIN
 * @text ウィンドウスキン初期化
 * @desc ウィンドウスキンをデフォルトに戻します。
 * 
 * @help プラグインコマンドからウィンドウスキンの切り替えを行うプラグインです。
 * 使用するにはあらかじめ「ウィンドウスキン一覧」にウィンドウスキンを
 * 登録しておく必要があります。
 * 「ウィンドウスキン一覧」が未設定の場合はデフォルトのウィンドウスキン
 * （img/system/Window.png）が設定されます。
 * なお、登録するウィンドウスキンはRPGツクールMZの素材規格を満たしている
 * 必要があります。
 * 
 * ■プラグインコマンド
 *   ウィンドウスキン切り替え：スキンIDに対応するウィンドウスキンに切り替えます。
 *   ウィンドウスキン初期化：ウィンドウスキンをデフォルトに戻します。
 * 
 * このプラグインの利用にはベースプラグイン『PluginCommonBase.js』が必要です。
 * 『PluginCommonBase.js』は、RPGツクールMZのインストールフォルダ配下の
 * 以下のフォルダに格納されています。
 * dlc/BasicResources/plugins/official
 * 
 * 利用規約：
 *   作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *   についても制限はありません。
 */

/*~struct~SkinInfo:
 * 
 * @param SkinID
 * @text スキンID
 * @desc ウィンドウスキンの呼び出しに使用する識別IDです。
 * それ以外のときはデフォルトのウィンドウが表示されます。default：0
 * @default 0
 * @type number
 * 
 * @param SkinFileName
 * @text ウィンドウスキン画像
 * @desc ウィンドウスキンとして使用する画像をシステム画像から指定します。
 * @default
 * @dir img/system
 * @type file
 * 
 * @param BackOpacity
 * @desc ウィンドウ背景の透明度を設定します。0〜255の間で設定可能で、数値が小さいほど透明に近くなります。
 * @default 192
 * @type number
 * @min 0
 * @max 255
 * 
 */

(() => {
    'use strict';
    const _script = document.currentScript;
    const _param = PluginManagerEx.createParameter(_script);

    let _windowSkin = null;
    let _backOpacity = null;

    function setDefault() {
        _windowSkin = ImageManager.loadSystem('Window');
        _backOpacity = 192;
    }

    function saveSkinState() {
        if (!$gameSystem._windowSkinState) {
            $gameSystem._windowSkinState = {};
        }
        $gameSystem._windowSkinState.fileName = _windowSkin?._url?.match(/\/([^/]+)\.png$/)?.[1] || 'Window';
        $gameSystem._windowSkinState.opacity = _backOpacity ?? 192;
    }

    PluginManagerEx.registerCommand(_script, 'SWITCH_SKIN', function(args) {
        if (_param.SkinInfoList.length === 0) {
            return;
        }

        const skinInfo = _param.SkinInfoList.find((x) => x.SkinID === args.skin_id);
        if (skinInfo) {
            _windowSkin = ImageManager.loadSystem(skinInfo.SkinFileName);
            _backOpacity = skinInfo.BackOpacity;
        } else {
            setDefault();
        }

        if (SceneManager._scene && SceneManager._scene.children) {
            SceneManager._scene.children.forEach(scene => {
                if (scene && typeof scene.refreshSkin === "function") {
                    scene.refreshSkin();
                }
            });
        }

        const keepSkin = (args.keep_skin === "undefined") ? true : args.keep_skin;
        if (typeof $gameSystem !== "undefined" && keepSkin) {
            saveSkinState();
        }
    });

    PluginManagerEx.registerCommand(_script, 'RESET_SKIN', function() {
        setDefault();
    });

    const _Window_Base_update = Window_Base.prototype.update;
    Window_Base.prototype.update = function() {
        _Window_Base_update.apply(this, arguments);

        if (!_windowSkin || !_backOpacity) {
            setDefault();
        }

        const targetSkinName = _windowSkin?._url?.match(/\/([^/]+)\.png$/)?.[1] ?? 'Window';
        const currentSkinName = this._currentSkinName ?? 'Window';

        if (currentSkinName !== targetSkinName || this.backOpacity !== _backOpacity) {
            this._currentSkinName = targetSkinName;
            this.refreshSkin();
        }
    };

    Window_Base.prototype.refreshSkin = function() {
        if (!_windowSkin || !_backOpacity) {
            setDefault();
        }
        this.windowskin = _windowSkin;
        this.backOpacity = _backOpacity;
    };

    const _Game_System_onAfterLoad = Game_System.prototype.onAfterLoad;
    Game_System.prototype.onAfterLoad = function() {
        _Game_System_onAfterLoad.apply(this, arguments);

        const state = this._windowSkinState;
        if (state) {
            _windowSkin = ImageManager.loadSystem(state.fileName);
            _backOpacity = state.opacity;
        } else {
            setDefault();
        }

        if (SceneManager._scene && SceneManager._scene._windowLayer) {
            SceneManager._scene._windowLayer.children.forEach(window => {
                if (window instanceof Window) {
                    window.refreshSkin();
                }
            });
        }
    };

    const _Window_Message_loadWindowskin = Window_Message.prototype.loadWindowskin;
    Window_Message.prototype.loadWindowskin = function() {
        _Window_Message_loadWindowskin.apply(this, arguments);

        if (_windowSkin) {
            this.windowskin = _windowSkin;
        }
        if (_backOpacity != null) {
            this.backOpacity = _backOpacity;
        }
    };

    const _Window_NameBox_loadWindowskin = Window_NameBox.prototype.loadWindowskin;
    Window_NameBox.prototype.loadWindowskin = function() {
        _Window_NameBox_loadWindowskin.apply(this, arguments);

        if (_windowSkin) {
            this.windowskin = _windowSkin;
        }
        if (_backOpacity != null) {
            this.backOpacity = _backOpacity;
        }
    };

    const _Scene_Title_start = Scene_Title.prototype.start;
    Scene_Title.prototype.start = function() {
        setDefault();
        _Scene_Title_start.apply(this, arguments);
    };
})();

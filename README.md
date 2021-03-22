# RPGツクールMZ用プラグイン

自作ゲーム用に作ったプラグインのうち、汎用的に使えそうなものを公開しています。  
また、[RPGアツマールで公開中のサンプルゲーム](https://game.nicovideo.jp/atsumaru/games/gm19008?key=316bc71b5ee1)にて、プラグインの紹介および動作イメージをご覧いただけます。  


## プラグイン一覧

| プラグイン名            | 最新Ver | 公開日        | 更新日        | DL                                                                                                                           |
|:-----------------:|:-----:|:----------:|:----------:|:----------------------------------------------------------------------------------------------------------------------------:|
| ウィンドウスキン切り替えプラグイン | 1.0.3 | 2021/03/14 | 2021/03/21 | [DL](https://raw.githubusercontent.com/maguros/RPGMakerMZ_Plugins/master/SampleProject/js/plugins/WindowSkinSwitcher.js)     |
| 名前ウィンドウの位置移動プラグイン | 1.0.3 | 2021/03/14 | 2021/03/21 | [DL](https://raw.githubusercontent.com/maguros/RPGMakerMZ_Plugins/master/SampleProject/js/plugins/NameBoxPositionChanger.js) |
| タイトル画面項目非表示化プラグイン | 1.0.2 | 2021/03/15 | 2021/03/21 | [DL](https://raw.githubusercontent.com/maguros/RPGMakerMZ_Plugins/master/SampleProject/js/plugins/TitleItemEraser.js)        |
| オプション項目非表示化プラグイン  | 1.0.2 | 2021/03/15 | 2021/03/21 | [DL](https://raw.githubusercontent.com/maguros/RPGMakerMZ_Plugins/master/SampleProject/js/plugins/OptionItemEraser.js)       |
| 簡易ガチャプラグイン        | 1.0.2 | 2021/03/20 | 2021/03/21 | [DL](https://raw.githubusercontent.com/maguros/RPGMakerMZ_Plugins/master/SampleProject/js/plugins/LotteryGenerator.js)       |
| 所持アイテム保存プラグイン     | 1.0.0 | 2021/03/22 | -          | [DL](https://raw.githubusercontent.com/maguros/RPGMakerMZ_Plugins/master/SampleProject/js/plugins/HasItemsSaver.js) |


## 利用規約

上記「プラグイン一覧」に含まれるプラグインは全て[MITライセンス](https://github.com/maguros/RPGMakerMZ_Plugins/blob/master/LICENSE.ja.md)です。  
商用/非商用問わず報告なしで自由にご利用いただけます。


## サンプルプロジェクトの使い方

[SampleProject](https://github.com/maguros/RPGMakerMZ_Plugins/blob/master/SampleProject/)以下のファイルをRPGツクールMZの新規プロジェクトに上書きすることでイベントやプラグインの設定内容などを確認いただくことが可能です。  
ただし、テストプレイの実行など、ゲームとして動作させる場合には以下の手順で追加素材を導入する必要があります。

### システム画像の導入手順

* 白黒ウィンドウ素材（jackalope様）
    1. [白黒ウィンドウ素材](https://tm.lucky-duet.com/viewtopic.php?t=5263)をダウンロードする。
    2. ダウンロードした `Window.png` を `Window2.png` にリネームする。
    3. `Window2.png` を `img/system/` 直下に配置する。

* 紙風のシステムウィンドウ素材（sirloin_ryo様）
    1. [紙風のシステムウィンドウ素材](https://tm.lucky-duet.com/viewtopic.php?f=14&t=7530)をダウンロードする。
    2. ダウンロードした `Window.png` を `Window3.png` にリネームする。
    3. `Window3.png` を `img/system/` 直下に配置する。

### プラグインの導入手順

* PluginCommonBase
    * RPGツクールMZのインストールフォルダ配下の `dlc/BasicResources/plugins/official/PluginCommonBase.js` を　`js/plugins` 直下にコピペする。

* イベントラベルプラグイン（トリアコンタン様）
    1. [イベントラベルプラグイン](https://github.com/triacontane/RPGMakerMV/tree/mz_master/EventLabel.js)をダウンロードする。
    2. ダウンロードした `EventLabel.js` を `js/plugins` 直下に配置する。

* フキダシウィンドウプラグイン（トリアコンタン様）
    1. [フキダシウィンドウプラグイン](https://github.com/triacontane/RPGMakerMV/tree/mz_master/MessageWindowPopup.js)をダウンロードする。
    2. ダウンロードした `MessageWindowPopup.js` を `js/plugins` 直下に配置する。

* 選択肢拡張プラグイン（木星ペンギン様）
    1. [選択肢拡張プラグイン](http://woodpenguin.web.fc2.com/MV_Plugin/MPP_ChoiceEX.html)をダウンロードする。
    2. ダウンロードした `MPP_ChoiceEX.js` を `js/plugins` 直下に配置する。

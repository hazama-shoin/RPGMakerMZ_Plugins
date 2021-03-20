# RPGツクールMZ用プラグイン

自作ゲーム用に作ったプラグインのうち、汎用的に使えそうなものを公開しています。  
また、[RPGアツマールで公開中のサンプルゲーム](https://game.nicovideo.jp/atsumaru/games/gm19008?key=316bc71b5ee1)にて、プラグインの紹介および動作イメージをご覧いただけます。  


## プラグイン一覧

| プラグイン名            | 最新Ver | 公開日        | 更新日        | DL                                                                                                                           |
|:-----------------:|:-----:|:----------:|:----------:|:----------------------------------------------------------------------------------------------------------------------------:|
| ウィンドウスキン切り替えプラグイン | 1.0.2 | 2021/03/14 | 2021/03/16 | [DL](https://raw.githubusercontent.com/maguros/RPGMakerMZ_Plugins/master/plugins/WindowSkinSwitcher.js)     |
| 名前ウィンドウの位置移動プラグイン | 1.0.2 | 2021/03/14 | 2021/03/16 | [DL](https://raw.githubusercontent.com/maguros/RPGMakerMZ_Plugins/master/plugins/NameBoxPositionChanger.js) |
| タイトル画面項目非表示化プラグイン | 1.0.1 | 2021/03/15 | 2021/03/16 | [DL](https://raw.githubusercontent.com/maguros/RPGMakerMZ_Plugins/master/plugins/TitleItemEraser.js)        |
| オプション項目非表示化プラグイン  | 1.0.1 | 2021/03/15 | 2021/03/16 | [DL](https://raw.githubusercontent.com/maguros/RPGMakerMZ_Plugins/master/plugins/OptionItemEraser.js)       |
| 簡易ガチャプラグイン        | 1.0.0 | 2021/03/20 | -          | [DL](https://raw.githubusercontent.com/maguros/RPGMakerMZ_Plugins/master/plugins/LotteryGenerator.js)       |


## 利用規約

上記「プラグイン一覧」に含まれるプラグインは全て[MITライセンス](https://github.com/maguros/RPGMakerMZ_Plugins/blob/master/LICENSE.txt)です。  
商用/非商用問わず報告なしで自由にご利用いただけます。


## サンプルプロジェクトの使い方

[SampleProject](https://github.com/maguros/RPGMakerMZ_Plugins/blob/master/SampleProject/)以下のファイルをRPGツクールMZの新規プロジェクトに上書きすることで、イベントやプラグインの設定内容などを確認いただくことが可能ですが、サンプルゲームと同様の動作をさせるためには以下の素材を導入する必要があります。

### システム素材

* Jackalope様
    * [白黒ウィンドウ素材](https://tm.lucky-duet.com/viewtopic.php?t=5263)
        1. ダウンロードした画像ファイルを `Windows2.png` にリネームする。
        2. `img/system/` 直下に配置する。

* sirloin_ryo様
    * [紙風のシステムウィンドウ素材](https://tm.lucky-duet.com/viewtopic.php?f=14&t=7530)
        1. ダウンロードした画像ファイルを `Windows3.png` にリネームする。
        2. `img/system/` 直下に配置する。

### プラグイン素材

* トリアコンタン様 [[Blog](https://triacontane.blogspot.jp/)] [[Twitter](https://twitter.com/triacontane/)] [[GitHub](https://github.com/triacontane/)]
    * PluginCommonBase
        1. RPGツクールMZのインストールフォルダ配下の `dlc/BasicResources/plugins/official/PluginCommonBase.js` を　`js/plugins` 直下に配置する。
        2. RPGツクールMZを起動し、プラグインリストに登録する。
    * [イベントラベルプラグイン](https://github.com/triacontane/RPGMakerMV/tree/mz_master/EventLabel.js)
        1. ダウンロードした `EventLabel.js` を `js/plugins` 直下に配置する。
        2. RPGツクールMZを起動し、プラグインリストに登録する。
    * [フキダシウィンドウプラグイン](https://github.com/triacontane/RPGMakerMV/tree/mz_master/MessageWindowPopup.js)
        1. ダウンロードした `MessageWindowPopup.js` を `js/plugins` 直下に配置する。
        2. RPGツクールMZを起動し、プラグインリストに登録する。

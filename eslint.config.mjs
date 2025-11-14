import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        $dataArmors: "readonly",
        $dataItems: "readonly",
        $dataSystem: "readonly",
        $dataWeapons: "readonly",
        $gameMap: "readonly",
        $gameMessage: "readonly",
        $gameParty: "readonly",
        $gamePlayer: "readonly",
        $gameSwitches: "readonly",
        $gameSystem: "readonly",
        $gameVariables: "readonly",
        Game_Event: "readonly",
        Game_Map: "readonly",
        Game_Player: "readonly",
        Game_System: "readonly",
        Graphics: "readonly",
        ImageManager: "readonly",
        Input: "readonly",
        JsonEx: "readonly",
        PluginManagerEx: "readonly",
        Rectangle: "readonly",
        Scene_MenuBase: "readonly",
        Scene_Options: "readonly",
        Scene_Title: "readonly",
        SceneManager: "readonly",
        TextManager: "readonly",
        Window_Base: "readonly",
        Window_Message: "readonly",
        Window_NameBox: "readonly",
        Window_NameEdit: "readonly",
        Window_NameInput: "readonly",
        Window_Options: "readonly",
        Window_TitleCommand: "readonly"
      }
    }
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script"
    }
  },
]);

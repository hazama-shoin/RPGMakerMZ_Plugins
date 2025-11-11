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
        $gameMap: "readonly",
        $gamePlayer: "readonly",
        $gameSystem: "readonly",
        Game_Player: "readonly",
        Game_System: "readonly",
        ImageManager: "readonly",
        PluginManagerEx: "readonly",
        Scene_Title: "readonly",
        SceneManager: "readonly",
        Window_Base: "readonly",
        Window_Message: "readonly",
        Window_NameBox: "readonly"
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

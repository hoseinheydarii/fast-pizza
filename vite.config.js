import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Eslintrc from "./.eslintrc.cjs";
// import eslintPlugin from "vite-plugin-eslint";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //  eslint()
  ],
  // server: {
  //   hmr: {
  //     overlay: false,
  //   },
  // },
});

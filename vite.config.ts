import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/Kebabik-Mini-App/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // @ = папка src
      "@img": path.resolve(__dirname, "./src/img"), // @img = папка img
    },
  },
});

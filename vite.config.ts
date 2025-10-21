// Cole este código final em: vite.config.ts

import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()], // Apenas o plugin do React é necessário aqui
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  // Aponta para o index.html dentro da pasta client
  root: path.resolve(__dirname, "client"),
  build: {
    // Define a pasta de saída correta para o Netlify
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  server: {
    port: 3000,
  },
});

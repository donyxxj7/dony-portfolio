// Cole este código final e simplificado em: vite.config.ts

import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Define a pasta 'client' como a raiz do código-fonte para o Vite
  root: path.resolve(__dirname, "client"),
  resolve: {
    alias: {
      // O alias agora funciona corretamente dentro do contexto da raiz 'client'
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  build: {
    // Gera a pasta de build 'dist' na raiz do projeto, que é o padrão do Netlify
    outDir: path.resolve(__dirname, "dist"),
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

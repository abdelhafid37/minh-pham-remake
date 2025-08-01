import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@animation": path.resolve(__dirname, "./src/animations"),
      "@base": path.resolve(__dirname, "./src/layers/base"),
      "@mask": path.resolve(__dirname, "./src/layers/mask"),
      "@constant": path.resolve(__dirname, "./src/constants"),
      "@component": path.resolve(__dirname, "./src/components"),
    },
  },
});

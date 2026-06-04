import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// Standard Vite SPA build (Vercel / Netlify / static host compatible).
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true,
  },
  preview: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  // "julle-portfolio" is your repository name needed for GitHub static pages
  base: process.env.VITE_BASE || "/julle-portfolio/",
  server: {
    host: "::",
    port: 3000,
    strictPort: true,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

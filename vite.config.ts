import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Plain Vite + React SPA — builds to /dist for static hosting (Hostinger).
// base: "./" produces relative asset paths, so the build works whether deployed
// at the domain root or in a subdirectory.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
  },
  preview: {
    host: "::",
    port: 8080,
  },
});

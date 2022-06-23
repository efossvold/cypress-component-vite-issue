import { join } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: join(__dirname, "../.."),
  plugins: [tsconfigPaths({ root: ".." }), react()],
  server: {
    fs: {
      allow: [join(__dirname, '..', 'utils')]
    } 
  }
});

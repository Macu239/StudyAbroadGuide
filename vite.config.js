import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      /* Default options (you can tweak) */
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 75 }, // generate WebP automatically
      avif: { quality: 50 },
    }),
  ],
  build: {
    outDir: "dist", // now build stays inside FrontEnd
    emptyOutDir: true,
  },
});

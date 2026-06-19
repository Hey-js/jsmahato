import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    visualizer({ filename: "stats.json", json: true })
  ],
  tanstackStart: {},
  nitro: {
    preset: "vercel"
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['@tanstack/react-router'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-sanity': ['@sanity/client', '@sanity/image-url', 'groq'],
        }
      }
    }
  }
});

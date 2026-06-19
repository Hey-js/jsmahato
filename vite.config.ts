import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    visualizer({ filename: "stats.json", json: true })
  ],
  tanstackStart: {},
  nitro: {
    preset: "vercel"
  }
});

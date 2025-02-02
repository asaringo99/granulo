import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte({preprocess: sveltePreprocess()}),
    wasm(),
    topLevelAwait(),
  ],
  optimizeDeps: {
    exclude: [
      "@syntect/wasm",
    ]
  }
})

import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'index',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: /^omi/,
      input: {
        main: resolve(__dirname, 'index.html'),
        // admin: resolve(__dirname, 'demo.html'),
      },
    },
  },
  plugins: [dts()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
  },
})

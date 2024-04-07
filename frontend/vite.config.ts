import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [
          IconsResolver({ prefix: '' })
        ],
      }),
      Icons({
        autoInstall: true
      }),
      AutoImport({
        imports: ['vue']
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: true,
      port: 3001,
    },
  };
});

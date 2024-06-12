import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    define: {
      'process.env': env
    },
    plugins: [react(), eslintPlugin(), tsconfigPaths()],
    build: {
      rollupOptions: {
        input: './index.html',
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          }
        }
      }
    }
  }
})

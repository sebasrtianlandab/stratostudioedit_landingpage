import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // SPA: sirve index.html para rutas como /etapas, /servicios, etc.
    {
      name: 'spa-fallback',
      configureServer(server) {
        const routes = ['/', '/etapas', '/servicios', '/niveles', '/contacto']
        server.middlewares.use((req, res, next) => {
          const pathname = (req.url ?? '').split('?')[0]
          if (routes.includes(pathname)) {
            req.url = '/index.html'
          }
          next()
        })
      },
    },
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-bienve/', // Ruta relativa desde la raíz del dominio
  plugins: [react()],
  esbuild: {
    loader: 'tsx',  // Asegúrate de manejar archivos .tsx correctamente
    include: /src\/.*\.[tj]sx?$/,  // Incluye archivos .jsx y .tsx
  },
  build: {
    outDir: 'dist', // Directorio de salida
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`, // Nombres para los archivos de entrada
        chunkFileNames: `[name].js`, // Nombres para los archivos dinámicos
        assetFileNames: `[name].[ext]` // Nombres para los archivos estáticos
      }
    }
  }
});

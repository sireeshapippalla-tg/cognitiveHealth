// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const deferCssPlugin = () => {
  return {
    name: 'defer-css',
    transformIndexHtml(html: string) {
      return html.replace(
        /<link([^>]+)rel=["']stylesheet["']([^>]*)>/gi,
        '<link$1rel="preload" as="style" onload="this.onload=null;this.rel=\'stylesheet\'"$2><noscript><link$1rel="stylesheet"$2></noscript>'
      );
    }
  };
};

export default defineConfig({
  plugins: [react(), deferCssPlugin()],
  server: {
    allowedHosts: ['icanweb.cognitivehealthit.com', 'cognitivehealthit.com'],
  },
  preview: {
    allowedHosts: ['icanweb.cognitivehealthit.com', 'cognitivehealthit.com'],
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          framer: ['framer-motion']
        }
      }
    }
  }
});

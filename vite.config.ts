import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Bundle analyzer (only in build mode)
    mode === 'build' && visualizer({
      filename: 'dist/bundle-analysis.html',
      open: false,
      gzipSize: true,
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize bundle splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React and routing
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
            return 'react-vendor';
          }
          // Radix UI components
          if (id.includes('@radix-ui/')) {
            return 'ui-vendor';
          }
          // Animation libraries
          if (id.includes('gsap') || id.includes('framer-motion')) {
            return 'animation-vendor';
          }
          // Icons
          if (id.includes('lucide-react') || id.includes('react-icons')) {
            return 'icon-vendor';
          }
          // Utility libraries
          if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
            return 'utils-vendor';
          }
          // TanStack Query
          if (id.includes('@tanstack/react-query')) {
            return 'query-vendor';
          }
          // Node modules (catch-all for other dependencies)
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    // Increase chunk size warning limit slightly for better UX
    chunkSizeWarningLimit: 600,
  }
}));

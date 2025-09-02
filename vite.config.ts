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
    // Minimal bundle splitting - only separate the largest libraries
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Only split out GSAP which is large and independent
            if (id.includes('gsap')) {
              return 'gsap-vendor';
            }
            // Everything else stays in the main vendor bundle to avoid React context issues
            return 'vendor';
          }
        }
      }
    },
    // Higher limit since we're being conservative with splitting
    chunkSizeWarningLimit: 1000,
  }
}));

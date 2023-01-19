import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  plugins: [
    react(),
    tsConfigPaths(),

    dts({
      include: ['src/'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    include: ['**/*.test.ts', '**/*.test.tsx'],
    globals: true,
    setupFiles: './setupTests.ts',
    coverage: {
      provider: 'c8',
      statements: 95,
      branches: 90,
      functions: 90,
      lines: 95,
      thresholdAutoUpdate: true,
    },
  },
}));

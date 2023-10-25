import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['lib/browser-dtector.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  format: ['esm', 'cjs'],
  dts: true,
  minify: process.env.CI === 'true',
});

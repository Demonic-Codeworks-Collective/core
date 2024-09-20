import { defineConfig } from 'tsup';

export default defineConfig({
    format: 'esm',
    target: 'esnext',
    dts: true,
    clean: true,
    sourcemap: true,
    minify: true,
    entry: ['src/cli.ts'],
    outDir: 'dist',
});

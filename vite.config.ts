import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    globalSetup: ['./test/anvil/anvil-global-setup.ts'],
    environment: 'node',
    include: [
      './**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      '!./**/*.integration.{test,spec}.*',
      '!./**/*.script.{test,spec}.*',
    ],
    testTimeout: 60_000,
    css: true,
    retry: 1,
  },
});

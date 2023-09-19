import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default () => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        '@': path.resolve(__dirname, './src'),
      },
    },
  });
};

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [
//       { find: '@', replacement: new URL('./src', import.meta.url).pathname },
//     ],
//   },
// });

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
//   },
// });

// ChatGPT
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': new URL('./src', import.meta.url).pathname,
//     },
//   },
// });

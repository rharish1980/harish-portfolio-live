import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // or './' — both are OK for Vercel if you're hosting at root
  plugins: [react()],
});

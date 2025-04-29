import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ✅ Use relative path — this fixes asset path issues on Vercel
  plugins: [react()],
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ConstellationBuildPlugin from './src/ConstellationBuildPlugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ConstellationBuildPlugin()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Or vue/svelte depending on your setup

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'corticolous-admissibly-joline.ngrok-free.dev', // Allows your specific ngrok URL
      '.ngrok-free.dev'                               // Allows all ngrok subdomains (optional)
    ]
  }
})
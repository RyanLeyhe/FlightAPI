import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FlightAPI/',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This makes the server accessible on all network interfaces
    port: 5174, //local port
    //port: 5173 //EC2 port
  }
})

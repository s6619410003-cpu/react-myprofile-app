import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // tailwindcss() = เปิดใช้ Tailwind v4 ผ่านปลั๊กอินของ Vite
  plugins: [react(), tailwindcss()],
});
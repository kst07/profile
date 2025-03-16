/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3b82f6", // สีฟ้า
          "secondary": "#60a5fa", // สีฟ้าอ่อน
          "accent": "#93c5fd", // สีฟ้าอ่อนมาก
          "neutral": "#ffffff", // สีขาว
          "base-100": "#f3f4f6", // สีพื้นหลัง
          "info": "#bfdbfe", // สีข้อมูล
          "success": "#34d399", // สีสำเร็จ
          "warning": "#fbbf24", // สีเตือน
          "error": "#ef4444", // สีผิดพลาด
        },
      },
      "light", // ธีม light ของ DaisyUI
      "dark", // ธีม dark ของ DaisyUI
    ],
  },
}


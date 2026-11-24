import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // ไฟล์ CSS หลักของแอป (Tailwind + custom)

// "!" หลัง getElementById = บอก TypeScript ว่า "ไม่เป็น null แน่นอน"
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* BrowserRouter ต้องครอบ App เพื่อให้ใช้ Route/Link ได้ทั้งแอป */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  UserRound,
  GraduationCap,
  ListChecks,
  Briefcase,
  Wrench,
  MessageSquare,
} from "lucide-react";

// path ต้องตรงกับที่โจทย์กำหนด
const menus = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/about", icon: UserRound, label: "About" },
  { to: "/eduexp", icon: GraduationCap, label: "Education & Experience" },
  { to: "/spec", icon: ListChecks, label: "Specializations" },
  { to: "/projects", icon: Briefcase, label: "Projects" },
  { to: "/skills", icon: Wrench, label: "Skills" },
  { to: "/contactme", icon: MessageSquare, label: "Contact Me" },
];

export default function SideMenu() {
  // pathname = path ของหน้าปัจจุบัน เช่น "/about"
  const { pathname } = useLocation();

  return (
    <nav className="flex flex-col items-center gap-4 rounded-full border border-white/10 bg-[#111] px-2 py-4">
      {menus.map(({ to, icon: Icon, label }) => {
        // path ตรงกับหน้าปัจจุบัน = หน้า active → ไอคอนเป็นสีส้ม
        // (นี่คือส่วนที่ทำให้สีไอคอนต่างกันในแต่ละหน้า โดยไม่ต้องส่ง prop)
        const isActive = pathname === to;

        return (
          <Link
            key={to}
            to={to}
            title={label} // เอาเมาส์ชี้แล้วขึ้นชื่อเมนู
            aria-label={label}
            className={`transition ${
              isActive ? "text-orange-500" : "text-gray-500 hover:text-white"
            }`}
          >
            <Icon size={18} />
          </Link>
        );
      })}
    </nav>
  );
}
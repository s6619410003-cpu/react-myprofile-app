import { Routes, Route, Outlet } from "react-router-dom";
import MyCard from "./components/MyCard";
import SideMenu from "./components/SideMenu";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import EduExp from "./pages/EduExp";
import Spec from "./pages/Spec";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import ContactMe from "./pages/ContactMe";

// Layout = โครงที่ทุกหน้าใช้ร่วมกัน (การ์ดซ้าย + เนื้อหากลาง + เมนูขวา)
function Layout() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center p-4">
      <div className="flex w-full flex-col gap-6 rounded-xl bg-[#1a1a1a] p-6 md:flex-row md:items-start">
        <MyCard />

        {/* <Outlet /> = ช่องที่ React Router เอาหน้าตาม URL มาใส่ให้ */}
        <main className="min-h-[300px] flex-1">
          <Outlet />
        </main>

        <div className="self-start md:self-center">
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Route แม่ใช้ Layout ส่วน Route ลูกคือหน้าที่จะไปโผล่ใน <Outlet /> */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/eduexp" element={<EduExp />} />
        <Route path="/spec" element={<Spec />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}
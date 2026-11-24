import { FaFacebook, FaLinkedin, FaGoogle, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// เก็บลิงก์โซเชียลเป็น array แล้ว map แสดงผล จะได้ไม่ต้องเขียน <a> ซ้ำ 5 รอบ
const socials = [
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaXTwitter, href: "https://x.com", label: "X" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaGoogle, href: "https://google.com", label: "Google" },
];

export default function MyCard() {
  return (
    <aside className="w-[220px] shrink-0 rounded-xl border border-white/10 bg-[#111] p-3">
      {/* ชื่อ: ตัวแรกสีส้ม ที่เหลือสีขาว */}
      <p className="mb-2 text-sm">
        <span className="text-orange-500">A</span>
        <span className="text-white">nucha</span>
      </p>

      {/* รูปโปรไฟล์: ไฟล์อยู่ที่ public/me.png (เรียกใช้ด้วย "/me.png") */}
      <div className="overflow-hidden rounded-lg bg-white">
        <img src="/me.png" alt="Profile" className="h-auto w-full object-cover" />
      </div>

      {/* รหัสนักศึกษา + ตำแหน่ง (แก้เป็นของตัวเอง) */}
      <p className="mt-3 text-center text-[11px] text-white">STU ID: 6619410003</p>
      <p className="text-center text-[9px] text-gray-500">Fullstack Web Developer</p>

      {/* ไอคอนโซเชียล */}
      <div className="my-4 flex justify-center gap-3 text-white">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer" // กันหน้าใหม่ควบคุมหน้าเดิมได้ (เรื่อง security)
            aria-label={label}
            className="transition hover:text-orange-500"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      {/* ปุ่ม HIRE ME */}
      <button className="w-full rounded bg-orange-600 py-1.5 text-xs tracking-widest text-white transition hover:bg-orange-500">
        HIRE ME !
      </button>
    </aside>
  );
}
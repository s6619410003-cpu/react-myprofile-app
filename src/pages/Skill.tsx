import type { IconType } from "react-icons"; // type ของไอคอนจาก react-icons
import { FaReact, FaHtml5, FaJs, FaGithub } from "react-icons/fa";
import { SiFigma, SiNextdotjs } from "react-icons/si";

const skills: { name: string; percent: number; icon: IconType }[] = [
  { name: "React", percent: 60, icon: FaReact },
  { name: "Figma", percent: 85, icon: SiFigma },
  { name: "HTML/CSS", percent: 80, icon: FaHtml5 },
  { name: "NextJs", percent: 60, icon: SiNextdotjs },
  { name: "JavaScript", percent: 60, icon: FaJs },
  { name: "GitHub", percent: 50, icon: FaGithub },
];

// คอมโพเนนต์ย่อย: วงแหวนแสดงเปอร์เซ็นต์ล้อมโลโก้
function Ring({
  name,
  percent,
  icon: Icon,
}: {
  name: string;
  percent: number;
  icon: IconType;
}) {
  const r = 28; // รัศมีวงกลม
  const circumference = 2 * Math.PI * r; // ความยาวเส้นรอบวงทั้งหมด

  // strokeDashoffset = ความยาวส่วนที่ "ไม่ถูกเติม" ของเส้นรอบวง
  // เช่น 60% → เติม 60% เหลือว่าง 40%
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative h-16 w-16">
        {/* -rotate-90 = หมุนให้เส้นเริ่มวาดจากด้านบน (ปกติ SVG เริ่มจากขวา) */}
        <svg className="-rotate-90" width="64" height="64">
          {/* วงพื้นหลังสีเทา */}
          <circle cx="32" cy="32" r={r} fill="none" stroke="#333" strokeWidth="3" />
          {/* วงสีส้มแสดงความคืบหน้า */}
          <circle
            cx="32"
            cy="32"
            r={r}
            fill="none"
            stroke="#f97316"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>

        {/* โลโก้ตรงกลางวง */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <Icon size={22} />
        </div>
      </div>

      <p className="text-[9px] text-orange-500">{percent}%</p>
      <p className="text-[10px] text-gray-400">{name}</p>
    </div>
  );
}

export default function Skill() {
  return (
    <section>
      <h2 className="mb-5 text-xl font-bold">
        My <span className="text-orange-500">Skills</span>
      </h2>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
        {skills.map((s) => (
          <Ring key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}
import { Code, Palette, PenTool } from "lucide-react";

const specs = [
  {
    title: "Front-end developer",
    desc: "Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.",
    icon: Code,
  },
  {
    title: "UI/UX Designer",
    desc: "I design in my palette for branding and user psychology plus seamless and delightful interactions.",
    icon: Palette,
  },
  {
    title: "Graphic designer",
    desc: "As a graphic designer, I transform ideas into visually striking and impactful designs.",
    icon: PenTool,
  },
];

export default function Spec() {
  return (
    <section>
      <h2 className="mb-5 text-xl font-bold">
        My <span className="text-orange-500">Specializations</span>
      </h2>

      <div className="space-y-3">
        {specs.map(({ title, desc, icon: Icon }) => (
          // relative = เพื่อให้ไอคอน (absolute) ลอยอยู่มุมขวาบนของกรอบนี้
          <div
            key={title}
            className="relative rounded-md border border-orange-600/70 p-3"
          >
            <Icon size={14} className="absolute right-3 top-3 text-orange-500" />
            <h3 className="text-xs font-bold">{title}</h3>
            <p className="mt-1 text-[11px] text-gray-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
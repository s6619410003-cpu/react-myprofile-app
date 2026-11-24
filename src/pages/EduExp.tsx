// เก็บข้อมูลเป็น array จะแก้/เพิ่มได้ง่าย โดยไม่ต้องแตะส่วน JSX
const items = [
  {
    year: "2022 - Present",
    highlight: true, // true = ปีเป็นสีส้ม
    entries: ["UI/UX Designer (Freelance)", "Fullstack Web Developer (Freelance)"],
  },
  {
    year: "2022 - 2025",
    highlight: false,
    entries: [
      "Bachelor Degree in Technology Digital and Innovation",
      "Southeast Asia University",
    ],
  },
  {
    year: "2016 - 2021",
    highlight: false,
    entries: ["High school", "Prachamongkol School"],
  },
];

export default function EduExp() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-bold">
        Education & <span className="text-orange-500">Experience</span>
      </h2>

      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.year}>
            <p
              className={`text-xs ${
                item.highlight ? "text-orange-500" : "text-gray-500"
              }`}
            >
              {item.year}
            </p>
            {item.entries.map((text) => (
              <p key={text} className="text-xs text-white">
                {text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
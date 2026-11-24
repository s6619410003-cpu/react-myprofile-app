export default function Projects() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">
        Featured <span className="text-orange-500">Projects</span>
      </h2>

      <h3 className="text-sm font-bold">
        Manage Task App - fullstack web development
      </h3>
      <p className="mb-3 mt-1 text-[11px] text-gray-500">
        Here's my latest project built with Next.js and Laravel using
        TailwindCSS.
      </p>

      {/* รูปโปรเจกต์: วางไฟล์ไว้ที่ public/project1.png */}
      <img
        src="/project1.png"
        alt="Manage Task App"
        className="w-full max-w-md rounded-md border border-white/10"
      />
    </section>
  );
}
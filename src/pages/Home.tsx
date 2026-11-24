export default function Home() {
  return (
    <section>
      <p className="mb-2 text-sm">
        Lets Work <span className="text-orange-500">Together !</span>
      </p>

      <h1 className="text-2xl font-bold leading-tight">
        Hi From <span className="text-orange-500">Anucha</span>,
        <br />
        Interactive Designer & Fullstack Web Developer
      </h1>

      <p className="mt-4 max-w-md text-xs text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
        tempora at neque a adipisci nulla voluptatem? Mollitia, officiis.
      </p>

      {/* ตัวเลขสถิติ */}
      <div className="mt-6 flex gap-10">
        <div>
          <p className="text-3xl text-orange-500">3+</p>
          <p className="text-[10px] text-gray-500">Years of Experience</p>
        </div>
        <div>
          <p className="text-3xl text-orange-500">10+</p>
          <p className="text-[10px] text-gray-500">Projects Completed</p>
        </div>
      </div>
    </section>
  );
}
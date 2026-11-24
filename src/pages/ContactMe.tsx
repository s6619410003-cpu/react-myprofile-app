import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export default function ContactMe() {
  // เก็บค่าทุกช่องไว้ใน object เดียว
  const [form, setForm] = useState({
    email: "",
    phone: "",
    name: "",
    address: "",
    comment: "",
  });

  // handler เดียวใช้ได้ทุกช่อง โดยดูจากแอตทริบิวต์ name ของ input
  // [e.target.name] = เอาค่า name มาเป็นชื่อ key (computed property)
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // กันไม่ให้หน้ารีโหลดตอนกด Submit
    console.log(form); // TODO: ภายหลังค่อยส่งไป API / EmailJS
    alert("Sent!");
  };

  // class ที่ใช้ซ้ำกับทุกช่อง เก็บเป็นตัวแปรไว้จะได้ไม่ต้องพิมพ์ซ้ำ
  const inputCls =
    "w-full border-b border-orange-600/70 bg-transparent py-1 text-xs outline-none placeholder:text-orange-500/70 focus:border-orange-400";

  return (
    <section>
      <h2 className="text-xl font-bold">
        Contact <span className="text-orange-500">Me</span>
      </h2>
      <p className="mb-4 text-[11px]">Let's get in touch!</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className={inputCls} />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className={inputCls} />
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className={inputCls} />
          <input name="address" placeholder="Address" value={form.address} onChange={handleChange} className={inputCls} />
        </div>

        <textarea
          name="comment"
          placeholder="Comment"
          rows={3}
          value={form.comment}
          onChange={handleChange}
          className={inputCls}
        />

        <label className="flex items-center gap-2 text-[10px] text-gray-400">
          <input type="checkbox" /> I would like to receive the newsletter.
        </label>

        <button
          type="submit"
          className="w-full rounded bg-orange-600 py-1.5 text-xs hover:bg-orange-500"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
import { FC, useState } from "react";

const About: FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center">
        About VinceNet Solutions
      </h1>
      <p className="mt-4 text-center">
        We specialize in building user-centric applications that solve
        real-world problems.
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Placeholder Image"
        className="mx-auto mt-8"
      />

      <div className="mt-10">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 w-full mb-4"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 w-full mb-4"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            className="border p-2 w-full mb-4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;

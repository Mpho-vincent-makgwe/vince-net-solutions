import React, { FC, useState } from "react";

const Contact = () => {
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
  )
}
export default Contact;
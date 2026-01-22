import { useState } from "react";
import API from "../services/api";
import "../main.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    source: "Website"
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/leads", form);
      alert("Lead submitted successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        source: "Website"
      });
    } catch (err) {
      alert("Error submitting lead");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={submit}>
        <h2>Contact Us</h2>

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

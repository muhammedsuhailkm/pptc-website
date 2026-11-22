"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div><label htmlFor="name">Name</label><input id="name" name="name" required placeholder="Your name" /></div>
        <div><label htmlFor="email">Email</label><input id="email" type="email" name="email" required placeholder="you@company.com" /></div>
      </div>
      <div className="form-row">
        <div><label htmlFor="company">Company</label><input id="company" name="company" placeholder="Company name" /></div>
        <div><label htmlFor="phone">Phone</label><input id="phone" name="phone" placeholder="+91 …" /></div>
      </div>
      <label htmlFor="need">What do you need?</label>
      <select id="need" name="need">
        <option>Bauer / Spigot set (75/100/150 mm)</option>
        <option>Stampings / pressed parts</option>
        <option>Cutter assembly</option>
        <option>Chain case</option>
        <option>Diesel tank</option>
        <option>Clutch lever / bearing caps</option>
        <option>Something else / custom</option>
      </select>
      <label htmlFor="message">Drawing notes, material, thickness, quantity</label>
      <textarea id="message" name="message" placeholder="75 mm Bauer coupling, galvanised, 500 pcs…"></textarea>
      <button className="btn btn-accent" type="submit">Send enquiry</button>
      <p className={sent ? "form-note ok" : "form-note"}>
        {sent
          ? "Thanks. This demo form does not send email yet — share your works email and we can wire it."
          : "This form is a front-end demo. Connect it to email or a form service before the site goes live."}
      </p>
    </form>
  );
}

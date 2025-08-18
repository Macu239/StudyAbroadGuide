import React from "react";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import "./SuggForm.css";

export default function SeniorsForms({
  formTitle,
  color = "#ffffff",
  Width = "100%",
}) {
  const [formData, setFormData] = useState({
    Questions: "",
    Suggestions: "",
    Email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_aeyztoj",
        "template_pvggtkp",
        form.current,
        "dSFluF-2r15B2pG-D"
      );

      console.log("Email sent:", result.text);
      alert("表單已送出！");
    } catch (error) {
      console.error("Failed:", error.text);
      alert("寄送失敗，請稍後再試！");
    }
  };

  return (
    <form
      ref={form}
      className="SuggestionForm"
      id="Suggestions"
      onSubmit={handleSubmit}
      style={{ "--formColor": color, "--formWidth": Width }}
    >
      <h3>{formTitle}</h3>
      <label htmlFor="Questions">問題</label>
      <textarea
        id="Questions"
        name="Questions"
        value={formData.Questions}
        onChange={handleChange}
      />
      <label htmlFor="Suggestions">建議欄</label>
      <textarea
        id="Suggestions"
        name="Suggestions"
        value={formData.Suggestions}
        onChange={handleChange}
      />
      <label htmlFor="Email">電子郵件</label>
      <input
        type="Email"
        id="Email"
        name="Email"
        placeholder="e.g. Jeremy123456@gmail.com"
        value={formData.email}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" className="EmailFormButton" />
    </form>
  );
}

'use client'
import React from "react";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import "./SeniorsForms.css";

export default function SeniorsForms({
  formTitle,
  color = "#e3f9ffff",
  Width = "100%",
}) {
  const [formData, setFormData] = useState({
    Mname: "",
    Ename: "",
    School: "",
    College: "",
    Major: "",
    intro: "",
    email: "",
    Linkedin: "",
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
        "template_zyq4r07",
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
      className="EmailForm"
      id="addSeniors"
      onSubmit={handleSubmit}
      style={{ "--formColor": color, "--formWidth": Width }}
    >
      <h3>{formTitle}</h3>
      <label htmlFor="Mname">姓名</label>
      <input
        type="text"
        id="Mname"
        name="Mname"
        placeholder="e.g. 把大帥"
        value={formData.Mname}
        onChange={handleChange}
        required
      />
      <label htmlFor="Ename">英文名字/Prefer Name</label>
      <input
        type="text"
        id="Ename"
        name="Ename"
        placeholder="e.g. Jeremy"
        value={formData.Ename}
        onChange={handleChange}
        required
      />
      <label htmlFor="School">就讀學校</label>
      <select value={formData.School} name="School" onChange={handleChange}>
        <option value="COC">COC</option>
        <option value="UMC">UMC</option>
        <option value="RedDeer">RedDeer</option>
        <option value="Others">Others</option>
      </select>
      <label htmlFor="College">學校/College, Uni</label>
      <input
        type="text"
        id="College"
        name="College"
        placeholder="請輸入你目前就讀的大學"
        value={formData.College}
        onChange={handleChange}
        required
      />
      <label htmlFor="Major">科系/Major</label>
      <input
        type="text"
        id="Major"
        name="Major"
        placeholder="e.g. Computer Science"
        value={formData.Major}
        onChange={handleChange}
        required
      />
      <label htmlFor="intro">介紹欄</label>
      <textarea
        id="intro"
        name="intro"
        value={formData.intro}
        onChange={handleChange}
        required
      />
      <label htmlFor="Email">電子郵件</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="e.g. Jeremy123456@gmail.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="Linkedin">Linkedin Profile Link</label>
      <input
        type="url"
        id="Linkedin"
        name="Linkedin"
        placeholder="https://www.linkedin.com/in/jeremy-s-750718287/"
        value={formData.Linkedin}
        onChange={handleChange}
        required
      />
      <input type="submit" value="Submit" className="EmailFormButton" />
    </form>
  );
}

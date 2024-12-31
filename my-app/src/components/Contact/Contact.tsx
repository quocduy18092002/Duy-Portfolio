import React, { useState } from "react";
import { motion } from "motion/react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vx1ddov",
        "template_2hd7ndu",
        formData,
        "r87rHTEhVz0nJfywt"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          alert("Success!");
        },
        (error) => {
          console.log("Failed to send email:", error);
        }
      );
  };

  return (
    <div
      id="contact"
      className="md:pt-[65px] pt-[30px] px-[40px] md:px-[140px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pt-10"
      >
        <div className="text-primary-text uppercase font-normal text-lg tracking-[.3rem]">
          Expertise
        </div>
        <div className="text-white md:font-semibold md:text-5xl font-normal text-3xl tracking-[.1rem] md:pt-8">
          I’d love to hear from you! Whether you have a question about frontend
          development, need advice on UI/UX, or just want to chat about the
          latest tech trends — feel free to send me a message.
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row flex-wrap pt-10 justify-center gap-3 md:gap-0"
      >
        <div className="md:w-1/3 flex flex-col">
          <div className="uppercase text-white font-normal text-sm tracking-[.3rem]">
            Reach me at
          </div>
          <div className="text-[#a1a1a2] tracking-[.05rem] md:pt-5">
            <a href="mailto:nguyenquocduy080819@gmail.com">
              nguyenquocduy080819@gmail.com
            </a>
          </div>
          <div className="text-[#a1a1a2] tracking-[.05rem]">
            <a href="tel:+84911157928">0911 157 928</a>
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="uppercase text-white font-normal text-sm tracking-[.3rem] md:pl-[4rem]">
            Social
          </div>
          <div className="text-[#a1a1a2] tracking-[.05rem] md:pt-5">
            <a href="https://www.facebook.com/qduy1809" target="_blank" rel="noopener noreferrer">
              Facebook,
            </a>
            <a href="https://www.instagram.com/qduy_1809/" target="_blank" rel="noopener noreferrer">
              Instagram,
            </a>
            <a href="https://github.com/quocduy18092002" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="md:w-1/3 pt-4">
          <form onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="border p-2"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="border p-2"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border p-2"
            ></textarea>
            <button
              type="submit"
              className="uppercase text-primary-text font-semibold text-xl font-sans bg-[#2c2c2d] border-0 hover:bg-white hover:!text-black flex w-full h-16 justify-center items-center"
            >
              Contact Me 
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

import { Button } from "antd";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div id="about" className="md:pt-[65px] pt-[30px] px-[40px] md:px-[140px] ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-primary-text uppercase font-light text-sm  md:font-normal md:text-lg tracking-[.3rem] "
      >
        Something about me
      </motion.div>
      <div className=" flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
        <div className="md:pt-20 pt-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/image5.jpg"
              alt=""
              width={3000}
              height={3000}
              className="max-w-[400px] object-contain"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative text-white uppercase font-normal text-lg tracking-[.3rem]">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[3rem] h-[1px] bg-white"></div>
            <div className="pl-[4rem]"> Professional Summary</div>
          </div>
          <div className=" text-white font-normal text-lg tracking-[.1rem]">
            I am a young individual with a passionate and calm spirit, quickly
            adapting to new environments, not afraid of challenges, and always
            eager to learn. I constantly strive to pursue new goals and complete
            assigned tasks to contribute value to the company.
          </div>
          <Button
            href="/cv/CV_NGUYENQUOCDUY.pdf"
            download={"NGUYENQUOCDUY_CV"}
            className="uppercase text-primary-text font-semibold text-xl font-sans bg-[#2c2c2d] border-0 hover:bg-black hover:!text-black flex w-full h-20 mt-5"
          >
            Download CV
          </Button>
        </motion.div>
      </div>
      <div className="pt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-primary-text uppercase font-light text-sm  md:font-normal md:text-lg tracking-[.3rem] "
        >
          Expertise
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" text-white font-semibold md:text-5xl text-4xl tracking-[.1rem] pt-2 md:pt-8"
        >
          Frontend Development, Design Systems, Prototyping, Optimization,
          Responsive Design, Animations.
        </motion.div>

        <div className="flex flex-col md:flex-row md:flex-wrap pt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-[50%] "
          >
            <div className="uppercase text-white font-normal text-sm tracking-[.3rem] pl-[4rem] pb-3 md:pb-12">
              Experience
            </div>
            <div className="relative">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[3rem] h-[1px] bg-white"></div>
              <div className="text-white font-bold text-3xl pl-[4rem]">
                WareFlex VietNam
              </div>
            </div>
            <div className="text-white font-normal text-xl pl-[4rem] pt-2">
              Frontend Intern
            </div>
            <div className="pl-[4rem] text-[#a1a1a2] tracking-[.05rem] md:pt-6 pb-8">
              During my internship at Wareflex as a Frontend Developer, I
              contributed to building and enhancing web interfaces using modern
              technologies like React, Nextjs, Tailwind and SCSS. My
              responsibilities included developing responsive UI components,
              debugging and optimizing existing code, and collaborating with
              designers and backend developers to ensure seamless functionality
              and user experience. This experience sharpened my skills in
              frontend development, problem-solving, and teamwork.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-[50%] "
          >
            <div className="uppercase text-white font-normal text-sm tracking-[.3rem] pl-[4rem] pb-3 md:pb-12">
              Education
            </div>
            <div className="relative">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[3rem] h-[1px] bg-white"></div>
              <div className="text-white font-bold text-3xl pl-[4rem]">
                Hutech University
              </div>
            </div>
            <div className="text-white font-normal text-xl pl-[4rem]">
              Software Engineer
            </div>
            <div className="pl-[4rem] text-[#a1a1a2] tracking-[.05rem] md:pt-6">
              Graduated with a Bachelor&apos;s degree in Software Engineering
              from HUTECH University, focusing on both foundational and advanced
              software development concepts. The program covered key areas such
              as programming, algorithms, web development, and software
              architecture, combined with practical experience through projects
              and internships. This education provided a strong technical
              foundation and problem-solving mindset essential for a career in
              software engineering.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

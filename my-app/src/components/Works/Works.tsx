import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const Works = () => {
  return (
    <div id="works" className="md:pt-[65px] pt-[30px] px-[40px] md:px-[140px] ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-primary-text uppercase font-normal text-lg tracking-[.3rem] "
      >
        Recent Works
        <div className="text-white md:font-semibold md:text-5xl font-normal text-3xl tracking-[.1rem] md:pt-8 normal-case">
          Here are some of the projects I've worked on recently. Feel free to take a look!
        </div> 
        <div className="flex flex-col md:flex-row pt-10 gap-4 md:gap-0">
          <Link href={"https://news-paper-eight.vercel.app/"} target="_blank" className="flex flex-row gap-3 md:w-[50%]">
          <div><Image src={"/images/logo.jpg"} alt="" width={168} height={150}/></div>
          <div className="md:border-t border-gray-500">
            <div className="text-gray-500 text-xs font-normal pt-2">Website</div>
            <div className="text-white font-normal md:text-2xl tracking-normal">News Paper</div>
          </div>
          </Link>
           <Link href={"https://art-web-tau.vercel.app/"} target="_blank" className="flex flex-row gap-3 md:w-[50%]">
          <div><Image src={"/images/artlogo.jpg"} alt="" width={168} height={300}/></div>
          <div className="md:border-t border-gray-500">
            <div className="text-gray-500 text-xs font-normal pt-2">Website</div>
            <div className="text-white font-normal md:text-2xl tracking-wide ">Canvastart Art</div>
          </div>
          </Link>
        </div>
       </motion.div>
    </div>
  );
};

export default Works;

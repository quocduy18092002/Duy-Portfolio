import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import styles from "./styles.module.scss";
import { motion } from "motion/react";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: <Link href={"https://www.facebook.com/qduy1809/"} target="_blank">FACEBOOK</Link>,
    key: "app",
  },
  {
    label: <Link href={"https://github.com/quocduy18092002"} target="_blank">GITHUB</Link>,
    key: "SubMenu",
  },
  {
    key: "INSTAGRAM",
    label: "INSTAGRAM",
  },
  {
    key: "CONTACT ME",
    label: "CONTACT ME",
  },
];

const Intro = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div id="intro" className="h-full pt-[60px] flex justify-between md:px-10">
      <div className="md:mx-[100px] ml-[40px] mt-[30px] md:mt-[70px]">
        <motion.div
          animate={{
            x: [500, 0],
            transition: { duration: 0.6, ease: ["easeIn"] },
          }}
          className="text-primary-text uppercase font-light text-sm  md:font-normal md:text-lg tracking-[.3rem] "
        >
          Hello world
        </motion.div>
        <br />
        <motion.div
          animate={{
            x: [-500, 0],
            transition: { duration: 0.6, ease: ["easeIn"] },
          }}
          className="text-white md:font-bold md:text-8xl text-5xl font-semibold font-mono"
        >
          I am Duy, a frontend developer with a passion for learning and
          delivering impactful solutions.
        </motion.div>
      </div>
      <motion.div
        animate={{
          y: [-200, 0],
          transition: { duration: 0.6, ease: ["easeIn"] },
        }}
        className={styles.customMenu}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </motion.div>
    </div>
  );
};

export default Intro;

import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Drawer, Menu } from "antd";
import styles from "./styles.module.scss";
import scrollToSection from "../ui/scrollToSelection";
import { MenuOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { label: "QUOC DUY", key: "QUOC DUY" },
  { label: "INTRO", key: "intro" },
  { label: "ABOUT", key: "about" },
  { label: "WORKS", key: "works" },
  { label: "CONTACT ME", key: "contact" },
];

const MenuTop: React.FC = () => {
  const [current, setCurrent] = useState("intro");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const onClick: MenuProps["onClick"] = (e) => {
    scrollToSection(e.key);
    setCurrent(e.key);
    setIsDrawerOpen(false);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="page">
      <div className={styles.customMenu}>
        {!isMobile && (
          <Menu
            theme="light"
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          ></Menu>
        )}
        {isMobile && (
          <>
            <div
              onClick={() => setIsDrawerOpen(true)}
              className="bg-black text-white w-full"
            >
              <div className="mx-[40px] items-center flex h-[65px] justify-between">
                <div className="text-[10px] font-normal tracking-[0.35rem]">
                  {items[0]?.key}
                </div>
                <MenuOutlined style={{ background: "black", border: "none" }} />
              </div>
            </div>
            <Drawer
              open={isDrawerOpen}
              closable
              onClose={() => setIsDrawerOpen(false)}
              placement="left"
              style={{ background: "black" }}
            >
              <Menu
                theme="light"
                onClick={onClick}
                selectedKeys={[current]}
                mode="inline"
                items={items}
                className={styles.customMenuLeft}
              />
            </Drawer>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuTop;

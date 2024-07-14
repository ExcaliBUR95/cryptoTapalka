
import { MenuItem } from "@/shared/layout/ui/MenuItem";
import React from "react";

const menuItem = [
  { title: "Главное" },
  { title: "Задания", link: "tasks" },
  { title: "Ускорение" },
  { title: "Рефералы" },
  { title: "Кошелек" },
];

const Footer = () => {
  const onClick = (e: string) => {
    console.log(e);
  };
  return (
    <div className="bg-Cyan-500 select-none">
      {menuItem.map((item) => {
        return (
          <React.Fragment key={item.title}>
            <MenuItem title={item.title} onClick={onClick} link={item.link} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Footer;

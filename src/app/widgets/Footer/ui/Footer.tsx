import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="absolute bottom-0 bg-black flex justify-between w-full text-2xl rounded-m p-2">
      <div className="cursor-pointer">Главная</div>
      <div className="cursor-pointer">Майнинг</div>
      <div className="cursor-pointer">Задачи</div>
      <div className="cursor-pointer">Друзья</div>
    </div>
  );
};

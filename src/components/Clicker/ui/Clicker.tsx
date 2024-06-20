"use client";
import React, { useState } from "react";
import { Circle } from "@/app/shared/assets/Circle";
import { Coin } from "@/app/shared/assets/Coin";
import { addSpacesEveryThreeDigits } from "@/app/shared/utils/util";
import { TempCoin } from "@/app/shared/assets/TempCoin";

export function Clicker() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="bg-gray-300 text-black  flex justify-center flex-col text-center min-h-screen min-w-max max-full gap-3">
      <h1 className="text-yellow w-full text-2xl">Temp Coin</h1>
      <p>{addSpacesEveryThreeDigits(count)}</p>
      <div
        className="relative flex justify-center text-center w-dvw h-64"
        onClick={handleClick}
      >
        <Circle className="absolute" />
        <TempCoin />
      </div>
    </div>
  );
}

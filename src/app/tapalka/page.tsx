"use client";
import React, { useState } from "react";
import SvgSquare from "../components/assets/SvgSquare";


export default function Tapalka() {
  const [state, setState] = useState(0);
  return (
    <>
      <span className="text-black"> Количество монет: {state}</span>
      <div
        className="cursor-pointer"
        onClick={() => setState((prev) => prev + 1)}
      >
        <SvgSquare />
      </div>
    </>
  );
}

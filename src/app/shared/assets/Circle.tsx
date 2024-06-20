import React from "react";

export interface CircleProps {
  className?: string;
}

export function Circle({ className }: CircleProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
    >
      <circle cx="100" cy="100" r="100" fill="#E4BD0E" />
    </svg>
  );
}

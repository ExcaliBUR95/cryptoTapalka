import Link from "next/link";
import React, { MouseEventHandler } from "react";

interface MenuItemProps {
  onClick?: (title: string) => void;
  link?: string;
  title: string;
}

export function MenuItem({ title, link }: MenuItemProps) {
  return (
    <button className="m-2 text-black border rounded-md">
      <div className="p-2">
        <Link href={`/${link}`}>{title}</Link>
      </div>
    </button>
  );
}

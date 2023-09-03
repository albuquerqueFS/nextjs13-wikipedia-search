import Link from "next/link";
import React from "react";
import Search from "./Search";

type Props = {};

function Navlink({ children }: any) {
  return (
    <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
      {children}
    </h1>
  );
}

export default function Navbar({}: Props) {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <Navlink>
        <Link href="/">WikiRocket!</Link>
      </Navlink>
      <Search />
    </nav>
  );
}

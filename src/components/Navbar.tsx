import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-auto w-full border-b border-gray-300 flex flex-row items-center justify-around py-4">
      <div>
        <h1><Link className="text-gray-500 font-mono font-bold text-xl p-4 hover:text-gray-600" href={"/"}>Fake-API</Link></h1>
      </div>
      <div>
        <ul className="flex flex-row items-center gap-x-4">
            <li><Link href={"/login"} className="p-4 hover:border-b-2 hover:border-gray-400 delay-200 hover:transition-all origin-bottom-left">Login</Link></li>
            <li><Link href={"/register"} className="p-4 hover:border-b-2 hover:border-gray-400 delay-200 hover:transition-all origin-bottom-left">Register</Link></li>
            <li><Link href={"/search"} className="p-4 hover:border-b-2 hover:border-gray-400 delay-200 hover:transition-all origin-bottom-left">Search</Link></li>
            <li><Link href={"/delete"} className="p-4 hover:border-b-2 hover:border-gray-400 delay-200 hover:transition-all origin-bottom-left">Delete</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

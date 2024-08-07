"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href={"/"} className="sidebar-logo">
          <Image
            src={"/assets/images/logo-text.svg"}
            alt="logo"
            width={180}
            height={28}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-[#5334fe] shadow-[inset_25px_25px_50px_#2a1a7f,inset_-25px_-25px_50px_#7d4eff] text-white"
                        : "text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${
                          isActive && "brightness-200"
                        } dark:brightness-200`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${
                          isActive && "brightness-200"
                        } dark:brightness-200`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex items-center rounded-xl cursor-pointer gap-2 p-4 text-white hover:bg-black w-full">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href={"/sign-in"}>Sign in</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

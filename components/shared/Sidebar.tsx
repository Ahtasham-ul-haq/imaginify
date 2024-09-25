"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";

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
              <li className="flex items-center font-semibold group rounded-lg text-gray-700 cursor-pointer gap-4 w-full p-4 hover:bg-purple-gradient hover:text-white dark:text-white">
                {/* <UserButton afterSignOutUrl="/" showName defaultOpen={true} /> */}
                <LogOutIcon className="w-6 h-6 text-gray-700 dark:text-white group-hover:text-white" />
                <SignOutButton>
                  Log out
                </SignOutButton>
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="bg-purple-gradient bg-cover">
              <Link href={"/sign-in"} className="text-white">Sign in</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../@/components/ui/sheet";

const Navbar = ({ theme, toggleTheme, isSheetOpen, openSheet, closeSheet }) => {
  const { isSignedIn } = useAuth();
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);
    updateWindowWidth();

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <nav
      className="relative border-b-2 border-[var(--color2)] bg-[var(--color1)] gap-2 flex justify-between items-center h-20 px-4"
      style={{
        transition: "background-color 150ms ease, border-color 150ms ease",
      }}
    >
      <div className="flex justify-between w-full">
        <div>
          <Link className="w-full" href={"/"}>
            <img
              className="md:w-64 md:h-16 sm:w-48 sm:h-12 w-32 h-8"
              src={theme === "dark" ? "logo-white.png" : "logo-black.png"}
              alt=""
            />
          </Link>
        </div>
        {windowWidth > 768 && isSignedIn && (
          <ul className="flex gap-3 justify-end items-center">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/community"}>Community</Link>
            </li>
            <li>
              <Link href={"/prayers"}>Prayers</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <div className="text-[var(--color2)]">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={toggleTheme}
                    checked={theme === "light"}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </li>
            <UserButton afterSignOutUrl="/"></UserButton>
          </ul>
        )}

        {windowWidth <= 768 && isSignedIn && (
          <Sheet open={isSheetOpen}>
            <SheetTrigger>
              <Menu
                onClick={() => {
                  openSheet();
                }}
                className="text-[var(--color2)] md:hidden"
              />
            </SheetTrigger>
            <SheetContent side="left">
              <div className="absolute right-[14px] top-6">
                <div
                  onClick={closeSheet}
                  className="w-7 h-7 z-10 bg-[var(--color2)] font-bold text-[var(--color1)] flex justify-center items-center rounded-3xl"
                >
                  X
                </div>
              </div>
              <nav className="flex flex-col gap-5 justify-end w-full pl-3 pt-3">
                <Link href={"/"} onClick={closeSheet}>
                  Home
                </Link>
                <Link href={"/community"} onClick={closeSheet}>
                  Community
                </Link>
                <Link href={"/prayers"} onClick={closeSheet}>
                  Prayers
                </Link>
                <Link href={"/contact"} onClick={closeSheet}>
                  Contact
                </Link>
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={toggleTheme}
                      checked={theme === "light"}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <UserButton afterSignOutUrl="/"></UserButton>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

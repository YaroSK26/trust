"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../@/components/ui/sheet";
import useFunctions from "./Functions";
import "../css/layout.css"

const Navbar = ({
  theme,
  toggleTheme,
  isSheetOpen,
  openSheet,
  closeSheet,
}) => {
  const { isSignedIn } = useAuth();
   const {windowWidth} = useFunctions();


  return (
    <div className="relative">
      <nav
        className={`fixed w-full border-b-2 border-[var(--color2)] bg-[var(--color1)] gap-2 flex justify-between items-center h-20 px-4 ${
          isSheetOpen ? "z-0" : "z-10"
        }`}
        style={{
          transition: "background-color 150ms ease, border-color 150ms ease",
        }}
      >
        <div className="flex justify-between w-full">
          <div>
            <Link className="w-full" href={"/"}>
              <img
                className="md:w-64 md:h-16 sm:w-48 sm:h-12 w-32 h-8"
                src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
                alt="logo of Trust site"
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
              <span>
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
              </span>
              <UserButton afterSignOutUrl="/"></UserButton>
            </ul>
          )}

          {windowWidth <= 768 && isSignedIn && (
            <Sheet open={isSheetOpen} className="pb-20">
              <SheetTrigger>
                {/* {!isSheetOpen && ( */}
                <Menu
                  onClick={() => {
                    openSheet();
                  }}
                  className="text-[var(--color2)] md:hidden"
                />
                {/* )} */}
                {/* {isSheetOpen && (
                  <div
                    onClick={() => {
                      closeSheet();
                    }}
                    className=" w-7 h-7 z-20 bg-[var(--color2)] font-bold text-[var(--color1)] flex justify-center items-center rounded-3xl"
                  >
                    X
                  </div>
                )} */}
              </SheetTrigger>
              <SheetContent side="left" className="w-full ">
                <div className="flex justify-end mt-6 mr-4 z-20">
                  <div
                    onClick={() => {
                      closeSheet();
                    }}
                    className=" w-7 h-7 z-20 bg-[var(--color2)] font-bold text-[var(--color1)] flex justify-center items-center rounded-3xl"
                  >
                    X
                  </div>
                </div>
                <nav className="flex flex-col gap-5 justify-end w-full pl-3 pt-20 ">
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
    </div>
  );
};

export default Navbar;

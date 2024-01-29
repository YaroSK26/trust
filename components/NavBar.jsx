"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import "../css/layout.css";
import { useState, useEffect } from "react";

const Navbar = ({ theme, toggleTheme }) => {
  const { isSignedIn } = useAuth();
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className={isMobileMenuOpen ? "fixed inset-0 z-50" : "relative"}>
      <nav
        className={`fixed w-full border-b-2 border-[var(--color2)] bg-[var(--color1)] gap-2 flex justify-between items-center min-h-20   px-4 ${
          isMobileMenuOpen ? "z-0" : "z-10"
        }`}
        style={{
          transition: "background-color 150ms ease, border-color 150ms ease",
        }}
      >
        <div className="flex justify-between w-full ">
          <div>
            <Link href={"/"}>
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

          {!isSignedIn && (
            <ul className="flex gap-3 justify-end items-center">
              <li>
                <Link href={"/sign-up"}>
                  <button className="button">Login</button>
                </Link>
              </li>
            </ul>
          )}

          {windowWidth <= 768 && isSignedIn && (
            <div className="">
              <button
                onClick={toggleMobileMenu}
                className="md:hidden z-50"
                style={{ transform: "translate(10%, 10%)" }}
              >
                {isMobileMenuOpen ? (
                  <X className="mt-6" />
                ) : (
                  <Menu className="text-[var(--color2)]" />
                )}
              </button>

              {isMobileMenuOpen && (
                <div className="flex flex-col mt-5 gap-5 justify-start w-[100vw] p-0 h-[100vh] bg-[var(--color1)] ">
                  <Link href={"/"} onClick={toggleMobileMenu} className="w-1">
                    Home
                  </Link>
                  <Link
                    href={"/community"}
                    onClick={toggleMobileMenu}
                    className="w-1"
                  >
                    Community
                  </Link>
                  <Link
                    href={"/prayers"}
                    onClick={toggleMobileMenu}
                    className="w-1"
                  >
                    Prayers
                  </Link>
                  <Link
                    href={"/contact"}
                    onClick={toggleMobileMenu}
                    className="w-1"
                  >
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
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );

};

export default Navbar;

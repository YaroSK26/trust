"use client";

import { useAuth, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Menu, Settings, X } from "lucide-react";
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

  const clerk = useClerk();
  const [userId, setUserId] = useState(null); // Use state to manage user ID


  useEffect(() => {
    if (
      clerk.user &&
      clerk.user.organizationMemberships &&
      clerk.user.organizationMemberships.length > 0
    ) {
      setUserId(clerk.user.organizationMemberships[0].role); 
    } else {
      setUserId("User"); 
    }
  }, [clerk.user]); 
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
            <Link href={"/home"}>
              <img
                className="md:w-64 md:h-16 sm:w-48 sm:h-12 w-32 h-8"
                src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
                alt="logo of Trust site"
              />
            </Link>
          </div>
          {windowWidth > 1024 && isSignedIn && (
            <ul className="flex gap-4  justify-end items-center">
              <li>
                <Link href={"/home"}>Home</Link>
              </li>
              <li>
                <Link href={"/community"}>Community</Link>
              </li>
              <li>
                <Link href={"/prayers"}>Prayers</Link>
              </li>
              <li>
                <Link href={"/bible"}>Bible</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>

              {userId === "org:admin" ? (
                <li>
                  <Link href={"/admin"}>Admin</Link>
                </li>
              ) : null}

              <UserButton afterSignOutUrl="/"></UserButton>
              <a href="/settings">
                <Settings size={28} />
              </a>
            </ul>
          )}
          {!isSignedIn && (
            <ul className="flex gap-3 lg:justify-end items-center no-underline transition-none">
              <li>
                <Link href={"/sign-up"}>
                  <button className="button transition-none">Login</button>
                </Link>
              </li>
            </ul>
          )}
          {windowWidth <= 1024 && isSignedIn && (
            <div className="flex justify-center items-center ml-3">
              <button onClick={toggleMobileMenu} className="lg:hidden z-50 ">
                {isMobileMenuOpen ? (
                  <X
                    className={`absolute ${
                      userId === "org:admin" ? "top-[430px]" : "top-[380px]"
                    } left-[27px] w-10 h-10`}
                  />
                ) : (
                  <Menu className="text-[var(--color2)] " />
                )}
              </button>
              {isMobileMenuOpen && (
                <div className="flex text-xl flex-col mt-10 gap-5 justify-start w-[100vw] p-0 h-[100vh] bg-[var(--color1)] ">
                  <Link
                    href={"/home"}
                    onClick={toggleMobileMenu}
                    className="w-1"
                  >
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
                    href={"/bible"}
                    onClick={toggleMobileMenu}
                    className="w-1"
                  >
                    Bible
                  </Link>
                  <Link
                    href={"/contact"}
                    onClick={toggleMobileMenu}
                    className="w-1"
                  >
                    Contact
                  </Link>
                  {userId === "org:admin" ? (
                    <Link
                      href={"/admin"}
                      onClick={toggleMobileMenu}
                      className="w-1"
                    >
                      Admin
                    </Link>
                  ) : null}

                  <a href="/settings" onClick={toggleMobileMenu}>
                    <Settings size={36} />
                  </a>
                  <span className="ml-1">
                    <UserButton
                      afterSignOutUrl="/"
                      style={{ fontSize: "1.2rem", padding: "0.5rem 1rem" }}
                    ></UserButton>
                  </span>
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

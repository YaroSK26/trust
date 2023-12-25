"use client"

import { Github, Instagram } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";


const Footer = () => {
   const isSmallScreen = useMediaQuery({ maxWidth: 600 });
   const iconSize = isSmallScreen ? 40 : 48;
  return (
    <div className="mt-16 flex  justify-center items-center text-center  ">
      <footer
        className=" text-center   w-[70vw] h-[110px]  flex justify-center flex-col items-center border-t-2 border-[var(--color2)] bg-[var(--color1)] md:text-lg  text-sm "
        style={{
          transition: "background-color 150ms ease, border-color 150ms ease",
        }}
      >
        <p>
          &copy; Copyright all right reserved. Created by{" "}
          <Link
            target="_blank"
            href={"https://jaroslav-portfolio.vercel.app/"}
            className="underline"
          >
            Jaroslav Barabáš
          </Link>
        </p>
        <div className=" flex justify-center items-center gap-3 text-[var(--color2)]">
          <Link
            target="_blank"
            href={"https://www.instagram.com/jaroslav_barabas/"}
          >
            <Instagram style={{ width: iconSize, height: iconSize }} />
          </Link>
          <span>|</span>
          <Link target="_blank" href={"https://github.com/YaroSK26"}>
            <Github style={{ width: iconSize, height: iconSize }} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

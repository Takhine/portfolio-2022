import { routesData } from "@data/routes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NavbarActions from "./NavbarActions";

interface MainNavbarProps {}

const MainNavbar: React.FC<MainNavbarProps> = () => {
  const router = useRouter();
  const isHome = router.asPath === '/';
  return (
    <nav className="relative z-10">
      <div className="flex py-4 items-center container">
        <div className="flex flex-1 items-baseline">
          {routesData.map((link) => (
            <Link key={link.id} href={link.route}>
              <a
                className={`mr-4 group ${isHome? 'text-white':''} ${
                  link.id === "home"
                    ? "font-black break-all  text-2xl"
                    : "text-lg font-semibold"
                } xl:mr-20`}
              >
                {link.title} {link.id === "home" && <span className="transition-all duration-300 inline-block transform group-hover:rotate-[30deg]">ツ</span>}
              </a>
            </Link>
          ))}
        </div>
        <NavbarActions />
      </div>
    </nav>
  );
};

MainNavbar.displayName = "MainNavbar";

export default MainNavbar;

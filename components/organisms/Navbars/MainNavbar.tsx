import { routesData } from "@data/routes";
import CustomSwitch from "components/molecules/Switch/Switch";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface MainNavbarProps {}

const MainNavbar: React.FC<MainNavbarProps> = () => {
  const router = useRouter();
  return (
    <nav className="">
      <div className="flex py-4 items-center container">
        <div className="flex flex-1">
          {routesData.map((link) => (
            <Link key={link.id} href={link.route}>
              <a
                className={`mr-4 xl:mr-40 ${
                  router.asPath === link.route ? "text-gray-500" : ""
                }`}
              >
                {link.title}
              </a>
            </Link>
          ))}
        </div>
        <CustomSwitch />
      </div>
    </nav>
  );
};

MainNavbar.displayName = "MainNavbar";

export default MainNavbar;

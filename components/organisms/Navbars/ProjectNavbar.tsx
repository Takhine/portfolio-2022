import Link from "next/link";
import React from "react";
import NavbarActions from "./NavbarActions";

interface ProjectNavbarProps {
  title: string;
}

const ProjectNavbar: React.FC<ProjectNavbarProps> = ({ title }) => {
  return (
    <nav>
      <div className="flex py-4 items-center container">
        <div className="flex flex-1">
          <ol
            role="list"
            className="flex items-center space-x-1 text-sm text-gray-500"
          >
            <li>
              <Link href="/">
                <a className="flex items-start transition-colors text-black font-black hover:text-gray-700">
                  <span className="sr-only"> Home </span>
                  <span className="text-black dark:text-white font-black">nair ツ</span>
                </a>
              </Link>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>

            <li>
              <Link href="/work">
                <a className="block transition-colors text-slate dark:text-graphite03 hover:text-gray-700">
                  {" "}
                  Work{" "}
                </a>
              </Link>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>

            <li>
              <h4 className="block transition-color text-graphite01">
                {" "}
                {title}{" "}
              </h4>
            </li>
          </ol>
        </div>
        <div className="flex items-center">
          <NavbarActions />
        </div>
      </div>
    </nav>
  );
};

ProjectNavbar.displayName = "ProjectNavbar";

export default ProjectNavbar;

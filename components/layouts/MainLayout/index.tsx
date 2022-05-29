import MainFooter from "components/organisms/Footers/MainFooter";
import MainNavbar from "components/organisms/Navbars/MainNavbar";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <MainNavbar />
      <div className="container">
      {children}
      </div>
      <MainFooter />
    </div>
  );
};

MainLayout.displayName = "MainLayout";

export default MainLayout;

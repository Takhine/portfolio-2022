import MainFooter from "components/organisms/Footers/MainFooter";
import MainNavbar from "components/organisms/Navbars/MainNavbar";
import React from "react";

interface MainLayoutProps {
  hasContainer?: boolean;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ hasContainer, children }) => {
  return (
    <div>
      <MainNavbar />
      <div className={hasContainer?"container":"hasContainer"}>
      {children}
      </div>
      <MainFooter />
    </div>
  );
};

MainLayout.displayName = "MainLayout";

MainLayout.defaultProps = {
  hasContainer: true
}

export default MainLayout;

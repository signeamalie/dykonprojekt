// layout der går igen på alle sider (header + main)

import React from "react";
import Header from "../molecules/Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  // klik på logo = scroll til top (simulerer “gå til forsiden”)
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenuClick = () => {
    console.log("Menu clicked!");
  };

  return (
    <div className="layout">
      <Header onLogoClick={handleLogoClick} onMenuClick={handleMenuClick} />

      {/* her viser vi sidernes indhold */}
      <main className="site-main">{children}</main>

      <footer className="site-footer" aria-hidden="true" />
    </div>
  );
}

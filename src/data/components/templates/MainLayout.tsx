import React from "react";
import Header from "../molecules/Header";
type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const handleLogoClick = () => {
    // fører tilbage til toppen af siden
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenuClick = () => {
    console.log("Menu clicked!");
  };

  return (
    <>
      <Header onLogoClick={handleLogoClick} onMenuClick={handleMenuClick} />
      <main className="site-main">{children}</main>
    </>
  );
}
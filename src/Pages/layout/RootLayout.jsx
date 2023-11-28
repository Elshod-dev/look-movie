import React from "react";
import Header from "../../Components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer.jsx";

export function RootLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <>
        <Footer />
      </>
    </>
  );
}

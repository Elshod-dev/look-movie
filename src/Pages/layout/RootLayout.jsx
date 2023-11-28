import React from "react";
import Header from "../../Components/Header/Header.jsx";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

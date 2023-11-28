import React from "react";
import { Outlet } from "react-router-dom";
import SignInBackground from "../../Assets/signBackground.jpg";
export function SignLayout() {
  return (
    <main id="sign-in-up">
      <img className="backgroundImg" src={SignInBackground} />
      <Outlet />
    </main>
  );
}

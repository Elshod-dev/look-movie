import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        © 2023 | All Rights Reserved | Developed with{" "}
        <a target="_blank" href="https://t.me/Elshod_dev">
          Elshod_dev
        </a>
      </span>
    </footer>
  );
}

export default Footer;

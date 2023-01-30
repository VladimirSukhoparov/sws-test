import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import ReplyIcon from "@mui/icons-material/Reply";

import styles from "./index.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.box}>
        <AppsIcon className={styles.icon} />
        <ReplyIcon className={styles.icon} />
        <NavLink
          to="/navbar"
          className={({ isActive }) =>
            isActive ? `${styles.nav1} ${styles.active}` : styles.nav1
          }
        >
          <button type="button" className={`${styles.text} ${styles.view}`}>
            Просмотр
          </button>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.nav2} ${styles.active}` : styles.nav2
          }
        >
          <button className={`${styles.text} ${styles.control}`}>
            Управление
          </button>
        </NavLink>
      </div>
    </div>
  );
};

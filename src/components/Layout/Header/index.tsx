import React from "react";
import styles from "./header.module.scss";
import { authFail } from "@/service/redux/slices/AuthSlice";
import { useDispatch } from "react-redux";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/router";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href="/post">Home</a>
          </li>

          <li>
            <a href="/postwithserver">Post_Serverside</a>
          </li>

          <li>
            <a href="/postwithISR">Post_ISR</a>
          </li>
        </ul>
      </nav>
      <button
        className={styles.logout}
        onClick={() => {
          dispatch(authFail({}));
          router.replace(ROUTES.signin);
        }}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;

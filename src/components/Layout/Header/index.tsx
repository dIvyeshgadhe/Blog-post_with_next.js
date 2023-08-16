import React from "react";
import styles from "./header.module.scss";
import { authFail } from "@/service/redux/slices/AuthSlice";
import { useDispatch } from "react-redux";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/post" className={styles.link}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/postwithserver" className={styles.link}>
              Post_Serverside
            </Link>
          </li>

          <li>
            <Link href="/postwithISR" className={styles.link}>
              Post_ISR
            </Link>
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

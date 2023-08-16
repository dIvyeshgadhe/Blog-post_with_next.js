import React, { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const PostList = ({ val, listPage }: any) => {
  const [readDesc, setReadDesc] = useState(true);
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <h2 key={val?.id}>{val?.title}</h2>
        <div className={styles.decrption}>
          {listPage ? (
            <>
              <p className={!readDesc ? "" : styles.readLess}>{val?.body}</p>
              <button
                className={
                  val?.title.trim()?.length < 1000 ? styles.showbutton : ""
                }
                onClick={() => setReadDesc((prev) => !prev)}
              >
                {readDesc ? "Read More" : "Read Less"}
              </button>
            </>
          ) : (
            <p>{val?.body}</p>
          )}
        </div>
        {listPage ? (
          <Link href={`/post/${val?.id}`} className={styles.btn}>
            Exploer Post
          </Link>
        ) : (
          <Link href={`/post`} className={styles.btn}>
            Back
          </Link>
        )}
      </div>
    </li>
  );
};

export default PostList;

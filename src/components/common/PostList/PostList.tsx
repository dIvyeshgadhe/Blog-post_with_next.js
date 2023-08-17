import React, { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

interface postlist {
  val: {
    id: string;
    title: string;
    body: string;
  };
  listPage: boolean;
}

// Defining a functional component called PostList
const PostList = ({ val, listPage }: postlist) => {
  // State to manage whether the full description is shown or not
  const [readDesc, setReadDesc] = useState(true);

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        {/* Displaying the post title */}
        <h2 key={val?.id}>{val?.title}</h2>
        <div className={styles.decrption}>
          {listPage ? (
            <>
              {/* Displaying the post body, with "Read More" button if the listPage prop is true */}
              <p className={!readDesc ? "" : styles.readLess}>{val?.body}</p>
              <button
                className={
                  val?.title.trim()?.length < 1000 ? styles.showbutton : ""
                }
                // Toggling the readDesc state when the button is clicked
                onClick={() => setReadDesc((prev) => !prev)}
              >
                {readDesc ? "Read More" : "Read Less"}
              </button>
            </>
          ) : (
            // Displaying the full post body if listPage prop is false
            <p>{val?.body}</p>
          )}
        </div>
        {/* Displaying a link to view the full post, or go back depending on the listPage prop */}
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

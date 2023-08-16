import Link from "next/link";
import React, { useState } from "react";
import styles from "./style.module.scss";
import PostList from "@/components/common/PostList/PostList";
import { post } from "@/service/auth";

export interface PostDetail {
  id: string;
  title: string;
  body: string;
}
export interface Postobj {
  postList: PostDetail[];
}
const Post = (props: Postobj) => {
  const { postList } = props;

  return (
    <>
      <h1 className={styles.title}>Post with ISR</h1>
      <ul className={styles.list}>
        {postList?.map((val: PostDetail) => {
          return (
            <>
              <PostList val={val} listPage={true} />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Post;

export async function getStaticProps() {
  const res = await post();

  return { props: { postList: res }, revalidate: 10 };
}

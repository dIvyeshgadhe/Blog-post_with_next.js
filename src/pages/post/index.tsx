import Link from "next/link";
import React, { useState } from "react";
import styles from "./style.module.scss";
import PostList from "@/components/common/PostList/PostList";
import { post } from "@/service/auth";

// Interface to define the shape of a single post
export interface PostDetail {
  id: string;
  title: string;
  body: string;
}

// Interface to define the shape of the props containing a list of posts
export interface Postobj {
  postList: PostDetail[];
}

// React component for rendering a list of posts
const Post = (props: Postobj) => {
  const { postList } = props;

  return (
    <>
      {/* Heading */}
      <h1 className={styles.title}>Post with Static</h1>
      <ul className={styles.list}>
        {/* Mapping through the list of posts and rendering PostList component */}
        {postList?.map((val: PostDetail) => {
          return <PostList val={val} listPage={true} key={val.id} />;
        })}
      </ul>
    </>
  );
};

export default Post;

// This function is executed at build time to fetch data for the page
export async function getStaticProps() {
  const res = await post(); // Fetching data using the 'post' function

  return { props: { postList: res } }; // Returning fetched data as props
}

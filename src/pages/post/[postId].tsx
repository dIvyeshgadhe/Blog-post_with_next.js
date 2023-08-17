import PostList from "@/components/common/PostList/PostList";
import React from "react";
import styles from "./style.module.scss";
import { post, postDetail } from "@/service/auth";

interface postdetail {
  postDetail: {
    id: string;
    title: string;
    body: string;
  };
}

// React component for rendering a specific post
const postId = (props: postdetail) => {
  const { postDetail } = props;

  return (
    <div className={styles.list}>
      {/* Rendering the PostList component with specific post details */}
      <PostList val={postDetail} listPage={false} />
    </div>
  );
};

// This function is executed at build time to fetch data for the specific post
export async function getStaticProps(context: any) {
  const {
    params: { postId }, // Extracting the postId parameter from context
  } = context;

  // Fetching post details using the 'postDetail' function
  const res = await postDetail(postId);

  return {
    props: { postDetail: res }, // Returning fetched post details as props
  };
}

// This function is executed at build time to generate paths for all posts
export async function getStaticPaths() {
  const posts = await post(); // Fetching a list of posts using the 'post' function

  // Generating an array of paths based on post IDs
  const paths = posts.map((post: any) => ({
    params: { postId: post.id.toString() }, // Using post IDs as parameters
  }));

  return { paths: paths, fallback: "blocking" };
}

export default postId;

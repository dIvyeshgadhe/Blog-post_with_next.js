import PostList from "@/components/common/PostList/PostList";
import React from "react";
import styles from "./style.module.scss";
import { post, postDetail } from "@/service/auth";

const postId = (props: any) => {
  const { postDetail } = props;

  return (
    <div className={styles.list}>
      <PostList val={postDetail} />
    </div>
  );
};

export async function getStaticProps(context: any) {
  const {
    params: { postId },
  } = context;

  const res = await postDetail(postId);
  return {
    props: { postDetail: res },
  };
}
export async function getStaticPaths() {
  const posts = await post();

  const paths = posts.map((post: any) => ({
    params: { postId: post.id.toString() },
  }));

  return { paths: paths, fallback: "blocking" };
}
export default postId;

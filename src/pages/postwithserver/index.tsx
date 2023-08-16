import PostList from "@/components/common/PostList/PostList";
import React from "react";
import styles from "./style.module.scss";
import { post } from "@/service/auth";

export interface PostDetail {
  id: string;
  title: string;
  body: string;
}
export interface Postobj {
  postList: PostDetail[];
}
const PostWithServer = (props: Postobj) => {
  const { postList } = props;

  return (
    <>
      <h1 className={styles.title}>postwithserver</h1>

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

export default PostWithServer;

export async function getServerSideProps() {
  const res = await post();

  return { props: { postList: res } };
}

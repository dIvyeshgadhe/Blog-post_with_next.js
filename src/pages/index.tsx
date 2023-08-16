import Head from "next/head";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Post from "./post";
import Signin from "./signin";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Post List With Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Signin />
      </main>
    </>
  );
}
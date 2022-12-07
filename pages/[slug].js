import Head from "next/head";
import Image from "next/image";
import altogic from "../lib/altogic";
import { useEffect, useState } from "react";
import Error from "next/error";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { useRouter } from "next/router";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Page({ data, errorCode }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  return (
    <>
      <Head>
        <link rel="stylesheet" href={`${data.cssLink}`} />
        <title>ChatGPT Bookmark - Save and share your chatgpt threads</title>
      </Head>
      <div
        className="pb-[100px]"
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
      <div className="fixed bottom-0 left-0 w-full dark:border-transparent bg-vert-light-gradient dark:bg-vert-dark-gradient">
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const { data, errors } = await altogic.db
    .model("gpt")
    .filter(`shareId == ${slug}`)
    .getSingle();

  return {
    props: {
      data: data,
      errorCode: !data || errors ? 404 : null,
    },
  };
}

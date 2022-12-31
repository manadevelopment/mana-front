import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>تیم توسعه مانا</title>
      </Head>
      {data.ping === "pong" && <h1>سلام دنیا!</h1>}
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { data } = await client.query({
    query: gql`
      query ping {
        ping
      }
    `,
  });

  return {
    props: {
      data: data,
    },
  };
};

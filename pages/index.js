import { Header } from "@/shared/Components/Header";
import { Layout } from "@/shared/Components/Layout";
import { getQuickMovies } from "@/shared/services/getMovie";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home({ quickMovies }) {
const {push} =useRouter()

  function getDetail(id) {
    push(`${id}/`);
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Layout onClick={getDetail}  quickMovies={quickMovies}  />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await getQuickMovies();

  

    console.log(res);

    return {
     props: {
        quickMovies: res.Search,
      },
    }; 
  } catch (err) {
    console.error(err);


    return {
      props: {
        quickMovies: null,
      },
    };
  }
}

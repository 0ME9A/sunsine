import Head from "next/head";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home({ result }) {

  return (
    <div>
      <Head>
        <title>Project Next</title>
      </Head>
      <Header />
      <Content/>
      <Footer />
    </div>
  );
}

import Head from "next/head";
import Header from "./components/Header";
import style from "../style/index.less";

export default function Home() {
  return (
    <div className="xcontainer">
      <Head>
        <title>Apollo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main">
          <Header />
          <h1 className="title m-5">Welcome to Apollo Mock Hulu</h1>
        </div>
      </main>
    </div>
  );
}

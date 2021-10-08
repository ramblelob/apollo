import Head from "next/head";
import Header from "./components/Header";
import style from "../style/index.less";
import MovieList from "./containers/MovieList";

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
          <MovieList />
        </div>
      </main>
    </div>
  );
}

import Head from "next/head";
import { connect } from "react-redux";

import Header from "./components/Header";

function Home(props) {
  return (
    <div className="xcontainer">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main">
          <Header />
          <h1 className="title">Home Page</h1>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.main,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

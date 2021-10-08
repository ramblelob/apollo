import Head from "next/head";
import { connect } from "react-redux";

import Header from "./components/Header";

function MovieDetail(props) {
  return (
    <div className="xcontainer">
      <Head>
        <title>Movie Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main">
          <Header />
          <h1 className="title">Movie Detail Page</h1>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.main,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

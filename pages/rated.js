import Head from "next/head";
import { connect } from "react-redux";

import Header from "./components/Header";

function Rated(props) {
  return (
    <div className="xcontainer">
      <Head>
        <title>Rated Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main">
          <Header />
          <h1 className="title">Rated Page</h1>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.main,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Rated);

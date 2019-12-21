import React from "react";
import Layout from "./components/Layout/Layout";
import Queries from "./components/Queries/Queries";
import QueryInput from "./components/QueryInput/QueryInput";
import { queries } from "./actions/queries";
import { connect } from "react-redux";

import "./App.css";

function App({ queries }) {
  return (
    <div className="App">
      <Layout>
        The awesome Q/A tool
        <Queries queries={queries} />
        <QueryInput />
      </Layout>
    </div>
  );
}

const mapStateToProps = state => ({
  queries: state.queries
});

const mapDispatchToProps = dispatch => ({
  queriesDispatch: () => dispatch(queries())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

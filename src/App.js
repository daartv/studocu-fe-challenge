import React from "react";
import Layout from "./components/Layout/Layout";
import { queries } from "./actions/queries";
import { connect } from "react-redux";

import "./App.css";

function App({queries}) {
  return (
    <div className="App">
      <Layout>
        Here goes the questions
        {/* {queries.map(query => (
          <>
            <div>{query.question}</div>
            <div>{query.answer ? query.answer : null}</div>
          </>
        ))} */}
      </Layout>
    </div>
  );
}

const mapStateToProps = state => ({
  queries: state.queries
});

const mapDispatchToProps = dispatch => ({
  queries: () => dispatch(queries())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

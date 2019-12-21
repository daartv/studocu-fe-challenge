import React from "react";
import Layout from "./components/Layout/Layout";
import Queries from "./components/Queries/Queries";
import QueryInput from "./components/QueryInput/QueryInput";
import { connect } from "react-redux";

import "./App.css";

export class App extends React.Component {
  render() {
    const { queries } = this.props;
    return (
      <div className="App container">
        <Layout>
          <div className="row justify-content">
            <h1>The awesome Q/A tool</h1>
          </div>
          <div className="row">
            <div className="col-4 info">
              {`Here you can find ${queries.length} question${
                queries.length === 1 ? "" : "s"
              }, feel free to create your own questions!`}
            </div>
            <div className="col-4 container">
              <Queries queries={queries} />
              <QueryInput />
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  queries: state.queries
});

export default connect(mapStateToProps)(App);

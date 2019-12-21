/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import Query from "../Query/Query";
import { setQueries } from "../../actions/queries";
import { useDispatch } from "react-redux";
import "./Queries.css";

const Queries = ({ queries }) => {
  const [isHovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const sortQuestions = () => {
    const sortedQueries = queries;
    sortedQueries.sort((a, b) => (a.question > b.question ? 1 : -1));
    dispatch(setQueries(sortedQueries));
  };

  const removeQuestions = () => {
    dispatch(setQueries([]));
  };
  return queries.length ? (
    queries.map((query, index) => (
      <>
        <h3
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Created questions
        </h3>
        {isHovered ? <div className="tooltip">this is a tooltip</div> : null}
        <div key={index}>
          <Query query={query} />
        </div>
        <div className="buttons">
          <button onClick={sortQuestions}>Sort questions</button>
          <button onClick={removeQuestions}>Remove questions</button>
        </div>
      </>
    ))
  ) : (
    <div>
      No questions yet <span>☹️</span>
    </div>
  );
};

export default Queries;

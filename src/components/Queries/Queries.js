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
    <div className="queries">
      <h3
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Created questions
      </h3>
      {queries.map((query, index) => (
        <>
          {isHovered ? (
            <div>Here you can find the created questions and their answers</div>
          ) : null}
          <div className="row justify-content-center" key={index}>
            <Query query={query} />
          </div>
        </>
      ))}
      <div className="buttons">
        <button onClick={sortQuestions}>Sort questions</button>
        <button onClick={removeQuestions}>Remove questions</button>
      </div>
    </div>
  ) : (
    <div className="empty">
      No questions yet <span>☹️</span>
    </div>
  );
};

export default Queries;

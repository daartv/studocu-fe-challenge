/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import iconChevronRight from "./icon-chevron-right.svg";
import { setQueries } from "../../actions/queries";
import { useDispatch, useSelector } from "react-redux";
import "./Query.css";

const Query = ({ query }) => {
  const [selected, setSelected] = useState(false);
  const { currentQueries } = useSelector(state => ({
    currentQueries: state.queries
  }));
  const dispatch = useDispatch();
  const removeQuestion = () => {
    const queryIndex = currentQueries.findIndex(
      storeQuery => storeQuery.question === query.question
    );
    const updatedQueries = currentQueries;
    updatedQueries.splice(queryIndex);
    dispatch(setQueries(updatedQueries));
  };
  return (
    <div>
      <div className="row">
        <div className="question" onClick={() => setSelected(true)}>
          {query.question}
        </div>
        <img
          style={{
            transform: `rotate(${selected ? 45 : -45}deg)`,
            transition: "transform 150ms ease"
          }}
          src={iconChevronRight}
        />
        <button onClick={removeQuestion}>X</button>
      </div>
      <div className="row">
        {selected ? <div className="answer">{query.answer}</div> : null}
      </div>
    </div>
  );
};

export default Query;

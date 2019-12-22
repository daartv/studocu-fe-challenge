import React, { useState } from "react";
import { setQueries } from "../../actions/queries";
import { useDispatch, useSelector } from "react-redux";
import { Breakpoint } from "react-socks";
import "./QueryInput.css";

const QueryInput = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isHovered, setHovered] = useState(false);

  const { currentQueries } = useSelector(state => ({
    currentQueries: state.queries
  }));
  const dispatch = useDispatch();

  const onAddQuestion = ({ currentQueries, question, answer }) => {
    const newQueries = currentQueries;
    newQueries.push({ question, answer });
    dispatch(setQueries(newQueries));
  };
  return (
    <>
      <div>
        <h3
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Create a new question
        </h3>
        {isHovered ? (
          <div>Here you can create new questions and their answers</div>
        ) : null}
        <div>Question</div>
        <Breakpoint medium up>
          <input
            className="input"
            size="40"
            value={question}
            onChange={e => setQuestion(e.target.value)}
          />
          <div>Answer</div>
          <input
            className="input"
            size="40"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
          />
        </Breakpoint>
        <Breakpoint small down>
          <input
            className="input"
            size="15"
            value={question}
            onChange={e => setQuestion(e.target.value)}
          />
          <div>Answer</div>
          <input
            className="input"
            size="15"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
          />
        </Breakpoint>
      </div>
      <button
        onClick={() =>
          onAddQuestion({
            currentQueries,
            question,
            answer
          })
        }
      >
        Create question
      </button>
    </>
  );
};

export default QueryInput;

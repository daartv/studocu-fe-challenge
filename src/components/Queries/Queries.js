import React from "react";

const Queries = ({ queries }) => {
  return (
    <>
      {queries.map((query, index) => (
        <div key={index}>
          <div>{query.question}</div>
          <div>{query.answer ? query.answer : null}</div>
        </div>
      ))}
    </>
  );
};

export default Queries;

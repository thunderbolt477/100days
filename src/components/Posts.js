import React from "react";
// import data from "../../Data";

const Posts = (props) => {
  return (
    <div>
      {props.entries.map((variable) => (
        <div>
          <h1>{variable.post}</h1>
          <p>{variable.p}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;

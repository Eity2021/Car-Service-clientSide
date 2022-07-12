import React from "react";

const Expert = ({ expert }) => {
  const { expertName, expertDescription, expertImg } = expert;
  return (
    <div className="expert">
      <div className="expert-img">
        <img src={expertImg} alt="" />
      </div>
      <div>
        <h3>{expertName}</h3>
        <p>{expertDescription}</p>
      </div>
    </div>
  );
};

export default Expert;

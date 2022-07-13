import React from "react";

const Expert = ({ expert }) => {
  const { expertName, expertDescription, expertImg } = expert;
  return (
    <div className="expert">
      <div className="expert-img">
        <img src={expertImg} alt="" />
      </div>
      <div className="expert-info">
        <h3 className="expertName">{expertName}</h3>
        <p className="expertDes">{expertDescription}</p>
      </div>
    </div>
  );
};

export default Expert;

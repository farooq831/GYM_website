import React from "react";

const FeatureBox = ({ title, image, paragraph }) => {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={image} alt="" />
      </div>
      <div className="a-b-text">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default FeatureBox;

import React from "react";

const FeatureBox = (props) => {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <h2>{props.title}</h2>
        <p>Consetetur nonumy sea amet voluptua et erat takimata at, sanctus.</p>
      </div>
    </div>
  );
};

export default FeatureBox;

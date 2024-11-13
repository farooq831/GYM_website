import React from "react";
import FeatureBox from "./FeatureBox";
import fimage1 from "../images/1.svg";
import fimage2 from "../images/2.svg";
import fimage3 from "../images/3.svg";
import fimage4 from "../images/4.svg";

const Feature = () => {
  return (
    <div id="features">
      <h1>FEATURES</h1>
      <div className="a-container">
        <FeatureBox
          image={fimage1}
          title="Weightlifting"
          paragraph="Weightlifting builds strength, muscle  and promotes overall fitness."
        />
        <FeatureBox
          image={fimage2}
          title="Cardio"
          paragraph="Cardio improves heart health, burns calories, and boosts energy levels."
        />
        <FeatureBox
          image={fimage3}
          title="Yoga"
          paragraph="Yoga enhances flexibility, strength and promotes mental well-being."
        />
        <FeatureBox
          image={fimage4}
          title="Nutrition"
          paragraph="Nutrition aids muscle growth and boosts performance energy."
        />
      </div>
    </div>
  );
};

export default Feature;

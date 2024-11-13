import React from "react";
import AboutImg from "../images/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={AboutImg} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          At Noor Fitness Club, we are passionate about helping you achieve your
          fitness goals. Whether you're looking to build strength, improve
          endurance, or simply live a healthier lifestyle, we offer a variety of
          training programs tailored to your needs. Our experienced trainers and
          state-of-the-art facilities provide the perfect environment for anyone
          from beginners to seasoned athletes. Join us to embark on a fitness
          journey that will transform your body and mind.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default About;

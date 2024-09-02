import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Web developer",
          "Freelancer",
          "React Stack Developer",
          "Simulation Enviornment Developer",
          "Former Game Developer",
          "Former Game Design",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;

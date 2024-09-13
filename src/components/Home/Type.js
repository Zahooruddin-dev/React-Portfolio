import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React JS Developer",
          "Front-End Web developer",
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

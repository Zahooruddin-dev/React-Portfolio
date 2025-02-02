import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Web developer",
          "React JS Developer",
          "Simulation Enviornment Developer",
          "Former Game Developer and Game Design",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 300,
      }}
    />
  );
}

export default Type;

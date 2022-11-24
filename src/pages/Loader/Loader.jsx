import React from "react";
import Typewriter from "typewriter-effect";

function Loader() {
  return (
    <div className="loader">
      <p>
        <Typewriter
          options={{
            strings: [
              "Welcome to Pixel",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
    </div>
  );
}

export default Loader;

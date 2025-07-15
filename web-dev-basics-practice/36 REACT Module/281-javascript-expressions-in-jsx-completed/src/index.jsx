import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);


/*
import React from "react";
import ReactDOM from "react-dom";
const fname = "Asim";
const lName = "Shah";

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lName}</h1>
    <p> your lucky number is {3 + 4}</p>
    <p>
      your bad luck numbers are{" "}
      {`${3 + 5} and ${6 * 5} and ${fname} is your first name`}
    </p>
  </div>,
  document.getElementById("root")
);
*/
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

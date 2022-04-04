// Import Modules
import { useState } from "react";
import { evaluate } from "mathjs";

// Import Components
import ShowButtons from "./ShowButtons";
import Screen from "./Screen";
import Error from "./Error";

// Calculator Compoenent
const Calculator = () => {
  // Initialise the state of Calculator Component
  const calculatorState = {
    expression: "",
    value: 0,
    error: false,
  };

  // Create a state with initialise
  const [calcexpression, setcalcexpression] = useState(calculatorState);

  // Display an expression On screen
  const displayClickedButton = (event) => {
    // User click on Cl
    if (event.target.id === "CL") {
      // Set the state
      setcalcexpression({
        ...calcexpression,
        expression: "",
        value: 0,
      });
    } else if (
      calcexpression.expression === "" &&
      event.target.id.match(/[0-9]/g) === null
    ) {
      // User click the anything before the number then set the state
      setcalcexpression({
        ...calcexpression,
        expression: "",
        error: true,
      });
      // clear the error from state
      setTimeout(() => {
        setcalcexpression({ ...calcexpression, error: false });
      }, 3000);
    } else {
      // Set the expression on state
      setcalcexpression({
        ...calcexpression,
        expression: calcexpression.expression + event.target.id,
      });
    }
  };

  // Evaluate the expression set on state
  const evalutateExpression = () => {
    setcalcexpression({
      ...calcexpression,
      value: evaluate(calcexpression.expression),
      expression: "",
    });
  };
  //  Destructing from state;
  const { expression, value, error } = calcexpression;
  return (
    <div>
      {error && <Error msg={"Please enter the number first....."} />}
      <Screen expression={expression} value={value} />
      <ShowButtons
        displayClickedButton={displayClickedButton}
        evalutateExpression={evalutateExpression}
      />
    </div>
  );
};

export default Calculator;

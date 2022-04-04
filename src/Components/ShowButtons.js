// Functional Component of ShowButtons with destructure the props
const ShowButtons = ({ displayClickedButton, evalutateExpression }) => {
  // Options for Buttons
  const CalculatorButtons = [
    "(",
    ")",
    "^",
    "CL",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "=",
    "+",
  ];
  return (
    <div className="show-buttons">
      {CalculatorButtons.map((element, index) => {
        return (
          <button
            className="btn"
            id={element}
            key={"recalc-" + element}
            onClick={
              element === "=" ? evalutateExpression : displayClickedButton
            }
          >
            {element}
          </button>
        );
      })}
    </div>
  );
};

export default ShowButtons;

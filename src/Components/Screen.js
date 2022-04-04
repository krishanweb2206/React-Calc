// Functional Component of screen
const Screen = ({ expression, value }) => {
  return (
    <div className="display-div">
      <div className="display-expression">{expression}</div>
      <div className="display-value">{value}</div>
    </div>
  );
};

export default Screen;

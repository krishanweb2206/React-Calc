// For props restriction the datatype
import PropTypes from "prop-types";

// Error Component
const Error = ({ msg }) => {
  return (
    <div className="error-div">
      <div className="error-msg">{msg}</div>
    </div>
  );
};

// Set the msg props should be of string type
Error.propTypes = {
  msg: PropTypes.string,
};

export default Error;

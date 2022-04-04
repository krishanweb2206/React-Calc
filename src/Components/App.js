// Import components
import Title from "./Title";
import Calculator from "./Calculator";

// App Component with nested Component
const App = () => {
  return (
    <div className="container">
      <Title />
      <Calculator />
    </div>
  );
};

export default App;

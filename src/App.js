import { useState } from "react";
import Dropdown from "./components/Dropdown";
import Home from "./components/Home";

const App = () => {
  // State variable to keep track of whether the dropdown is visible
  const [isShow, setIsShow] = useState(false);
  // State variable to keep track of the selected option
  const [selected, setSelected] = useState("Not Selected");
  // State variable to keep track of the options in the dropdown
  const [options] = useState(["Yes", "No", "Probably Not", "I don't know"]);

  // Function to handle the click event on an option
  const onClickHandler = (e) => {
    // Hide the dropdown
    setIsShow(false);
    // Update the selected option
    setSelected(e);
  };

  return (
    <div className="main-container">
      <Home isShow={isShow} onMouseEnterHandler={() => setIsShow(true)} />
      {/* Only render the Dropdown component if isShow is true */}
      {isShow && <Dropdown options={options} onClickHandler={onClickHandler} />}
      <p className="result-class">Ans:- {selected}</p>
    </div>
  );
};

export default App;

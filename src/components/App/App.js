import { useState } from "react";

import UserInput from "../UserInput/UserInput";
import Result from "../Result/Result";

const initialInputs = [
  { name: "Initial investment", value: "" },
  { name: "Annual investment", value: "" },
  { name: "Expected return (%)", value: "" },
  { name: "Duration (year)", value: "" },
];

function App() {
  const [inputs, setInputs] = useState(initialInputs);

  const inputIsValid = inputs[3].value >= 1;

  const handleInputChange = (event, inputIndex) => {
    setInputs((preInputs) => {
      const newInputs = [...preInputs];
      newInputs[inputIndex] = {
        ...newInputs[inputIndex],
        value: event.target.value,
      };
      return newInputs;
    });
  };

  return (
    <>
      <UserInput inputs={inputs} handleInputChange={handleInputChange} />
      {inputIsValid ? (
        <Result inputs={inputs} />
      ) : (
        <p className="center">
          Please enter a duration value that is greater than 0!
        </p>
      )}
    </>
  );
}

export default App;

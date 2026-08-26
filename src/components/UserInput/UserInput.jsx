import Input from "../Input/Input";

import "./UserInput.css";

export default function UserInput({ inputs, handleInputChange }) {
  return (
    <div id="user-input">
      {inputs.map((input, index) => {
        return (
          <div key={index}>
            <Input
              label={input.name + ":"}
              value={input.value}
              onInputChange={handleInputChange}
              inputIndex={index}
              required
            />
          </div>
        );
      })}
    </div>
  );
}

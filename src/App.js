import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        {`Change to ${replaceCamelWithSpace(newButtonColor)}`}
      </button>
      <input
        id="disable-button-checkbox"
        type={"checkbox"}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disabled button</label>
    </div>
  );
}

export default App;

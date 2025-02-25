import { useState } from "react";
import "./App.css";

function Button({ value, onChangeSize }) {
  return <button onClick={onChangeSize}>{value}</button>;
}

function InputWidthBox({ onManualyChangeSize }) {
  return (
    <>
      <label>Box size (100px - 500px): </label>
      <input
        type="text"
        onKeyUp={(event) => {
          if (event.key !== "Enter") {
            return;
          }

          if (Number.isNaN(+event.target.value)) {
            alert("Must be a number!");
            return;
          }

          if (+event.target.value <= 100) {
            alert("You reached a minimum of 100px");
            return;
          }

          if (+event.target.value >= 500) {
            alert("You reached a maximum of 500px");
            return;
          }

          onManualyChangeSize(+event.target.value);
        }}
      />
    </>
  );
}

function Box({ boxSize }) {
  return (
    <div
      className="box"
      style={{ width: `${boxSize}px`, height: `${boxSize}px` }}
    >
      {boxSize}px X {boxSize}px
    </div>
  );
}

export default function App() {
  const [boxSize, setBoxSize] = useState(200);

  return (
    <div className="app_container">
      <div>
        <Button
          value={"-10"}
          onChangeSize={() => {
            if (boxSize >= 110) {
              setBoxSize(boxSize - 10);
            } else {
              alert("You rich a minimum of 100px");
            }
          }}
        />
        <InputWidthBox onManualyChangeSize={setBoxSize} />
        <Button
          value={"+10"}
          onChangeSize={() => {
            if (boxSize <= 490) {
              setBoxSize(boxSize + 10);
            } else {
              alert("You rich a maximum of 500px");
            }
          }}
        />
      </div>
      <div>
        <Box boxSize={boxSize} />
      </div>
      <Button
        className="reset_button"
        value={"RESET"}
        onChangeSize={() => setBoxSize(200)}
      />
    </div>
  );
}

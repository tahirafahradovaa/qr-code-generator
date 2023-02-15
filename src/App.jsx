import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [value, setValue] = useState("hellohellohello");
  let ref = useRef(null);
  return (
    <>
      <div className="container">
        <h1>Qr Code Generator</h1>
        <div>
          <input ref={ref} type="text" />
          <button
            onClick={() => {
              setValue(ref.current.value);
            }}
          >
            Generate New Qr
          </button>
        </div>
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 200,
            width: "100%",
          }}
        >
          <QRCode
            size={556}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={value}
            viewBox={`0 0 556 556`}
          />
        </div>
      </div>
    </>
  );
}

export default App;

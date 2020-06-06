import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import "./style.scss";

function App() {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [qrvalue, setQrvalue] = useState("");

  useEffect(() => {
    setQrvalue(`WIFI:T:WPA;S:${ssid};P:${password};;`);
  }, [ssid, password]);

  return (
    <div className="app">
      <div className="print card">
        <div className="qrcode">
          <QRCode value={qrvalue} size={175} />
        </div>

        <div className="form">
          <label>WiFi Name</label>
          <input
            placeholder="WiFi Name"
            value={ssid}
            onChange={(event) => setSsid(event.target.value)}
          />
          <label>Password</label>
          <input
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>

      <div className="print-btn">
        <button onClick={window.print}>Print</button>
      </div>
    </div>
  );
}

export default App;

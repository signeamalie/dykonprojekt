// her starter vi selve react appen og mount’er den på #root

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* app indeholder alt vores layout og pages */}
    <App />
  </React.StrictMode>
);

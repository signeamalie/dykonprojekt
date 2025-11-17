// her starter vi selve react appen og mount'er den på #root

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/main.scss";

// gør compare-state tilgængelig for hele appen
import { CompareProvider } from "./state/CompareContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* compareprovider pakker hele appen ind,
        så alle komponenter kan bruge useCompare() */}
    <CompareProvider>
      {/* app indeholder layout, routes og sider */}
      <App />
    </CompareProvider>
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SelectionProvider from "./providers/ComicSelection.provider";
import PageProvider from "./providers/PageSelect.provider";

ReactDOM.render(
  <React.StrictMode>
    <SelectionProvider>
      <PageProvider>
        <App />
      </PageProvider>
    </SelectionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

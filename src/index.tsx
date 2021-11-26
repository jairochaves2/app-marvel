import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SelectionProvider from "./providers/comics/ComicSelection.provider";
import PageProvider from "./providers/PageSelect.provider";
import TotalComicsProvider from "./providers/comics/TotalComics.provider";
import SearchTextProvider from "./providers/comics/SearchText.provider";

ReactDOM.render(
  <React.StrictMode>
    <SelectionProvider>
      <TotalComicsProvider>
        <PageProvider>
          <SearchTextProvider>
            <App />
          </SearchTextProvider>
        </PageProvider>
      </TotalComicsProvider>
    </SelectionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

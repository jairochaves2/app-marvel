import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SelectionProvider from "./providers/comics/ComicSelection.provider";
import PageProvider from "./providers/PageSelect.provider";
import TotalComicsProvider from "./providers/comics/TotalComics.provider";
import SearchTextProvider from "./providers/comics/SearchText.provider";
import LoadingProvider from "./providers/Loading.provider";
import ComicToDetailProvider from "./providers/comics/ComicToDetail.provider";
import ComicListProvider from "./providers/comics/ComicList.provider";
import RouteProvider from "./routes";
import "./App.css";
import AddressProvider from "./providers/address/Address.provider";

ReactDOM.render(
  <React.StrictMode>
    <ComicListProvider>
      <SelectionProvider>
        <TotalComicsProvider>
          <PageProvider>
            <SearchTextProvider>
              <LoadingProvider>
                <ComicToDetailProvider>
                  <AddressProvider>
                    <RouteProvider />
                  </AddressProvider>
                </ComicToDetailProvider>
              </LoadingProvider>
            </SearchTextProvider>
          </PageProvider>
        </TotalComicsProvider>
      </SelectionProvider>
    </ComicListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

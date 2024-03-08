import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { setup, glob } from "goober";

setup(React.createElement);

// Using Google Fonts for 'Roboto'
glob`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body, h1, h2, h3, h4, h5, h6, p, ol, ul, li, figure, figcaption, blockquote, dl, dd {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  /* Add other global styles as needed */
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

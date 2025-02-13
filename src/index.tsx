import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Ensure 'root' exists before rendering
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Start measuring performance
reportWebVitals();


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./context/useContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContextProvider>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </ContextProvider>
);

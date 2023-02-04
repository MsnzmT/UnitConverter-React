import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './assets/css/index.css'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <div className="main-container">
            <div className="form-container">
                <div className="form-body">
                    <App />
                </div>
            </div>
        </div>
    </>
);


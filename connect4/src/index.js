import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContext";
import firebase from "firebase";
import { FirebaseDatabaseProvider } from "@react-firebase/database";

ReactDOM.render(
    <FirebaseDatabaseProvider firebase={firebase}>
        <React.StrictMode>
            <AuthProvider>
                <App />
            </AuthProvider>
        </React.StrictMode>
    </FirebaseDatabaseProvider>,
    document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContext";
import firebase from "firebase";
import { BrowserRouter } from "react-router-dom";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/index";

ReactDOM.render(
    <FirebaseDatabaseProvider firebase={firebase}>
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <AuthProvider>
                        <App />
                    </AuthProvider>
                </BrowserRouter>
            </ThemeProvider>
        </React.StrictMode>
    </FirebaseDatabaseProvider>,
    document.getElementById("root")
);

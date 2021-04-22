import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

//pages
import Navigation from "./pages/Navbar/Navbar";
import Room from "./pages/Room";
import Home from "./pages/home/Home";
import Connect4Home from "./pages/Connect4Home";
import Rooms from "./pages/rooms";
import Profile from "./pages/profile";
import TicTacToe from "./pages/tictactoe";
import Signup from "./pages/Signup/index";
import Login from "./pages/Login/index";
import ForgotPassword from "./pages/ForgotPassword";

export const GlobalContext = createContext(null);

export default function App() {
    let [user, setUser] = useState(getCurrentUser());

    function updateUserSession(user) {
        setUser(user);
    }

    function getCurrentUser() {
        return localStorage.getItem("authUser");
    }

    return (
        <GlobalContext.Provider value={{ user, updateUserSession }}>
            <Router>
                <AuthProvider>
                    <Navigation />
                    <Switch>
                        <Route path="/u/:userId" component={Profile} />
                        <Route exact path="/r" component={Rooms} />
                        <Route path="/" component={Home} exact />
                        <Route
                            path="/connectfour"
                            component={Connect4Home}
                            exact
                        />
                        <Route path="/r/:roomId" component={Room} />
                        <Route path="/tic-tac-toe" component={TicTacToe} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route
                            path="/forgot-password"
                            component={ForgotPassword}
                        />
                    </Switch>
                </AuthProvider>
            </Router>
        </GlobalContext.Provider>
    );
}

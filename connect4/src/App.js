import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

//pages
import Navigation from "./pages/Navbar/Navbar";
import Connect4Room from "./pages/Room/c4-room";
import Home from "./pages/home/Home";
import Connect4Home from "./pages/Connect4Home";
import Connect4Rooms from "./pages/rooms/c4rooms";
import TicTacToeRooms from "./pages/rooms/ttt-rooms";
import TicTacToeHome from "./pages/TicTacToeHome";
import TicTacToeRoom from "./pages/Room/ttt-room";
import Profile from "./pages/profile";
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
                        <Route exact path="/cr" component={Connect4Rooms} />
                        <Route exact path="/tr" component={TicTacToeRooms} />
                        <Route path="/" component={Home} exact />
                        <Route
                            path="/connectfour"
                            component={Connect4Home}
                            exact
                        />
                        <Route
                            path="/tictactoe"
                            component={TicTacToeHome}
                            exact
                        />
                        <Route path="/cr/:roomId" component={Connect4Room} />
                        <Route path="/tr/:roomId" component={TicTacToeRoom} />
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

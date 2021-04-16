import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
// import PrivateRoute from "./pages/PrivateRoute";

//pages
import Navigation from "./pages/Navbar/Navigation";
// import Connect4 from "./pages/Room/Board/Connect4TestingAgain";
import Room from "./pages/Room";
//import Rooms from "./pages/Rooms";
import Home from "./pages/Connect4LandingPage";
import Rooms from "./pages/rooms";
// import Dashboard from "./pages/Dashboard";
import Profile from "./pages/profile";
import TicTacToe from "./pages/tictactoe";
import Signup from "./pages/Signup/index";
import Login from "./pages/Login/index";
// import ForgotPassword from "./pages/ForgotPassword";
// import UpdateProfile from "./pages/UpdateProfile";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <AuthProvider>
                    <Navigation />
                    <Switch>
                        <Route path="/u/:userId" component={Profile} />
                        <Route exact path="/r" component={Rooms} exact />
                        <Route path="/" component={Home} exact />
                        <Route path="/r/:roomId" component={Room} />
                        <Route path="/tic-tac-toe" component={TicTacToe} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </AuthProvider>
            </Router>
        );
    }
}

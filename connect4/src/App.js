import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './pages/PrivateRoute'

//pages
import Navigation from "./pages/Navigation";
import Connect4 from "./pages/Connect4";
import Connect4LandingPage from "./pages/Connect4LandingPage";
import Dashboard from "./pages/Dashboard";
import TicTacToe from "./pages/tictactoe";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";
import Home from "./pages/Home";


export default class App extends React.Component {

    render() {
        

        return (
            <Router>
                <AuthProvider>
                    <Navigation />
                    <Switch>
                        <PrivateRoute path="/dashboard" component={Dashboard} exact />
                        <PrivateRoute path="/update-profile" component={UpdateProfile} />
                        <Route path="/" component={Home} exact />
                        <Route path="/connect-four" component={Connect4} />
                        <Route path="/connect-four-landing-page" component={Connect4LandingPage} />
                        <Route path="/tic-tac-toe" component={TicTacToe} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="/forgot-password" component={ForgotPassword}  />
                    </Switch>
                </AuthProvider>
            </Router>
            
        )
    }
}

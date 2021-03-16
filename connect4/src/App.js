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
import Navigation from "./pages/navigation";
import Connect4 from "./pages/Connect4";
import Dashboard from "./pages/Dashboard";
import TicTacToe from "./pages/tictactoe";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


export default class App extends React.Component {

    render() {
        

        return (
            <Router>
                <AuthProvider>
                    <Navigation />
                    <div style={{color: '#fff'}}>ignore this</div>
                    <Switch>
                        <PrivateRoute path="/" component={Dashboard} exact />
                        <Route path="/connect-four" component={Connect4} exact />
                        <Route path="/tic-tac-toe" component={TicTacToe} exact />
                        <Route path="/signup" component={Signup} exact />
                        <Route path="/login" component={Login} exact />
                    </Switch>
                </AuthProvider>
            </Router>
            
        )
    }
}

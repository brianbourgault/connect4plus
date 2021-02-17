import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

//pages
import Navigation from "./pages/navigation";
import Connect4 from "./pages/connect4";
import Home from "./pages/home";
import TicTacToe from "./pages/tictactoe";
import Login from "./pages/login";

// TODO: Implement react router dom in order to allow multiple pages with multiple games. 

export default class App extends React.Component {

    render() {
        

        return (
            <Router>
                <div>
                    <Navigation />
                    <div style={{color: '#fff'}}>ignore this</div>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/connect-four" component={Connect4} exact/>
                        <Route path="/tic-tac-toe" component={TicTacToe} exact></Route>
                        <Route path="/sign-in" component={Login} exact></Route>
                    </Switch>
                </div>
            </Router>
            
        )
    }
}

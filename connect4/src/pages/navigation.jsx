import React from "react";
import { Link } from "react-router-dom";
import './pages.css';

//TODO: Make it so the Log In in the nav bar says dashboard if a user is signed in
export default class Navigation extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render(){
        return (
            <nav className="nav-item">
                <h1 className="title">Board Game Plus<i className="fas fa-chess"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link className="nav-links" to="/">Home</Link></li>
                    <li><Link className="nav-links" to="/connect-four-landing-page">Connect 4</Link></li>
                    <li><Link className="nav-links" to="/tic-tac-toe">Tic Tac Toe</Link></li>
                    <li><Link className="nav-links" to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        );
    }
}

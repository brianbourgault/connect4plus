import React from "react";
import {Link} from "react-router-dom";
import './pages.css';

class Navigation extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render(){
        return (
            <nav className="nav-item">
                <div className="title">
                    <h1>Board Game Plus</h1>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link className="nav-links" to="/">Home</Link></li>
                    <li><Link className="nav-links" to="/connect-four">Connect 4</Link></li>
                    <li><Link className="nav-links" to="/tic-tac-toe">Tic Tac Toe</Link></li>
                    <li><Link className="nav-links" to="/sign-in">Sign In</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
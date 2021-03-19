import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'
import './pages.css';

export default function Navigation() {
    var state = { clicked: false }
    const { currentUser } = useAuth();

    function handleClick(){
        this.setState({ clicked: !this.state.clicked });
    }

    
    return (
        <nav className="nav-item">
            <h1 className="title">Board Game Plus<i class="fas fa-chess"></i></h1>
            <div className="menu-icon" onClick={this.handleClick()}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                <li><Link className="nav-links" to="/">Home</Link></li>
                <li><Link className="nav-links" to="/connect-four">Connect 4</Link></li>
                <li><Link className="nav-links" to="/tic-tac-toe">Tic Tac Toe</Link></li>
                <li>{ currentUser ? <Link className="nav-links" to="/dashboard">{currentUser && currentUser.email}</Link> : <Link className="nav-links" to="/login">Log In</Link> }</li>
            </ul>
        </nav>
    );
    
}
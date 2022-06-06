import React from 'react';
import { Link } from 'react-router-dom';
import './css/NavigationStyle.css';

export const Navigation = () => {
    return (
        <nav className="nav">
            <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/blog">Blog</Link></li>
                <li><Link className="link" to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

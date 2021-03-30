import React from 'react';
import {Link} from 'react-router-dom';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Products',
        path: '/products'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    }
]

export default function Navigation() {
    return (
        <nav className="site-nav">
            <h1>Munamii<span>CAKERY</span></h1>
            <ul>
                { navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
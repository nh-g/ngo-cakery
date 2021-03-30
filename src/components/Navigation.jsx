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
<div class="header container">
    <div class="nav-bar">
        <div class="brand">
            <a href="home.jsx" data-after="Logo"> <img src="../img/shoplogo.png" alt="img" /> </a>
        </div>
        <div class="nav-list">
            <div class="hamburger">
                <div class="bar"></div>
            </div>
            <ul>
                {navLinks.map((link, index) => (
                <li key={index}>
                    <Link to={link.path}>{link.title}</Link>
                </li>
                ))}
            </ul>
        </div>
    </div>
</div>
    )
}

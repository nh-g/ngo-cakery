import React, {useState} from 'react';
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
    const [menuActive, setMenuActive] = useState(false)
    return (
      <div className="header">
        <img
          className="brand "
          src={require("../image/cupcakelogo.jpeg").default}
          alt="Logo"
        />
        <div className={`nav-list ${menuActive && "active"}`}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className ="menu"  onClick={() => setMenuActive(!menuActive)} >
            <div className="bar"></div>
        </div>
                
      </div>
    );
}

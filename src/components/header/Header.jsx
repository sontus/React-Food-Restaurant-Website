import React from 'react';
import './Header.css';

import { Container } from 'reactstrap';


const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'About',
        url: '#'
    },
    {
        display: 'Menu',
        url: '#'
    },
    {
        display: 'Recipes',
        url: '#'
    },
    {
        display: 'Contact',
        url: '#'
    },
]

const Header = () => {
    return (
       <header className="header">
        <Container>
            <div className="nevigation">
                <div className="logo">
                    <h2 className='d-flex align-items-center gap-1'>
                        <span> 
                            <i className='ri-restaurant-2-line'></i> 
                            </span> {" "}
                            Chef Food
                    </h2>
                </div>

                <div className="nav__menu d-flex align-items-center justify-content-between">
                    <div className="nav__list_wrapper">
                        <ul className="nav__list">
                            {
                                navLinks.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <a href={item.url}>{item.display}</a>
                                    </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                    
                    <div className="menu__right">
                        <div className="custom__search">
                            <input type="text" placeholder='search item....' />
                            <span> <i className='ri-search-line'></i> </span>
                        </div>
                    </div>

                </div>

                

                <div className="mobile__menu">
                    <span><i class="ri-menu-line"></i></span>
                </div>
            </div>
        </Container>
       </header>
    )
}


export default Header
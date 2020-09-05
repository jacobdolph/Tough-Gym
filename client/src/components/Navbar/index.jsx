import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import './styles.scss';
import { IconContext } from 'react-icons';
import Col from 'react-bootstrap/Col';

function Navbar() {






    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Col bg='dark' sm='12' md='12' lg='2' className='left-side-bar'>
                    <ul className='nav-menu-items'>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </Col>

            </IconContext.Provider>
        </>
    )
}

export default Navbar

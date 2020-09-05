import React from 'react';

import './styles.scss';
import { IconContext } from 'react-icons';
import Col from 'react-bootstrap/Col';

function RightSideBar() {






    return (
        <>
            <IconContext.Provider value={{ color: 'white' }}>
                <Col bg='dark' sm='12' md='12' lg='2' className='right-side-bar'>
                    <h1>Hello world</h1>
                </Col>

            </IconContext.Provider>
        </>
    )
}

export default RightSideBar

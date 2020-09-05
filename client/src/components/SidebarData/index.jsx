import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaDiaspora />,
        cName: 'nav-text'
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <IoIcons.IoIosGlobe />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <BiIcons.BiMoney />,
        cName: 'nav-text'
    },
    {
        title: 'Sign In',
        path: '/signin',
        icon: <FaIcons.FaCompactDisc />,
        cName: 'nav-text'
    },
    {
        title: 'Sign Out',
        path: '/signout',
        icon: <FaIcons.FaCompactDisc />,
        cName: 'nav-text'
    }

]


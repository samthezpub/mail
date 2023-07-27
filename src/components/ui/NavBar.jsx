import React from 'react';

import Logo from '@assets/images/logo.png';
import LikeSVG from '@assets/images/like.svg';
import CartSVG from '@assets/images/cart.svg';
import ProfileSVG from '@assets/images/profile.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
                <div className='logo_container'>
                    <Link to="/"><img src={Logo} alt="Logo" width={55} height={55}/></Link>
                </div>

                <ul className='nav_list'>
                    <li className='list_item'><Link to="/">Главная</Link></li>
                    <li className='list_item'><Link to="">Возможности</Link></li>
                    <li className='list_item'><Link to="">Блог</Link></li>
                    <li className='list_item'><Link to="">Поддержка</Link></li>
                    <li className='list_item'><Link to="">Контакты</Link></li>
                </ul>

                <div className='nav_icons'>
                    <img src={LikeSVG} alt=""  width={29} height={25}/>
                    <img src={CartSVG} alt="" width={35} height={25}/>
                    <img src={ProfileSVG} alt="" width={29} height={25}/>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;

import React from 'react';

import '@assets/css/main.css';
import '@assets/css/mailing.css';

import MainPageImage from '@assets/images/mainpage-image.png';
import Logo from '@assets/images/logoBigger.svg'

import NavBar from '../../ui/NavBar';

const Main = () => {
    return (<div>
        <div className='header'>
            <NavBar />
        </div>
        <div className='block main'>
            <div className='container'>
                <div className='card'>
                    <h2 className='card_title'>МойСклад</h2>
                    <p className='card_paragraph'>Приложение позволяет пользователям МоегоСклада получить актуальные тарифы пересылки Почтой России из заказа покупателя или отгрузки, исключить ошибки при заполнении адресных данных</p>
                    <button className='card_button'>В каталог</button>
                </div>
                <div className="image_container">
                    <img src={MainPageImage} alt="" />
                </div>
            </div>
        </div>

        <div className="block mailing">
            <div className="form-container">
                <div className="logo">
                    <p className='title'>Почта России</p>
                    <img src={Logo} alt="logo" className='image'/>
                </div>
                <form className='form' action="POST">
                    <label htmlFor="email" className='form_title'>Рассылка</label>
                    <input type="text" name="email" className='form_input' id="email" placeholder='Введите ваш email'/>

                    <button className='form_button'>Подписаться</button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Main;

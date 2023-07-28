import React from 'react';

import '@assets/css/main.css';
import '@assets/css/mailing.css';
import '@assets/css/whatis.css';
import '@assets/css/reviews.css';
import '@assets/css/useful.css';
import '@assets/css/free.css';
import '@assets/css/blog.css';

import MainPageImage from '@assets/images/mainpage-image.png';
import Logo from '@assets/images/logoBigger.svg'
import Box from '@assets/images/box.png';
import Head1 from '@assets/images/head1.png';
import Head2 from '@assets/images/head2.png';
import Head3 from '@assets/images/head3.png';
import Useful1 from '@assets/images/useful1.png';
import Useful2 from '@assets/images/useful2.png';
import Useful3 from '@assets/images/useful3.png';
import BlogImage from '@assets/images/blog-image.png';

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
                    <img src={Logo} alt="logo" className='image' />
                </div>
                <form className='form' action="POST">
                    <label htmlFor="email" className='form_title'>Рассылка</label>
                    <input type="text" name="email" className='form_input' id="email" placeholder='Введите ваш email' />

                    <button className='form_button'>Подписаться</button>
                </form>
            </div>
        </div>

        <div className="block whatis">
            <div className='image_container'>
                <img src={Box} alt="Box" className='image' />
            </div>

            <div className="whatis_block">
                <p className='title'>Что такое МойСклад?</p>
                <p className='description'>Это система учета, кассовая программа и CRM для малого бизнеса в одном облачном сервисе. Управление всеми каналами продаж: розница, маркетплейсы, опт, сайт. Готовые интеграции. Поддержка 54-ФЗ, ЕГАИС и маркировки товаров. Производство.</p>
                <button className='button'>Все возможности</button>
            </div>
        </div>

        <div className="block reviews">
            <p className='title'>Отзывы предпринимателей</p>

            <ul className='list'>
                <li className='item'>
                    <div className='card'>
                        <img src={Head1} />
                        <p className='title'>Мария</p>
                        <p className='review'>Это самый замечательный склад, я отправляла свои вещи в другой город, все дошло в ценности и сохранности</p>
                        <button className='button'>Читать все</button>
                    </div>
                </li>

                <li className='item'>
                    <div className='card'>
                        <img src={Head2} />
                        <p className='title'>Антон</p>
                        <p className='review'>Когда я купил вещи в другом городе, у меня не было рук, чтобы все забрать с собой домой, но я воспользовался этим складом, все пришло, я очень рад, спасибо!</p>
                        <button className='button'>Читать все</button>
                    </div>
                </li>
                <li className='item'>
                    <div className='card'>
                        <img src={Head3} />
                        <p className='title'>Ольга</p>
                        <p className='review'>Всем привет, я отправляла купленные подарки своим родным, воспользовалась этим складом, все пришло, ничего не разбилось, никакого склада не встречала лучше</p>
                        <button className='button'>Читать все</button>
                    </div>
                </li>
            </ul>
        </div>

        <div className="block useful">
            <p className='title'>Кому выгодно</p>

            <ul className='list'>
                <li className='list-item'>
                    <p className='card-title'>Розничной торговле</p>
                    <div className="round">
                        <img className='card-image' src={Useful1} alt="card" />
                    </div>

                </li>

                <li className='list-item'>
                    <p className='card-title'>Оптовой торговле</p>
                    <div className="round">
                        <img className='card-image' src={Useful2} alt="card" />
                    </div>
                </li>

                <li className='list-item'>
                    <p className='card-title'>Производству</p>
                    <div className="round">
                        <img className='card-image' src={Useful3} alt="card" />
                    </div>
                </li>
            </ul>
        </div>

        <div className="half-block free">
            <div className="info">
                <p className='title'>Бесплатный тариф</p>
                <p className='description'>Складской учет, онлайн-касса, маркировка для одной точки продаж с одним сотрудником — без ограничений по времени</p>
            </div>
            <button className='button'>Начать работу</button>
        </div>


        <div className="block management">
            <p className='title'>Все возможности управления торговлей</p>

            <div className="container">

            </div>
        </div>

        <div className="block blog">
            <div className="left">
                <p className='title'>Блог о торговле для малого бизнеса</p>
                <input type="text" id='search' className='search' placeholder='Найти статью'/>

                <div className="blog-titles">
                    <p className='title1'>Маркетплейсы</p>
                    <p className='title2'>Истории успеха</p>
                    <p className='title3'>Вебинары</p>
                    <p className='title4'>Тренды рынка</p>
                </div>
            </div>
            <div className="right">
                <img src={BlogImage} alt="" />
            </div>
        </div>
    </div>
    );
}

export default Main;

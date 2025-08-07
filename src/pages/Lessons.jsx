import React from 'react';
import { lesson, videos } from '../data/data';
import VideoPlayer from '../components/VideoPlayer';
import { FaPlay } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdOutlineMailOutline, MdOutlinePhone } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router';

const Lessons = () => {
    return (
        <>
            <section className='py-20 px-4' data-aos="fade-down">
                <div className="container mx-auto flex justify-center items-center text-center">
                    <div>
                        <h4 className="font-bold mb-4">Уроки</h4>
                        <h1 className="font-bold text-4xl md:text-6xl mb-6">Медицинские видеоуроки</h1>
                        <p className="mb-8">
                            Здесь вы найдете полезные видеоуроки по различным медицинским темам и <br className="hidden sm:block" />
                            практическим навыкам.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="py-3 px-6 bg-black text-white cursor-pointer">Смотреть</button>
                            <button className="py-3 px-6 bg-white text-black border cursor-pointer">Подписаться</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20 px-4' data-aos="zoom-in">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <h2 className='text-4xl md:text-5xl font-bold mb-6'>Галерея видео</h2>
                        <p>Посмотрите наши обучающие видео по медицине</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((item, index) => (
                            <div className="relative" key={index} data-aos="flip-up">
                                <Link to={`/lessons/${item.id}`}><img src={item.preview} alt="" className='w-full h-full' />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='py-20 px-4' data-aos="fade-right">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row mb-20 justify-between gap-8">
                        <div>
                            <h4 className='font-bold mb-4'>Уроки</h4>
                            <h2 className='font-bold text-4xl md:text-5xl leading-[130%]'>Обучающие видео по <br className="hidden sm:block" /> медицинским темам</h2>
                        </div>
                        <div className="w-full lg:max-w-[600px]">
                            <p>Наши видео уроки охватывают широкий спектр медицинских тем. Вы сможете узнать о последних достижениях в медицине и получить практические советы от экспертов. Каждый урок создан с учетом потребностей студентов и профессионалов.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                        {lesson.map((item, index) => (
                            <div key={index} data-aos="zoom-in-up">
                                <img src={item.img} alt={item.name} className='h-60 w-full object-cover mb-8' />
                                <h3 className='font-bold text-2xl md:text-3xl mb-6'>{item.name}</h3>
                                <p className='pr-0 md:pr-5'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-4" data-aos="fade-up">
                        <a href='#' className="py-3 px-6 border cursor-pointer text-center">Смотреть</a>
                        <a href="#" className="py-3 px-6 flex items-center justify-center gap-2 border cursor-pointer">Узнать <MdKeyboardArrowRight /></a>
                    </div>
                </div>
            </section>

            <section className='py-20 px-4' data-aos="fade-left">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
                    <div className="flex flex-col gap-4">
                        <h3 className='text-2xl md:text-4xl font-bold'>Не пропустите новые видео!</h3>
                        <p>Подписывайтесь на обновления и учитесь с нами.</p>
                    </div>
                    <div className="flex  gap-4 justify-start">
                        <button className='py-3 px-6 bg-black text-white border border-black'>Подписаться</button>
                        <button className='py-3 px-6 bg-white text-black border border-black'>Узнать больше</button>
                    </div>
                </div>
            </section>

            <section className='py-20 px-4' data-aos="fade-up">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between gap-8 mb-20">
                        <div>
                            <h4 className='font-bold mb-4'>Контакты</h4>
                            <h2 className='font-bold text-4xl md:text-5xl mb-6'>Свяжитесь с нами</h2>
                            <p>Мы готовы ответить на ваши вопросы и предоставить необходимую <br className="hidden sm:block" /> информацию о наших видео уроках.</p>
                        </div>
                        <ul className='flex flex-col gap-6 w-full lg:max-w-[500px]'>
                            <li className='flex gap-3' data-aos="fade-right">
                                <MdOutlineMailOutline size={24} />
                                <div>
                                    <h3 className='font-bold text-xl mb-2'>Электронная почта</h3>
                                    <a href="mailto:info@medexample.com">info@medexample.com</a>
                                </div>
                            </li>
                            <li className='flex gap-3' data-aos="fade-right" data-aos-delay="100">
                                <MdOutlinePhone size={24} />
                                <div>
                                    <h3 className='font-bold text-xl mb-2'>Телефон</h3>
                                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                                </div>
                            </li>
                            <li className='flex gap-3' data-aos="fade-right" data-aos-delay="200">
                                <CiLocationOn size={24} />
                                <div>
                                    <h3 className='font-bold text-xl mb-2'>Офис</h3>
                                    <a href="https://maps.google.com">456 Примерная ул., Москва, Россия, 101000</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full h-[400px]' data-aos="zoom-in">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.3769124094205!2d-3.7037900846009394!3d40.41677597936415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228879fa725b5%3A0x839dbe61d7898e52!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1691234567890!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Lessons;

import React, { useState } from 'react'
import { blogData } from '../data/data'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router'
import bg1 from '../img/hero-img1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const News = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const categories = [...new Set(blogData.map(item => item.category))];

    const filteredData =
        activeCategory === "all"
            ? blogData
            : blogData.filter(item => item.category === activeCategory);

    return (
        <>
            {/* hero */}
            <section className='py-10'>
                <div className="container mx-auto px-4" data-aos="fade-up">
                    <div className="mb-20">
                        <h3 className='font-semibold text-base mb-4'>Новости</h3>
                        <h1 className='font-bold text-5xl mb-6'>Актуальные медицинские <br /> новости</h1>
                        <p className='font-normal'>Следите за последними событиями в медицине.</p>
                    </div>
                    {blogData.slice(0, 1).map((item, index) => (
                        <div key={index} className="w-full grid grid-cols-1 md:grid-cols-2 border" data-aos="fade-up">
                            <img src={item.img} alt="" className='h-[300px] md:h-[480px] w-full object-cover' />
                            <div className="p-6 md:p-12 flex flex-col h-full">
                                <div className="">
                                    <div className="flex items-center mb-4 gap-4 text-sm">
                                        <h3 className='py-1 px-2 bg-[#EEEEEE]'>{item.category}</h3>
                                        <h3>{item.readTime}</h3>
                                    </div>
                                    <h2 className='font-bold text-2xl md:text-3xl leading-[130%] mb-2'>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                                <div className="grow flex items-end">
                                    <Link to={`/news/${item.id}`} className='cursor-pointer'>
                                        <button className='gap-2 flex items-center'>Читать далее <MdKeyboardArrowRight size={24} /></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* news tab */}
            <section className='py-10'>
                <div className="container mx-auto px-4" data-aos="fade-up">
                    <Swiper
                        spaceBetween={8}
                        slidesPerView={'auto'}
                        className="mb-16"
                    >
                        <SwiperSlide style={{ width: 'auto' }}>
                            <li
                                onClick={() => setActiveCategory('all')}
                                className={`py-2 px-4  cursor-pointer ${activeCategory === 'all' ? 'border' : ''}`}
                            >
                                Посмотреть все
                            </li>
                        </SwiperSlide>
                        {
                            categories.map((category, index) => (
                                <SwiperSlide key={index} style={{ width: 'auto' }}>
                                    <li
                                        onClick={() => setActiveCategory(category)}
                                        className={`py-2 px-4  cursor-pointer ${activeCategory === category ? 'border' : ''}`}
                                    >
                                        {category}
                                    </li>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            filteredData.map((item, index) => {
                                return (
                                    <div key={index} className='border' data-aos="fade-up" data-aos-delay={index * 100}>
                                        <img src={item.img} alt="" className='w-full h-[300px] object-cover' />
                                        <div className="p-6 flex flex-col h-[231px]">
                                            <div className="">
                                                <div className="flex items-center mb-4 gap-4 text-sm">
                                                    <h3 className='py-1 px-2 bg-[#EEEEEE]'>{item.category}</h3>
                                                    <h3>{item.readTime}</h3>
                                                </div>
                                                <h3 className='font-bold text-2xl mb-2'>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="grow flex items-end">
                                                <Link to={`/news/${item.id}`} className='cursor-pointer'>
                                                    <button className='gap-2 flex items-center'>
                                                        Читать далее <MdKeyboardArrowRight size={24} />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            {/* subscribe section */}
            <section className='py-10'>
                <div
                    className="relative bg-cover bg-center w-full h-[498px] bg-no-repeat"
                    style={{ backgroundImage: `url(${bg1})` }}
                    data-aos="fade-up"
                >
                    <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                    <div className="container mx-auto px-4 h-full flex items-center justify-start text-white relative z-10">
                        <div className="text-center lg:text-start ">
                            <h1 className="font-bold text-4xl  leading-[130%] md:text-5xl mb-6">Подписывайтесь на наши <br /> новости</h1>
                            <p className='mb-8'>Будьте в курсе последних медицинских новостей и обновлений, подписавшись на нашу рассылку.</p>
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                                <div className="px-5 py-2 text-black bg-white cursor-pointer hover:opacity-70">
                                    Подписаться
                                </div>
                                <div className="px-5 py-2 text-white border-2 border-white cursor-pointer hover:opacity-70">
                                    Регистрация
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default News;

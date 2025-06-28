import React from 'react'
import unnamed from '../img/unnamed.png'
import { CiWarning } from 'react-icons/ci'
import { IconContext } from 'react-icons'
import { BiLeftArrowAlt, BiLocationPlus, BiMessage, BiPhone, BiRightArrow, BiRightArrowAlt, BiSolidRightArrow } from 'react-icons/bi'
import { CgCreditCard } from 'react-icons/cg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { blogData } from '../data/data'
import { TfiEmail } from 'react-icons/tfi'
import { MdAppBlocking, MdLocalGasStation } from 'react-icons/md'
import { BsMarkdown } from 'react-icons/bs'



const Home = () => {
    return (
        <div>
            {/* hero  */}
            <section className='py-28'>
                <div className="container">
                    <div className="mx-auto text-center w-full max-w-[768px] mb-20">
                        <h1 className='font-bold text-6xl mb-6'>Ваш надежный источник медицинской информации</h1>
                        <p className='mb-8'>Мы предоставляем актуальные новости, видеоуроки и платформу для обсуждения медицинских тем. Присоединяйтесь к нашему сообществу, чтобы быть в курсе <br /> последних событий в мире медицины.</p>
                        <div className="flex gap-4 justify-center">
                            <div className="px-5 py-2 text-white bg-black border-2 border-black cursor-pointer hover:opacity-70">Узнать больше</div>
                            <div className="px-5 py-2 bg-white border-2 border-black cursor-pointer hover:opacity-70">Регистрация</div>
                        </div>
                    </div>
                    <img src={unnamed} alt="unnamed" className='w-full' />
                </div>
            </section>
            {/* Ключевые функции */}
            <section className='py-28'>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
                        <h2 className='font-bold text-5xl'>Ключевые функции нашего сайта для вашего здоровья и обучения</h2>
                        <p className='text-xl'>Мы предоставляем актуальные медицинские новости, чтобы вы всегда были в курсе событий. Наши видеоуроки помогут вам освоить новые навыки и улучшить здоровье. Присоединяйтесь к нашему форуму для обсуждения и обмена опытом с другими пользователями.</p>
                    </div>
                    <div className="grid grid-1 gap-12 lg:grid-cols-3">
                        <div className="text-black">
                            <CiWarning size={48} className='mb-7'></CiWarning>
                            <h3 className='font-bold text-2xl leading-9 mb-6'>Актуальные новости о здоровье и медицине на нашем сайте</h3>
                            <p className='mb-8'>Следите за последними событиями в мире медицины.</p>
                            <a href="#" className='flex items-center gap-4'><p>Узнать</p><BiRightArrowAlt></BiRightArrowAlt></a>
                        </div>
                        <div className="text-black">
                            <CgCreditCard size={48} className='mb-7'></CgCreditCard>
                            <h3 className='font-bold text-2xl leading-9 mb-6'>Обучающие видео для вашего здоровья и благополучия</h3>
                            <p className='mb-8'>Смотрите наши видеоуроки и улучшайте свои знания о здоровье.</p>
                            <a href="#" className='flex items-center gap-4'><p>Смотреть</p><BiRightArrowAlt></BiRightArrowAlt></a>
                        </div>
                        <div className="text-black">
                            <BiMessage size={48} className='mb-7'></BiMessage>
                            <h3 className='font-bold text-2xl leading-9 mb-6'>Форум для общения и обмена опытом среди пользователей</h3>
                            <p className='mb-8'>Присоединяйтесь к обсуждениям и делитесь своим опытом.</p>
                            <a href="#" className='flex items-center gap-4'><p>Присоединиться</p><BiRightArrowAlt></BiRightArrowAlt></a>
                        </div>

                    </div>
                </div>
            </section>
            <section className='py-28'>
                <div className="container">
                    <div className="flex items-end justify-between mb-20">
                        <div>
                            <h4 className='font-bold mb-4'>Blog</h4>
                            <h2 className='text-5xl font-bold mb-6'>Short heading goes here</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        <button className='py-3 px-6 hidden lg:block bg-white border-2 border-black'>
                            View More
                        </button>
                    </div>
                    <div className="relative mt-10">
                        <Swiper
                            spaceBetween={32}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                el: ".custom-pagination",
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: ".custom-next",
                                prevEl: ".custom-prev",
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {
                                blogData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div>
                                            <img src={unnamed} alt="" className='mb-6' />
                                            <h4 className='font-bold mb-2'>{item.category}</h4>
                                            <h3 className='text-2xl font-bold mb-2'>{item.title}</h3>
                                            <p className='mb-6'>{item.description}</p>
                                            <div className="flex gap-4">
                                                <img src={unnamed} alt="unnamed" className='w-12 h-12 rounded-full' />
                                                <div>
                                                    <h3 className='font-semibold'>{item.author}</h3>
                                                    <div className="flex gap-2 text-sm text-gray-500">
                                                        <p>{item.date}</p>
                                                        •
                                                        <p>{item.readTime}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                        {/* Bottom controls */}
                        <div className="w-full px-4 mt-12 flex justify-between items-center z-10">
                            {/* Pagination (chapda) */}
                            <div className="custom-pagination flex gap-2" />

                            {/* Navigation tugmalari (o‘ngda) */}
                            <div className="custom-navigation flex gap-2">
                                <button className="custom-prev nav-btn"><BiLeftArrowAlt size="30px"></BiLeftArrowAlt></button>
                                <button className="custom-next nav-btn"><BiRightArrowAlt size="30px"></BiRightArrowAlt></button>
                            </div>
                        </div>
                    </div>
                    <button className='py-3 px-6 block lg:hidden bg-white border-2 border-black'>
                        View More
                    </button>

                </div>
            </section>
            <section className='py-28'>
                <div className="container">
                    <div className="text-center mx-auto mb-20">
                        <h2 className='text-5xl mb-7 font-bold'>Видеоуроки</h2>
                        <p>Узнайте больше о наших обучающих видеоуроках.</p>
                    </div>
                    <div className="relative">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={32}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: ".custom-next",
                                prevEl: ".custom-prev",
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}

                        > {
                                blogData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='mb-10'>
                                            <img src={unnamed} alt="" className='h-[296px]' />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <div className="hidden lg:block">
                            <button className="custom-prev  nav-btn absolute top-1/2 -translate-y-1/2 left-[-30px] z-10">
                                <BiLeftArrowAlt size="30px"></BiLeftArrowAlt>
                            </button>
                            <button className="custom-next nav-btn absolute top-1/2 -translate-y-1/2   right-[-30px]  z-10">
                                <BiRightArrowAlt size="30px"></BiRightArrowAlt>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-28'>
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <h2 className='font-bold text-5xl'>
                        Подпишитесь на наши обновления
                    </h2>
                    <div className="">
                        <p className='mb-8'>Не упустите важные новости и полезные советы! Подпишитесь на нашу рассылку, чтобы быть в курсе всех событий.</p>
                        <div className="flex gap-4 justify-start">
                            <button className="px-5 py-2 text-white bg-black border-2 border-black cursor-pointer hover:opacity-70">Подписаться</button>
                            <button className="px-5 py-2 bg-white border-2 border-black cursor-pointer hover:opacity-70">Регистрация</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-28'>
                <div className="container">
                    <div className="mb-20">
                        <h4 className='font-bold mb-4'>Контакты</h4>
                        <h2 className="font-bold text-5xl mb-7">Свяжитесь с нами</h2>
                        <p>Мы всегда готовы ответить на ваши вопросы.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
                        {/* Left side - Contact Info */}
                        <ul className='flex flex-col gap-10 w-full lg:max-w-[400px]'>
                            <li>
                                <TfiEmail size="32px" className='mb-4' />
                                <ul className='flex flex-col gap-2'>
                                    <h3 className='font-bold text-xl'>Электронная почта</h3>
                                    <p>Пишите нам на почту</p>
                                    <p>info@company.com</p>
                                </ul>
                            </li>
                            <li>
                                <BiPhone size="32px" className='mb-4' />
                                <ul className='flex flex-col gap-2'>
                                    <h3 className='font-bold text-xl'>Телефон</h3>
                                    <p>Звоните нам по номеру</p>
                                    <p>+7 (495) 000-0000</p>
                                </ul>
                            </li>
                            <li>
                                <BiLocationPlus size="32px" className='mb-4' />
                                <ul className='flex flex-col gap-2'>
                                    <h3 className='font-bold text-xl'>Офис</h3>
                                    <p>г. Москва, ул. Примерная, д. 123</p>
                                    <p>Получить маршрут</p>
                                </ul>
                            </li>
                        </ul>

                        {/* Right side - Map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12067.905655892979!2d69.2549202!3d41.292592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1719580620000!5m2!1sen!2s"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className='w-full  h-[400px] lg:h-auto rounded-md'
                        ></iframe>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home

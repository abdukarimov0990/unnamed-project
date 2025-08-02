import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useParams } from 'react-router';
import { blogData, faqs } from '../data/data';
import { GoDotFill } from 'react-icons/go';
import { BiChevronDown, BiLinkAlt } from 'react-icons/bi';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import webflow from '../img/webflow.svg';
import p6 from '../img/p6.jfif';
import AOS from 'aos';
import 'aos/dist/aos.css';

const New = () => {
    const [showMobileTOC, setShowMobileTOC] = useState(false);
    const { id } = useParams();
    const newsItem = blogData.find(news => String(news.id) === String(id));
    const [activeId, setActiveId] = useState(null);
    const [currentUrl, setCurrentUrl] = useState('');
    const [openIndex, setOpenIndex] = useState(null);
    const [clickedId, setClickedId] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const headings = document.querySelectorAll('[id^="h"]');
            let current = null;

            headings.forEach((heading) => {
                const { top } = heading.getBoundingClientRect();
                if (top <= 100) {
                    current = heading.getAttribute('id');
                }
            });

            setActiveId(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getIndent = (level = 2) => {
        const base = (level - 2) * 16;
        return { marginLeft: `${base}px` };
    };

    const toggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    if (!newsItem) {
        return (
            <section className="py-10">
                <div className="container text-center">
                    <h1 className="text-2xl text-red-600 font-bold">Yangilik topilmadi</h1>
                </div>
            </section>
        );
    }

    return (
<>
            <section className='py-10' data-aos="fade-up">
                <div className="container px-4 md:px-8">

                    <div className="flex justify-center mb-20">
                        <div className="w-full max-w-4xl">
                            <div className='flex gap-1 mb-6 items-center text-sm'>
                                <span>Блог</span>
                                <MdOutlineKeyboardArrowRight />
                                <span>{newsItem.category}</span>
                            </div>

                            <h1 className='font-bold mb-12 leading-[130%] text-3xl sm:text-4xl md:text-5xl'>{newsItem.title}</h1>

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                                <div className="flex items-center gap-4">
                                    <img src={newsItem.pfp} alt="Author" className='w-12 h-12 sm:w-14 sm:h-14 rounded-full' />
                                    <div className="flex flex-col gap-1">
                                        <h3 className='font-bold text-sm'>{newsItem.author}</h3>
                                        <div className="flex items-center text-sm gap-2 ">
                                            <span>{newsItem.date}</span>
                                            <GoDotFill />
                                            <span>{newsItem.readTime}</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className='flex items-center gap-3'>
                                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a></li>
                                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a></li>
                                    <li><a href="https://x.com" target="_blank" rel="noopener noreferrer"><BsTwitterX size={24} /></a></li>
                                    <li><a href={currentUrl} target="_blank" rel="noopener noreferrer"><BiLinkAlt size={24} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <img src={newsItem.img} alt={newsItem.title} className='w-full max-h-[600px] object-cover rounded-lg' />
                </div>
            </section>

            <section className='py-10' data-aos="fade-up">
                <div className="container px-4 md:px-8 flex flex-col justify-between lg:flex-row gap-10">
                    <div className="block lg:hidden">
                        <button
                            onClick={() => setShowMobileTOC(!showMobileTOC)}
                            className="w-full border px-4 py-3 flex justify-between mb-3 items-center font-bold text-lg"
                        >
                            Оглавление
                            <MdOutlineKeyboardArrowDown size={24}></MdOutlineKeyboardArrowDown>
                        </button>

                        {showMobileTOC && (
                            <nav className="flex flex-col gap-2">
                                {newsItem.headings.map((item, index) => (
                                    !item.isQuote && (
                                        <a
                                            key={index}
                                            href={`#${item.id}`}
                                            onClick={() => setClickedId(item.id)}
                                            style={getIndent(item.level)}
                                            className={`block px-4 py-3 text-base transition-all duration-200 ${clickedId === item.id ? 'border  font-bold ' : 'border border-transparent'
                                                }`}
                                        >
                                            {item.title}
                                        </a>

                                    )
                                ))}
                            </nav>
                        )}
                    </div>

                    <div className="w-full lg:max-w-[768px] flex flex-col gap-8">
                        {newsItem.headings.map((section, index) => (
                            <div key={index} className="space-y-4">
                                {section.isQuote ? (
                                    <blockquote className="border-l-4 pl-4 italic text-xl mb-6">{section.quote}</blockquote>
                                ) : (
                                    <>
                                        <h2
                                            id={section.id}
                                            className={`scroll-mt-24 font-semibold ${section.level === 2 ? 'text-5xl' :
                                                section.level === 3 ? 'text-4xl' :
                                                    section.level === 4 ? 'text-2xl' :
                                                        section.level === 5 ? 'text-xl' :
                                                            section.level === 6 ? 'text-lg' :
                                                                'text-2xl'
                                                }`}
                                        >
                                            {section.title}
                                        </h2>
                                        <p className="text-gray-800">{section.intro}</p>
                                        <p>{section.body}</p>
                                        {section.image && (
                                            <div className="mt-4">
                                                <img
                                                    src={section.image}
                                                    alt={section.imageCaption || 'Image'}
                                                    className="w-full rounded-lg max-h-[480px] object-cover"
                                                />
                                                {section.imageCaption && (
                                                    <p className="text-sm border-l-2 border-black px-2 mt-2">{section.imageCaption}</p>
                                                )}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                    <aside className="hidden lg:block p-6 w-full lg:max-w-xs top-20 h-fit sticky">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Оглавление</h2>
                        <nav className="flex flex-col gap-2">
                            {newsItem.headings.map((item, index) => (
                                !item.isQuote && (
                                    <a
                                        key={index}
                                        href={`#${item.id}`}
                                        style={getIndent(item.level)}
                                        className={`block px-4 py-3 text-base ${activeId === item.id ? 'border-2 font-bold' : ''}`}
                                    >
                                        {item.title}
                                    </a>
                                )
                            ))}
                        </nav>
                    </aside>

                </div>
            </section>

            <section className="px-4 py-10" data-aos="fade-up">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Часто задаваемые вопросы</h2>
                    <p className="mb-20">Здесь вы найдёте ответы на наиболее распространённые вопросы по актуальным медицинским новостям.</p>
                    <div>
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-t pt-6 overflow-hidden bg-white">
                                <button onClick={() => toggle(index)} className="flex justify-between items-center w-full px-6 py-4 text-left">
                                    <span className="text-lg font-bold text-black">{faq.question}</span>
                                    <BiChevronDown size={32} className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 border-b pb-6 text-base">
                                        <p className='w-full max-w-3xl'>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 border-t pt-8">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Все еще есть вопросы?</h3>
                        <p className="mb-4">Свяжитесь с нами для получения дополнительной информации.</p>
                        <button className="px-6 py-3 bg-white border hover:bg-black hover:text-white transition-all">Связаться</button>
                    </div>
                </div>
            </section>

            <section className='py-10' data-aos="fade-up">
                <div className="container flex flex-col space-y-8 items-center justify-center px-4 text-center">
                    <img src={webflow} alt="webflow log" className='mx-auto' />
                    <h3 className='font-extrabold text-lg md:text-xl'>"Этот пост был очень информативным и помог мне лучше понять <br className='hidden sm:block' /> последние события в медицине."</h3>
                    <div>
                        <img src={p6} alt="" className='mb-4 rounded-full mx-auto w-16 h-16' />
                        <h3 className='font-bold'>Анна Иванова</h3>
                        <h3 className=''>Врач, Клиника здоровья</h3>
                    </div>
                </div>
            </section>

            <section className='py-10' data-aos="fade-up">
                <div className="container flex flex-col lg:flex-row justify-between items-center gap-6 px-4">
                    <div className="flex flex-col gap-4 text-center lg:text-left">
                        <h3 className='text-2xl md:text-4xl font-bold'>Поделитесь своим мнением с нами</h3>
                        <p>Подписывайтесь на нашу рассылку новостей для обновлений</p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                        <button className='py-3 px-6 bg-black text-white border border-black'>Узнать</button>
                        <button className='py-3 px-6 bg-white text-black border border-black'>Подписаться</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default New;
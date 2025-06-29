import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../img/logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Главная страница', href: '#' },
    { label: 'Новости медицины', href: '#' },
    { label: 'Видеоуроки', href: '#' },
    { label: 'Форум', href: '#' },
  ];
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false,
    });
}, []);
  return (
    <header data-aos="fade-up" className="py-4 border-b border-gray-300 relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-32" />
        </Link>

        {/* Desktop nav (lg va undan katta) */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="font-normal flex gap-8">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <div className="px-5 py-2 bg-white border-2 border-black cursor-pointer hover:opacity-70">
              Войти
            </div>
            <div className="px-5 py-2 text-white bg-black border-2 border-black cursor-pointer hover:opacity-70">
              Регистрация
            </div>
          </div>
        </div>

        {/* Mobile hamburger (faqat < lg) */}
        <div className="lg:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 top-full w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 lg:hidden"
          >
            <ul className="flex flex-col gap-4 text-base">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pt-2">
              <div className="px-5 py-2 bg-white border-2 border-black text-center cursor-pointer hover:opacity-70">
                Войти
              </div>
              <div className="px-5 py-2 text-white bg-black border-2 border-black text-center cursor-pointer hover:opacity-70">
                Регистрация
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

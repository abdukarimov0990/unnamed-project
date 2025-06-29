import React, { useEffect } from 'react'
import logo from '../img/logo.svg'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram, BsTwitterX, BsYoutube } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Footer = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false,
    });
}, []);
  return (
    <footer data-aos="fade-up" className='pt-20 pb-8'>
        <div className="container grid grid-cols-1 md:grid-cols-3">
        <div>
          <img src={logo} alt="Logo" className="mb-4" />
          <p className="font-semibold mb-1">Адрес:</p>
          <p className="mb-2">Уровень 1, 12 Примерная улица, Сидней NSW 2000</p>
          <p className="font-semibold mb-1">Контакт:</p>
          <p className="mb-1">1800 123 4567</p>
          <a href="mailto:email@example.com" className="text-blue-600 underline">
            email@example.com
          </a>
          <div className="flex gap-4 mt-10 mb-10 lg:mt-0  text-xl">
            <a href="#"><FaFacebook></FaFacebook></a>
            <a href="#"><BsInstagram></BsInstagram></a>
            <a href="#"><BsTwitterX></BsTwitterX></a>
            <a href="#"><FaLinkedinIn></FaLinkedinIn></a>
            <a href="#"><BsYoutube></BsYoutube></a>
          </div>
        </div>
        <div className=""></div>
        {/* Center Links */}
        <div className="grid grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li><a href="#">Ссылка Один</a></li>
            <li><a href="#">Ссылка Два</a></li>
            <li><a href="#">Ссылка Три</a></li>
            <li><a href="#">Ссылка Четыре</a></li>
            <li><a href="#">Ссылка Пять</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#">Ссылка Шесть</a></li>
            <li><a href="#">Ссылка Семь</a></li>
            <li><a href="#">Ссылка Восемь</a></li>
            <li><a href="#">Ссылка Девять</a></li>
            <li><a href="#">Ссылка Десять</a></li>
          </ul>
        </div>

        {/* Empty or Optional Right Column */}
        <div></div>
      </div>

      {/* Bottom Bar */}
      <div className="container border-t mt-8 pt-8 px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2025 Relume. Все права защищены.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Условия обслуживания</a>
          <a href="#">Настройки Cookies</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

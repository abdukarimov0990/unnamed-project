import React, { useEffect } from 'react';
import { questions, videos } from '../data/data';
import { Link, useParams } from 'react-router';
import VideoPlayer from '../components/VideoPlayer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VideoLesson = () => {
  const { id } = useParams();
  const lessonItem = videos.find(video => String(video.id) === String(id));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!lessonItem) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold">Урок не найден</h2>
      </div>
    );
  }

  return (
    <>
      {/* ======== Video Section ======== */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="mb-10 md:mb-20">
            <h3 className="mb-2 md:mb-4 text-lg">Обучение</h3>
            <h2 className="font-bold text-3xl md:text-5xl">Названия видео урока</h2>
          </div>

          <div className="w-full max-w-full aspect-video rounded-xl overflow-hidden" data-aos="zoom-in">
            <VideoPlayer
              videoSrc={lessonItem.video}
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* ======== Subscribe Section ======== */}
      <section className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            data-aos="fade-left"
          >
            <div>
              <h2 className="font-bold text-3xl md:text-5xl mb-4">Подписывайтесь на наши уроки</h2>
              <p className="text-base">Не пропустите новые видеоуроки и полезные советы!</p>
            </div>
            <div className="flex w-full md:w-auto md:justify-start justify-center gap-4" data-aos="fade-right">
              <button className="py-3 px-6 bg-black text-white text-sm hover:bg-gray-800 transition">
                Подписаться
              </button>
              <button className="py-3 px-6 bg-white border border-black text-black text-sm hover:bg-gray-100 transition">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======== FAQ Section ======== */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="mb-10 md:mb-20 text-center max-w-2xl" data-aos="fade-up">
            <h2 className="font-bold text-3xl md:text-5xl mb-4">Часто задаваемые вопросы</h2>
            <p className="text-base md:text-xl">Здесь вы найдете ответы на самые распространенные вопросы по видеоурокам.</p>
          </div>

          <div className="w-full max-w-2xl flex flex-col gap-8 mb-16">
            {questions.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center" data-aos="zoom-in">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Понравилось видео?</h3>
            <p className="mb-4">Свяжитесь с нами для получения дополнительной информации.</p>
            <Link
              to="/contact"
              className="py-3 px-6 bg-white border border-black text-black hover:bg-gray-100 transition"
            >
              Контакт
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoLesson;

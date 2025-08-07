import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'
import img6 from '../img/img6.jpg'
import video1 from '../img/video1.mp4'
import p1 from '../img/p1.jfif'
import p2 from '../img/p2.jfif'
import p3 from '../img/p3.jfif'
import p4 from '../img/p4.jfif'
import p5 from '../img/p5.webp'
import p6 from '../img/p6.jfif'
import lesson1 from '../img/lesson1.jpg'
import lesson2 from '../img/lesson2.jpg'
import lesson3 from '../img/lesson3.avif'
import { MdOutlineMailOutline, MdOutlinePhone } from 'react-icons/md'
import { CiLocationOn } from 'react-icons/ci'

export const blogData = [
    {
      img: img1,
      id: 1,
      category: "Здоровье",
      title: "Новые исследования в области медицины",
      description:
        "Узнайте о последних достижениях в медицинских исследованиях и их влиянии.",
      date: "11 Jan 2022",
      readTime: "5 минут чтения",
      author: "Full name",
      pfp:p1,
      headings: [
        {
          id: "h2-1",
          level: 2,  
          title: "Заголовок 2",
          intro: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
          body: "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id."
        },
        {
          id: "h3-1",
          level: 3,
  
          title: "Заголовок 3",
          intro: "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.",
          body: "Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum."
        },
        {
          id: "h4-1",
          level: 4,
  
          title: "Заголовок 4",
          intro: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
          image: img1,
          imageCaption: "Image caption goes here"
        },
        {
          id: "h5-1",
          level: 5,
  
          title: "Заголовок 5",
          intro: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
        },
        {
          
          quote: "“Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.”",
          isQuote: true
        },
        {
          id: "h6-1",
          level: 6,
  
          title: "Заголовок 6",
          intro: "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus..",
        }
      ]            
    },
    {
      img: img2,
      id: 2,
      category: "Здоровье",
      title: "Технологии в здравоохранении",
      description:
        "Как новые технологии меняют подход к лечению пациентов.",
      date: "11 Jan 2022",
      readTime: "5 минут чтения",
      author: "Full name",
      pfp:p2,
      headings: [
        {
          id: "h2-1",
          level: 2,  
          title: "Заголовок 2",
          intro: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
          body: "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id."
        },
        {
          id: "h3-1",
          level: 3,
  
          title: "Заголовок 3",
          intro: "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.",
          body: "Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum."
        },
        {
          id: "h4-1",
          level: 4,
  
          title: "Заголовок 4",
          intro: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
          image: img1,
          imageCaption: "Image caption goes here"
        },
        {
          id: "h5-1",
          level: 5,
  
          title: "Заголовок 5",
          intro: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
        },
        {
          
          quote: "“Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.”",
          isQuote: true
        },
        {
          id: "h6-1",
          level: 6,
  
          title: "Заголовок 6",
          intro: "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus..",
        }
      ]            
      
    },
    {
      img: img3,
      id: 3,
      category: "Научные статьи",
      title: "Профилактика заболеваний",
      description:
        "Советы по профилактике и поддержанию здоровья в повседневной жизни.",
      date: "11 Jan 2022",
      readTime: "5 минут чтения",
      author: "Full name",
      pfp:p3,
      headings: [
        {
          id: "h2-1",
          level: 2,  
          title: "Заголовок 2",
          intro: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
          body: "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id."
        },
        {
          id: "h3-1",
          level: 3,
  
          title: "Заголовок 3",
          intro: "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.",
          body: "Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum."
        },
        {
          id: "h4-1",
          level: 4,
  
          title: "Заголовок 4",
          intro: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
          image: img1,
          imageCaption: "Image caption goes here"
        },
        {
          id: "h5-1",
          level: 5,
  
          title: "Заголовок 5",
          intro: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
        },
        {
          
          quote: "“Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.”",
          isQuote: true
        },
        {
          id: "h6-1",
          level: 6,
  
          title: "Заголовок 6",
          intro: "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus..",
        }
      ]            
      
    },
    {
      img: img4,
      id: 4,
      category: "Здоровое питание",
      title: "Blog title heading will go here",
      description:
        "Как правильное питание влияет на ваше здоровье и самочувствие.",
      date: "11 Jan 2022",
      readTime: "5 минут чтения",
      author: "Full name",
      pfp:p4,
      headings: [
        {
          id: "h2-1",
          level: 2,  
          title: "Заголовок 2",
          intro: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
          body: "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id."
        },
        {
          id: "h3-1",
          level: 3,
  
          title: "Заголовок 3",
          intro: "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.",
          body: "Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum."
        },
        {
          id: "h4-1",
          level: 4,
  
          title: "Заголовок 4",
          intro: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
          image: img1,
          imageCaption: "Image caption goes here"
        },
        {
          id: "h5-1",
          level: 5,
  
          title: "Заголовок 5",
          intro: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
        },
        {
          
          quote: "“Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.”",
          isQuote: true
        },
        {
          id: "h6-1",
          level: 6,
  
          title: "Заголовок 6",
          intro: "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus..",
        }
      ]            
      
    },
    {
      img: img5,
      id: 5,
      category: "Новости медицины",
      title: "Психическое здоровье",
      description:
        "Поддержание психического здоровья в условиях современного мира.",
      date: "11 Jan 2022",
      readTime: "5 минут чтения",
      author: "Full name",
      pfp:p5,
      headings: [
        {
          id: "h2-1",
          level: 2,  
          title: "Заголовок 2",
          intro: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
          body: "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id."
        },
        {
          id: "h3-1",
          level: 3,
  
          title: "Заголовок 3",
          intro: "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.",
          body: "Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum."
        },
        {
          id: "h4-1",
          level: 4,
  
          title: "Заголовок 4",
          intro: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
          image: img1,
          imageCaption: "Image caption goes here"
        },
        {
          id: "h5-1",
          level: 5,
  
          title: "Заголовок 5",
          intro: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
        },
        {
          
          quote: "“Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.”",
          isQuote: true
        },
        {
          id: "h6-1",
          level: 6,
  
          title: "Заголовок 6",
          intro: "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus..",
        }
      ]            
      
    },
    {
      img: img6,
      id: 6,
      category: "Научные статьи",
      title: "Физическая активность",
      description:
        "Как регулярные физические нагрузки улучшают качество жизни.",
      date: "11 Jan 2022",
      readTime: "5 минут чтения",
      author: "Full name",
      pfp:p6,
      headings: [
        {
          title: "Заголовок 2",
          level:2,
          intro: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
          body: "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id."
        },
        {
          title: "Заголовок 3",
          level:3,
          intro: "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.",
          body: "Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum."
        },
        {
          title: "Заголовок 4",
          level:4,
          intro: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
          image: img1,
          imageCaption: "Image caption goes here"
        },
        {
          title: "Заголовок 5",
          level:5,
          intro: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
        },
        {
          quote: "“Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.”",
          isQuote: true
        },
        {
          id:6,
          title: "Заголовок 6",
          intro: "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus..",
        }
      ]
      
    },
  ];

  export const videos = [
    {
      video: video1,
      preview: lesson1,
      id: 1,
    },
    {
      video: video1,
      preview: lesson2,
      id: 2,
    },
    {
      video: video1,
      preview: lesson3,
      id: 3,

    },
    {
      video: video1,
      preview: lesson1,
      id: 4,

    },
    {
      video: video1,
      preview: lesson2,
      id: 5,

    },
    {
      video: video1,
      preview: lesson3,
      id: 6,

    },
  ]
  export const faqs = [
  {
    question: "Что такое медицинские новости?",
    answer:
    "Медицинские новости — это актуальная информация о новых исследованиях, методах лечения и медицинских событиях. Они помогают людям быть в курсе последних достижений в области медицины. Следите за новостями, чтобы получать свежие данные о здоровье."
  },
  {
    question: "Как проверить достоверность?",
    answer:
    "Для проверки достоверности новостей используйте авторитетные источники и научные публикации. Обратите внимание на дату и авторство информации. Также полезно сравнить данные с другими ресурсами."
  },
  {
    question: "Где найти видеоуроки?",
    answer:
    "Видеоуроки доступны на нашем сайте в разделе обучения. Вы можете найти их по темам или по популярности. Они помогут вам лучше понять медицинские концепции."
  },
  {
    question: "Как задать вопрос?",
    answer:
    'Вы можете задать вопрос через наш форум или воспользоваться формой обратной связи. Мы стремимся ответить на все запросы в кратчайшие сроки. Ваши вопросы важны для нас.'
  },
  {
    question: "Как подписаться на новости?",
    answer:
    'Чтобы подписаться на новости, заполните форму на нашем сайте. Вы будете получать уведомления о новых статьях и видеоуроках. Не упустите возможность быть в курсе!'
  }
];
export const lesson = [
  {
    img:lesson1,
    name:"Темы видео уроков по медицине",
    desc:"Изучите ключевые аспекты медицинской практики."
  },
  {
    img:lesson2,
    name:"Преимущества онлайн обучения в медицине",
    desc:"Удобство и доступность материалов для всех."
  },
  {
    img:lesson3,
    name:"Как выбрать правильный курс обучения",
    desc:"Рекомендации по выбору наиболее подходящих курсов."
  },
]
export const questions = [
  {
    question: "Как начать обучение?",
    answer: "Чтобы начать обучение, выберите интересующий вас видеоурок. Затем следуйте инструкциям на экране. Убедитесь, что у вас есть доступ к интернету."
  },
  {
    question: "Как задать вопрос?",
    answer: "Вы можете задать вопрос через форму обратной связи на сайте. Мы постараемся ответить вам как можно быстрее. Также вы можете посетить наш форум."
  },
  {
    question: "Где найти материалы?",
    answer: "Все учебные материалы доступны на странице каждого видеоурока. Вы можете скачать их для удобства. Также мы предоставляем дополнительные ресурсы."
  },
  {
    question: "Как получить сертификат?",
    answer: "Сертификат выдается после успешного завершения курса. Убедитесь, что вы выполнили все задания. После этого сертификат будет доступен для скачивания."
  },
  {
    question: "Что делать при проблемах?",
    answer: "Если у вас возникли проблемы, обратитесь в службу поддержки. Мы готовы помочь вам в любое время. Пожалуйста, предоставьте как можно больше информации."
  },
]
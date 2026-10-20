// Страница «Преподаватели». Только подтверждённые факты: дипломы, сертификаты и слова Сергея (20.10.2026).
import type { Lang } from './business';

export const teachersPath: Record<Lang, string> = { ru: '/prepodavateli/', en: '/en/teachers/', pl: '/pl/lektorzy/' };

export type TeacherId = 'satyrova' | 'laevskaya' | 'barinova' | 'rud';
export const teacherIds: TeacherId[] = ['satyrova', 'laevskaya', 'barinova', 'rud'];

type Teacher = { name: string; role: string; bio: string; creds: string[] };

export const teachers: Record<TeacherId, Record<Lang, Teacher>> = {
  satyrova: {
    ru: {
      name: 'Юлия Сатырова',
      role: 'Основательница',
      bio: 'Основала Hunny Bunny English и ведёт все направления — от малышей до взрослых и подготовки к IELTS. Очные занятия в Варшаве ведёт сама.',
      creds: [
        'Сертификат TESOL — Arizona State University (Global Launch), более 150 часов, 2023',
        'Курс в GV Malta English Centre, Мальта, 2026',
      ],
    },
    en: {
      name: 'Yuliya Satyrava',
      role: 'Founder',
      bio: 'Founded Hunny Bunny English and teaches every programme — from little ones to adults and IELTS preparation. She teaches our in-person lessons in Warsaw herself.',
      creds: [
        'TESOL certificate — Arizona State University (Global Launch), 150+ hours, 2023',
        'Course at GV Malta English Centre, Malta, 2026',
      ],
    },
    pl: {
      name: 'Yuliya Satyrava',
      role: 'Założycielka',
      bio: 'Założyła Hunny Bunny English i prowadzi wszystkie programy — od maluchów po dorosłych i przygotowanie do IELTS. Zajęcia stacjonarne w Warszawie prowadzi osobiście.',
      creds: [
        'Certyfikat TESOL — Arizona State University (Global Launch), ponad 150 godzin, 2023',
        'Kurs w GV Malta English Centre, Malta, 2026',
      ],
    },
  },
  laevskaya: {
    ru: {
      name: 'Алёна Лаевская',
      role: 'Преподаватель',
      bio: 'Преподаватель с большим опытом и международной практикой. Ведёт все направления: от детей 3 лет до школьников и взрослых.',
      creds: ['Сертификат TESOL', 'Обучение на Мальте'],
    },
    en: {
      name: 'Alena Laevskaya',
      role: 'Teacher',
      bio: 'An experienced teacher with international training. She teaches every programme, from 3-year-olds to teenagers and adults.',
      creds: ['TESOL certificate', 'Training in Malta'],
    },
    pl: {
      name: 'Alena Laevskaya',
      role: 'Lektorka',
      bio: 'Doświadczona lektorka z międzynarodową praktyką. Prowadzi wszystkie programy: od dzieci w wieku 3 lat po młodzież i dorosłych.',
      creds: ['Certyfikat TESOL', 'Szkolenie na Malcie'],
    },
  },
  barinova: {
    ru: {
      name: 'Юлия Баринова',
      role: 'Преподаватель',
      bio: 'По образованию — преподаватель английского и французского языков. Проходила языковую практику в США. Помогает школьникам спокойно и системно готовиться к ЦТ.',
      creds: [
        'Высшее образование — ГГУ им. Ф. Скорины, «Английский язык. Французский язык», квалификация «преподаватель»',
        'Языковая практика в США',
      ],
    },
    en: {
      name: 'Yuliya Barinova',
      role: 'Teacher',
      bio: 'A qualified teacher of English and French. She did a language internship in the USA and helps teenagers prepare for exams calmly and systematically.',
      creds: ['Degree in English and French — Francisk Skorina Gomel State University, qualified teacher', 'Language internship in the USA'],
    },
    pl: {
      name: 'Yuliya Barinova',
      role: 'Lektorka',
      bio: 'Z wykształcenia nauczycielka języka angielskiego i francuskiego. Odbyła praktykę językową w USA. Pomaga młodzieży spokojnie i systematycznie przygotować się do egzaminów.',
      creds: ['Studia: język angielski i francuski — Homelski Uniwersytet Państwowy im. F. Skaryny, kwalifikacje nauczycielskie', 'Praktyka językowa w USA'],
    },
  },
  rud: {
    ru: {
      name: 'Елизавета Рудь',
      role: 'Преподаватель',
      bio: 'Окончила ГГУ им. Ф. Скорины по специальности «Иностранные языки (английский, немецкий)». Ведёт все направления — от малышей до взрослых.',
      creds: ['Высшее образование — ГГУ им. Ф. Скорины, «Иностранные языки (английский, немецкий)», квалификация «преподаватель», 2023'],
    },
    en: {
      name: 'Elizaveta Rud',
      role: 'Teacher',
      bio: 'A graduate in foreign languages (English and German) from Francisk Skorina Gomel State University. She teaches every programme, from little ones to adults.',
      creds: ['Degree in foreign languages (English, German) — Francisk Skorina Gomel State University, qualified teacher, 2023'],
    },
    pl: {
      name: 'Elizaveta Rud',
      role: 'Lektorka',
      bio: 'Absolwentka kierunku „Języki obce (angielski, niemiecki)” na Homelskim Uniwersytecie Państwowym im. F. Skaryny. Prowadzi wszystkie programy — od maluchów po dorosłych.',
      creds: ['Studia: języki obce (angielski, niemiecki) — Homelski Uniwersytet Państwowy im. F. Skaryny, kwalifikacje nauczycielskie, 2023'],
    },
  },
};

export const teachersUi: Record<
  Lang,
  { seoTitle: string; description: string; h1: string; certsTitle: string; certTesol: string; certMalta: string; more: string; home: string }
> = {
  ru: {
    seoTitle: 'Преподаватели английского в Гомеле и онлайн | Hunny Bunny English',
    description: 'Преподаватели Hunny Bunny English: основательница Юлия Сатырова (TESOL, Arizona State University), Алёна Лаевская, Юлия Баринова и Елизавета Рудь. Образование и сертификаты.',
    h1: 'Наши преподаватели',
    certsTitle: 'Сертификаты',
    certTesol: 'TESOL — Arizona State University, 2023',
    certMalta: 'GV Malta English Centre, 2026',
    more: 'Подробнее о преподавателях',
    home: 'Главная',
  },
  en: {
    seoTitle: 'Our English Teachers | Hunny Bunny English',
    description: 'Meet the Hunny Bunny English teachers: founder Yuliya Satyrava (TESOL, Arizona State University), Alena Laevskaya, Yuliya Barinova and Elizaveta Rud. Education and certificates.',
    h1: 'Our teachers',
    certsTitle: 'Certificates',
    certTesol: 'TESOL — Arizona State University, 2023',
    certMalta: 'GV Malta English Centre, 2026',
    more: 'More about our teachers',
    home: 'Home',
  },
  pl: {
    seoTitle: 'Nasi lektorzy angielskiego | Hunny Bunny English',
    description: 'Poznaj lektorów Hunny Bunny English: założycielka Yuliya Satyrava (TESOL, Arizona State University), Alena Laevskaya, Yuliya Barinova i Elizaveta Rud. Wykształcenie i certyfikaty.',
    h1: 'Nasi lektorzy',
    certsTitle: 'Certyfikaty',
    certTesol: 'TESOL — Arizona State University, 2023',
    certMalta: 'GV Malta English Centre, 2026',
    more: 'Więcej o lektorach',
    home: 'Strona główna',
  },
};

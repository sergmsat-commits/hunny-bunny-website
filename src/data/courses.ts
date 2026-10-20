// Отдельные страницы курсов на трёх языках.
// Только проверенные факты: прайс и правила из сторис школы, длительность и размер групп — со слов Сергея (20.10.2026).
import type { Lang } from './business';

export type CourseId = 'kids' | 'teens' | 'adults' | 'online' | 'clubs';
export const courseIds: CourseId[] = ['kids', 'teens', 'adults', 'online', 'clubs'];

// Адреса страниц. Меняя адрес после публикации, добавьте 301-редирект в public/_redirects.
export const coursePath: Record<CourseId, Record<Lang, string>> = {
  kids: { ru: '/kursy/dlya-detey/', en: '/en/courses/kids/', pl: '/pl/kursy/dla-dzieci/' },
  teens: { ru: '/kursy/dlya-podrostkov/', en: '/en/courses/teens/', pl: '/pl/kursy/dla-mlodziezy/' },
  adults: { ru: '/kursy/dlya-vzroslyh/', en: '/en/courses/adults/', pl: '/pl/kursy/dla-doroslych/' },
  online: { ru: '/kursy/onlayn/', en: '/en/courses/online/', pl: '/pl/kursy/online/' },
  clubs: { ru: '/kursy/kluby/', en: '/en/courses/clubs/', pl: '/pl/kursy/kluby/' },
};

// Какое фото показывать на странице курса (файлы в src/assets)
export const coursePhoto: Record<CourseId, 'beanbags' | 'desk' | 'laevskaya' | 'rud' | 'group'> = {
  kids: 'beanbags',
  teens: 'desk',
  adults: 'laevskaya',
  online: 'rud',
  clubs: 'group',
};

// Индексы отзывов из translations.reviews.items, подходящих к курсу
export const courseReviews: Record<CourseId, number[]> = {
  kids: [0, 1, 7],
  teens: [3, 1, 9],
  adults: [3, 10, 9],
  online: [3, 0, 2],
  clubs: [5, 4, 6],
};

type Feature = { icon: string; title: string; text: string };
type PriceRow = { label: string; once: string; pass?: string };
type PriceGroup = { title: string; rows: PriceRow[] };

export type CourseContent = {
  seoTitle: string;
  description: string;
  short: string; // название в ссылках и хлебных крошках
  h1: string;
  lead: string;
  facts: string[];
  featuresTitle: string;
  features: Feature[];
  prices?: PriceGroup[];
  faq: { q: string; a: string }[];
};

// Общие подписи страницы курса
export const courseUi: Record<
  Lang,
  {
    home: string;
    courses: string;
    cta: string;
    stepsTitle: string;
    steps: { title: string; text: string }[];
    pricesTitle: string;
    priceOnce: string;
    pricePass: string;
    priceNote: string;
    priceAskTitle: string;
    priceAsk: string;
    priceAskCta: string;
    reviewsTitle: string;
    otherTitle: string;
    more: string;
    faqTitle: string;
  }
> = {
  ru: {
    home: 'Главная',
    courses: 'Курсы',
    cta: 'Записаться на пробный урок',
    stepsTitle: 'Как начать',
    steps: [
      { title: 'Оставьте заявку', text: 'Через форму на сайте или в мессенджере — как вам удобнее.' },
      { title: 'Бесплатный пробный урок', text: '20 минут: знакомимся, определяем уровень и подбираем группу или индивидуальный формат.' },
      { title: 'Занятия по абонементу', text: 'Абонемент оплачивается за текущий месяц до 5 числа. Время и частоту занятий согласуем.' },
    ],
    pricesTitle: 'Стоимость',
    priceOnce: 'разовое',
    pricePass: 'по абонементу',
    priceNote: 'Цена за одно занятие в белорусских рублях. Первый урок — бесплатно, на первый месяц обучения — скидка 20%.',
    priceAskTitle: '',
    priceAsk: '',
    priceAskCta: '',
    reviewsTitle: 'Что пишут родители',
    otherTitle: 'Другие курсы',
    more: 'Подробнее',
    faqTitle: 'Вопросы',
  },
  en: {
    home: 'Home',
    courses: 'Courses',
    cta: 'Book a free trial lesson',
    stepsTitle: 'How to start',
    steps: [
      { title: 'Send a request', text: 'Use the form on this page or message us in your favourite app.' },
      { title: 'Free trial lesson', text: '20 minutes to get to know each other, check the level and choose a group or one-to-one lessons.' },
      { title: 'Regular lessons', text: 'Lessons are paid monthly with a pass. We agree on the schedule and frequency together.' },
    ],
    pricesTitle: 'Prices',
    priceOnce: '',
    pricePass: '',
    priceNote: '',
    priceAskTitle: 'Prices',
    priceAsk: 'Prices depend on the format: group or one-to-one, online or in person. Message us and we’ll send the current price list.',
    priceAskCta: 'Ask about prices',
    reviewsTitle: 'What parents say',
    otherTitle: 'Other courses',
    more: 'Learn more',
    faqTitle: 'Questions',
  },
  pl: {
    home: 'Strona główna',
    courses: 'Kursy',
    cta: 'Zapisz się na lekcję próbną',
    stepsTitle: 'Jak zacząć',
    steps: [
      { title: 'Wyślij zgłoszenie', text: 'Przez formularz na stronie albo w komunikatorze — jak wolisz.' },
      { title: 'Bezpłatna lekcja próbna', text: '20 minut: poznajemy się, sprawdzamy poziom i dobieramy grupę lub zajęcia indywidualne.' },
      { title: 'Regularne zajęcia', text: 'Zajęcia w ramach miesięcznego karnetu. Termin i częstotliwość ustalamy razem.' },
    ],
    pricesTitle: 'Cennik',
    priceOnce: '',
    pricePass: '',
    priceNote: '',
    priceAskTitle: 'Cennik',
    priceAsk: 'Cena zależy od formatu: w grupie czy indywidualnie, online czy stacjonarnie. Napisz do nas — prześlemy aktualny cennik.',
    priceAskCta: 'Zapytaj o cenę',
    reviewsTitle: 'Opinie rodziców',
    otherTitle: 'Inne kursy',
    more: 'Więcej',
    faqTitle: 'Pytania',
  },
};

// Прайс (только RU-версия, из сторис «Прайс на занятия в Hunny Bunny»)
const generalPrices: PriceGroup[] = [
  {
    title: 'Общий английский (General English) и подготовка к ЦТ',
    rows: [
      { label: 'В группе, очно', once: '40 BYN', pass: '38 BYN' },
      { label: 'В группе, онлайн', once: '35 BYN', pass: '33 BYN' },
      { label: 'Индивидуально, очно', once: '55 BYN', pass: '53 BYN' },
      { label: 'Индивидуально, онлайн', once: '50 BYN', pass: '48 BYN' },
    ],
  },
];
const ieltsPrices: PriceGroup = {
  title: 'Подготовка к IELTS (очно и онлайн)',
  rows: [
    { label: 'В группе', once: '70 BYN', pass: '65 BYN' },
    { label: 'Индивидуально', once: '90 BYN', pass: '85 BYN' },
  ],
};
const olympiadPrices: PriceGroup = {
  title: 'Подготовка к олимпиадам (очно и онлайн)',
  rows: [{ label: 'Групповое занятие', once: '25 BYN' }],
};
const clubPrices: PriceGroup = {
  title: 'Клубы и мастер-классы',
  rows: [
    { label: 'Киноклуб, 90 минут', once: '45 BYN' },
    { label: 'Летний клуб, 10:00–14:00', once: '50 BYN / день' },
    { label: 'Мастер-классы', once: 'зависит от программы' },
  ],
};

export const courses: Record<CourseId, Record<Lang, CourseContent>> = {
  kids: {
    ru: {
      seoTitle: 'Английский для детей 3–10 лет в Гомеле и онлайн | Hunny Bunny',
      description: 'Английский для детей от 3 лет: игры, песни и разговорная речь. Группы 3–5 человек, занятие 45 минут, очно в Гомеле и онлайн. Первый урок бесплатно.',
      short: 'Дети 3–10 лет',
      h1: 'Английский для детей 3–10 лет',
      lead: 'Игры, песни и разговорная речь с первого занятия. Ребёнок привыкает к английскому легко и с удовольствием — в маленькой группе или индивидуально.',
      facts: ['3–10 лет', 'Группы 3–5 детей', '45 минут', 'Очно в Гомеле и онлайн', 'Набор круглый год'],
      featuresTitle: 'Как проходят занятия',
      features: [
        { icon: 'star', title: 'Играем, а не сидим', text: 'Занятие построено на играх и движении, поэтому даже малыши с удовольствием остаются на весь урок.' },
        { icon: 'chat', title: 'Песенки и танцы', text: 'Слова и фразы запоминаются под музыку — в том числе с песнями нашего зайчика на YouTube.' },
        { icon: 'monitor', title: 'Мультики на большом экране', text: 'Ребёнок слышит живой английский и привыкает понимать речь на слух.' },
        { icon: 'heart', title: 'Поделки и рисование', text: 'Через творчество учим цвета, животных и первые фразы. Новые слова дети с гордостью показывают дома.' },
      ],
      prices: generalPrices,
      faq: [
        { q: 'С какого возраста можно начать?', a: 'С 3 лет. Группы подбираем по возрасту и уровню.' },
        { q: 'Сколько детей в группе?', a: 'От 3 до 5. Можно заниматься и индивидуально.' },
        { q: 'Сколько длится занятие?', a: '45 минут. Пробный урок — 20 минут.' },
        { q: 'Ребёнок стесняется. Что делать?', a: 'Приходите на бесплатный пробный урок: преподаватель знакомится с ребёнком в игре, без давления, а маленькая группа помогает быстро освоиться.' },
        { q: 'Можно заниматься онлайн?', a: 'Да, в группе или индивидуально. Онлайн-занятия стоят дешевле очных.' },
      ],
    },
    en: {
      seoTitle: 'English Lessons for Kids Aged 3–10 — Online and in Gomel | Hunny Bunny',
      description: 'English for children from age 3 through games, songs and speaking. Groups of 3–5, 45-minute lessons, online from any country or in person in Gomel. Free trial lesson.',
      short: 'Kids aged 3–10',
      h1: 'English for kids aged 3–10',
      lead: 'Games, songs and speaking from the very first lesson. Children get used to English easily and happily — in a small group or one-to-one.',
      facts: ['Ages 3–10', 'Groups of 3–5', '45 minutes', 'Online and in Gomel', 'Enrolment all year round'],
      featuresTitle: 'What lessons look like',
      features: [
        { icon: 'star', title: 'Playing, not sitting', text: 'Lessons are built around games and movement, so even little ones happily stay for the whole lesson.' },
        { icon: 'chat', title: 'Songs and dancing', text: 'Words and phrases stick with music — including songs by our bunny on YouTube.' },
        { icon: 'monitor', title: 'Cartoons on a big screen', text: 'Children hear real English and learn to understand it by ear.' },
        { icon: 'heart', title: 'Crafts and drawing', text: 'Through creative tasks we learn colours, animals and first phrases. Kids love showing new words at home.' },
      ],
      faq: [
        { q: 'What age can my child start?', a: 'From age 3. We group children by age and level.' },
        { q: 'How many children are in a group?', a: '3 to 5. One-to-one lessons are also available.' },
        { q: 'How long is a lesson?', a: '45 minutes. The trial lesson takes 20 minutes.' },
        { q: 'Can my child study online?', a: 'Yes, in a group or one-to-one, from any country.' },
      ],
    },
    pl: {
      seoTitle: 'Angielski dla dzieci 3–10 lat — online i stacjonarnie | Hunny Bunny',
      description: 'Angielski dla dzieci od 3 lat przez zabawę, piosenki i mówienie. Grupy 3–5 osób, lekcja 45 minut, online z dowolnego miejsca. Bezpłatna lekcja próbna.',
      short: 'Dzieci 3–10 lat',
      h1: 'Angielski dla dzieci 3–10 lat',
      lead: 'Zabawy, piosenki i mówienie od pierwszej lekcji. Dziecko oswaja się z angielskim łatwo i z przyjemnością — w małej grupie lub indywidualnie.',
      facts: ['3–10 lat', 'Grupy 3–5 dzieci', '45 minut', 'Online i stacjonarnie', 'Zapisy przez cały rok'],
      featuresTitle: 'Jak wyglądają zajęcia',
      features: [
        { icon: 'star', title: 'Bawimy się, a nie siedzimy', text: 'Lekcja opiera się na zabawie i ruchu, więc nawet maluchy chętnie zostają do końca.' },
        { icon: 'chat', title: 'Piosenki i taniec', text: 'Słowa i zwroty łatwiej zapamiętać z muzyką — także z piosenkami naszego zajączka na YouTube.' },
        { icon: 'monitor', title: 'Bajki na dużym ekranie', text: 'Dziecko słyszy prawdziwy angielski i uczy się go rozumieć ze słuchu.' },
        { icon: 'heart', title: 'Prace plastyczne i rysowanie', text: 'Przez twórcze zadania uczymy kolorów, zwierząt i pierwszych zwrotów. Dzieci chętnie pokazują nowe słowa w domu.' },
      ],
      faq: [
        { q: 'Od jakiego wieku można zacząć?', a: 'Od 3 lat. Grupy dobieramy według wieku i poziomu.' },
        { q: 'Ile dzieci jest w grupie?', a: 'Od 3 do 5. Można też uczyć się indywidualnie.' },
        { q: 'Ile trwa lekcja?', a: '45 minut. Lekcja próbna trwa 20 minut.' },
        { q: 'Czy dziecko może uczyć się online?', a: 'Tak, w grupie lub indywidualnie, z dowolnego kraju.' },
      ],
    },
  },

  teens: {
    ru: {
      seoTitle: 'Английский для школьников и подготовка к ЦТ в Гомеле | Hunny Bunny',
      description: 'Английский для школьников 11–17 лет: школьная программа, подготовка к ЦТ, IELTS и олимпиадам. Группы 3–5 человек или индивидуально, очно в Гомеле и онлайн.',
      short: 'Школьники 11–17 лет',
      h1: 'Английский для школьников и подготовка к ЦТ',
      lead: 'Школьная программа без стресса, подготовка к ЦТ, IELTS и олимпиадам. В маленькой группе или индивидуально, очно в Гомеле и онлайн.',
      facts: ['11–17 лет', 'Группы 3–5 человек', '45 минут', 'Очно и онлайн', 'Набор круглый год'],
      featuresTitle: 'Направления',
      features: [
        { icon: 'cap', title: 'Школьная программа', text: 'Подтягиваем грамматику и лексику, разбираем то, что непонятно на уроках в школе. Занятие — 45 минут.' },
        { icon: 'award', title: 'Подготовка к ЦТ', text: 'Это не история «за месяц до экзамена»: сотни правил за четыре недели не выучить. Высоким баллам помогает спокойная система и регулярная практика без спешки и выгорания.' },
        { icon: 'star', title: 'Олимпиады', text: 'Групповые занятия по 45 минут, очно и онлайн.' },
        { icon: 'globe', title: 'IELTS', text: 'Подготовка к международному экзамену: занятие 60 минут, в группе или индивидуально.' },
      ],
      prices: [generalPrices[0], ieltsPrices, olympiadPrices],
      faq: [
        { q: 'Когда начинать готовиться к ЦТ?', a: 'Чем раньше, тем спокойнее. Лучше начинать заранее и заниматься регулярно, чем пытаться выучить всё за месяц до экзамена.' },
        { q: 'Сколько длится занятие?', a: 'Общий английский, ЦТ и олимпиады — 45 минут, IELTS — 60 минут.' },
        { q: 'Можно присоединиться к группе в середине года?', a: 'Да, набор в группы и на индивидуальные занятия идёт круглый год.' },
        { q: 'Сколько человек в группе?', a: 'От 3 до 5. Можно заниматься и индивидуально.' },
      ],
    },
    en: {
      seoTitle: 'English for Teens 11–17 and IELTS Preparation — Online | Hunny Bunny',
      description: 'English for teenagers aged 11–17: school English without stress, IELTS and olympiad preparation. Groups of 3–5 or one-to-one, online or in Gomel.',
      short: 'Teens aged 11–17',
      h1: 'English for teenagers aged 11–17',
      lead: 'School English without stress, plus IELTS and olympiad preparation. In a small group or one-to-one, online or in person.',
      facts: ['Ages 11–17', 'Groups of 3–5', '45 minutes', 'Online and in person', 'Enrolment all year round'],
      featuresTitle: 'Programmes',
      features: [
        { icon: 'cap', title: 'School English', text: 'We strengthen grammar and vocabulary and go through anything that wasn’t clear at school. Lessons last 45 minutes.' },
        { icon: 'globe', title: 'IELTS', text: 'Preparation for the international exam: 60-minute lessons, group or one-to-one.' },
        { icon: 'star', title: 'Olympiads', text: 'Group lessons of 45 minutes, online and in person.' },
        { icon: 'award', title: 'Steady progress', text: 'Good exam results come from a calm system and regular practice, not last-minute cramming.' },
      ],
      faq: [
        { q: 'How long is a lesson?', a: 'School English and olympiad classes last 45 minutes, IELTS lessons 60 minutes.' },
        { q: 'Can we join a group mid-year?', a: 'Yes, we enrol students all year round.' },
        { q: 'How many students are in a group?', a: '3 to 5. One-to-one lessons are also available.' },
      ],
    },
    pl: {
      seoTitle: 'Angielski dla młodzieży 11–17 lat i przygotowanie do IELTS | Hunny Bunny',
      description: 'Angielski dla młodzieży 11–17 lat: szkolny angielski bez stresu, przygotowanie do IELTS i olimpiad. Grupy 3–5 osób lub indywidualnie, online i stacjonarnie.',
      short: 'Młodzież 11–17 lat',
      h1: 'Angielski dla młodzieży 11–17 lat',
      lead: 'Szkolny angielski bez stresu, przygotowanie do IELTS i olimpiad. W małej grupie lub indywidualnie, online lub stacjonarnie.',
      facts: ['11–17 lat', 'Grupy 3–5 osób', '45 minut', 'Online i stacjonarnie', 'Zapisy przez cały rok'],
      featuresTitle: 'Programy',
      features: [
        { icon: 'cap', title: 'Angielski szkolny', text: 'Utrwalamy gramatykę i słownictwo, wyjaśniamy to, co było niejasne w szkole. Lekcja trwa 45 minut.' },
        { icon: 'globe', title: 'IELTS', text: 'Przygotowanie do międzynarodowego egzaminu: lekcja 60 minut, w grupie lub indywidualnie.' },
        { icon: 'star', title: 'Olimpiady', text: 'Zajęcia grupowe po 45 minut, online i stacjonarnie.' },
        { icon: 'award', title: 'Spokojny postęp', text: 'Dobre wyniki daje spokojny system i regularna praktyka, a nie nauka w ostatniej chwili.' },
      ],
      faq: [
        { q: 'Ile trwa lekcja?', a: 'Angielski szkolny i olimpiady — 45 minut, IELTS — 60 minut.' },
        { q: 'Czy można dołączyć do grupy w trakcie roku?', a: 'Tak, zapisy trwają przez cały rok.' },
        { q: 'Ile osób jest w grupie?', a: 'Od 3 do 5. Można też uczyć się indywidualnie.' },
      ],
    },
  },

  adults: {
    ru: {
      seoTitle: 'Английский для взрослых в Гомеле и онлайн | Hunny Bunny',
      description: 'Английский для взрослых: для работы, путешествий и жизни за границей. Любой уровень от Beginner до Advanced, индивидуально или в группе, разговорный клуб, IELTS.',
      short: 'Взрослые',
      h1: 'Английский для взрослых',
      lead: 'Для работы, путешествий и жизни за границей. Любой уровень — от Beginner до Advanced. Индивидуально или в маленькой группе, очно в Гомеле и онлайн.',
      facts: ['Любой уровень', 'Индивидуально и в группе', 'Очно и онлайн', 'Время по согласованию', 'Набор круглый год'],
      featuresTitle: 'Форматы',
      features: [
        { icon: 'users', title: 'Индивидуально или в группе', text: 'Индивидуально — программа строится под ваши цели. В группе от 3 до 5 человек — больше живой практики.' },
        { icon: 'chat', title: 'Разговорный клуб', text: 'Практика свободной речи в неформальной обстановке: снимаем языковой барьер.' },
        { icon: 'globe', title: 'IELTS', text: 'Подготовка к международному экзамену для учёбы, работы и переезда. Занятие — 60 минут.' },
        { icon: 'calendar', title: 'Удобное время', text: 'Частоту и время занятий согласуем с вашим графиком. Можно заниматься онлайн из любой страны.' },
      ],
      prices: [generalPrices[0], ieltsPrices],
      faq: [
        { q: 'Я давно не занимался. С чего начать?', a: 'С бесплатного пробного урока: определим уровень и подберём формат — индивидуально или в группе.' },
        { q: 'Какой уровень нужен?', a: 'Любой, от Beginner до Advanced.' },
        { q: 'Можно заниматься онлайн?', a: 'Да. У нас учатся взрослые из Беларуси, Польши, Украины, России и США.' },
      ],
    },
    en: {
      seoTitle: 'English for Adults — Online One-to-One and Group Lessons | Hunny Bunny',
      description: 'English for adults for work, travel and life abroad. Any level from Beginner to Advanced, one-to-one or in a small group, conversation club and IELTS. Online from any country.',
      short: 'Adults',
      h1: 'English for adults',
      lead: 'For work, travel and life abroad. Any level, from Beginner to Advanced. One-to-one or in a small group, online or in person.',
      facts: ['Any level', 'One-to-one and groups', 'Online and in person', 'Flexible schedule', 'Enrolment all year round'],
      featuresTitle: 'Formats',
      features: [
        { icon: 'users', title: 'One-to-one or group', text: 'One-to-one lessons follow your goals. Groups of 3 to 5 give you more real practice.' },
        { icon: 'chat', title: 'Conversation club', text: 'Relaxed speaking practice to overcome the language barrier.' },
        { icon: 'globe', title: 'IELTS', text: 'Exam preparation for study, work or moving abroad. Lessons last 60 minutes.' },
        { icon: 'calendar', title: 'Your schedule', text: 'We agree on times and frequency that fit your week. Study online from any country.' },
      ],
      faq: [
        { q: 'I haven’t studied for years. Where do I start?', a: 'With a free trial lesson: we’ll check your level and suggest one-to-one or group lessons.' },
        { q: 'What level do I need?', a: 'Any — from Beginner to Advanced.' },
        { q: 'Can I study online?', a: 'Yes. Our adult students live in Belarus, Poland, Ukraine, Russia and the USA.' },
      ],
    },
    pl: {
      seoTitle: 'Angielski dla dorosłych — online, indywidualnie i w grupie | Hunny Bunny',
      description: 'Angielski dla dorosłych do pracy, podróży i życia za granicą. Każdy poziom od Beginner do Advanced, indywidualnie lub w małej grupie, klub konwersacyjny i IELTS.',
      short: 'Dorośli',
      h1: 'Angielski dla dorosłych',
      lead: 'Do pracy, podróży i życia za granicą. Każdy poziom — od Beginner do Advanced. Indywidualnie lub w małej grupie, online lub stacjonarnie.',
      facts: ['Każdy poziom', 'Indywidualnie i w grupie', 'Online i stacjonarnie', 'Elastyczny grafik', 'Zapisy przez cały rok'],
      featuresTitle: 'Formy zajęć',
      features: [
        { icon: 'users', title: 'Indywidualnie lub w grupie', text: 'Zajęcia indywidualne dopasowane do Twoich celów. Grupy 3–5 osób to więcej praktyki mówienia.' },
        { icon: 'chat', title: 'Klub konwersacyjny', text: 'Swobodna rozmowa po angielsku, która pomaga przełamać barierę językową.' },
        { icon: 'globe', title: 'IELTS', text: 'Przygotowanie do egzaminu na studia, do pracy lub przed wyjazdem. Lekcja trwa 60 minut.' },
        { icon: 'calendar', title: 'Twój grafik', text: 'Godziny i częstotliwość ustalamy razem. Możesz uczyć się online z dowolnego kraju.' },
      ],
      faq: [
        { q: 'Dawno się nie uczyłem/uczyłam. Od czego zacząć?', a: 'Od bezpłatnej lekcji próbnej: sprawdzimy poziom i zaproponujemy zajęcia indywidualne lub w grupie.' },
        { q: 'Jaki poziom jest potrzebny?', a: 'Dowolny — od Beginner do Advanced.' },
        { q: 'Czy można uczyć się online?', a: 'Tak. Uczą się u nas dorośli z Białorusi, Polski, Ukrainy, Rosji i USA.' },
      ],
    },
  },

  online: {
    ru: {
      seoTitle: 'Английский онлайн для детей и взрослых | Hunny Bunny English',
      description: 'Онлайн-занятия английским для детей от 3 лет, школьников и взрослых из любой страны. Те же преподаватели и программы, что и очно. Группы 3–5 человек или индивидуально.',
      short: 'Онлайн',
      h1: 'Английский онлайн для детей и взрослых',
      lead: 'Занимайтесь из любой страны: у нас учатся ребята и взрослые из Беларуси, Польши, Украины, России и США. Те же преподаватели и программы, что и в классе в Гомеле.',
      facts: ['Из любой страны', 'Дети, школьники, взрослые', 'Группы 3–5 или индивидуально', 'Дешевле очных', 'Набор круглый год'],
      featuresTitle: 'Что можно изучать онлайн',
      features: [
        { icon: 'heart', title: 'Дети 3–10 лет', text: 'Игры, песни и разговорная речь — в маленькой группе или индивидуально.' },
        { icon: 'cap', title: 'Школьники', text: 'Школьная программа, подготовка к ЦТ и олимпиадам.' },
        { icon: 'chat', title: 'Взрослые', text: 'Английский для работы и путешествий, разговорная практика.' },
        { icon: 'globe', title: 'IELTS', text: 'Подготовка к международному экзамену, в группе или индивидуально.' },
      ],
      prices: [
        {
          title: 'Онлайн-занятия',
          rows: [
            { label: 'Общий английский и ЦТ, в группе', once: '35 BYN', pass: '33 BYN' },
            { label: 'Общий английский и ЦТ, индивидуально', once: '50 BYN', pass: '48 BYN' },
            { label: 'IELTS, в группе', once: '70 BYN', pass: '65 BYN' },
            { label: 'IELTS, индивидуально', once: '90 BYN', pass: '85 BYN' },
            { label: 'Олимпиады, в группе', once: '25 BYN' },
          ],
        },
      ],
      faq: [
        { q: 'Из каких стран можно заниматься?', a: 'Из любой. У нас учатся ребята и взрослые из Беларуси, Польши, Украины, России и США.' },
        { q: 'Онлайн-занятия отличаются от очных?', a: 'Преподаватели и программы те же. Онлайн-занятия стоят дешевле очных.' },
        { q: 'Как выбрать время?', a: 'Время и частоту занятий согласуем при записи.' },
      ],
    },
    en: {
      seoTitle: 'Online English Lessons for Kids and Adults | Hunny Bunny English',
      description: 'Online English lessons for children from age 3, teenagers and adults from any country. Experienced teachers, TESOL certificates and training in Malta. Groups of 3–5 or one-to-one. Free trial lesson.',
      short: 'Online',
      h1: 'Online English lessons for kids and adults',
      lead: 'Study from any country: our students live in Belarus, Poland, Ukraine, Russia and the USA. The same teachers and programmes as in our Gomel classroom.',
      facts: ['From any country', 'Kids, teens, adults', 'Groups of 3–5 or one-to-one', 'Experienced teachers', 'Enrolment all year round'],
      featuresTitle: 'What you can study online',
      features: [
        { icon: 'heart', title: 'Kids aged 3–10', text: 'Games, songs and speaking — in a small group or one-to-one.' },
        { icon: 'cap', title: 'Teenagers', text: 'School English and olympiad preparation.' },
        { icon: 'chat', title: 'Adults', text: 'English for work and travel, speaking practice.' },
        { icon: 'globe', title: 'IELTS', text: 'International exam preparation, group or one-to-one.' },
      ],
      faq: [
        { q: 'Which countries can I study from?', a: 'Any. Our students live in Belarus, Poland, Ukraine, Russia and the USA.' },
        { q: 'Are online lessons different from in-person ones?', a: 'The teachers and programmes are the same.' },
        { q: 'How do we choose the time?', a: 'We agree on the schedule and frequency when you book.' },
      ],
    },
    pl: {
      seoTitle: 'Angielski online dla dzieci i dorosłych | Hunny Bunny English',
      description: 'Lekcje angielskiego online dla dzieci od 3 lat, młodzieży i dorosłych z dowolnego kraju. Doświadczeni lektorzy, certyfikaty TESOL i szkolenie na Malcie. Grupy 3–5 osób lub indywidualnie.',
      short: 'Online',
      h1: 'Angielski online dla dzieci i dorosłych',
      lead: 'Ucz się z dowolnego kraju: uczą się u nas dzieci i dorośli z Białorusi, Polski, Ukrainy, Rosji i USA. Ci sami lektorzy i programy co w naszej sali w Homlu.',
      facts: ['Z dowolnego kraju', 'Dzieci, młodzież, dorośli', 'Grupy 3–5 lub indywidualnie', 'Doświadczeni lektorzy', 'Zapisy przez cały rok'],
      featuresTitle: 'Czego można uczyć się online',
      features: [
        { icon: 'heart', title: 'Dzieci 3–10 lat', text: 'Zabawy, piosenki i mówienie — w małej grupie lub indywidualnie.' },
        { icon: 'cap', title: 'Młodzież', text: 'Angielski szkolny i przygotowanie do olimpiad.' },
        { icon: 'chat', title: 'Dorośli', text: 'Angielski do pracy i podróży, praktyka mówienia.' },
        { icon: 'globe', title: 'IELTS', text: 'Przygotowanie do egzaminu, w grupie lub indywidualnie.' },
      ],
      faq: [
        { q: 'Z jakich krajów można się uczyć?', a: 'Z dowolnego. Uczą się u nas osoby z Białorusi, Polski, Ukrainy, Rosji i USA.' },
        { q: 'Czy lekcje online różnią się od stacjonarnych?', a: 'Lektorzy i programy są te same.' },
        { q: 'Jak ustalić termin?', a: 'Godziny i częstotliwość zajęć ustalamy przy zapisie.' },
      ],
    },
  },

  clubs: {
    ru: {
      seoTitle: 'Клубы и мастер-классы на английском в Гомеле | Hunny Bunny',
      description: 'Киноклуб, летний клуб, каникулы на английском, разговорный клуб и мастер-классы в Гомеле. Английский в живом общении для детей и взрослых.',
      short: 'Клубы и мастер-классы',
      h1: 'Клубы и мастер-классы на английском',
      lead: 'Больше, чем просто уроки: английский в живом общении. Кино, творчество, праздники и каникулы в уютном пространстве в центре Гомеля.',
      facts: ['Киноклуб', 'Летний клуб', 'Каникулы на английском', 'Разговорный клуб', 'Мастер-классы'],
      featuresTitle: 'Что у нас бывает',
      features: [
        { icon: 'monitor', title: 'Киноклуб', text: 'Смотрим и обсуждаем фильмы на английском. Встреча — 90 минут.' },
        { icon: 'calendar', title: 'Летний клуб и каникулы на английском', text: 'Летом — с 10:00 до 14:00: игры, творчество и английский. Родители пишут, что дети в восторге.' },
        { icon: 'star', title: 'Мастер-классы и праздники', text: 'Творческие мастер-классы и тематические праздники, например новогодний, в англоязычной среде.' },
        { icon: 'chat', title: 'Разговорный клуб', text: 'Свободная практика речи для тех, кто хочет заговорить увереннее.' },
      ],
      prices: [clubPrices],
      faq: [
        { q: 'Как узнать расписание клубов и мастер-классов?', a: 'Анонсы публикуем в Instagram @hunny_bunny_english. Можно написать нам в мессенджер — подскажем ближайшие даты.' },
        { q: 'Можно ли арендовать пространство для праздника?', a: 'Да, студию можно арендовать для мастер-классов, дней рождения и встреч. Условия — в директ Instagram.' },
      ],
    },
    en: {
      seoTitle: 'English Clubs and Workshops in Gomel | Hunny Bunny',
      description: 'Movie club, summer club, holidays in English, conversation club and creative workshops in Gomel. English through real communication.',
      short: 'Clubs and workshops',
      h1: 'English clubs and workshops',
      lead: 'More than just lessons: English through real communication — films, crafts, parties and holiday clubs in our cosy space in central Gomel.',
      facts: ['Movie club', 'Summer club', 'Holidays in English', 'Conversation club', 'Workshops'],
      featuresTitle: 'What we run',
      features: [
        { icon: 'monitor', title: 'Movie club', text: 'We watch and discuss films in English. Each session lasts 90 minutes.' },
        { icon: 'calendar', title: 'Summer club and holiday club', text: 'In summer, from 10:00 to 14:00: games, crafts and English. Parents tell us the kids love it.' },
        { icon: 'star', title: 'Workshops and parties', text: 'Creative workshops and themed parties, like our New Year party, in an English-speaking setting.' },
        { icon: 'chat', title: 'Conversation club', text: 'Relaxed speaking practice for anyone who wants to speak more confidently.' },
      ],
      faq: [
        { q: 'Where can I find the schedule?', a: 'We announce events on Instagram @hunny_bunny_english, or message us and we’ll tell you the next dates.' },
      ],
    },
    pl: {
      seoTitle: 'Kluby i warsztaty po angielsku w Homlu | Hunny Bunny',
      description: 'Klub filmowy, klub letni, ferie z angielskim, klub konwersacyjny i warsztaty twórcze. Angielski w żywej rozmowie.',
      short: 'Kluby i warsztaty',
      h1: 'Kluby i warsztaty po angielsku',
      lead: 'Więcej niż lekcje: angielski w żywej rozmowie — filmy, prace twórcze, imprezy i ferie w przytulnej sali w centrum Homla.',
      facts: ['Klub filmowy', 'Klub letni', 'Ferie z angielskim', 'Klub konwersacyjny', 'Warsztaty'],
      featuresTitle: 'Co organizujemy',
      features: [
        { icon: 'monitor', title: 'Klub filmowy', text: 'Oglądamy i omawiamy filmy po angielsku. Spotkanie trwa 90 minut.' },
        { icon: 'calendar', title: 'Klub letni i ferie', text: 'Latem w godz. 10:00–14:00: zabawy, prace twórcze i angielski. Rodzice piszą, że dzieci są zachwycone.' },
        { icon: 'star', title: 'Warsztaty i imprezy', text: 'Warsztaty twórcze i imprezy tematyczne, np. noworoczna, w anglojęzycznym otoczeniu.' },
        { icon: 'chat', title: 'Klub konwersacyjny', text: 'Swobodna praktyka mówienia dla tych, którzy chcą mówić pewniej.' },
      ],
      faq: [
        { q: 'Gdzie sprawdzić terminy?', a: 'Ogłaszamy je na Instagramie @hunny_bunny_english. Możesz też napisać do nas — podamy najbliższe daty.' },
      ],
    },
  },
};

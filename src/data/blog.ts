// Блог: статьи для родителей и взрослых учеников.
// Пишем без выдуманных цифр и исследований — опыт школы и общие проверенные принципы.
// Статья про ЦТ есть только на русском: это белорусский экзамен.
import type { Lang } from './business';
import type { CourseId } from './courses';

export const blogPath: Record<Lang, string> = { ru: '/blog/', en: '/en/blog/', pl: '/pl/blog/' };

type Block = { h?: string; p?: string[]; list?: string[]; tip?: string };
export type Post = {
  title: string;
  seoTitle: string;
  description: string;
  lead: string;
  readTime: string;
  body: Block[];
};

export type PostId = 'age' | 'ct' | 'group' | 'choose' | 'holidays' | 'adults';
export const postIds: PostId[] = ['choose', 'adults', 'holidays', 'age', 'group', 'ct'];

export const postMeta: Record<PostId, { date: string; course: CourseId; emoji: string; tone: 'pink' | 'lilac' | 'peach' }> = {
  age: { date: '2026-10-20', course: 'kids', emoji: '🧸', tone: 'pink' },
  group: { date: '2026-10-20', course: 'adults', emoji: '👥', tone: 'lilac' },
  ct: { date: '2026-10-20', course: 'ct', emoji: '🎯', tone: 'peach' },
  choose: { date: '2026-10-28', course: 'kids', emoji: '🔍', tone: 'lilac' },
  holidays: { date: '2026-10-28', course: 'clubs', emoji: '☀️', tone: 'peach' },
  adults: { date: '2026-10-28', course: 'adults', emoji: '☕', tone: 'pink' },
};

export const postPath: Record<PostId, Partial<Record<Lang, string>>> = {
  age: { ru: '/blog/s-kakogo-vozrasta-uchit-angliyskiy/', en: '/en/blog/best-age-to-start-english/', pl: '/pl/blog/od-jakiego-wieku-angielski/' },
  group: { ru: '/blog/gruppa-ili-individualno/', en: '/en/blog/group-or-one-to-one/', pl: '/pl/blog/grupa-czy-indywidualnie/' },
  ct: { ru: '/blog/kak-podgotovitsya-k-ct-po-angliyskomu/' },
  choose: { ru: '/blog/kak-vybrat-kursy-angliyskogo-dlya-rebenka-gomel/', en: '/en/blog/how-to-choose-english-lessons-for-your-child/', pl: '/pl/blog/jak-wybrac-szkole-angielskiego-dla-dziecka/' },
  holidays: { ru: '/blog/kanikuly-na-angliyskom-gomel/', en: '/en/blog/english-over-the-holidays-summer-club/', pl: '/pl/blog/angielski-w-wakacje-klub-letni/' },
  adults: { ru: '/blog/angliyskiy-dlya-vzroslyh-gomel/', en: '/en/blog/english-for-adults-after-a-break/', pl: '/pl/blog/angielski-dla-doroslych-po-przerwie/' },
};

export const blogUi: Record<
  Lang,
  { title: string; seoTitle: string; description: string; lead: string; home: string; read: string; courseCta: string; trial: string; trialText: string; more: string; published: string }
> = {
  ru: {
    title: 'Блог',
    seoTitle: 'Блог об английском для детей и взрослых | Hunny Bunny English',
    description: 'Советы родителям и взрослым ученикам в Гомеле: как выбрать курсы английского для ребёнка, с какого возраста начинать, как готовиться к ЦТ, каникулы на английском и английский для взрослых.',
    lead: 'Отвечаем на вопросы, которые чаще всего задают родители и взрослые ученики.',
    home: 'Главная',
    read: 'Читать',
    courseCta: 'Подробнее о курсе',
    trial: 'Попробуйте бесплатно',
    trialText: 'Первое занятие — 20 минут, бесплатно. Познакомимся, определим уровень и подберём формат.',
    more: 'Другие статьи',
    published: 'Опубликовано',
  },
  en: {
    title: 'Blog',
    seoTitle: 'Blog about learning English | Hunny Bunny English',
    description: 'Tips for parents and adult learners: the best age to start English and how to choose between group and one-to-one lessons.',
    lead: 'Answers to the questions parents and adult learners ask us most often.',
    home: 'Home',
    read: 'Read',
    courseCta: 'About the course',
    trial: 'Try a free lesson',
    trialText: 'The first lesson is free and takes 20 minutes. We’ll get to know each other, check the level and choose the format.',
    more: 'More articles',
    published: 'Published',
  },
  pl: {
    title: 'Blog',
    seoTitle: 'Blog o nauce angielskiego | Hunny Bunny English',
    description: 'Porady dla rodziców i dorosłych: od jakiego wieku uczyć dziecko angielskiego oraz czy wybrać grupę, czy zajęcia indywidualne.',
    lead: 'Odpowiadamy na pytania, które najczęściej zadają rodzice i dorośli uczniowie.',
    home: 'Strona główna',
    read: 'Czytaj',
    courseCta: 'Więcej o kursie',
    trial: 'Bezpłatna lekcja próbna',
    trialText: 'Pierwsza lekcja trwa 20 minut i jest bezpłatna. Poznamy się, sprawdzimy poziom i dobierzemy formę zajęć.',
    more: 'Inne artykuły',
    published: 'Opublikowano',
  },
};

export const posts: Record<PostId, Partial<Record<Lang, Post>>> = {
  age: {
    ru: {
      title: 'С какого возраста начинать учить английский',
      seoTitle: 'С какого возраста учить ребёнка английскому — советы родителям | Hunny Bunny',
      description: 'Когда начинать английский с ребёнком, как понять, что он готов, и чем занятия для малышей отличаются от школьных уроков. Советы преподавателей Hunny Bunny.',
      lead: 'Этот вопрос родители задают нам чаще всего. Короткий ответ: начать можно с трёх лет, но важнее не возраст, а то, как построены занятия.',
      readTime: '4 минуты',
      body: [
        {
          h: 'Почему мы берём детей с 3 лет',
          p: [
            'В три года ребёнок уже может заниматься в небольшой группе без мамы рядом, переключаться между играми и повторять за преподавателем. Именно с этого возраста мы и набираем малышей.',
            'Раньше трёх лет тоже можно знакомить ребёнка с английским — дома, через песенки и мультфильмы. Но полноценное занятие в группе в таком возрасте обычно даётся тяжело: внимание держится совсем недолго.',
          ],
        },
        {
          h: 'Как понять, что ребёнок готов',
          list: [
            'может какое-то время побыть без родителей в новом месте;',
            'с интересом повторяет слова и движения за взрослым;',
            'любит песенки, игры и мультфильмы;',
            'в целом спокойно чувствует себя среди других детей.',
          ],
          p: ['Если что-то из этого пока не получается — ничего страшного. Пробный урок как раз и нужен, чтобы посмотреть, как ребёнку в группе.'],
        },
        {
          h: 'Чем английский для малышей отличается от школьного',
          p: [
            'Маленьких детей не учат правилам. Они запоминают язык через игру, движение и повторение — так же, как родной. Поэтому наше занятие для детей — это смена коротких активностей: песенка, игра, поделка, мультфильм, снова игра.',
            'Занятие длится 45 минут, а в группе от 3 до 5 детей. В маленькой группе каждый ребёнок успевает поговорить и получить внимание преподавателя.',
          ],
          tip: 'Дома помогайте без нагрузки: включайте английские песенки и мультфильмы, повторяйте с ребёнком слова, которые он принёс с занятия. Наш зайчик поёт песенки на YouTube — их удобно смотреть вместе.',
        },
        {
          h: 'А если ребёнку уже 7–10 лет?',
          p: [
            'Начинать никогда не поздно. Школьникам младших классов по-прежнему подходят игры, но в занятия постепенно добавляются чтение, письмо и простая грамматика. Группы мы подбираем по возрасту и уровню, поэтому ребёнок не окажется среди тех, кто знает намного больше.',
          ],
        },
        {
          h: 'С чего начать',
          p: [
            'Приходите на бесплатный пробный урок: он длится 20 минут. Преподаватель познакомится с ребёнком в игре, посмотрит, что ему интересно, и подберёт группу. Набор идёт круглый год, поэтому ждать сентября не нужно.',
          ],
        },
      ],
    },
    en: {
      title: 'What is the best age to start learning English?',
      seoTitle: 'What Age Should My Child Start Learning English? | Hunny Bunny',
      description: 'When to start English with your child, how to tell they are ready, and how lessons for little ones differ from school lessons. Advice from Hunny Bunny teachers.',
      lead: 'This is the question parents ask us most. The short answer: you can start at three — but how the lessons are built matters more than age.',
      readTime: '4 min',
      body: [
        {
          h: 'Why we start at age 3',
          p: [
            'At three, most children can stay in a small group without a parent, switch between games and repeat after the teacher. That is the age from which we welcome little ones.',
            'You can introduce English even earlier at home, through songs and cartoons. But a full group lesson is usually hard at that age: attention spans are still very short.',
          ],
        },
        {
          h: 'How to tell your child is ready',
          list: [
            'they can spend some time without you in a new place;',
            'they enjoy repeating words and movements after an adult;',
            'they love songs, games and cartoons;',
            'they feel generally comfortable around other children.',
          ],
          p: ['If something on this list isn’t there yet, that’s fine. A trial lesson is exactly the way to see how your child feels in a group.'],
        },
        {
          h: 'How English for little ones differs from school',
          p: [
            'Young children don’t learn rules. They pick up the language through play, movement and repetition — the same way they learned their first language. So our kids’ lessons are a series of short activities: a song, a game, a craft, a cartoon, another game.',
            'Lessons last 45 minutes, and groups have 3 to 5 children, so every child gets to speak and gets the teacher’s attention.',
          ],
          tip: 'Support at home without pressure: play English songs and cartoons, and repeat the words your child brings home. Our bunny sings songs on YouTube — they are great to watch together.',
        },
        {
          h: 'What if my child is already 7–10?',
          p: [
            'It’s never too late. Younger school children still learn best through games, but reading, writing and simple grammar are gradually added. We group children by age and level, so your child won’t end up with kids who know much more.',
          ],
        },
        {
          h: 'How to start',
          p: [
            'Book a free 20-minute trial lesson. The teacher will get to know your child through play, see what they enjoy and suggest a group. We enrol all year round, online from any country.',
          ],
        },
      ],
    },
    pl: {
      title: 'Od jakiego wieku zacząć naukę angielskiego?',
      seoTitle: 'Od jakiego wieku uczyć dziecko angielskiego? Porady | Hunny Bunny',
      description: 'Kiedy zacząć angielski z dzieckiem, jak poznać, że jest gotowe, i czym zajęcia dla maluchów różnią się od szkolnych. Porady lektorów Hunny Bunny.',
      lead: 'To pytanie rodzice zadają nam najczęściej. Krótka odpowiedź: można zacząć w wieku trzech lat — ale ważniejszy od wieku jest sposób prowadzenia zajęć.',
      readTime: '4 min',
      body: [
        {
          h: 'Dlaczego przyjmujemy dzieci od 3 lat',
          p: [
            'Trzylatek zwykle potrafi już zostać w małej grupie bez rodzica, przechodzić od zabawy do zabawy i powtarzać za lektorem. Właśnie od tego wieku przyjmujemy maluchy.',
            'Wcześniej też można oswajać dziecko z angielskim — w domu, przez piosenki i bajki. Ale pełne zajęcia w grupie w tym wieku są zwykle trudne: uwaga utrzymuje się bardzo krótko.',
          ],
        },
        {
          h: 'Jak poznać, że dziecko jest gotowe',
          list: [
            'potrafi przez chwilę zostać bez rodziców w nowym miejscu;',
            'chętnie powtarza słowa i ruchy za dorosłym;',
            'lubi piosenki, zabawy i bajki;',
            'dobrze czuje się wśród innych dzieci.',
          ],
          p: ['Jeśli czegoś z tej listy jeszcze nie ma — nic nie szkodzi. Lekcja próbna pozwala sprawdzić, jak dziecko czuje się w grupie.'],
        },
        {
          h: 'Czym angielski dla maluchów różni się od szkolnego',
          p: [
            'Małych dzieci nie uczymy reguł. Przyswajają język przez zabawę, ruch i powtarzanie — tak jak język ojczysty. Dlatego nasze zajęcia to seria krótkich aktywności: piosenka, zabawa, praca plastyczna, bajka i znowu zabawa.',
            'Lekcja trwa 45 minut, a w grupie jest od 3 do 5 dzieci, więc każde ma okazję mówić i dostaje uwagę lektora.',
          ],
          tip: 'W domu wspieraj bez presji: włączaj angielskie piosenki i bajki, powtarzaj z dzieckiem słowa z zajęć. Nasz zajączek śpiewa piosenki na YouTube — świetnie ogląda się je razem.',
        },
        {
          h: 'A jeśli dziecko ma już 7–10 lat?',
          p: [
            'Nigdy nie jest za późno. Młodsi uczniowie nadal najlepiej uczą się przez zabawę, ale stopniowo dochodzi czytanie, pisanie i prosta gramatyka. Grupy dobieramy według wieku i poziomu.',
          ],
        },
        {
          h: 'Jak zacząć',
          p: [
            'Zapisz się na bezpłatną 20-minutową lekcję próbną. Lektor pozna dziecko przez zabawę i zaproponuje grupę. Zapisy trwają przez cały rok, a zajęcia online są dostępne z dowolnego kraju.',
          ],
        },
      ],
    },
  },

  group: {
    ru: {
      title: 'Группа или индивидуальные занятия: что выбрать',
      seoTitle: 'Английский в группе или индивидуально: что выбрать | Hunny Bunny',
      description: 'Чем отличаются групповые и индивидуальные занятия английским, кому что подходит и сколько это стоит в Hunny Bunny. Помогаем выбрать формат ребёнку и взрослому.',
      lead: 'Оба формата работают — вопрос в том, что нужно именно вам или вашему ребёнку. Разберём, чем они отличаются.',
      readTime: '4 минуты',
      body: [
        {
          h: 'Чем хороша группа',
          list: [
            'живое общение: с другими учениками приходится говорить, а не только отвечать преподавателю;',
            'игры и командные задания — особенно важно для детей;',
            'мотивация: рядом те, кто учится вместе с тобой;',
            'стоимость занятия ниже, чем у индивидуального.',
          ],
          p: [
            'У нас в группе от 3 до 5 человек. Это достаточно, чтобы было с кем поиграть и поговорить, и достаточно мало, чтобы преподаватель слышал каждого.',
          ],
        },
        {
          h: 'Чем хороши индивидуальные занятия',
          list: [
            'программа полностью под ваши цели и темп;',
            'всё внимание преподавателя — только вам;',
            'удобно, если нужна конкретная цель: экзамен, переезд, работа;',
            'легче подобрать время.',
          ],
        },
        {
          h: 'Что выбрать ребёнку',
          p: [
            'Маленьким детям обычно больше подходит группа: язык для них — это игра, а играть интереснее вместе. Индивидуально имеет смысл заниматься, если ребёнку нужно догнать программу, подготовиться к экзамену или олимпиаде, или если ему пока сложно в коллективе.',
          ],
        },
        {
          h: 'Что выбрать взрослому',
          p: [
            'Если хочется заговорить и снять языковой барьер — группа и разговорный клуб. Если есть чёткая цель и срок, например IELTS или собеседование, — индивидуальные занятия. Многие совмещают: основной курс индивидуально, а практика речи — в клубе.',
          ],
          tip: 'Не обязательно выбирать навсегда. Формат можно поменять, если поймёте, что вам больше подходит другой.',
        },
        {
          h: 'Сколько это стоит',
          p: [
            'Общий английский и подготовка к ЦТ: в группе очно — 40 BYN за занятие (38 BYN по абонементу), индивидуально очно — 55 BYN (53 BYN). Онлайн дешевле: 35 (33) и 50 (48) BYN. Полный прайс — на страницах курсов.',
          ],
        },
        {
          h: 'Не уверены?',
          p: ['Приходите на бесплатный пробный урок. За 20 минут преподаватель определит уровень и честно подскажет, какой формат даст результат быстрее.'],
        },
      ],
    },
    en: {
      title: 'Group or one-to-one lessons: which to choose?',
      seoTitle: 'Group or One-to-One English Lessons: Which Is Better? | Hunny Bunny',
      description: 'The difference between group and one-to-one English lessons, who each format suits, and how to choose for your child or yourself.',
      lead: 'Both formats work — the question is what you or your child need. Here is how they differ.',
      readTime: '4 min',
      body: [
        {
          h: 'Why learn in a group',
          list: [
            'real communication: you talk to other students, not just answer the teacher;',
            'games and team tasks — especially important for children;',
            'motivation from learning together;',
            'lower cost per lesson than one-to-one.',
          ],
          p: ['Our groups have 3 to 5 students: enough to play and talk together, and small enough for the teacher to hear everyone.'],
        },
        {
          h: 'Why learn one-to-one',
          list: [
            'the programme follows your goals and pace;',
            'all of the teacher’s attention is on you;',
            'ideal for a specific goal: an exam, moving abroad, a job;',
            'easier to fit into your schedule.',
          ],
        },
        {
          h: 'What suits a child',
          p: [
            'Little ones usually do better in a group: for them language is play, and playing is more fun together. One-to-one lessons make sense if a child needs to catch up, prepare for an exam or olympiad, or doesn’t feel comfortable in a group yet.',
          ],
        },
        {
          h: 'What suits an adult',
          p: [
            'If you want to start speaking and overcome the language barrier, try a group and the conversation club. If you have a clear goal and deadline, such as IELTS or a job interview, choose one-to-one. Many students combine both.',
          ],
          tip: 'You don’t have to choose forever. You can switch formats if you find the other one suits you better.',
        },
        {
          h: 'Not sure?',
          p: ['Book a free trial lesson. In 20 minutes the teacher will check your level and honestly suggest the format that will work best. Ask us about prices — we’ll send the current list.'],
        },
      ],
    },
    pl: {
      title: 'Grupa czy zajęcia indywidualne — co wybrać?',
      seoTitle: 'Angielski w grupie czy indywidualnie? Co wybrać | Hunny Bunny',
      description: 'Czym różnią się zajęcia grupowe i indywidualne z angielskiego, komu co pasuje i jak wybrać formę dla dziecka lub dla siebie.',
      lead: 'Obie formy działają — pytanie, czego potrzebujesz Ty lub Twoje dziecko. Oto najważniejsze różnice.',
      readTime: '4 min',
      body: [
        {
          h: 'Zalety grupy',
          list: [
            'żywa rozmowa: mówisz z innymi uczniami, a nie tylko odpowiadasz lektorowi;',
            'gry i zadania zespołowe — szczególnie ważne dla dzieci;',
            'motywacja dzięki wspólnej nauce;',
            'niższa cena lekcji niż przy zajęciach indywidualnych.',
          ],
          p: ['Nasze grupy liczą od 3 do 5 osób: wystarczająco, by wspólnie grać i rozmawiać, i na tyle mało, by lektor słyszał każdego.'],
        },
        {
          h: 'Zalety zajęć indywidualnych',
          list: [
            'program dopasowany do Twoich celów i tempa;',
            'cała uwaga lektora skupiona na Tobie;',
            'idealne przy konkretnym celu: egzamin, wyjazd, praca;',
            'łatwiej dopasować termin.',
          ],
        },
        {
          h: 'Co wybrać dla dziecka',
          p: [
            'Maluchom zwykle lepiej służy grupa: język to dla nich zabawa, a razem bawić się ciekawiej. Zajęcia indywidualne mają sens, gdy dziecko musi nadrobić materiał, przygotować się do egzaminu lub olimpiady albo jeszcze nie czuje się dobrze w grupie.',
          ],
        },
        {
          h: 'Co wybrać dla dorosłego',
          p: [
            'Jeśli chcesz zacząć mówić i przełamać barierę — grupa i klub konwersacyjny. Jeśli masz konkretny cel i termin, np. IELTS lub rozmowę o pracę — zajęcia indywidualne. Wiele osób łączy obie formy.',
          ],
          tip: 'Nie musisz wybierać na zawsze. Formę zajęć można zmienić, jeśli okaże się, że inna pasuje lepiej.',
        },
        {
          h: 'Nie masz pewności?',
          p: ['Zapisz się na bezpłatną lekcję próbną. W 20 minut lektor sprawdzi poziom i szczerze doradzi formę, która da najszybszy efekt. O cenę zapytaj nas — prześlemy aktualny cennik.'],
        },
      ],
    },
  },

  ct: {
    ru: {
      title: 'Как подготовиться к ЦТ по английскому за год',
      seoTitle: 'Как подготовиться к ЦТ по английскому за год — план | Hunny Bunny',
      description: 'План подготовки к централизованному тестированию по английскому за учебный год: диагностика, система, практика тестов и чего не делать. Советы преподавателей Hunny Bunny в Гомеле.',
      lead: 'ЦТ — не та история, где можно всё выучить за месяц. Сотни правил за четыре недели не запомнить. Высоким баллам помогают спокойная система и регулярная практика без спешки и выгорания.',
      readTime: '5 минут',
      body: [
        {
          h: 'Шаг 1. Узнайте свой реальный уровень',
          p: [
            'Начните с диагностики: что уже уверенно, а где пробелы — времена, артикли, предлоги, словообразование, лексика. Без этого легко потратить месяцы на то, что и так получается, и не дойти до слабых мест.',
            'Актуальную структуру теста, демонстрационные варианты и сроки регистрации смотрите на официальном сайте РИКЗ (rikc.by) — требования могут меняться от года к году.',
          ],
        },
        {
          h: 'Шаг 2. Разделите год на этапы',
          list: [
            'осень — повторение и закрытие пробелов в грамматике;',
            'зима — лексика по темам и словообразование, первые тесты без ограничения времени;',
            'весна — регулярные тесты на время и разбор каждой ошибки;',
            'последний месяц — повторение и спокойный режим, без попыток выучить новое.',
          ],
        },
        {
          h: 'Шаг 3. Занимайтесь регулярно, а не много',
          p: [
            'Два занятия в неделю весь год дают больше, чем ежедневные марафоны в мае. Регулярность важна потому, что грамматика и слова закрепляются только с повторением.',
            'Между занятиями — короткие домашние задания и слова по 10–15 минут в день. Этого достаточно, если не бросать.',
          ],
        },
        {
          h: 'Шаг 4. Тренируйтесь на тестах и разбирайте ошибки',
          p: [
            'Пробные тесты нужны не ради балла, а ради разбора. Каждую ошибку стоит понять: почему выбран неправильный вариант, какое правило за этим стоит. Повторяющиеся ошибки — это ваш список тем на ближайшие недели.',
          ],
          tip: 'Ведите тетрадь ошибок: правило, пример, свой неверный ответ. Перед ЦТ именно её полезнее всего перечитать.',
        },
        {
          h: 'Чего не делать',
          list: [
            'не откладывать подготовку на весну;',
            'не учить списки слов без контекста;',
            'не решать тесты подряд без разбора ошибок;',
            'не заниматься до выгорания в последние недели.',
          ],
        },
        {
          h: 'Как мы готовим к ЦТ',
          p: [
            'В Hunny Bunny к ЦТ готовят в группах от 3 до 5 человек или индивидуально, очно в Гомеле и онлайн. Занятие длится 45 минут. Начинаем с диагностики на бесплатном пробном уроке и строим план под ваш уровень. Набор идёт круглый год — присоединиться можно в любой момент.',
          ],
        },
      ],
    },
  },
  choose: {
    ru: {
      title: 'Как выбрать курсы английского для ребёнка в Гомеле',
      seoTitle: 'Как выбрать курсы английского для ребёнка в Гомеле — 7 вопросов школе | Hunny Bunny',
      description: 'На что смотреть, когда выбираете курсы английского для ребёнка в Гомеле: размер группы, формат занятий, преподаватели, пробный урок, оплата и пропуски. Чек-лист для родителей.',
      lead: 'Курсов английского в Гомеле много, и со стороны они похожи. Разница становится видна, только когда задаёшь школе правильные вопросы. Собрали семь таких вопросов — их стоит задать в любой школе, в том числе и нам.',
      readTime: '5 минут',
      body: [
        {
          h: '1. Сколько детей в группе?',
          p: [
            'Это, пожалуй, главный вопрос. Чем меньше группа, тем чаще ребёнок говорит сам и тем больше внимания получает от преподавателя. В большой группе тихий ребёнок может просидеть весь урок, так и не открыв рот.',
            'Уточните и другое: подбирают ли группу по возрасту и уровню. Ребёнку некомфортно, когда рядом те, кто знает намного больше, — и скучно, когда все сильно отстают.',
          ],
        },
        {
          h: '2. Как устроено занятие для этого возраста?',
          p: [
            'Малыши не могут 45 минут сидеть за партой и слушать объяснения. Для них занятие должно быть сменой коротких активностей: игра, песенка, движение, поделка, мультфильм. У школьников в урок уже добавляются чтение, письмо и грамматика.',
            'Попросите описать обычное занятие по шагам. Если ответ звучит как школьный урок для пятилетки — это повод насторожиться.',
          ],
        },
        {
          h: '3. Кто преподаватели?',
          p: [
            'Спросите, какое у преподавателей образование и есть ли у них сертификаты по методике преподавания английского — например, TESOL или TEFL. Хорошая школа спокойно расскажет об этом и покажет документы.',
            'Важно и то, что происходит, если преподаватель заболел: занятие переносится или его проводит коллега.',
          ],
        },
        {
          h: '4. Можно ли прийти на пробный урок?',
          p: [
            'Пробный урок нужен не столько школе, сколько ребёнку. Он увидит класс, познакомится с преподавателем, а вы поймёте, как ему в этой обстановке. Хорошо, если пробное занятие короткое и игровое — без экзаменов и давления.',
          ],
        },
        {
          h: '5. Как вы будете видеть результат?',
          p: [
            'Узнайте, как школа рассказывает родителям о прогрессе: даёт обратную связь после занятий, показывает, что прошли, советует, чем позаниматься дома. Результат у малышей — это не оценки, а новые слова, песенки и фразы, которые ребёнок сам приносит домой.',
          ],
        },
        {
          h: '6. Как устроены оплата и пропуски?',
          p: [
            'Дети болеют, поэтому правила пропусков стоит узнать заранее: сгорает ли занятие, можно ли его отработать, за сколько нужно предупредить. Спросите и о том, есть ли разница в цене между разовыми занятиями и абонементом.',
          ],
        },
        {
          h: '7. Удобно ли добираться и есть ли онлайн?',
          p: [
            'Самая хорошая школа не поможет, если дорога туда занимает час. Посмотрите, где находится класс, есть ли отдельный вход и как работает школа по времени. И уточните, можно ли перейти на онлайн, если ребёнок приболел или вы уехали.',
          ],
          tip: 'Запишите ответы разных школ в одну таблицу — так проще сравнить. И обязательно спросите самого ребёнка после пробного урока, понравилось ли ему.',
        },
        {
          h: 'Как это устроено в Hunny Bunny',
          list: [
            'группы от 3 до 5 детей, подбираем по возрасту и уровню; можно заниматься индивидуально;',
            'занятие — 45 минут: игры, песни, мультфильмы и творчество;',
            'у преподавателей профильное высшее образование или международные сертификаты TESOL/TEFL — их можно посмотреть на странице «Преподаватели»;',
            'бесплатный пробный урок — 20 минут;',
            'по абонементу занятие дешевле разового; пропуск по болезни не сгорает;',
            'класс в центре Гомеля на ул. Крестьянской, 33, с отдельным входом с улицы; занятия также онлайн.',
          ],
        },
      ],
    },
    en: {
      title: 'How to choose an English school for your child: 7 questions to ask',
      seoTitle: 'How to Choose English Lessons for Your Child — 7 Questions | Hunny Bunny',
      description: 'What to look for when choosing English lessons for your child: group size, lesson format, teachers, trial lesson, payment and missed lessons. A checklist for parents, online or in person.',
      lead: 'Many English schools look alike from the outside. The difference only shows when you ask the right questions. Here are seven worth asking any school — including us.',
      readTime: '5 min',
      body: [
        {
          h: '1. How many children are in a group?',
          p: [
            'This is probably the most important question. The smaller the group, the more often your child speaks and the more attention they get from the teacher. In a big group, a quiet child can sit through the whole lesson without saying a word.',
            'Also ask whether groups are formed by age and level. Children feel uncomfortable next to classmates who know much more — and bored when everyone is far behind.',
          ],
        },
        {
          h: '2. What does a lesson look like at this age?',
          p: [
            'Little ones can’t sit at a desk listening to explanations for 45 minutes. For them, a lesson should be a series of short activities: a game, a song, movement, a craft, a cartoon. For school children, reading, writing and grammar are added.',
            'Ask the school to walk you through a typical lesson step by step. If it sounds like a school lesson for a five-year-old, that’s a warning sign.',
          ],
        },
        {
          h: '3. Who are the teachers?',
          p: [
            'Ask about the teachers’ education and whether they hold certificates in English language teaching, such as TESOL or TEFL. A good school will happily tell you and show the documents.',
            'It also matters what happens if a teacher is ill: is the lesson rescheduled or taught by a colleague?',
          ],
        },
        {
          h: '4. Can we come for a trial lesson?',
          p: [
            'A trial lesson matters more to your child than to the school. They see the classroom and meet the teacher, and you see how comfortable they feel. Ideally, the trial is short and playful — no tests and no pressure.',
          ],
        },
        {
          h: '5. How will we see progress?',
          p: [
            'Find out how the school keeps parents informed: feedback after lessons, what has been covered, ideas for practising at home. For little ones, progress isn’t grades — it’s new words, songs and phrases your child brings home on their own.',
          ],
        },
        {
          h: '6. How do payment and missed lessons work?',
          p: [
            'Children get ill, so ask about the rules in advance: is a missed lesson lost, can it be made up, how much notice do you need to give? Also ask whether a pass costs less per lesson than single lessons.',
          ],
        },
        {
          h: '7. Is it easy to get there — and is there an online option?',
          p: [
            'Even the best school won’t help if getting there takes an hour. Check where the classroom is and the opening hours. And ask whether you can switch to online lessons if your child is unwell or you travel.',
          ],
          tip: 'Write down the answers from different schools in one table — it makes comparing much easier. And be sure to ask your child after the trial lesson whether they enjoyed it.',
        },
        {
          h: 'How it works at Hunny Bunny',
          list: [
            'groups of 3 to 5 children, formed by age and level; one-to-one lessons are also available;',
            'lessons last 45 minutes: games, songs, cartoons and crafts;',
            'our teachers have degrees in languages or international TESOL/TEFL certificates — see the Teachers page;',
            'a free 20-minute trial lesson;',
            'lessons on a pass cost less than single lessons; lessons missed due to illness are not lost;',
            'online from any country, in person in our classroom in central Gomel and in Warsaw.',
          ],
        },
      ],
    },
    pl: {
      title: 'Jak wybrać szkołę angielskiego dla dziecka: 7 pytań do zadania',
      seoTitle: 'Jak wybrać lekcje angielskiego dla dziecka — 7 pytań | Hunny Bunny',
      description: 'Na co zwrócić uwagę, wybierając lekcje angielskiego dla dziecka: wielkość grupy, przebieg zajęć, lektorzy, lekcja próbna, płatności i nieobecności. Lista kontrolna dla rodziców.',
      lead: 'Wiele szkół angielskiego wygląda z zewnątrz podobnie. Różnicę widać dopiero wtedy, gdy zada się właściwe pytania. Oto siedem, które warto zadać każdej szkole — także nam.',
      readTime: '5 min',
      body: [
        {
          h: '1. Ile dzieci jest w grupie?',
          p: [
            'To chyba najważniejsze pytanie. Im mniejsza grupa, tym częściej dziecko mówi samo i tym więcej uwagi dostaje od lektora. W dużej grupie nieśmiałe dziecko może przesiedzieć całą lekcję, nie odzywając się ani razu.',
            'Zapytaj też, czy grupy są dobierane według wieku i poziomu. Dziecku jest niekomfortowo obok tych, którzy wiedzą dużo więcej — i nudno, gdy wszyscy są daleko w tyle.',
          ],
        },
        {
          h: '2. Jak wyglądają zajęcia w tym wieku?',
          p: [
            'Maluchy nie wysiedzą 45 minut przy stole, słuchając wyjaśnień. Dla nich lekcja powinna być ciągiem krótkich aktywności: zabawa, piosenka, ruch, praca twórcza, bajka. U dzieci w wieku szkolnym dochodzi czytanie, pisanie i gramatyka.',
            'Poproś, by opisano zwykłą lekcję krok po kroku. Jeśli brzmi to jak szkolna lekcja dla pięciolatka, to powód do ostrożności.',
          ],
        },
        {
          h: '3. Kim są lektorzy?',
          p: [
            'Zapytaj o wykształcenie lektorów i o certyfikaty z metodyki nauczania angielskiego, np. TESOL lub TEFL. Dobra szkoła chętnie o tym opowie i pokaże dokumenty.',
            'Ważne jest też, co się dzieje, gdy lektor zachoruje: czy lekcja jest przekładana, czy prowadzi ją ktoś inny.',
          ],
        },
        {
          h: '4. Czy można przyjść na lekcję próbną?',
          p: [
            'Lekcja próbna jest potrzebna bardziej dziecku niż szkole. Zobaczy salę i pozna lektora, a Ty zobaczysz, jak się w tym miejscu czuje. Dobrze, gdy lekcja próbna jest krótka i w formie zabawy — bez testów i presji.',
          ],
        },
        {
          h: '5. Jak zobaczymy postępy?',
          p: [
            'Dowiedz się, jak szkoła informuje rodziców: informacja zwrotna po zajęciach, co zostało przerobione, pomysły na ćwiczenia w domu. U maluchów postęp to nie oceny, tylko nowe słowa, piosenki i zwroty, które dziecko samo przynosi do domu.',
          ],
        },
        {
          h: '6. Jak wyglądają płatności i nieobecności?',
          p: [
            'Dzieci chorują, więc zasady nieobecności warto poznać z góry: czy lekcja przepada, czy można ją odrobić, z jakim wyprzedzeniem trzeba uprzedzić. Zapytaj też, czy lekcja w karnecie jest tańsza niż pojedyncza.',
          ],
        },
        {
          h: '7. Czy łatwo dojechać i czy jest opcja online?',
          p: [
            'Nawet najlepsza szkoła nie pomoże, jeśli dojazd zajmuje godzinę. Sprawdź, gdzie odbywają się zajęcia i w jakich godzinach. I zapytaj, czy można przejść na online, gdy dziecko jest chore albo wyjeżdżacie.',
          ],
          tip: 'Zapisz odpowiedzi różnych szkół w jednej tabeli — łatwiej będzie porównać. I koniecznie zapytaj dziecko po lekcji próbnej, czy mu się podobało.',
        },
        {
          h: 'Jak to wygląda w Hunny Bunny',
          list: [
            'grupy od 3 do 5 dzieci, dobierane według wieku i poziomu; można też uczyć się indywidualnie;',
            'lekcja trwa 45 minut: zabawy, piosenki, bajki i prace twórcze;',
            'nasi lektorzy mają wykształcenie filologiczne lub międzynarodowe certyfikaty TESOL/TEFL — zobacz stronę „Lektorzy”;',
            'bezpłatna 20-minutowa lekcja próbna;',
            'zajęcia w karnecie są tańsze niż pojedyncze; nieobecność z powodu choroby nie przepada;',
            'online z dowolnego kraju, stacjonarnie w Warszawie (zajęcia prowadzi założycielka szkoły) i w Homlu.',
          ],
        },
      ],
    },
  },
  holidays: {
    ru: {
      title: 'Каникулы на английском в Гомеле: летний клуб и другие клубы',
      seoTitle: 'Летний клуб и каникулы на английском в Гомеле для детей | Hunny Bunny',
      description: 'Как устроены каникулы на английском в Hunny Bunny в Гомеле: летний клуб с 10:00 до 14:00, киноклуб и мастер-классы. Кому подойдёт, сколько стоит и как записаться.',
      lead: 'Каникулы — хорошее время, чтобы ребёнок не забыл английский за лето и при этом отдохнул. Главное — чтобы это было не продолжение школы, а живое общение, игры и творчество.',
      readTime: '4 минуты',
      body: [
        {
          h: 'Зачем английский на каникулах',
          p: [
            'За три летних месяца без практики часть слов и навыков забывается — и в сентябре приходится навёрстывать. Короткие регулярные встречи с языком в каникулы помогают сохранить то, что ребёнок выучил за год.',
            'Но каникулы — это отдых. Поэтому английский в это время должен быть лёгким: язык звучит в играх, творчестве и общении, а не в упражнениях из учебника.',
          ],
        },
        {
          h: 'Как устроен летний клуб в Hunny Bunny',
          p: [
            'Летом мы проводим летний клуб с 10:00 до 14:00. Это игры, творчество и английский в уютном классе в центре Гомеля, на ул. Крестьянской, 33. Стоимость — 50 BYN за день.',
            'Даты и программу ближайших клубов мы анонсируем в Instagram @hunny_bunny_english. Самый быстрый способ узнать даты и свободные места — написать нам в мессенджер.',
          ],
        },
        {
          h: 'Что ещё бывает в течение года',
          list: [
            'киноклуб — смотрим и обсуждаем фильмы на английском, встреча 90 минут, 45 BYN;',
            'тематические праздники и мастер-классы в англоязычной среде — например, новогодний;',
            'разговорный клуб — свободная практика речи для тех, кто хочет говорить увереннее.',
          ],
        },
        {
          h: 'Кому подойдёт',
          p: [
            'Тем, кто уже учит английский и хочет не потерять форму за лето. И тем, кто только присматривается к языку: в клубе ребёнок знакомится с английским в лёгкой обстановке и понимает, интересно ли ему.',
          ],
          tip: 'Если ребёнок застенчивый, начните с одного дня или с короткого пробного урока. Так он привыкнет к классу и преподавателю, и следующий раз пойдёт уже с удовольствием.',
        },
        {
          h: 'Как записаться',
          p: [
            'Оставьте заявку на сайте или напишите нам в Telegram, Viber или WhatsApp. Юлия подскажет ближайшие даты клубов и свободные места. Если хотите заниматься и после каникул — набор в группы идёт круглый год.',
          ],
        },
      ],
    },
    en: {
      title: 'Holidays in English: summer club and other clubs',
      seoTitle: 'English Over the Holidays: Summer Club and Clubs for Kids | Hunny Bunny',
      description: 'Why it’s worth keeping English going over the holidays, how our summer club in Gomel works (10:00–14:00), plus the movie club and workshops — and online lessons from any country.',
      lead: 'The holidays are a good time to make sure your child doesn’t forget their English over the summer — while still having a proper rest. The key is that it shouldn’t feel like more school, but like real communication, games and creativity.',
      readTime: '4 min',
      body: [
        {
          h: 'Why English over the holidays',
          p: [
            'Over three summer months without practice, some words and skills fade — and September becomes a catch-up month. Short, regular contact with the language during the holidays helps keep what your child learned over the year.',
            'But holidays are for rest. So English at this time should feel light: the language comes through games, crafts and conversation, not textbook exercises.',
          ],
        },
        {
          h: 'How the summer club works',
          p: [
            'In summer we run a summer club from 10:00 to 14:00 in our cosy classroom in central Gomel: games, crafts and English.',
            'We announce dates and the programme of upcoming clubs on Instagram @hunny_bunny_english. The quickest way to find out dates, places and prices is to message us.',
          ],
        },
        {
          h: 'What else happens during the year',
          list: [
            'movie club — we watch and discuss films in English, each session lasts 90 minutes;',
            'themed parties and workshops in an English-speaking setting — like our New Year party;',
            'conversation club — relaxed speaking practice for anyone who wants to speak more confidently.',
          ],
        },
        {
          h: 'Not in Gomel?',
          p: [
            'Online lessons run all year round from any country, in a group or one-to-one — including during the holidays. A short regular lesson is enough to keep your child’s English from slipping over the summer.',
          ],
          tip: 'If your child is shy, start with a short trial lesson. That way they get to know the teacher first, and next time they’ll join in happily.',
        },
        {
          h: 'How to sign up',
          p: [
            'Leave a request on the website or message us on WhatsApp or Telegram. We’ll tell you the next club dates and available places. If you’d like to continue after the holidays, we enrol students all year round.',
          ],
        },
      ],
    },
    pl: {
      title: 'Ferie z angielskim: klub letni i inne kluby',
      seoTitle: 'Angielski w wakacje i ferie: klub letni i kluby dla dzieci | Hunny Bunny',
      description: 'Dlaczego warto nie przerywać angielskiego w wakacje, jak działa nasz klub letni w Homlu (10:00–14:00), klub filmowy i warsztaty — oraz lekcje online z dowolnego kraju.',
      lead: 'Wakacje to dobry moment, by dziecko nie zapomniało angielskiego przez lato — i przy tym odpoczęło. Najważniejsze, żeby nie była to kontynuacja szkoły, tylko żywa rozmowa, zabawy i twórczość.',
      readTime: '4 min',
      body: [
        {
          h: 'Po co angielski w wakacje',
          p: [
            'Przez trzy letnie miesiące bez praktyki część słów i umiejętności się zaciera — i we wrześniu trzeba nadrabiać. Krótki, regularny kontakt z językiem w wakacje pomaga zachować to, czego dziecko nauczyło się w ciągu roku.',
            'Ale wakacje to odpoczynek. Dlatego angielski w tym czasie powinien być lekki: język pojawia się w zabawach, pracach twórczych i rozmowie, a nie w ćwiczeniach z podręcznika.',
          ],
        },
        {
          h: 'Jak działa klub letni',
          p: [
            'Latem prowadzimy klub letni w godzinach 10:00–14:00 w przytulnej sali w centrum Homla: zabawy, prace twórcze i angielski.',
            'Terminy i program najbliższych klubów ogłaszamy na Instagramie @hunny_bunny_english. Najszybciej poznasz daty, wolne miejsca i ceny, pisząc do nas.',
          ],
        },
        {
          h: 'Co jeszcze dzieje się w ciągu roku',
          list: [
            'klub filmowy — oglądamy i omawiamy filmy po angielsku, spotkanie trwa 90 minut;',
            'imprezy tematyczne i warsztaty w anglojęzycznym otoczeniu — np. noworoczna;',
            'klub konwersacyjny — swobodna praktyka mówienia dla tych, którzy chcą mówić pewniej.',
          ],
        },
        {
          h: 'Mieszkasz w Polsce?',
          p: [
            'Lekcje online odbywają się przez cały rok z dowolnego kraju, w grupie lub indywidualnie — także w wakacje. W Warszawie zajęcia stacjonarne prowadzi założycielka szkoły; miejsce i termin ustalamy przy zapisie.',
          ],
          tip: 'Jeśli dziecko jest nieśmiałe, zacznij od krótkiej lekcji próbnej. Najpierw pozna lektora, a następnym razem pójdzie już z przyjemnością.',
        },
        {
          h: 'Jak się zapisać',
          p: [
            'Zostaw zgłoszenie na stronie lub napisz do nas na WhatsAppie albo Telegramie. Podamy najbliższe terminy i wolne miejsca. Jeśli chcesz kontynuować po wakacjach — zapisy do grup trwają przez cały rok.',
          ],
        },
      ],
    },
  },
  adults: {
    ru: {
      title: 'Английский для взрослых в Гомеле: с чего начать, если давно не занимались',
      seoTitle: 'Английский для взрослых в Гомеле: как вернуться к языку | Hunny Bunny',
      description: 'Как взрослому вернуться к английскому после долгого перерыва: цель, уровень, формат занятий и регулярная практика речи. Советы преподавателей Hunny Bunny в Гомеле и онлайн.',
      lead: '«Учил в школе, но всё забыл» — так начинают многие наши взрослые ученики. Хорошая новость: забытое возвращается быстрее, чем учится новое. Нужно только правильно начать.',
      readTime: '4 минуты',
      body: [
        {
          h: 'Шаг 1. Определите цель',
          p: [
            'Английский для поездок, для работы, для переезда и для экзамена — это разные задачи. Для путешествий важнее говорить и понимать на слух, для работы — переписка и деловая лексика, для учёбы за границей — подготовка к IELTS.',
            'Сформулируйте цель одной фразой, например: «Хочу через полгода спокойно объясниться в отеле и магазине». От неё будет зависеть вся программа.',
          ],
        },
        {
          h: 'Шаг 2. Узнайте свой уровень',
          p: [
            'После перерыва легко и переоценить, и недооценить себя. Короткая диагностика с преподавателем показывает, что осталось в памяти, а что нужно повторить с нуля. Начинать «с самого начала» обычно не приходится.',
          ],
        },
        {
          h: 'Шаг 3. Выберите формат',
          list: [
            'индивидуально — программа полностью под вашу цель и ваш темп, удобно при плотном графике;',
            'в маленькой группе — больше живой практики и общения, и обычно дешевле;',
            'онлайн — можно заниматься из любой страны и не тратить время на дорогу.',
          ],
        },
        {
          h: 'Шаг 4. Говорите с первого занятия',
          p: [
            'Главный страх взрослых — языковой барьер: «понимаю, но не могу сказать». Он уходит только с практикой. Поэтому важно, чтобы на занятиях вы говорили, а не только слушали объяснения и делали упражнения.',
            'Ошибки — нормальная часть процесса. Преподаватель поможет их исправить, а разговорный клуб даст практику в спокойной неформальной обстановке.',
          ],
          tip: 'Между занятиями хватит 10–15 минут в день: сериал с английскими субтитрами, подкаст по дороге на работу, несколько новых фраз в заметках телефона.',
        },
        {
          h: 'Шаг 5. Занимайтесь регулярно',
          p: [
            'Два занятия в неделю в течение нескольких месяцев дадут больше, чем интенсив на две недели, после которого всё снова забывается. Выберите время, которое реально удержать в вашем графике.',
          ],
        },
        {
          h: 'Английский для взрослых в Hunny Bunny',
          p: [
            'Мы занимаемся со взрослыми любого уровня — от Beginner до Advanced — индивидуально или в группах от 3 до 5 человек, очно в Гомеле на ул. Крестьянской, 33, и онлайн. Есть разговорный клуб и подготовка к IELTS. Время занятий согласуем с вашим графиком.',
            'Начать можно с бесплатного пробного урока: определим уровень, обсудим цель и подберём формат.',
          ],
        },
      ],
    },
    en: {
      title: 'English for adults: where to start if you haven’t studied in years',
      seoTitle: 'English for Adults: How to Get Back to It After a Long Break | Hunny Bunny',
      description: 'How to get back to English as an adult after a long break: set a goal, check your level, choose a format and start speaking. Advice from Hunny Bunny teachers — online and in person.',
      lead: '“I learned it at school but forgot everything” — that’s how many of our adult students begin. The good news: what you’ve forgotten comes back faster than learning something new. You just need to start the right way.',
      readTime: '4 min',
      body: [
        {
          h: 'Step 1. Define your goal',
          p: [
            'English for travel, for work, for moving abroad or for an exam are different tasks. For travel, speaking and listening matter most; for work, emails and business vocabulary; for studying abroad, IELTS preparation.',
            'Put your goal into one sentence, for example: “In six months I want to talk comfortably at a hotel and in shops.” The whole programme follows from it.',
          ],
        },
        {
          h: 'Step 2. Find out your level',
          p: [
            'After a break, it’s easy to over- or underestimate yourself. A short assessment with a teacher shows what you still remember and what needs revisiting. You rarely have to start from scratch.',
          ],
        },
        {
          h: 'Step 3. Choose a format',
          list: [
            'one-to-one — a programme built entirely around your goal and pace, handy with a busy schedule;',
            'in a small group — more real practice and conversation, and usually cheaper;',
            'online — study from any country without spending time on the commute.',
          ],
        },
        {
          h: 'Step 4. Speak from the first lesson',
          p: [
            'The biggest fear adults have is the language barrier: “I understand, but I can’t say it.” It only goes away with practice. So it matters that you actually speak in lessons, not just listen to explanations and do exercises.',
            'Mistakes are a normal part of the process. Your teacher will help you fix them, and the conversation club gives you practice in a relaxed, informal setting.',
          ],
          tip: 'Between lessons, 10–15 minutes a day is enough: a series with English subtitles, a podcast on the way to work, a few new phrases in your phone notes.',
        },
        {
          h: 'Step 5. Be consistent',
          p: [
            'Two lessons a week for a few months do more than a two-week intensive course after which everything fades again. Choose a time you can realistically keep in your schedule.',
          ],
        },
        {
          h: 'English for adults at Hunny Bunny',
          p: [
            'We teach adults at any level, from Beginner to Advanced — one-to-one or in groups of 3 to 5, online from any country and in person in Gomel and Warsaw. There’s a conversation club and IELTS preparation. We schedule lessons around your timetable.',
            'You can start with a free trial lesson: we’ll check your level, talk through your goal and find the right format.',
          ],
        },
      ],
    },
    pl: {
      title: 'Angielski dla dorosłych: od czego zacząć po długiej przerwie',
      seoTitle: 'Angielski dla dorosłych: jak wrócić do nauki po przerwie | Hunny Bunny',
      description: 'Jak dorosłemu wrócić do angielskiego po długiej przerwie: cel, poziom, forma zajęć i mówienie od pierwszej lekcji. Rady lektorów Hunny Bunny — online i w Warszawie.',
      lead: '„Uczyłem się w szkole, ale wszystko zapomniałem” — tak zaczyna wielu naszych dorosłych uczniów. Dobra wiadomość: to, co zapomniane, wraca szybciej, niż uczy się nowego. Trzeba tylko dobrze zacząć.',
      readTime: '4 min',
      body: [
        {
          h: 'Krok 1. Określ cel',
          p: [
            'Angielski do podróży, do pracy, do przeprowadzki i do egzaminu to różne zadania. W podróży najważniejsze jest mówienie i rozumienie ze słuchu, w pracy — korespondencja i słownictwo biznesowe, na studia za granicą — przygotowanie do IELTS.',
            'Zapisz cel jednym zdaniem, np.: „Za pół roku chcę swobodnie dogadać się w hotelu i w sklepie”. Od niego zależy cały program.',
          ],
        },
        {
          h: 'Krok 2. Sprawdź swój poziom',
          p: [
            'Po przerwie łatwo się przecenić albo nie docenić. Krótka diagnoza z lektorem pokazuje, co zostało w pamięci, a co trzeba powtórzyć od podstaw. Zaczynać „od zera” zwykle nie trzeba.',
          ],
        },
        {
          h: 'Krok 3. Wybierz formę',
          list: [
            'indywidualnie — program w pełni pod Twój cel i tempo, wygodne przy napiętym grafiku;',
            'w małej grupie — więcej żywej praktyki i rozmowy, zwykle taniej;',
            'online — nauka z dowolnego kraju bez tracenia czasu na dojazd.',
          ],
        },
        {
          h: 'Krok 4. Mów od pierwszej lekcji',
          p: [
            'Największy strach dorosłych to bariera językowa: „rozumiem, ale nie potrafię powiedzieć”. Mija tylko dzięki praktyce. Dlatego ważne, żeby na zajęciach mówić, a nie tylko słuchać wyjaśnień i robić ćwiczenia.',
            'Błędy to normalna część nauki. Lektor pomoże je poprawić, a klub konwersacyjny da praktykę w spokojnej, nieformalnej atmosferze.',
          ],
          tip: 'Między zajęciami wystarczy 10–15 minut dziennie: serial z angielskimi napisami, podcast w drodze do pracy, kilka nowych zwrotów w notatkach w telefonie.',
        },
        {
          h: 'Krok 5. Ucz się regularnie',
          p: [
            'Dwie lekcje w tygodniu przez kilka miesięcy dadzą więcej niż dwutygodniowy intensywny kurs, po którym wszystko znów się zapomina. Wybierz godziny, które realnie utrzymasz w swoim grafiku.',
          ],
        },
        {
          h: 'Angielski dla dorosłych w Hunny Bunny',
          p: [
            'Uczymy dorosłych na każdym poziomie — od Beginner do Advanced — indywidualnie lub w grupach 3–5 osób, online z dowolnego kraju oraz stacjonarnie w Warszawie (zajęcia prowadzi założycielka szkoły) i w Homlu. Jest klub konwersacyjny i przygotowanie do IELTS. Termin zajęć dopasowujemy do Twojego grafiku.',
            'Możesz zacząć od bezpłatnej lekcji próbnej: sprawdzimy poziom, omówimy cel i dobierzemy formę.',
          ],
        },
      ],
    },
  },
};

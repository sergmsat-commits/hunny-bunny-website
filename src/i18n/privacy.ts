// Политика обработки персональных данных и cookies.
// Черновик подготовлен по Закону РБ от 07.05.2021 № 99-З «О защите персональных данных» и GDPR.
// Перед окончательной публикацией текст стоит показать юристу.

type Section = { h: string; p?: string[]; list?: string[] };
type Policy = { title: string; updated: string; intro: string; sections: Section[] };

const operator = 'ООО «ЮСПРО», УНП 491393414, Республика Беларусь, г. Гомель, ул. Крестьянская, 33';

export const privacy: Record<'ru' | 'en' | 'pl', Policy> = {
  ru: {
    title: 'Политика конфиденциальности',
    updated: 'Редакция от 20 октября 2026 года',
    intro:
      'Эта политика объясняет, какие персональные данные собирает сайт hunnybunny.by школы Hunny Bunny English, зачем мы это делаем и какие у вас права. Политика подготовлена в соответствии с Законом Республики Беларусь от 7 мая 2021 г. № 99-З «О защите персональных данных» и, для посетителей из Европейского союза, с Общим регламентом по защите данных (GDPR).',
    sections: [
      { h: '1. Оператор', p: [`Оператор персональных данных — ${operator}. Связаться с нами: телефон +375 29 625-64-42, Telegram @hunnybunnyenglish, email hello@hunnybunny.by.`] },
      {
        h: '2. Какие данные мы получаем',
        list: [
          'Через форму записи: имя, номер телефона, email (по желанию), кто будет учиться (ребёнок, школьник или взрослый) и язык сайта, с которого отправлена заявка.',
          'Когда вы пишете нам в мессенджер: те данные, которые вы сами сообщаете в переписке.',
          'Если вы разрешили аналитические cookies: обезличенные сведения о посещении сайта (страницы, устройство, примерное местоположение по IP), которые собирают Google Analytics и Яндекс Метрика. Метрика также записывает обезличенные действия на страницах (прокрутку, клики, движения мыши — «Вебвизор»); то, что вы вводите в поля формы, не записывается.',
        ],
      },
      {
        h: '3. Зачем мы обрабатываем данные',
        list: [
          'Связаться с вами, ответить на вопросы и записать на пробный урок.',
          'Организовать обучение, если вы решите заниматься в Hunny Bunny.',
          'Понимать, как посетители пользуются сайтом, и улучшать его — только с вашего согласия на аналитические cookies.',
        ],
      },
      {
        h: '4. Правовые основания',
        p: [
          'Мы обрабатываем данные на основании вашего согласия, которое вы даёте, отмечая галочку в форме записи или нажимая «Принять» в окне cookies. Если вы становитесь нашим учеником, данные также нужны для заключения и исполнения договора на оказание образовательных услуг.',
          'Данные ребёнка сообщает и согласие за него даёт родитель или иной законный представитель.',
        ],
      },
      {
        h: '5. Кому передаются данные',
        p: ['Мы не продаём и не передаём ваши данные третьим лицам для рекламы. Для работы сайта мы пользуемся сервисами:'],
        list: [
          'Telegram — заявка с сайта приходит сотрудникам школы в закрытый чат;',
          'FormSubmit (formsubmit.co) — пересылает копию заявки нам на почту;',
          'Google LLC (Google Analytics) — статистика посещений, только с вашего согласия;',
          'ООО «Яндекс» (Яндекс Метрика) — статистика посещений, только с вашего согласия;',
          'Cloudflare, Inc. — хостинг сайта, защита от атак и проверка формы от спама (Cloudflare Turnstile);',
          'мессенджеры Telegram, Viber и WhatsApp — если вы сами пишете нам туда.',
        ],
      },
      {
        h: '6. Трансграничная передача',
        p: [
          'Перечисленные сервисы могут хранить данные за пределами Беларуси, в том числе в США, где может не обеспечиваться надлежащий уровень защиты персональных данных в понимании Закона № 99-З. Это означает риск, что органы иностранного государства получат доступ к данным в порядке, отличном от белорусского законодательства. Отправляя форму с отмеченной галочкой, вы соглашаетесь на такую передачу, понимая этот риск.',
        ],
      },
      {
        h: '7. Сколько мы храним данные',
        p: [
          'Заявки, по которым обучение не началось, мы удаляем не позднее чем через 1 год после последнего контакта. Данные учеников храним в течение срока договора и сроков, установленных законодательством для бухгалтерских документов. Данные Google Analytics хранятся 14 месяцев, данные Яндекс Метрики — по правилам Яндекса (записи Вебвизора — до 15 дней).',
        ],
      },
      {
        h: '8. Ваши права',
        list: [
          'получить информацию об обработке ваших данных;',
          'потребовать исправить, дополнить или удалить данные;',
          'в любой момент отозвать согласие — это не влияет на законность обработки до отзыва;',
          'обжаловать действия оператора в Национальный центр защиты персональных данных Республики Беларусь, а жителям ЕС — в надзорный орган своей страны (в Польше — UODO).',
        ],
        p: ['Чтобы воспользоваться правами, напишите нам по контактам из раздела 1. Ответим в течение 15 дней.'],
      },
      {
        h: '9. Cookies',
        p: [
          'Сайт работает без cookies, пока вы не разрешите аналитику. В браузере сохраняется только ваш выбор в окне cookies. Если вы нажмёте «Принять», Google Analytics установит cookies _ga и _ga_*, а Яндекс Метрика — _ym_* для подсчёта посещений. Изменить выбор можно в любой момент по ссылке «Настройки cookies» внизу сайта.',
          'На главной странице есть видео с нашего YouTube-канала. Оно загружается с сервера YouTube (Google) только после того, как вы нажмёте на него; с этого момента действуют правила конфиденциальности Google. До нажатия сайт ничего не передаёт YouTube.',
        ],
      },
      { h: '10. Безопасность и изменения', p: ['Сайт работает только по защищённому протоколу HTTPS. Доступ к заявкам есть только у сотрудников школы. Если мы изменим политику, новая редакция появится на этой странице с новой датой.'] },
    ],
  },

  en: {
    title: 'Privacy Policy',
    updated: 'Version of 20 October 2026',
    intro:
      'This policy explains what personal data the hunnybunny.by website of Hunny Bunny English collects, why we do it and what your rights are. It follows the Law of the Republic of Belarus No. 99-Z of 7 May 2021 “On Personal Data Protection” and, for visitors from the European Union, the General Data Protection Regulation (GDPR).',
    sections: [
      { h: '1. Controller', p: [`The data controller is YUSPRO LLC (ООО «ЮСПРО»), registration number (UNP) 491393414, 33 Krestyanskaya St, Gomel, Republic of Belarus. Contact us: phone +375 29 625-64-42, Telegram @hunnybunnyenglish, email hello@hunnybunny.by.`] },
      {
        h: '2. What data we receive',
        list: [
          'Through the booking form: your name, phone number, email (optional), who will be studying (child, teen or adult) and the language of the page you used.',
          'When you message us: whatever you share in the conversation.',
          'If you allow analytics cookies: anonymised information about your visit (pages, device, approximate location by IP) collected by Google Analytics and Yandex Metrica. Metrica also records anonymised actions on pages (scrolling, clicks, mouse movement — “Webvisor”); what you type into form fields is not recorded.',
        ],
      },
      {
        h: '3. Why we process data',
        list: [
          'To contact you, answer your questions and book a trial lesson.',
          'To organise lessons if you decide to study with Hunny Bunny.',
          'To understand how visitors use the website and improve it — only with your consent to analytics cookies.',
        ],
      },
      {
        h: '4. Legal basis',
        p: [
          'We process data based on your consent, which you give by ticking the box in the booking form or clicking “Accept” in the cookie banner (Art. 6(1)(a) GDPR). If you become our student, the data is also needed to conclude and perform the contract for educational services (Art. 6(1)(b) GDPR).',
          'A child’s data is provided, and consent is given, by a parent or other legal guardian.',
        ],
      },
      {
        h: '5. Who receives the data',
        p: ['We never sell your data or share it for advertising. To run the website we use these services:'],
        list: [
          'Telegram — website requests are delivered to a private chat of school staff;',
          'FormSubmit (formsubmit.co) — forwards a copy of each request to our email;',
          'Google LLC (Google Analytics) — visit statistics, only with your consent;',
          'Yandex LLC (Yandex Metrica) — visit statistics, only with your consent;',
          'Cloudflare, Inc. — website hosting, protection and spam check of the form (Cloudflare Turnstile);',
          'Telegram, Viber and WhatsApp — if you choose to message us there.',
        ],
      },
      {
        h: '6. International transfers',
        p: [
          'These services may store data outside Belarus and the EU, including in the USA. By submitting the form with the box ticked, you consent to such transfers and acknowledge the possible risks.',
        ],
      },
      {
        h: '7. How long we keep data',
        p: [
          'Requests that did not lead to lessons are deleted no later than 1 year after our last contact. Student data is kept for the duration of the contract and the periods required by accounting law. Google Analytics data is kept for 14 months; Yandex Metrica data according to Yandex’s rules (Webvisor recordings up to 15 days).',
        ],
      },
      {
        h: '8. Your rights',
        list: [
          'to know how your data is processed and get a copy;',
          'to have your data corrected or deleted, or its processing restricted;',
          'to withdraw consent at any time — this does not affect processing before withdrawal;',
          'to lodge a complaint with the National Personal Data Protection Center of Belarus or, in the EU, with your local supervisory authority (in Poland — UODO).',
        ],
        p: ['To use your rights, contact us using the details in section 1. We reply within 15 days.'],
      },
      {
        h: '9. Cookies',
        p: [
          'The website uses no cookies until you allow analytics; only your choice in the cookie banner is saved in your browser. If you click “Accept”, Google Analytics sets the _ga and _ga_* cookies and Yandex Metrica sets _ym_* cookies to count visits. You can change your choice at any time via “Cookie settings” at the bottom of the page.',
          'The home page shows a video from our YouTube channel. It loads from YouTube (Google) only after you click it; from that moment Google’s privacy policy applies. Until you click, the website sends nothing to YouTube.',
        ],
      },
      { h: '10. Security and changes', p: ['The website works over HTTPS only. Only school staff can access requests. If we change this policy, the new version will appear on this page with a new date.'] },
    ],
  },

  pl: {
    title: 'Polityka prywatności',
    updated: 'Wersja z 20 października 2026 r.',
    intro:
      'Niniejsza polityka wyjaśnia, jakie dane osobowe zbiera strona hunnybunny.by szkoły Hunny Bunny English, w jakim celu to robimy i jakie prawa Ci przysługują. Została przygotowana zgodnie z ustawą Republiki Białorusi nr 99-Z z dnia 7 maja 2021 r. o ochronie danych osobowych oraz, w odniesieniu do osób z Unii Europejskiej, z ogólnym rozporządzeniem o ochronie danych (RODO).',
    sections: [
      { h: '1. Administrator', p: ['Administratorem danych jest spółka OOO «ЮСПРО» (YUSPRO), UNP 491393414, ul. Kriestjanskaja 33, Homel, Republika Białorusi. Kontakt: tel. +375 29 625-64-42, WhatsApp +48 573 306 598, Telegram @hunnybunnyenglish, e-mail hello@hunnybunny.by.'] },
      {
        h: '2. Jakie dane otrzymujemy',
        list: [
          'Przez formularz zapisu: imię, numer telefonu, e-mail (opcjonalnie), kto będzie się uczyć (dziecko, uczeń lub osoba dorosła) oraz język strony, z której wysłano zgłoszenie.',
          'Gdy piszesz do nas w komunikatorze: dane, które sam(a) podajesz w rozmowie.',
          'Jeśli zgodzisz się na analityczne pliki cookies: zanonimizowane informacje o wizycie (odwiedzone strony, urządzenie, przybliżona lokalizacja na podstawie IP) zbierane przez Google Analytics i Yandex Metrica. Metrica zapisuje też zanonimizowane działania na stronie (przewijanie, kliknięcia, ruchy myszy — „Webvisor”); treść wpisywana w pola formularza nie jest zapisywana.',
        ],
      },
      {
        h: '3. W jakim celu przetwarzamy dane',
        list: [
          'Aby się z Tobą skontaktować, odpowiedzieć na pytania i zapisać na lekcję próbną.',
          'Aby zorganizować naukę, jeśli zdecydujesz się uczyć w Hunny Bunny.',
          'Aby rozumieć, jak korzystasz ze strony, i ją ulepszać — wyłącznie za zgodą na analityczne pliki cookies.',
        ],
      },
      {
        h: '4. Podstawa prawna',
        p: [
          'Przetwarzamy dane na podstawie Twojej zgody, którą wyrażasz, zaznaczając pole w formularzu lub klikając „Akceptuję” w oknie cookies (art. 6 ust. 1 lit. a RODO). Jeśli zostaniesz naszym uczniem, dane są też potrzebne do zawarcia i wykonania umowy o świadczenie usług edukacyjnych (art. 6 ust. 1 lit. b RODO).',
          'Dane dziecka podaje i zgodę w jego imieniu wyraża rodzic lub inny opiekun prawny.',
        ],
      },
      {
        h: '5. Komu przekazujemy dane',
        p: ['Nie sprzedajemy danych i nie udostępniamy ich w celach reklamowych. Do działania strony korzystamy z usług:'],
        list: [
          'Telegram — zgłoszenie ze strony trafia do zamkniętego czatu pracowników szkoły;',
          'FormSubmit (formsubmit.co) — przesyła kopię zgłoszenia na naszą skrzynkę e-mail;',
          'Google LLC (Google Analytics) — statystyki odwiedzin, tylko za Twoją zgodą;',
          'Yandex LLC (Yandex Metrica) — statystyki odwiedzin, tylko za Twoją zgodą;',
          'Cloudflare, Inc. — hosting, ochrona strony i ochrona formularza przed spamem (Cloudflare Turnstile);',
          'Telegram, Viber i WhatsApp — jeśli sam(a) do nas tam napiszesz.',
        ],
      },
      {
        h: '6. Przekazywanie danych poza EOG',
        p: [
          'Administrator ma siedzibę na Białorusi, a wymienione usługi mogą przechowywać dane poza Unią Europejską, w tym w USA. Wysyłając formularz z zaznaczoną zgodą, zgadzasz się na takie przekazanie i przyjmujesz do wiadomości związane z nim ryzyko.',
        ],
      },
      {
        h: '7. Jak długo przechowujemy dane',
        p: [
          'Zgłoszenia, po których nauka się nie rozpoczęła, usuwamy najpóźniej po roku od ostatniego kontaktu. Dane uczniów przechowujemy przez czas trwania umowy oraz okres wymagany przepisami o rachunkowości. Dane w Google Analytics są przechowywane przez 14 miesięcy, a w Yandex Metrica — zgodnie z zasadami Yandex (nagrania Webvisor — do 15 dni).',
        ],
      },
      {
        h: '8. Twoje prawa',
        list: [
          'dostęp do danych i uzyskanie ich kopii;',
          'sprostowanie, usunięcie lub ograniczenie przetwarzania danych;',
          'wycofanie zgody w dowolnym momencie — nie wpływa to na zgodność z prawem przetwarzania przed jej wycofaniem;',
          'wniesienie skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO) lub do Narodowego Centrum Ochrony Danych Osobowych Republiki Białorusi.',
        ],
        p: ['Aby skorzystać z tych praw, napisz do nas — dane kontaktowe znajdziesz w punkcie 1. Odpowiadamy w ciągu 15 dni.'],
      },
      {
        h: '9. Pliki cookies',
        p: [
          'Dopóki nie zgodzisz się na analitykę, strona nie używa plików cookies — w przeglądarce zapisujemy tylko Twój wybór z okna cookies. Po kliknięciu „Akceptuję” Google Analytics zapisze pliki _ga i _ga_*, a Yandex Metrica — pliki _ym_*, służące do liczenia odwiedzin. Swój wybór możesz zmienić w każdej chwili, klikając „Ustawienia cookies” na dole strony.',
          'Na stronie głównej jest film z naszego kanału YouTube. Ładuje się z serwera YouTube (Google) dopiero po kliknięciu; od tej chwili obowiązują zasady prywatności Google. Do momentu kliknięcia strona nie przekazuje YouTube żadnych danych.',
        ],
      },
      { h: '10. Bezpieczeństwo i zmiany', p: ['Strona działa wyłącznie przez szyfrowane połączenie HTTPS. Dostęp do zgłoszeń mają tylko pracownicy szkoły. Jeśli zmienimy politykę, nowa wersja pojawi się na tej stronie z nową datą.'] },
    ],
  },
};

export const privacyPath = { ru: '/privacy/', en: '/en/privacy/', pl: '/pl/polityka-prywatnosci/' } as const;

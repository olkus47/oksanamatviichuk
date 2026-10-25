/**
 * Oksana Gesichtsmassage - Multilingual Translations (DE / RU / UA)
 * All texts match Oksana's authentic voice and exact words.
 */

const translations = {
  de: {
    // Navigation
    "nav.about": "Über mich",
    "nav.treatments": "Behandlungen",
    "nav.pricing": "Preise",
    "nav.offers": "Aktuell",
    "nav.booking": "Termin anfragen",
    "nav.contact": "Kontakt",
    "nav.location": "Standort",
    "nav.book_cta": "Termin anfragen",

    // Top Bar
    "topbar.location": "Sennrütistrasse 17, 9113 Degersheim, Schweiz",
    "topbar.hours": "Mi, Do, Fr nach Terminvereinbarung",

    // Hero
    "hero.badge": "SCHWEIZ · ACHTSAME GESICHTSMASSAGE",
    "hero.title": "Individuelle Gesichtsmassage für Ihre natürliche Schönheit",
    "hero.subtitle": "Sanfte Techniken. Tiefe Wirkung. Für Haut, Muskulatur und nachhaltiges Wohlbefinden.",
    "hero.description": "Gönnen Sie sich eine wohltuende Auszeit in ruhiger Atmosphäre. Eine sanfte, ganzheitliche Behandlung, die Ihre Gesichtsmuskulatur entspannt und Ihre natürliche Ausstrahlung zum Strahlen bringt.",
    "hero.cta_book": "Termin per WhatsApp",
    "hero.cta_learn": "Mehr über mich",
    "hero.quick_price": "Einzeltermin · 80 CHF",
    "hero.intro_tag": "60 Min. Massage + 15 Min. persönliche Beratung und Gesichtsanalyse — 70 CHF",
    "hero.floating_title": "Oksana Matviichuk",
    "hero.floating_sub": "Achtsame Berührung & sichtbare Frische",

    // Testimonials / Reviews
    "reviews.tag": "KUNDENSTIMMEN",
    "reviews.title": "Was Kundinnen sagen",
    "reviews.subtitle": "Echte Erfahrungen und Eindrücke nach der Behandlung in Degersheim.",
    "reviews.read_more": "Ganze Bewertung lesen",
    "reviews.show_less": "Weniger anzeigen",
    "review1.text": "“Nach der Gesichtsmassage bin ich wirklich begeistert😆 Mich haben vor allem die Falten auf der Stirn gestört, und schon nach der ersten Behandlung waren sie deutlich weniger sichtbar. Mit so einem Ergebnis hätte ich ehrlich gesagt nicht gerechnet! 🤗<br><br>Die Behandlung war unglaublich angenehm und entspannend, und ich konnte richtig abschalten. Oksana erwies sich als sehr angenehme und kompetente Frau🙌<br><br>Ich kann sie wirklich jedem empfehlen, der sich etwas Gutes tun, entspannen und seinem Gesicht etwas Frische verleihen möchte. Ich komme auf jeden Fall gerne wieder 😊”",
    "review1.author": "Laura K.",
    "review2.text": "“Für mich ist eine Gesichtsmassage bei einer so professionellen Masseurin wie Oksana jedes Mal ein wahrer Genuss – sowohl für die Schönheit als auch für das Wohlbefinden. Einfach immer auf höchstem Niveau!”",
    "review2.author": "Maria S.",
    "review3.text": "“Seit ich bei Oksana in Behandlung habe ich viel weniger Nackenverspannungen. Mein Gesicht fühlt sich weich und entspannt an. Das Hautbild ist viel frischer geworden.”",
    "review3.author": "Claudia F.",

    // Für wen? (Benefits)
    "forwhom.tag": "FÜR WEN?",
    "forwhom.title": "Für alle, die sich und ihrer Haut etwas Gutes tun möchten",
    "forwhom.intro": "Gesichtsmassage wirkt tief in Gewebe und Faszien, regt die Mikrozirkulation an und lässt Anspannungen des Alltags sanft abfallen.",
    "benefit1.title": "Natürlicher Glow",
    "benefit1.desc": "Frischer, rosiger und lebendiger Teint durch angeregte Zirkulation.",
    "benefit2.title": "Tiefe Entspannung",
    "benefit2.desc": "Löst Spannungen in Kiefer, Schläfen und Nacken. Fördert innere Ruhe.",
    "benefit3.title": "Straffung & Lifting",
    "benefit3.desc": "Aktiviert Faszien und Muskulatur, definiert die Konturen ganz ohne Nadeln.",
    "benefit4.title": "Bessere Durchblutung",
    "benefit4.desc": "Versorgt Hautzellen optimal mit Sauerstoff und unterstützt den Lymphfluss.",

    // Indications & Contraindications
    "checklist.suitable_title": "Besonders empfohlen bei:",
    "checklist.s1": "Muskulären Verspannungen, Zähneknirschen & Kieferdruck",
    "checklist.s2": "Mimikfältchen, ersten Linien und Elastizitätsverlust",
    "checklist.s3": "Müdem Teint, Schwellungen und verlangsamtem Lymphfluss",
    "checklist.s4": "Wunsch nach definierteren Gesichtskonturen ohne Injektionen",
    "checklist.s5": "Stress, Überlastung und dem Bedürfnis nach tiefer Ruhe",

    "checklist.notsuitable_title": "Kontraindikationen (wann abzuwarten ist):",
    "checklist.n1": "Akute Entzündungen oder offene Hautverletzungen im Gesicht",
    "checklist.n2": "Akute Herpes-Infektion oder ansteckende Hautkrankheiten",
    "checklist.n3": "Schwere, entzündliche Akne-Schübe",
    "checklist.n4": "Fieber, Infektionskrankheiten und allgemeines Unwohlsein",
    "checklist.n5": "Kürzliche Botox- oder Filler-Behandlungen (mind. 4 Wochen warten)",

    // About Me
    "about.tag": "ÜBER MICH",
    "about.quote": "„Schönheit beginnt mit Achtsamkeit und liebevoller Zuwendung zu sich selbst.“",
    "about.p1": "Die Gesichtsmassage begann für mich aus einem persönlichen Interesse an natürlicher Pflege und dem Erhalt der Schönheit. Mit der Zeit wurde aus diesem Interesse mein Beruf: Ich absolvierte eine professionelle Ausbildung zur Massage-Therapeutin und Kosmetikerin und bilde mich kontinuierlich in verschiedensten Gesichtsmassagetechniken weiter.",
    "about.p2": "Für mich ist jedes Gesicht einzigartig – deshalb arbeite ich nie nach einem starren Schema. Beim ersten Termin betrachte ich den Zustand des Gewebes, muskuläre Verspannungen, Schwellungen und die individuellen Gesichtszüge. Darauf abgestimmt kombiniere ich fliessend verschiedene Techniken: Lymphdrainage, myofasziale Griffe, bukkale Elemente und Gua Sha – genau abgestimmt auf Ihre Bedürfnisse.",
    "about.p3": "Es erfüllt mich mit Freude zu sehen, wie ein Gesicht nach der Massage gelöster, frischer und lebendiger wirkt. Genau für diese sichtbaren, natürlichen Veränderungen liebe ich meine Arbeit.",
    "about.studio_desc": "Ein ruhiger, geschützter Raum zum Durchatmen und Loslassen – warmes Licht, dezente Düfte und sanfte Klänge.",

    // Treatments / Philosophy
    "tech.tag": "BEHANDLUNGSKONZEPT",
    "tech.title": "Eine Behandlung — individuelle Kombination bewährter Techniken",
    "tech.desc": "Bei mir buchen Sie keine isolierten Katalogmassagen. Zu Beginn jedes Termins erfühle ich den aktuellen Zustand Ihres Gewebes, Spannungen im Kiefer und Nacken sowie den Lymphfluss. Daraus entsteht eine fließende, harmonische Behandlung – eine fein abgestimmte Symphonie aus myofaszialer Tiefenarbeit, sanfter Lymphdrainage, bukkaler Entspannung und kühlendem Gua Sha.",
    "tech.card1_title": "Achtsame Analyse",
    "tech.card1_desc": "Präzises Erspüren von Gewebespannungen, Mimikdruck und Lymphstauungen vor jeder Behandlung.",
    "tech.card2_title": "Individuelle Kombination",
    "tech.card2_desc": "Fließendes Zusammenspiel aus Myofaszien-, Lymph-, Bukkale- und Gua-Sha-Elementen nach aktuellem Bedarf.",
    "tech.card3_title": "Natürliche Wirkung",
    "tech.card3_desc": "Sichtbare Frische, tief gelöste Muskulatur und ein entspannter, lebendiger Gesichtsausdruck.",

    // Special Offers & Pricing
    "pricing.tag": "PREISE & ANGEBOTE",
    "pricing.title": "Preise & Angebote",

    // Kennenlernangebot
    "intro.badge": "ERSTER TERMIN",
    "intro.simplified_text": "60 Minuten Massage + 15 Minuten persönliche Beratung und Gesichtsanalyse — 70 CHF",
    "intro.btn": "Kennenlerntermin anfragen",

    // Vollständige persönliche Gesichtsmassage
    "standard.title": "Vollständige persönliche Gesichtsmassage",
    "standard.subtitle": "Eine Behandlung nur für Sie.",
    "standard.desc": "Wohltuende, individuell angepasste Gesichtsmassage inklusive Dekolleté, Nacken und sanfter Gesichtspflege.",
    "standard.duration": "Dauer: 60 Minuten",
    "standard.price": "80 CHF",
    "standard.btn": "Einzeltermin anfragen",
    "standard.note": "Ideal für regelmässige Erholung und Frische.",

    // Packages / Abos
    "offers.title": "Abonnements & Kuren",
    "sub1.badge": "BELIEBT",
    "sub1.title": "Ein Monat Zeit für sich",
    "sub1.price": "280 CHF",
    "sub1.unit": "für 4 Behandlungen",
    "sub1.calc": "70 CHF pro Behandlung (Sie sparen 40 CHF)",
    "sub1.desc": "4 Behandlungen innerhalb eines Monats. Eine schöne Möglichkeit für alle, die Gesichtsmassage regelmässig erleben und beobachten möchten, wie das Gesicht auf die kontinuierliche Behandlung reagiert.",
    "sub1.feature1": "4 Behandlungen innerhalb von 4 Wochen",
    "sub1.feature2": "Ideal zum Aufbau nachhaltiger Hautentspannung",
    "sub1.btn": "Monatspaket anfragen",

    // Package 2: Individueller Massagekurs
    "sub2.badge": "NACHHALTIGE ERGEBNISSE",
    "sub2.title": "Individueller Massagekurs",
    "sub2.duration": "10 Behandlungen — 590 CHF",
    "sub2.calc": "Personalisierter Behandlungsplan",
    "sub2.desc": "Wenn Sie sich eine intensivere und gezielte Begleitung wünschen, erstelle ich nach unserem ersten Termin einen individuellen Behandlungsplan für Sie. Häufigkeit und Kombination der Techniken werden genau auf Ihr Gesicht, Ihre persönlichen Bedürfnisse und Ihre Wünsche abgestimmt.",
    "sub2.benefit1": "Tiefere Wirkung auf Muskulatur, Bindegewebe und Haut",
    "sub2.benefit2": "Sichtbare Verbesserung von Konturen, Falten und Spannkraft",
    "sub2.benefit3": "Langfristige Ergebnisse und Vorbeugung",
    "sub2.benefit4": "<strong>Als Geschenk:</strong> Auf Wunsch — Face Fitness Techniken für die Heimpraxis als Geschenk",
    "sub2.btn": "Kurs besprechen",

    // Booking Section
    "booking.title": "Gönnen Sie sich Ihre wohlverdiente Pause",
    "booking.subtitle": "Vereinbaren Sie Ihren Termin ganz einfach und unkompliziert direkt per WhatsApp. Ich freue mich auf Ihre Nachricht!",
    "booking.trust_time": "Direkte persönliche Terminabsprache",
    "booking.trust_care": "Individuell auf Ihre Haut abgestimmt",
    "booking.trust_room": "Ruhige Atmosphäre in Degersheim",
    "booking.btn_wa_main": "Termin per WhatsApp anfragen",
    "booking.wa_phone": "+41 76 123 45 67",

    // Location
    "location.tag": "STANDORT & ANFAHRT",
    "location.title": "So finden Sie zu mir",
    "location.address_label": "Adresse:",
    "location.address_val": "Sennrütistrasse 17, 9113 Degersheim, Schweiz",
    "location.transit_title": "Öffentliche Verkehrsmittel:",
    "location.transit_desc": "Nur wenige Gehminuten vom Bahnhof Degersheim entfernt. Bequeme Anbindung ab St. Gallen, Herisau und Gossau.",
    "location.parking_title": "Parkplätze:",
    "location.parking_desc": "Besucherparkplätze befinden sich direkt beim Gebäude oder in unmittelbarer Nähe.",
    "location.map_btn": "Route auf Google Maps öffnen",

    // Contact & Footer
    "footer.about_text": "Oksana Gesichtsmassage – Individuelle Gesichtsmassage für natürliche Schönheit, tiefe Entspannung und achtsame Berührung in Degersheim.",
    "footer.quick_links": "Navigation",
    "footer.contact_title": "Kontakt",
    "footer.languages_title": "Sprachen im Studio",
    "footer.languages_desc": "Ich berate Sie gerne auf Deutsch, Russisch oder Ukrainisch.",
    "footer.hours_title": "Öffnungszeiten",
    "footer.hours_desc": "Mi, Do, Fr<br>nach Terminvereinbarung",
    "footer.rights": "© 2026 Oksana Gesichtsmassage · Alle Rechte vorbehalten.",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",

    // Legal Modals & Pages
    "legal.breadcrumb_home": "Startseite",
    "legal.back_to_home": "&larr; Zurück zur Startseite",
    "legal.imp_title": "Impressum",
    "legal.dsg_title": "Datenschutzerklärung (DSG Schweiz)",
    "legal.imp_content": `<strong>Oksana Gesichtsmassage</strong><br>
Oksana Matviichuk<br>
Sennrütistrasse 17<br>
9113 Degersheim, Schweiz<br><br>
<strong>Kontakt:</strong><br>
Telefon: +41 76 123 45 67<br>
E-Mail: info@oksana-gesichtsmassage.ch<br>
Webseite: www.oksana-gesichtsmassage.ch<br><br>
<strong>Verantwortliche Person:</strong> Oksana Matviichuk<br>
<strong>Zweck:</strong> Dienstleistungen im Bereich Entspannung, Gesichts- und Wohlbefindensmassage.`,
    "legal.dsg_content": `<strong>Datenschutzerklärung nach Schweizer Datenschutzgesetz (DSG)</strong><br><br>
Der Schutz Ihrer persönlichen Daten ist uns ein grosses Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften der Schweiz.<br><br>
<strong>1. Erhebung und Bearbeitung von Daten:</strong><br>
Wenn Sie mit uns Kontakt aufnehmen (z.B. per WhatsApp oder E-Mail), werden die von Ihnen gemachten Angaben zur Bearbeitung der Anfrage und allfälligen Terminierung verwendet.<br><br>
<strong>2. Ihre Rechte:</strong><br>
Sie haben das Recht auf Auskunft, Berichtigung oder Löschung Ihrer bei uns gespeicherten personenbezogenen Daten. Wenden Sie sich hierzu jederzeit an info@oksana-gesichtsmassage.ch.`
  },

  ru: {
    // Navigation
    "nav.about": "Обо мне",
    "nav.treatments": "Методика",
    "nav.pricing": "Цены",
    "nav.offers": "Курсы",
    "nav.booking": "Записаться",
    "nav.contact": "Контакты",
    "nav.location": "Локация",
    "nav.book_cta": "Записаться",

    // Top Bar
    "topbar.location": "Sennrütistrasse 17, 9113 Degersheim, Швейцария",
    "topbar.hours": "Ср, Чт, Пт по предварительной записи",

    // Hero
    "hero.badge": "ДЕГЕРСХАЙМ, ШВЕЙЦАРИЯ · БЕРЕЖНЫЙ УХОД",
    "hero.title": "Индивидуальный массаж лица для вашей естественной красоты",
    "hero.subtitle": "Мягкие техники. Глубокое действие. Для кожи, мышц и душевного спокойствия.",
    "hero.description": "Позвольте себе восстанавливающую паузу в уютной, тихой атмосфере. Бережный уход, снимающий мышечные зажимы и раскрывающий ваше сияние.",
    "hero.cta_book": "Записаться в WhatsApp",
    "hero.cta_learn": "Обо мне",
    "hero.quick_price": "Разовый сеанс · 80 CHF",
    "hero.intro_tag": "60 мин. массаж + 15 мин. индивидуальная консультация и анализ лица — 70 CHF",
    "hero.floating_title": "Оксана Матвийчук",
    "hero.floating_sub": "Бережное прикосновение и видимая свежесть",

    // Testimonials / Reviews (Authentic quotes in German)
    "reviews.tag": "ОТЗЫВЫ",
    "reviews.title": "Отзывы клиенток",
    "reviews.subtitle": "Подлинные отзывы клиенток (приведены на языке оригинала):",
    "reviews.read_more": "Читать отзыв полностью",
    "reviews.show_less": "Свернуть",
    "review1.text": "“Nach der Gesichtsmassage bin ich wirklich begeistert😆 Mich haben vor allem die Falten auf der Stirn gestört, und schon nach der ersten Behandlung waren sie deutlich weniger sichtbar. Mit so einem Ergebnis hätte ich ehrlich gesagt nicht gerechnet! 🤗<br><br>Die Behandlung war unglaublich angenehm und entspannend, und ich konnte richtig abschalten. Oksana erwies sich als sehr angenehme und kompetente Frau🙌<br><br>Ich kann sie wirklich jedem empfehlen, der sich etwas Gutes tun, entspannen und seinem Gesicht etwas Frische verleihen möchte. Ich komme auf jeden Fall gerne wieder 😊”",
    "review1.author": "Laura K.",
    "review2.text": "“Für mich ist eine Gesichtsmassage bei einer so professionellen Masseurin wie Oksana jedes Mal ein wahrer Genuss – sowohl für die Schönheit als auch für das Wohlbefinden. Einfach immer auf höchstem Niveau!”",
    "review2.author": "Maria S.",
    "review3.text": "“Seit ich bei Oksana in Behandlung habe ich viel weniger Nackenverspannungen. Mein Gesicht fühlt sich weich und entspannt an. Das Hautbild ist viel frischer geworden.”",
    "review3.author": "Claudia F.",

    // Für wen? (Benefits)
    "forwhom.tag": "ДЛЯ КОГО?",
    "forwhom.title": "Для всех, кто хочет подарить себе и своей коже заботу",
    "forwhom.intro": "Массаж лица воздействует глубоко на фасции и мышцы, стимулирует лимфоток и мягко снимает следы усталости и стресса.",
    "benefit1.title": "Естественное сияние",
    "benefit1.desc": "Свежий, отдохнувший тон кожи благодаря активной микроциркуляции.",
    "benefit2.title": "Глубокое расслабление",
    "benefit2.desc": "Снятие спазма в области челюсти, висков и шеи. Внутреннее спокойствие.",
    "benefit3.title": "Подтяжка и лифтинг",
    "benefit3.desc": "Тонизирует мышцы, очерчивает скулы и овал лица без уколов.",
    "benefit4.title": "Улучшение кровообращения",
    "benefit4.desc": "Клетки насыщаются кислородом, уходит отечность и пастозность.",

    // Indications & Contraindications
    "checklist.suitable_title": "Особенно рекомендуется при:",
    "checklist.s1": "Мышечном перенапряжении, зажимах челюсти (бруксизм)",
    "checklist.s2": "Мимических морщинках и снижении тургора кожи",
    "checklist.s3": "Отечности, нечетком контуре лица и втором подбородке",
    "checklist.s4": "Тусклом, уставшем цвете лица",
    "checklist.s5": "Стрессе, усталости и потребности в мягкой перезагрузке",

    "checklist.notsuitable_title": "Противопоказания (когда лучше отложить):",
    "checklist.n1": "Острые воспалительные процессы и открытые ранки на коже",
    "checklist.n2": "Обострение герпеса или кожные инфекции",
    "checklist.n3": "Тяжелая форма воспалительного акне",
    "checklist.n4": "Температура, ОРВИ и общее недомогание",
    "checklist.n5": "Свежие инъекции (ботокс, филлеры) или нити (менее 4 недель)",

    // About Me
    "about.tag": "ОБО МНЕ",
    "about.quote": "«Красота начинается с чуткости и внимания к себе.»",
    "about.p1": "Массаж лица начался для меня с личного интереса к естественному уходу и сохранению красоты. Со временем этот интерес стал профессией: я прошла профессиональное обучение и получила квалификацию массажиста-эстетиста, а также продолжаю изучать и осваивать различные техники массажа лица.",
    "about.p2": "Для меня каждое лицо индивидуально, поэтому я не работаю по одной стандартной схеме. На первой встрече я обращаю внимание на состояние тканей, мышечное напряжение, отёчность и особенности лица. В зависимости от этого я соединяю разные техники — лимфодренажные, миофасциальные, буккальные, Gua Sha и другие — и выстраиваю массаж именно под потребности конкретного человека.",
    "about.p3": "Мне нравится видеть, как после массажа лицо становится более расслабленным, свежим и живым. Именно ради этих естественных изменений я и люблю свою работу.",
    "about.studio_desc": "Уютное, светлое пространство для отдыха и гармонии с теплым освещением и спокойной музыкой.",

    // Treatments / Philosophy
    "tech.tag": "КОНЦЕПЦИЯ УХОДА",
    "tech.title": "Один массаж — индивидуальное сочетание техник для вашего лица",
    "tech.desc": "Я не разделяю массаж на отдельные изолированные процедуры по каталогу. Перед каждым сеансом и во время него я оцениваю состояние тканей, напряжение жевательных и мимических мышц, а также лимфоток. Исходя из этого, я соединяю в одной процедуре различные техники — миофасциальные, лимфодренажные, буккальные элементы и Gua Sha — именно так, как это необходимо вашему лицу в данный момент.",
    "tech.card1_title": "Чуткая оценка состояния",
    "tech.card1_desc": "Внимание к тканям, мимическим спазмам и склонности к отёкам перед каждым сеансом.",
    "tech.card2_title": "Индивидуальный микс техник",
    "tech.card2_desc": "Гармоничное соединение миофасциальных, лимфодренажных, буккальных и Gua Sha приёмов под вашу задачу.",
    "tech.card3_title": "Естественный результат",
    "tech.card3_desc": "Глубокое мышечное расслабление, свежий цвет лица и подтянутые контуры без искусственного вмешательства.",

    // Special Offers & Pricing
    "pricing.tag": "ЦЕНЫ И ПРЕДЛОЖЕНИЯ",
    "pricing.title": "Цены и предложения",

    // Kennenlernangebot
    "intro.badge": "ПЕРВЫЙ ВИЗИТ",
    "intro.simplified_text": "60 минут массаж + 15 минут индивидуальная консультация и анализ лица — 70 CHF",
    "intro.btn": "Записаться на знакомство",

    // Vollständige persönliche Gesichtsmassage
    "standard.title": "Полноценный персональный массаж лица",
    "standard.subtitle": "Процедура, созданная только для вас.",
    "standard.desc": "Полноценный персональный массаж лица, зоны декольте и шейно-воротниковой зоны с бережным уходом.",
    "standard.duration": "Длительность: 60 минут",
    "standard.price": "80 CHF",
    "standard.btn": "Записаться на сеанс",
    "standard.note": "Идеально для регулярного отдыха и поддержания тонуса.",

    // Packages / Abos
    "offers.title": "Абонементы и курсы",
    "sub1.badge": "ПОПУЛЯРНЫЙ ВЫБОР",
    "sub1.title": "Месяц заботы о себе",
    "sub1.price": "280 CHF",
    "sub1.unit": "за 4 процедуры",
    "sub1.calc": "по 70 CHF за процедуру (экономия 40 CHF)",
    "sub1.desc": "4 процедуры в течение месяца — по 70 CHF за процедуру. Отличная возможность регулярно посещать массаж лица и оценить накопительный эффект от непрерывного ухода.",
    "sub1.feature1": "4 процедуры в течение 4 недель",
    "sub1.feature2": "Идеально для стабильного снятия мышечного напряжения",
    "sub1.btn": "Выбрать курс на месяц",

    // Package 2: Individueller Kurs
    "sub2.badge": "ГЛУБОКИЙ РЕЗУЛЬТАТ",
    "sub2.title": "Индивидуальный курс",
    "sub2.duration": "10 процедур — 590 CHF",
    "sub2.calc": "Персональный план процедур",
    "sub2.desc": "Если вы хотите более глубокую и системную работу, после первой встречи я составлю для вас индивидуальный план. Частоту встреч и сочетание техник мы подбираем с учётом особенностей вашего лица и ваших пожеланий.",
    "sub2.benefit1": "Глубокое воздействие на мышцы, фасции и качество кожи",
    "sub2.benefit2": "Заметное улучшение контуров, упругости и разглаживание складок",
    "sub2.benefit3": "Долгосрочный накопительный эффект и профилактика",
    "sub2.benefit4": "<strong>В подарок:</strong> По желанию — техники Face Fitness для домашней практики в подарок",
    "sub2.btn": "Обсудить курс",

    // Booking Section
    "booking.title": "Подарите себе заслуженный отдых",
    "booking.subtitle": "Договоритесь об удобном времени визита легко и быстро прямо в WhatsApp. Буду рада вашему сообщению!",
    "booking.trust_time": "Прямая личная связь для записи",
    "booking.trust_care": "Индивидуальный подход к вашей коже",
    "booking.trust_room": "Уютная атмосфера в Дегерсхайме",
    "booking.btn_wa_main": "Записаться через WhatsApp",
    "booking.wa_phone": "+41 76 123 45 67",

    // Location
    "location.tag": "АДРЕС И ПРОЕЗД",
    "location.title": "Как добраться до студии",
    "location.address_label": "Адрес:",
    "location.address_val": "Sennrütistrasse 17, 9113 Degersheim, Швейцария",
    "location.transit_title": "Общественный транспорт:",
    "location.transit_desc": "Всего несколько минут пешком от железнодорожного вокзала Degersheim. Удобное сообщение из Санкт-Галлена, Херизау и Госсау.",
    "location.parking_title": "Парковка:",
    "location.parking_desc": "Гостевые парковочные места расположены прямо у здания или рядом.",
    "location.map_btn": "Проложить маршрут в Google Maps",

    // Contact & Footer
    "footer.about_text": "Oksana Gesichtsmassage – Индивидуальный массаж лица для естественной красоты, глубокого расслабления и бережного ухода в Дегерсхайме.",
    "footer.quick_links": "Разделы",
    "footer.contact_title": "Связь",
    "footer.languages_title": "Языки общения",
    "footer.languages_desc": "С удовольствием проведу консультацию на немецком, украинском или русском языке.",
    "footer.hours_title": "График работы",
    "footer.hours_desc": "Ср, Чт, Пт<br>по предварительной записи",
    "footer.rights": "© 2026 Oksana Gesichtsmassage · Все права защищены.",
    "footer.impressum": "Выходные данные (Impressum)",
    "footer.datenschutz": "Конфиденциальность (DSG)",

    // Legal Modals & Pages
    "legal.breadcrumb_home": "Главная",
    "legal.back_to_home": "&larr; На главную страницу",
    "legal.imp_title": "Impressum",
    "legal.dsg_title": "Защита данных (DSG Швейцария)",
    "legal.imp_content": `<strong>Oksana Gesichtsmassage</strong><br>
Oksana Matviichuk<br>
Sennrütistrasse 17<br>
9113 Degersheim, Schweiz<br><br>
<strong>Контакты:</strong><br>
Телефон: +41 76 123 45 67<br>
E-Mail: info@oksana-gesichtsmassage.ch<br>
Веб-сайт: www.oksana-gesichtsmassage.ch<br><br>
<strong>Ответственное лицо:</strong> Оксана Матвийчук<br>
<strong>Деятельность:</strong> Услуги в сфере расслабляющего и оздоровительного массажа лица.`,
    "legal.dsg_content": `<strong>Политика конфиденциальности согласно швейцарскому закону (DSG)</strong><br><br>
Защита ваших персональных данных имеет для нас первостепенное значение. Мы обрабатываем данные строго конфиденциально и в полном соответствии с законодательством Швейцарии о защите данных.<br><br>
<strong>1. Сбор и обработка данных:</strong><br>
При обращении через WhatsApp или по электронной почте указанные вами данные используются исключительно для обработки запроса и согласования времени визита.<br><br>
<strong>2. Ваши права:</strong><br>
Вы имеете право на получение информации, исправление или удаление ваших сохранённых персональных данных. Для этого свяжитесь с нами по адресу info@oksana-gesichtsmassage.ch.`
  },

  ua: {
    // Navigation
    "nav.about": "Про мене",
    "nav.treatments": "Методика",
    "nav.pricing": "Ціни",
    "nav.offers": "Курси",
    "nav.booking": "Записатися",
    "nav.contact": "Контакти",
    "nav.location": "Локація",
    "nav.book_cta": "Записатися",

    // Top Bar
    "topbar.location": "Sennrütistrasse 17, 9113 Degersheim, Швейцарія",
    "topbar.hours": "Ср, Чт, Пт за попереднім записом",

    // Hero
    "hero.badge": "ДЕГЕРСХАЙМ, ШВЕЙЦАРІЯ · ТУРБОТА З ЛЮБОВ'Ю",
    "hero.title": "Індивідуальний масаж обличчя для вашої природної краси",
    "hero.subtitle": "М'які техніки. Глибока дія. Для шкіри, м'язів та внутрішньої гармонії.",
    "hero.description": "Подаруйте собі відновлюючу паузу в спокійній атмосфері. Дбайлива процедура, що знімає щоденне напруження м'язів та підкреслює вашу природну свіжість.",
    "hero.cta_book": "Записатися у WhatsApp",
    "hero.cta_learn": "Про мене",
    "hero.quick_price": "Разовий сеанс · 80 CHF",
    "hero.intro_tag": "60 хв. масаж + 15 хв. індивідуальна консультація та аналіз обличчя — 70 CHF",
    "hero.floating_title": "Оксана Матвійчук",
    "hero.floating_sub": "Дбайливий дотик та видима свіжість",

    // Testimonials / Reviews (Authentic quotes in German)
    "reviews.tag": "ВІДГУКИ",
    "reviews.title": "Відгуки клієнток",
    "reviews.subtitle": "Справжні відгуки клієнток (наведено мовою оригіналу):",
    "reviews.read_more": "Читати відгук повністю",
    "reviews.show_less": "Згорнути",
    "review1.text": "“Nach der Gesichtsmassage bin ich wirklich begeistert😆 Mich haben vor allem die Falten auf der Stirn gestört, und schon nach der ersten Behandlung waren sie deutlich weniger sichtbar. Mit so einem Ergebnis hätte ich ehrlich gesagt nicht gerechnet! 🤗<br><br>Die Behandlung war unglaublich angenehm und entspannend, und ich konnte richtig abschalten. Oksana erwies sich als sehr angenehme und kompetente Frau🙌<br><br>Ich kann sie wirklich jedem empfehlen, der sich etwas Gutes tun, entspannen und seinem Gesicht etwas Frische verleihen möchte. Ich komme auf jeden Fall gerne wieder 😊”",
    "review1.author": "Laura K.",
    "review2.text": "“Für mich ist eine Gesichtsmassage bei einer so professionellen Masseurin wie Oksana jedes Mal ein wahrer Genuss – sowohl für die Schönheit als auch für das Wohlbefinden. Einfach immer auf höchstem Niveau!”",
    "review2.author": "Maria S.",
    "review3.text": "“Seit ich bei Oksana in Behandlung habe ich viel weniger Nackenverspannungen. Mein Gesicht fühlt sich weich und entspannt an. Das Hautbild ist viel frischer geworden.”",
    "review3.author": "Claudia F.",

    // Für wen? (Benefits)
    "forwhom.tag": "ДЛЯ КОГО?",
    "forwhom.title": "Для всіх, хто хоче подарувати собі та своїй шкірі турботу",
    "forwhom.intro": "Масаж обличчя діє глибоко на фасції та м'язи, активізує лімфообіг і дозволяє м'яко відпустити втому.",
    "benefit1.title": "Природне сяйво",
    "benefit1.desc": "Свіжий, відпочилий тон шкіри завдяки покращеній мікроциркуляції.",
    "benefit2.title": "Глибоке розслаблення",
    "benefit2.desc": "Зняття спазму в зоні щелепи, скронь та шиї. Внутрішній спокій.",
    "benefit3.title": "Підтяжка та ліфтинг",
    "benefit3.desc": "Тонізує м'язи, окреслює вилиці та контури без уколів.",
    "benefit4.title": "Покращення кровообігу",
    "benefit4.desc": "Клітини насичуються киснем, зменшується набряклість.",

    // Indications & Contraindications
    "checklist.suitable_title": "Особливо рекомендується при:",
    "checklist.s1": "М'язовому перенапруженні, затисках щелепи (бруксизм)",
    "checklist.s2": "Мімічних зморшках та втраті еластичності шкіри",
    "checklist.s3": "Набряклості, нечіткому овалі обличчя або другому підборідді",
    "checklist.s4": "Тьмяному, нерівномірному кольорі обличчя",
    "checklist.s5": "Стресі, втомі та бажанні приділити якісний час собі",

    "checklist.notsuitable_title": "Протипоказання (коли краще зачекати):",
    "checklist.n1": "Гострі запальні процеси та відкриті пошкодження шкіри",
    "checklist.n2": "Загострення герпесу або інфекційні висипання",
    "checklist.n3": "Важка форма запального акне",
    "checklist.n4": "Температура, вірусні інфекції та загальне нездужання",
    "checklist.n5": "Свіжі ін'єкції (ботокс, філери) або нитки (менше 4 тижнів тому)",

    // About Me
    "about.tag": "ПРО МЕНЕ",
    "about.quote": "«Краса починається з уважності та турботи про себе.»",
    "about.p1": "Масаж обличчя розпочався для мене з особистого інтересу до природного догляду та збереження краси. З часом цей інтерес переріс у професію: я пройшла професійне навчання та здобула кваліфікацію масажиста-естетиста, а також продовжую вивчати й опановувати різноманітні техніки масажу обличчя.",
    "about.p2": "Для мене кожне обличчя індивідуальне, тому я не працюю за єдиною стандартною схемою. На першій зустрічі я звертаю увагу на стан тканин, м'язове напруження, набряклість та особливості обличчя. Залежно від цього я поєдную різні техніки — лімфодренажні, міофасціальні, букальні, Gua Sha та інші — і вибудовую масаж саме під потреби конкретної людини.",
    "about.p3": "Мені подобається бачити, як після масажу обличчя стає більш розслабленим, свіжим і живим. Саме заради цих природних змін я й люблю свою роботу.",
    "about.studio_desc": "Затишний, спокійний простір для відпочинку з м'яким освітленням і атмосферою релаксу.",

    // Treatments / Philosophy
    "tech.tag": "КОНЦЕПЦІЯ ДОГЛЯДУ",
    "tech.title": "Один масаж — індивідуальне поєднання технік для вашого обличчя",
    "tech.desc": "Я не розділяю масаж на окремі шаблонні процедури за каталогом. Перед кожним сеансом та під час нього я оцінюю стан тканин, напруження жувальних і мімічних м'язів та лімфообіг. Виходячи з цього, я гармонійно поєдную в одній процедурі різні техніки — міофасціальні, лімфодренажні, букальні елементи та Gua Sha — саме так, як це необхідно вашому обличчю в цей момент.",
    "tech.card1_title": "Уважна оцінка стану",
    "tech.card1_desc": "Увага до тканин, зон спазму та схильності до набряків перед кожною процедурою.",
    "tech.card2_title": "Індивідуальне поєднання технік",
    "tech.card2_desc": "Гармонійне поєднання міофасціальних, лімфодренажних, букальних та Gua Sha технік під вашу потребу.",
    "tech.card3_title": "Природний живий результат",
    "tech.card3_desc": "Глибоке розслаблення м'язів, свіжий колір та підтягнуті контури обличчя без штучних втручань.",

    // Special Offers & Pricing
    "pricing.tag": "ЦІНИ ТА ПРОПОЗИЦІЇ",
    "pricing.title": "Ціни та пропозиції",

    // Kennenlernangebot
    "intro.badge": "ПЕРШИЙ ВІЗИТ",
    "intro.simplified_text": "60 хвилин масаж + 15 хвилин індивідуальна консультація та аналіз обличчя — 70 CHF",
    "intro.btn": "Записатися на знайомство",

    // Vollständige persönliche Gesichtsmassage
    "standard.title": "Повноцінний персональний масаж обличчя",
    "standard.subtitle": "Процедура, створена спеціально для вас.",
    "standard.desc": "Глибокий, приємний масаж обличчя, зони декольте та шиї з індивідуальним доглядом.",
    "standard.duration": "Тривалість: 60 хвилин",
    "standard.price": "80 CHF",
    "standard.btn": "Записатися на сеанс",
    "standard.note": "Ідеально для регулярного відпочинку та свіжості.",

    // Packages / Abos
    "offers.title": "Абонементи та курси",
    "sub1.badge": "ПОПУЛЯРНИЙ ВИБІР",
    "sub1.title": "Місяць турботи про себе",
    "sub1.price": "280 CHF",
    "sub1.unit": "за 4 процедури",
    "sub1.calc": "по 70 CHF за процедуру (економія 40 CHF)",
    "sub1.desc": "4 процедури протягом одного місяця — по 70 CHF за процедуру. Чудовий варіант для тих, хто хоче регулярно відвідувати масаж і спостерігати за стійкими позитивними змінами.",
    "sub1.feature1": "4 процедури протягом 4 тижнів",
    "sub1.feature2": "Ідеально для стабільного зняття м'язового напруження",
    "sub1.btn": "Обрати курс на місяць",

    // Package 2: Individueller Kurs
    "sub2.badge": "СТІЙКИЙ РЕЗУЛЬТАТ",
    "sub2.title": "Індивідуальний курс",
    "sub2.duration": "10 процедур — 590 CHF",
    "sub2.calc": "Персональний план процедур",
    "sub2.desc": "Якщо ви прагнете глибшої та системної роботи, після першої зустрічі я складу для вас індивідуальний план. Частоту зустрічей та поєднання технік ми підбираємо з урахуванням особливостей вашого обличчя та ваших побажань.",
    "sub2.benefit1": "Глибока дія на м'язи, фасції та пружність шкіри",
    "sub2.benefit2": "Помітне покращення овалу обличчя, згладження мімічних зморшок",
    "sub2.benefit3": "Довготривалий накопичувальний ефект та профілактика",
    "sub2.benefit4": "<strong>В подарунок:</strong> За бажанням — техніки Face Fitness для домашньої практики в подарунок",
    "sub2.btn": "Обговорити курс",

    // Booking Section
    "booking.title": "Подаруйте собі заслужений відпочинок",
    "booking.subtitle": "Домовтеся про зручний час візиту легко та швидко прямо у WhatsApp. Буду рада вашому повідомленню!",
    "booking.trust_time": "Прямий особистий зв'язок для запису",
    "booking.trust_care": "Індивідуально підібраний догляд",
    "booking.trust_room": "Затишна атмосфера в Дегерсхаймі",
    "booking.btn_wa_main": "Записатися через WhatsApp",
    "booking.wa_phone": "+41 76 123 45 67",

    // Location
    "location.tag": "АДРЕСА ТА ПРОЇЗД",
    "location.title": "Як дістатися до студії",
    "location.address_label": "Адреса:",
    "location.address_val": "Sennrütistrasse 17, 9113 Degersheim, Швейцарія",
    "location.transit_title": "Громадський транспорт:",
    "location.transit_desc": "Лише кілька хвилин пішки від залізничного вокзалу Degersheim. Зручне сполучення із Санкт-Галлена, Герізау та Госсау.",
    "location.parking_title": "Паркування:",
    "location.parking_desc": "Гостьові паркомісця розташовані безпосередньо біля будівлі.",
    "location.map_btn": "Прокласти маршрут у Google Maps",

    // Contact & Footer
    "footer.about_text": "Oksana Gesichtsmassage – Індивідуальний масаж обличчя для природної краси, глибокого розслаблення та дбайливого догляду в Дегерсхаймі.",
    "footer.quick_links": "Розділи",
    "footer.contact_title": "Контакти",
    "footer.languages_title": "Мови спілкування",
    "footer.languages_desc": "Завжди рада проконсультувати вас українською, німецькою або російською мовою.",
    "footer.hours_title": "Графік прийому",
    "footer.hours_desc": "Ср, Чт, Пт<br>за попереднім записом",
    "footer.rights": "© 2026 Oksana Gesichtsmassage · Усі права захищено.",
    "footer.impressum": "Вихідні дані (Impressum)",
    "footer.datenschutz": "Конфіденційність (DSG)",

    // Legal Modals & Pages
    "legal.breadcrumb_home": "Головна",
    "legal.back_to_home": "&larr; На головну сторінку",
    "legal.imp_title": "Impressum",
    "legal.dsg_title": "Захист персональних даних (DSG Швейцарія)",
    "legal.imp_content": `<strong>Oksana Gesichtsmassage</strong><br>
Oksana Matviichuk<br>
Sennrütistrasse 17<br>
9113 Degersheim, Schweiz<br><br>
<strong>Контакти:</strong><br>
Телефон: +41 76 123 45 67<br>
E-Mail: info@oksana-gesichtsmassage.ch<br>
Веб-сайт: www.oksana-gesichtsmassage.ch<br><br>
<strong>Відповідальна особа:</strong> Оксана Матвійчук<br>
<strong>Діяльність:</strong> Послуги у сфері релаксуючого та оздоровчого масажу обличчя.`,
    "legal.dsg_content": `<strong>Політика конфіденційності згідно зі швейцарським законом (DSG)</strong><br><br>
Захист ваших персональних даних є нашим головним пріоритетом. Ми обробляємо дані суворо конфіденційно відповідно до вимог швейцарського законодавства про захист даних.<br><br>
<strong>1. Збір та обробка даних:</strong><br>
Під час звернення через WhatsApp або електронною поштою надана вами інформація використовується виключно для обробки запиту та організації вашого візиту.<br><br>
<strong>2. Ваші права:</strong><br>
Ви маєте право на отримання інформації, виправлення або видалення збережених персональних даних. Для цього звертайтеся за адресою info@oksana-gesichtsmassage.ch.`
  }
};

// WhatsApp prefilled message templates per locale and type
const waMessages = {
  de: {
    general: "Hallo Oksana, ich möchte gerne einen Termin für eine Gesichtsmassage vereinbaren.",
    intro: "Hallo Oksana, ich interessiere mich für das Kennenlernangebot (60 Min. Massage + 15 Min. persönliche Beratung und Gesichtsanalyse — 70 CHF).",
    standard: "Hallo Oksana, ich interessiere mich für die Vollständige persönliche Gesichtsmassage (60 Min. — 80 CHF).",
    month: "Hallo Oksana, ich interessiere mich für das Monatspaket «Ein Monat Zeit für sich» (4 Behandlungen — 280 CHF).",
    course: "Hallo Oksana, ich interessiere mich für den Individuellen Massagekurs (10 Behandlungen — 590 CHF)."
  },
  ru: {
    general: "Здравствуйте, Оксана! Я хочу записаться на массаж лица.",
    intro: "Здравствуйте, Оксана! Меня интересует первое знакомство (60 минут массаж + 15 минут индивидуальная консультация и анализ лица — 70 CHF).",
    standard: "Здравствуйте, Оксана! Меня интересует полноценный персональный массаж лица (60 минут — 80 CHF).",
    month: "Здравствуйте, Оксана! Меня интересует курс «Месяц заботы о себе» (4 процедуры — 280 CHF).",
    course: "Здравствуйте, Оксана! Меня интересует индивидуальный курс (10 процедур — 590 CHF)."
  },
  ua: {
    general: "Доброго дня, Оксано! Я хочу записатися на масаж обличчя.",
    intro: "Доброго дня, Оксано! Мене цікавить перше знайомство (60 хвилин масаж + 15 хвилин індивідуальна консультація та аналіз обличчя — 70 CHF).",
    standard: "Доброго дня, Оксано! Мене цікавить повноцінний персональний масаж обличчя (60 хвилин — 80 CHF).",
    month: "Доброго дня, Оксано! Мене цікавить курс «Місяць турботи про себе» (4 процедури — 280 CHF).",
    course: "Доброго дня, Оксано! Мене цікавить індивідуальний курс (10 процедур — 590 CHF)."
  }
};

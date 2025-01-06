import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      header: {
        home: "Home",
        whyUs: "Why Choose Us?",
        private: "Private",
        getAccess: "Get access",
        your: "Your",
        online: "Online",
        freedom: "Freedom",
        startsHere: "Starts Here",
        anonymous: "100% Anonymous,",
        noLogs: "No Logs, No Tracking,",
        browsing: "Unrestricted Browsing",
        start: "Start Now",
        enjoy: "Enjoy the Internet Without Limits",
        noWorry:
          "Our VPN ensures your privacy is protected while giving you access to the content you love — securely and anonymously",
      },

      whyUs: {
        whyChooseUs1: "Why",
        whyChooseUs2: "Choose Us?",
        trust: "People trust us",
        giga: "Total gigabytes of data protected",
        global: "Access Global Content",
        using1: "Using cutting-edge protocols such ",
        using2: "as VLESS allows us",
        top1: "Top-Tier",
        top2: "Security",
        blazing1: "Blazing",
        blazing2: "Fast",
        blazing3: "Speeds",
        stream1: "Stream, browse,",
        stream2: "and download with ",
        stream3: "no interruptions",
        unlimited1: "Unlimited",
        unlimited2: "Bandwidth",
        noData: "No data caps, no throttling.",
        experience: "Enjoy an unrestricted internet experience",
        max: "max"
      },

      curtain: {
        ready: "Ready to Experience Online Freedom?",
        iamready: "I am ready!"
      },

      steps: {
        getStarted: "Get Started in 3 Simple Steps",
        click: "Click to Join",
        chat1: "Chat with Our",
        chat2: "Bot",
        chatBtn: "Go chat",
        setup: "Set Up Your Secure VPN in Minutes",


      },

      faq: {
        title: "FAQ",
        faqs: [
            {
                question: "Who are you and who stands behind this VPN service?",
                answer: 
                  "At Wraith VPN we're a passionate team of tech enthusiasts and privacy advocates dedicated to helping you achieve online freedom and security regardless of any restrictions possible. Our team consists of professionals from diverse backgrounds, including cybersecurity, software development, and customer service, all committed to providing you with the best possible VPN experience. We are highly experienced web users facing restrictions every day. Using other VPN and proxy services which give our sensitive data away, we decided to develop our own product which will push your user experience to the moon",
              },
              {
                question: "What is V2Ray and why should I use it?",
                answer:
                  "V2Ray is an open-source network proxy tool designed to enhance internet privacy, security, and bypass censorship. It encrypts and obfuscates internet traffic to make it harder for censorship systems to detect or block, and offers advanced routing, load balancing, and flexible configuration options. It is commonly used in restrictive regions to evade surveillance and access restricted content. By turning V2Ray VPN on your device you will bypass the restrictions and easily access the resources you need to (Instagram, YouTube, etc.).",
              },
              {
                question: "Is my data safe with VLESS VPN?",
                answer: 
                  "Yes! VLESS encrypts your internet traffic, ensuring that your browsing, online activity, and personal data remain private. Additionally, it helps protect against man-in-the-middle attacks.",
              },
              {
                question: "What is the difference between VLESS and other VPN protocols?",
                answer: 
                  "VLESS is more efficient than older protocols like other V2Ray protocols, offering improved performance and better resistance to censorship. It's designed for a more lightweight and secure connection."
              },
              {
                question: "What devices can I use VLESS VPN on?",
                answer: "VLESS VPN can be used on multiple devices, including:\nWindows (via V2Ray or XRay clients)\nMacOS (via V2Ray, V2Box or XRay clients)\nAndroid (via V2RayNG or similar apps)\niOS (via Shadowrocket, Streisand, V2Box or similar apps)",
              },
              {
                question: "How do I buy a subscription?",
                answer: 'To purchase a subscription, simply click on the "Buy" button in the bot menu, choose your preferred plan, and follow the instructions. If you have enough balance to make a purchase you will receive your VPN configuration. After that you need to insert the configuration into one of the apps supporting VLESS and press "connect" button',
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept payments via:Cryptocurrency (Bitcoin, Litecoin, USDT etc.)Russian Ruble P2P (via third-party payment processors)",
              },
              {
                question: "How can I contact support?",
                answer: 'You can contact our support team by clicking the "Support" button in the bot. We’ll respond as quickly as possible to resolve any issues.',
              },
              {
                question: "Do you offer a free trial?",
                answer: "We give every new user of our bot a welcome bonus which can be used to buy a trial subscription and test our product. Welcome bonus cannot be exchanged, transferred and withdrawn, it serves for your better engagement to the service",
              },
        ]
      },

      privacy: {
        yourRules: "Your Privacy, Your Rules",
        noTrack: "We don’t track. We don’t log. We don’t judge."
      },


      footer: {

        rights: "All Right Reserved",
        why: "Why Wraith VPN?",
        steps: "Steps",
        faq: "FAQ",
        join: "Join",
        terms: "Terms of use",
        privacy: "Privacy policy",
        refund: "Refund Policy",
      },
    },
  },
  ru: {
    translation: {
        welcome: "Добро пожаловать",
        header: {
          home: "Главная",
          whyUs: "Почему выбирают нас?",
          private: "Приватность",
          getAccess: "Получить доступ",
          your: "Ваша",
          online: "Интернет",
          freedom: "Свобода",
          startsHere: "Начинается здесь",
          anonymous: "100% Анонимность,",
          noLogs: "Без логов, Без слежки,",
          browsing: "Безграничный доступ",
          start: "Начать сейчас",
          enjoy: "Наслаждайтесь Интернетом без ограничений",
          noWorry:
            "Наш VPN защищает вашу конфиденциальность и предоставляет доступ к любимому контенту безопасно и анонимно",
        },
  
        whyUs: {
          whyChooseUs1: "Почему",
          whyChooseUs2: "выбирают нас?",
          trust: "Люди доверяют нам",
          giga: "Всего гигабайт данных защищено",
          global: "Доступ к мировому контенту",
          using1: "Использование передовых протоколов, таких как",
          using2: "VLESS позволяет нам",
          top1: "Высокий уровень",
          top2: "безопасности",
          blazing1: "Молниеносные",
          blazing2: "скорости",
          blazing3: "передачи данных",
          stream1: "Стримьте, просматривайте",
          stream2: "и скачивайте без",
          stream3: "перерывов",
          unlimited1: "Неограниченная",
          unlimited2: "пропускная способность",
          noData: "Нет ограничений по данным, нет ограничений скорости.",
          experience: "Наслаждайтесь неограниченным интернет-опытом",
          max: "максимум"
        },
  
        curtain: {
          ready: "Готовы испытать свободу в интернете?",
          iamready: "Я готов!"
        },
  
        steps: {
          getStarted: "Начните за 3 простых шага",
          click: "Нажмите для присоединения",
          chat1: "Чат с нашим",
          chat2: "ботом",
          chatBtn: "Перейти в чат",
          setup: "Настройте свой VPN за несколько минут",
        },
  
        faq: {
          title: "Часто задаваемые вопросы",
          faqs: [
              {
                  question: "Кто вы и кто стоит за этим VPN-сервисом?",
                  answer: 
                    "В Wraith VPN работает команда энтузиастов технологий и защитников конфиденциальности, стремящихся помочь вам достичь свободы и безопасности в интернете, несмотря на возможные ограничения. Наша команда состоит из профессионалов, включая специалистов в области кибербезопасности, разработки программного обеспечения и клиентского сервиса, все они нацелены на то, чтобы предоставить вам лучший VPN-опыт. Мы — опытные пользователи интернета, сталкивающиеся с ограничениями ежедневно. Используя другие VPN и прокси-сервисы, которые передают наши конфиденциальные данные, мы решили создать собственный продукт, который повысит ваш пользовательский опыт до небес.",
                },
                {
                  question: "Что такое V2Ray и почему я должен его использовать?",
                  answer:
                    "V2Ray — это инструмент с открытым исходным кодом, предназначенный для улучшения конфиденциальности и безопасности в интернете и обхода цензуры. Он шифрует и маскирует интернет-трафик, чтобы сделать его сложным для систем цензуры и блокировки, а также предлагает улучшенную маршрутизацию, балансировку нагрузки и гибкие параметры конфигурации. Он часто используется в регионах с жесткой цензурой для обхода слежки и доступа к ограниченному контенту. Включив V2Ray VPN на вашем устройстве, вы обойдете ограничения и сможете свободно получить доступ к нужным ресурсам (Instagram, YouTube и т. д.).",
                },
                {
                  question: "Безопасны ли мои данные с VLESS VPN?",
                  answer: 
                    "Да! VLESS шифрует ваш интернет-трафик, обеспечивая защиту вашего браузинга, онлайн-активности и личных данных. Также он помогает защититься от атак «человек посередине».",
                },
                {
                  question: "В чем разница между VLESS и другими протоколами VPN?",
                  answer: 
                    "VLESS более эффективен, чем старые протоколы, такие как другие протоколы V2Ray, предлагая улучшенную производительность и большую устойчивость к цензуре. Он разработан для более легкого и безопасного подключения."
                },
                {
                  question: "На каких устройствах я могу использовать VLESS VPN?",
                  answer: "VLESS VPN можно использовать на нескольких устройствах, включая:\nWindows (через клиентов V2Ray или XRay)\nMacOS (через клиентов V2Ray, V2Box или XRay)\nAndroid (через V2RayNG или аналогичные приложения)\niOS (через Shadowrocket, Streisand, V2Box или аналогичные приложения)",
                },
                {
                  question: "Как я могу купить подписку?",
                  answer: 'Чтобы приобрести подписку, просто нажмите на кнопку "Купить" в меню бота, выберите предпочтительный план и следуйте инструкциям. Если у вас достаточно баланса для покупки, вы получите конфигурацию VPN. Затем вам нужно будет вставить эту конфигурацию в одно из приложений, поддерживающих VLESS, и нажать кнопку "Подключить".',
                },
                {
                  question: "Какие методы оплаты вы принимаете?",
                  answer: "Мы принимаем оплату через: криптовалюту (Bitcoin, Litecoin, USDT и т. д.), российские рубли P2P (через сторонние платежные сервисы)",
                },
                {
                  question: "Как я могу связаться с поддержкой?",
                  answer: 'Вы можете связаться с нашей службой поддержки, нажав кнопку "Поддержка" в боте. Мы ответим как можно быстрее, чтобы решить вашу проблему.',
                },
                {
                  question: "Предоставляете ли вы бесплатный пробный период?",
                  answer: "Каждому новому пользователю нашего бота мы предоставляем бонус, который можно использовать для покупки пробной подписки и тестирования нашего продукта. Бонус не подлежит обмену, переводу и снятию, он служит для вашего более эффективного вовлечения в сервис.",
                },
          ]
        },
  
        privacy: {
          yourRules: "Ваша конфиденциальность, ваши правила",
          noTrack: "Мы не отслеживаем. Мы не ведем логи. Мы не осуждаем."
        },
  
  
        footer: {
  
          rights: "Все права защищены",
          why: "Почему Wraith VPN?",
          steps: "Шаги",
          faq: "FAQ",
          join: "Присоединиться",
          terms: "Условия использования",
          privacy: "Политика конфиденциальности",
          refund: "Политика возврата",
        },
      },
  },
  zh: {
    translation: {
        welcome: "欢迎",
      header: {
        home: "首页",
        whyUs: "为什么选择我们？",
        private: "私人",
        getAccess: "获取访问",
        your: "您的",
        online: "在线",
        freedom: "自由",
        startsHere: "从这里开始",
        anonymous: "100% 匿名，",
        noLogs: "没有日志，没有跟踪，",
        browsing: "无限制浏览",
        start: "立即开始",
        enjoy: "享受没有限制的互联网",
        noWorry: "我们的VPN确保您的隐私得到保护，同时让您安全、匿名地访问您喜爱的内容",
      },
      whyUs: {
        whyChooseUs1: "为什么",
        whyChooseUs2: "选择我们？",
        trust: "人们信任我们",
        giga: "受保护的总数据量（GB）",
        global: "访问全球内容",
        using1: "使用前沿协议，如",
        using2: "VLESS让我们能够",
        top1: "顶级",
        top2: "安全性",
        blazing1: "极速",
        blazing2: "快速",
        blazing3: "速度",
        stream1: "流式传输，浏览，",
        stream2: "下载，",
        stream3: "没有中断",
        unlimited1: "无限带宽",
        unlimited2: "无限带宽",
        noData: "没有数据上限，没有速度限制。",
        experience: "享受无限制的互联网体验",
        max: "最大"
      },
      curtain: {
        ready: "准备好体验在线自由了吗？",
        iamready: "我准备好了!"
      },
      steps: {
        getStarted: "3个简单步骤开始",
        click: "点击加入",
        chat1: "与我们的",
        chat2: "机器人聊天",
        chatBtn: "去聊天",
        setup: "几分钟内设置安全VPN",
      },
      faq: {
        title: "常见问题",
        faqs: [
            {
                question: "你们是谁，谁支持这个VPN服务？",
                answer: "在Wraith VPN，我们是一个热衷于技术和隐私倡导的团队，致力于帮助您实现在线自由和安全，无论可能面临任何限制。我们的团队由来自不同背景的专业人士组成，包括网络安全、软件开发和客户服务，所有人都致力于为您提供最好的VPN体验。我们是有经验的网络用户，每天都面临限制。使用其他VPN和代理服务泄露了我们的敏感数据，我们决定开发自己的产品，将您的用户体验提升到巅峰。",
              },
              {
                question: "什么是V2Ray，为什么我应该使用它？",
                answer: "V2Ray是一个开源网络代理工具，旨在增强互联网隐私、安全性并绕过审查。它加密和混淆互联网流量，使审查系统更难以检测或阻止，并提供先进的路由、负载均衡和灵活的配置选项。它通常用于限制区域以逃避监控并访问受限内容。通过打开V2Ray VPN，您将绕过限制并轻松访问所需的资源（例如Instagram、YouTube等）。",
              },
              {
                question: "VLESS VPN能保护我的数据安全吗？",
                answer: "是的！VLESS加密您的互联网流量，确保您的浏览、在线活动和个人数据保持私密。此外，它还有助于防止中间人攻击。",
              },
              {
                question: "VLESS和其他VPN协议有什么区别？",
                answer: "VLESS比旧的协议更高效，提供更好的性能和对审查的抗性。它被设计为提供更轻量且更安全的连接。",
              },
              {
                question: "我可以在什么设备上使用VLESS VPN？",
                answer: "VLESS VPN可以在多种设备上使用，包括：\nWindows（通过V2Ray或XRay客户端）\nMacOS（通过V2Ray、V2Box或XRay客户端）\nAndroid（通过V2RayNG或类似应用）\niOS（通过Shadowrocket、Streisand、V2Box或类似应用）",
              },
              {
                question: "如何购买订阅？",
                answer: '要购买订阅，只需点击机器人菜单中的“购买”按钮，选择您喜欢的计划并按照说明操作。如果您有足够的余额进行购买，您将收到您的VPN配置。之后，您需要将配置插入支持VLESS的应用并按“连接”按钮。',
              },
              {
                question: "你们接受哪些支付方式？",
                answer: "我们接受以下支付方式：加密货币（比特币、莱特币、USDT等）俄罗斯卢布P2P（通过第三方支付处理器）",
              },
              {
                question: "我怎么联系支持部门？",
                answer: '您可以通过点击机器人中的“支持”按钮联系我们的支持团队。我们会尽快回应并解决任何问题。',
              },
              {
                question: "你们提供免费试用吗？",
                answer: "我们为每个新用户提供一个欢迎奖金，可用于购买试用订阅并测试我们的产品。欢迎奖金不可兑换、转移或提现，它是为了让您更好地参与我们的服务。",
              },
        ]
      },
      privacy: {
        yourRules: "您的隐私，您的规则",
        noTrack: "我们不追踪。我们不记录。我们不评判。",
      },
      footer: {
        rights: "版权所有",
        why: "为什么选择Wraith VPN？",
        steps: "步骤",
        faq: "常见问题",
        join: "加入",
        terms: "使用条款",
        privacy: "隐私政策",
        refund: "退款政策",
      },
    }
    },
  fa: {
    translation: {
        welcome: "خوش آمدید",
        header: {
          home: "خانه",
          whyUs: "چرا ما را انتخاب کنید؟",
          private: "خصوصی",
          getAccess: "دسترسی بگیرید",
          your: "שֶׁלְךָ",
          online: "אינטרנט",
          freedom: "חופש",
          startsHere: "מתחיל כאן",
          anonymous: "۱۰۰٪ ناشناس،",
          noLogs: "بدون گزارش، بدون ردیابی،",
          browsing: "گشت و گذار بدون محدودیت",
          start: "همین حالا شروع کنید",
          enjoy: "از اینترنت بدون محدودیت لذت ببرید",
          noWorry:
            "VPN ما حریم خصوصی شما را تضمین می‌کند و به شما اجازه می‌دهد که به محتوای دلخواه خود به صورت ایمن و ناشناس دسترسی پیدا کنید",
        },
        whyUs: {
          whyChooseUs1: "چرا",
          whyChooseUs2: "ما را انتخاب کنید؟",
          trust: "مردم به ما اعتماد دارند",
          giga: "کل گیگابایت‌های داده‌های محافظت‌شده",
          global: "دسترسی به محتوای جهانی",
          using1: "استفاده از پروتکل‌های پیشرفته مانند",
          using2: "VLESS به ما این امکان را می‌دهد",
          top1: "امنیت درجه یک",
          top2: "امنیت",
          blazing1: "سرعت‌های بسیار سریع",
          blazing2: "سرعت‌های سریع",
          blazing3: "سرعت بالا",
          stream1: "پخش، مرور،",
          stream2: "و دانلود بدون هیچ‌گونه وقفه",
          stream3: "بدون وقفه",
          unlimited1: "باند پهنای نامحدود",
          unlimited2: "باند پهنای نامحدود",
          noData: "هیچ محدودیتی برای داده‌ها، هیچ محدودیتی برای سرعت.",
          experience: "از تجربه‌ای بدون محدودیت لذت ببرید",
          max: "حداکثر"
        },
        curtain: {
          ready: "آماده تجربه آزادی آنلاین هستید؟",
          iamready: "آماده‌ام!"
        },
        steps: {
          getStarted: "شروع در 3 قدم ساده",
          click: "برای پیوستن کلیک کنید",
          chat1: "با ربات ما چت کنید",
          chat2: "چت با ربات",
          chatBtn: "چت برو",
          setup: "VPN امن خود را در چند دقیقه راه‌اندازی کنید",
        },
        faq: {
          title: "سوالات متداول",
          faqs: [
              {
                  question: "شما کی هستید و چه کسانی پشت این سرویس VPN هستند؟",
                  answer: "در Wraith VPN، ما تیمی مشتاق از علاقه‌مندان به تکنولوژی و حامیان حریم خصوصی هستیم که هدفمان کمک به شما برای دستیابی به آزادی آنلاین و امنیت در کنار هرگونه محدودیت ممکن است. تیم ما از حرفه‌ای‌هایی با زمینه‌های مختلف، از جمله امنیت سایبری، توسعه نرم‌افزار و پشتیبانی مشتری تشکیل شده است که همه به شما بهترین تجربه VPN ممکن را ارائه می‌دهند. ما به عنوان کاربران وب با تجربه با محدودیت‌های روزانه، از خدمات VPN و پروکسی دیگر استفاده می‌کردیم که داده‌های حساس ما را لو می‌دادند، و تصمیم گرفتیم محصول خود را توسعه دهیم که تجربه کاربری شما را به اوج برساند.",
                },
                {
                  question: "V2Ray چیست و چرا باید از آن استفاده کنم؟",
                  answer: "V2Ray یک ابزار پروکسی شبکه متن‌باز است که برای افزایش حریم خصوصی اینترنت، امنیت و عبور از سانسور طراحی شده است. این ابزار ترافیک اینترنت را رمزگذاری و پنهان می‌کند تا شناسایی یا مسدود شدن آن توسط سیستم‌های سانسور سخت‌تر شود. V2Ray همچنین امکانات مسیریابی پیشرفته، تعادل بار و پیکربندی‌های انعطاف‌پذیر را فراهم می‌کند. این ابزار در مناطق با محدودیت‌های بالا برای دور زدن نظارت و دسترسی به محتوای محدود استفاده می‌شود. با روشن کردن V2Ray VPN در دستگاه خود، می‌توانید محدودیت‌ها را دور بزنید و به راحتی به منابع مورد نیاز خود (مانند اینستاگرام، یوتیوب و غیره) دسترسی پیدا کنید.",
                },
                {
                  question: "آیا داده‌های من با VLESS VPN امن هستند؟",
                  answer: "بله! VLESS ترافیک اینترنت شما را رمزگذاری می‌کند و از حریم خصوصی شما در برابر حملات میانه‌راه محافظت می‌کند.",
                },
                {
                  question: "تفاوت VLESS با دیگر پروتکل‌های VPN چیست؟",
                  answer: "VLESS کارآمدتر از پروتکل‌های قدیمی‌تر است و عملکرد بهتری در مقاومت در برابر سانسور ارائه می‌دهد. این پروتکل برای ایجاد ارتباطی سبک‌تر و امن‌تر طراحی شده است."
                },
                {
                  question: "چه دستگاه‌هایی می‌توانند از VPN VLESS استفاده کنند؟",
                  answer: "VLESS VPN می‌تواند بر روی دستگاه‌های مختلفی استفاده شود، از جمله:\nویندوز (از طریق V2Ray یا XRay)\nمک‌اواس (از طریق V2Ray، V2Box یا XRay)\nاندروید (از طریق V2RayNG یا برنامه‌های مشابه)\nآی‌او‌اس (از طریق Shadowrocket، Streisand یا V2Box)",
                },
                {
                  question: "چگونه می‌توانم یک اشتراک خریداری کنم؟",
                  answer: 'برای خرید اشتراک، کافی است دکمه "خرید" را در منوی ربات بزنید، طرح مورد نظر خود را انتخاب کنید و دستورالعمل‌ها را دنبال کنید. اگر موجودی کافی برای خرید داشته باشید، پیکربندی VPN خود را دریافت خواهید کرد. سپس باید پیکربندی را در یکی از برنامه‌های پشتیبانی‌کننده از VLESS وارد کنید و دکمه "اتصال" را بزنید.',
                },
                {
                  question: "چه روش‌های پرداختی را قبول می‌کنید؟",
                  answer: "ما پرداخت از طریق: رمزارز (بیت‌کوین، لایت‌کوین، USDT و غیره) و روبل روسی (P2P از طریق پردازش‌کنندگان پرداخت شخص ثالث) را قبول می‌کنیم.",
                },
                {
                  question: "چطور می‌توانم با پشتیبانی تماس بگیرم؟",
                  answer: 'شما می‌توانید با تیم پشتیبانی ما از طریق دکمه "پشتیبانی" در ربات تماس بگیرید. ما سریعاً به مشکلات شما رسیدگی خواهیم کرد.',
                },
                {
                  question: "آیا یک دوره آزمایشی رایگان ارائه می‌دهید؟",
                  answer: "ما به هر کاربر جدید ربات خود یک جایزه خوشامدگویی می‌دهیم که می‌توان از آن برای خرید یک اشتراک آزمایشی و تست محصول استفاده کرد. این جایزه خوشامدگویی غیرقابل تعویض، انتقال و برداشت است و به هدف بهتر تعامل شما با سرویس ارائه شده است.",
                },
          ]
        },
        privacy: {
          yourRules: "حریم خصوصی شما، قوانین شما",
          noTrack: "ما پیگیری نمی‌کنیم. ما گزارش نمی‌دهیم. ما قضاوت نمی‌کنیم."
        },
        footer: {
          rights: "تمامی حقوق محفوظ است",
          why: "چرا Wraith VPN؟",
          steps: "مراحل",
          faq: "سوالات متداول",
          join: "عضویت",
          terms: "شرایط استفاده",
          privacy: "سیاست حریم خصوصی",
          refund: "سیاست بازپرداخت",
        },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;

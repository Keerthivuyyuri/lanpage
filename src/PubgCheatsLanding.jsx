import React from "react";
import buggy from "./assets/buggy.png";
import pubgbag from "./assets/pubgbag.png";
import photo from "./assets/photo.png";
import phone from "./assets/phone.png";
import gift from "./assets/gift.png";
import smoke from "./assets/smoke.png";

const navItems = [
  "ГЛАВНАЯ",
  "ТАРИФЫ",
  "ОТЗЫВЫ",
  "FAQ",
  "КОНТАКТЫ",
  "ФУНКЦИОНАЛ",
];

const features = [
  ["WallHack", "обнаруживает противников сквозь стены."],
  ["AntiRecoil", "отключает отдачу на любом оружие."],
  ["Aimbot", "автоматически наводит прицел на противника."],
  ["Drop", "показывает топовые вещи сквозь стены."],
];

const plans = [
  {
    name: "ОБЫЧНАЯ",
    term: "1 месяц",
    price: "649",
    accent: "from-[#08d8df] to-[#119ef4]",
    items: [
      ["ok", "Весь функционал чита"],
      ["ok", "Обновления 1 раз в месяц"],
      ["ok", "Техническая поддержка"],
      ["ok", "Анти-Бан"],
      ["no", "Улучшенная оптимизация"],
      ["no", "Запуск на других телефонах"],
      ["no", "DPI+, ASN, SKK"],
    ],
  },
  {
    name: "СТАНДАРТНАЯ",
    term: "3 месяца",
    price: "1 499",
    accent: "from-[#d47cf5] to-[#e51bea]",
    items: [
      ["ok", "Весь функционал чита"],
      ["ok", "Постоянные обновления"],
      ["ok", "Поддержка 24/7"],
      ["ok", "Улучшенный Анти-Бан"],
      ["ok", "Улучшенная оптимизация"],
      ["ok", "Запуск на других телефонах"],
      ["no", "DPI+, ASN, SKK"],
    ],
  },
  {
    name: "PRO ВЕРСИЯ",
    term: "Навсегда",
    price: "2 899",
    accent: "from-[#ff8e95] to-[#ff2f1d]",
    items: [
      ["ok", "Весь функционал чита + NEW"],
      ["ok", "Все обновления + BETA тест"],
      ["ok", "Поддержка 24/7"],
      ["ok", "Самый мощный Анти-Бан"],
      ["ok", "Максимальная оптимизация"],
      ["ok", "Запуск на других телефонах"],
      ["ok", "DPI+, ASN, SKK"],
    ],
  },
];

const faqs = [
  {
    q: "Какие у нас есть гарантии?",
    a: "Мы официальные диллеры данного чита. Нам доверяет огромное количество людей. Также, Вы можете посмотреть представленные скриншоты читов выше.",
  },
  { q: "Как устанавливаются читы?" },
  { q: "Что я получу после оплаты тарифа?" },
  { q: "Что такое DPI+, ASN, SKK?" },
  { q: "Влияют-ли читы на FPS в игре?" },
];

function OrangeSlash({ className = "" }) {
  return (
    <span
      className={`inline-block h-8 w-2 rotate-45 rounded bg-[#ff8a00] ${className}`}
    />
  );
}

function SectionTitle({ children, light = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <OrangeSlash />
      <h2
        className={`text-center text-[30px] font-black leading-none tracking-normal md:text-[42px] ${light ? "text-white" : "text-[#29385a]"}`}
      >
        {children}
      </h2>
      <OrangeSlash />
    </div>
  );
}

function Button({ children, outline = false }) {
  return (
    <button
      className={`flex h-[52px] min-w-[158px] items-center justify-center gap-6 rounded-[4px] text-sm font-bold text-white transition ${outline ? "border border-white/50 bg-white/5" : "bg-gradient-to-r from-[#ff9a05] to-[#ff8237] shadow-[0_18px_36px_rgba(255,136,0,0.26)]"}`}
    >
      {children}
      <span className="relative h-px w-8 bg-white before:absolute before:right-0 before:top-0 before:h-px before:w-3 before:origin-right before:-rotate-45 before:bg-white after:absolute after:right-0 after:top-0 after:h-px after:w-3 after:origin-right after:rotate-45 after:bg-white" />
    </button>
  );
}

function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20 mx-auto flex h-[88px] max-w-[1180px] items-center justify-between px-6 text-white lg:px-0">
      <div className="text-xs font-bold">Logo</div>
      <nav className="hidden items-center gap-12 text-[11px] font-black lg:flex">
        {navItems.map((item) => (
          <a
            key={item}
            className="relative hover:text-white"
            href={`#${item.toLowerCase()}`}
          >
            {item}
            {item === "ГЛАВНАЯ" && (
              <span className="absolute -bottom-3 left-1/2 h-1 w-4 -translate-x-1/2 rounded bg-[#ff8a00]" />
            )}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <button className="hidden h-10 items-center gap-3 rounded bg-white px-4 text-xs font-black text-[#29385a] md:flex">
          <span className="h-3 w-5 bg-gradient-to-b from-white via-[#1f52aa] to-[#e82f37] shadow" />{" "}
          RU
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded bg-[#ff9800] text-white">
          👤
        </button>
        <button className="flex h-10 w-12 flex-col justify-center gap-2 lg:hidden">
          <span className="h-px w-12 bg-white" />
          <span className="h-px w-12 bg-white" />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#2258f3] to-[#75dbed] pb-28 pt-28 text-white md:pb-36 lg:min-h-[720px] lg:pt-36">
      <Header />
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(#fff_2px,transparent_2px)] [background-size:42px_42px]" />
      <div className="absolute -bottom-1 left-0 right-0 h-28 rounded-t-[50%] bg-[#eef6ff] lg:h-36" />
      <div className="relative z-10 mx-auto grid max-w-[1180px] items-center px-6 lg:grid-cols-[1fr_590px] lg:px-0">
        <div className="text-center lg:text-left">
          <div className="mb-3 flex justify-center lg:justify-start">
            <OrangeSlash />
            <OrangeSlash className="-ml-1" />
          </div>
          <h1 className="mx-auto max-w-[620px] text-[42px] font-black uppercase leading-[1.12] tracking-normal md:text-[58px] lg:mx-0">
            Читы на PUBG лучшие на рынке без бана!
          </h1>
          <div className="mx-auto my-7 h-1 w-32 bg-[#ff8a00] lg:mx-0" />
          <p className="mx-auto max-w-[560px] text-[16px] font-bold leading-[1.7] md:text-[18px] lg:mx-0">
            Лучшие сборки на рынке, проверенные опытом и временем, а также,
            оптимальное соотношение цены, надежности и производительности
          </p>
          <p className="mt-5 text-[16px] font-bold">
            Самая низкая цена за мегахеш
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row lg:justify-start">
            <Button>Купить</Button>
            <Button outline>Видео-ролик</Button>
          </div>
        </div>
        <div className="relative mt-12 min-h-[380px] lg:mt-0">
          {/* <div className="absolute right-0 top-8 h-[270px] w-[520px] max-w-full rounded-[42%] bg-yellow-300/70 shadow-[0_42px_60px_rgba(0,0,0,0.22)]"> */}
          <img
            src={buggy}
            alt="PUBG Buggy"
            className="absolute right-0 top-0 w-[620px] max-w-full z-10"
          />

          <div className="absolute inset-8 rounded-[42%] bg-[#2e3447]/30" />
          <div className="absolute bottom-6 left-12 h-16 w-80 rounded-full bg-black/30 blur-2xl" />
        </div>
        {/* <div className="absolute bottom-0 left-0 h-40 w-80 rounded-t-[50%] bg-[linear-gradient(135deg,#7fa04c,#242821_55%,#d68b48)] shadow-2xl" /> */}
        <img
          src={pubgbag}
          alt="PUBG Backpack"
          className="absolute bottom-0 left-0 w-[280px] z-20"
        />
      </div>
    </section>
  );
}

function PlatformTabs() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <button className="h-12 min-w-[110px] rounded bg-white px-5 text-sm font-bold text-[#a8a8a8] shadow-lg">
        🪟 Windows
      </button>

      <button className="h-12 min-w-[110px] rounded bg-white px-5 text-sm font-bold text-[#a8a8a8] shadow-lg">
        🤖 Android
      </button>

      <button className="h-12 min-w-[110px] rounded bg-[#08b9f3] px-5 text-sm font-bold text-white shadow-lg">
        🍎 iOS
      </button>
    </div>
  );
}

function Features() {
  return (
    <section id="функционал" className="bg-[#eef6ff] px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1080px] items-center gap-10 lg:grid-cols-[400px_1fr]">
        {/* Left Side: Phone and Controls */}
        <div className="flex flex-col items-center">
          {/* Platform Tabs */}
          <PlatformTabs />

          {/* Phone */}
          <img src={phone} alt="Mobile Hack App" className="mt-8 w-[280px]" />

          {/* Slider Arrows */}
          <div className="mt-8 flex gap-8">
            <button className="flex h-10 w-16 items-center justify-center rounded border border-[#d1d5db] text-[#d1d5db]">
              ←
            </button>

            <button className="flex h-10 w-16 items-center justify-center rounded border border-[#00c8ff] text-[#00c8ff]">
              →
            </button>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="text-center lg:text-left">
          <SectionTitle>ФУНКЦИОНАЛ</SectionTitle>
          <p className="mt-4 text-center text-[15px] text-[#8c93a4] lg:text-left">
            Уникальный чит на iOS подойдет для всех устройств начиная от айфона
            4S+.
          </p>

          <ul className="mt-8 space-y-6 text-[15px] text-[#29385a]">
            {features.map(([name, text]) => (
              <li key={name} className="flex items-center gap-3">
                <span className="h-2 w-2 rotate-45 bg-[#ff8a00]" />
                <span className="font-bold">{name}</span>
                <span className="text-[#6f7790]">- {text}</span>
              </li>
            ))}
          </ul>

          {/* Warning Box */}
          <div className="mt-8 flex items-center gap-4 rounded bg-white p-4 shadow-sm">
            <span className="text-xl text-[#ff8a00]">⚠</span>
            <p className="text-[14px] text-[#8b8f9a]">
              Рекомендуем, оставить стандартные параметры в чите
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <button className="flex h-[52px] w-[180px] items-center justify-center gap-2 rounded bg-gradient-to-r from-[#ff9a05] to-[#ff8237] font-bold text-white shadow-lg">
              Купить →
            </button>
            <button className="flex h-[52px] w-[180px] items-center justify-center gap-2 rounded bg-[#ff463f] font-bold text-white shadow-lg">
              Посмотреть видео ▷
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section
      id="отзывы"
      className="relative overflow-hidden bg-gradient-to-r from-[#2459f3] to-[#75dbed] px-6 py-20 text-white"
    >
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(#fff_2px,transparent_2px)] [background-size:44px_44px]" />
      <div className="relative mx-auto max-w-[760px] text-center">
        <SectionTitle light>ЧТО ГОВОРЯТ О НАС</SectionTitle>
        <div className="relative mt-14 rounded-[5px] bg-white px-10 pb-9 pt-14 text-[#29385a] shadow-xl">
          {/* <div className="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border-4 border-white bg-[#c4b198]" /> */}
          <img
            src={photo}
            alt="User Avatar"
            className="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border-4 border-white object-cover"
          />
          <div className="absolute -left-7 top-10 flex h-20 w-20 rotate-45 items-center justify-center rounded-[10px] bg-[#0cc6ef] shadow-xl">
            <span className="-rotate-45 text-4xl text-white">‹</span>
          </div>
          <div className="absolute -right-7 top-10 flex h-20 w-20 rotate-45 items-center justify-center rounded-[10px] bg-[#0cc6ef] shadow-xl">
            <span className="-rotate-45 text-4xl text-white">›</span>
          </div>
          <h3 className="text-lg font-black">Егор Черняев</h3>
          <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-7 text-[#53607b]">
            Рекомендую данный софт! Аналогов не нашел нигде, я решил не
            заморачиваться и сразу приобрел ПРО версию и теперь играю в свое
            удовольствие.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="тарифы" className="bg-[#eef6ff] px-6 py-20">
      <SectionTitle>ТАРИФЫ</SectionTitle>
      <div className="mt-10">
        <PlatformTabs />
      </div>
      <div className="mx-auto mt-14 grid max-w-[1030px] gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className="overflow-hidden rounded-br-[38px] rounded-tl-[38px] bg-white shadow-[0_22px_36px_rgba(36,58,91,0.12)]"
          >
            <div
              className={`h-[58px] rounded-br-[42px] bg-gradient-to-r ${plan.accent} pt-5 text-center text-sm font-black text-white`}
            >
              {plan.name}
            </div>
            <div className="px-8 pb-7 pt-8 text-[#29385a]">
              <h3 className="text-center text-2xl font-black">{plan.term}</h3>
              <ul className="mt-7 space-y-4 text-[15px]">
                {plan.items.map(([state, text]) => (
                  <li key={text} className="flex gap-4">
                    <span
                      className={`text-2xl leading-4 ${state === "ok" ? "text-[#00c829]" : "text-[#ff341e]"}`}
                    >
                      {state === "ok" ? "✓" : "×"}
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-center text-[42px] font-black leading-none">
                {plan.price}{" "}
                <span className="align-top text-3xl font-medium">₽</span>
              </p>
            </div>
            <button className="flex h-[62px] w-full items-center justify-center gap-7 bg-gradient-to-r from-[#ff8d39] to-[#ff9800] text-lg font-black text-white">
              Приобрести
              <span className="relative h-px w-9 bg-white before:absolute before:right-0 before:top-0 before:h-px before:w-3 before:origin-right before:-rotate-45 before:bg-white after:absolute after:right-0 after:top-0 after:h-px after:w-3 after:origin-right after:rotate-45 after:bg-white" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="bg-[#eef6ff] px-6 py-16">
      <SectionTitle>ЧАСТЫЕ ВОПРОСЫ</SectionTitle>
      <div className="mx-auto mt-14 max-w-[690px] space-y-5">
        {faqs.map((item, index) => (
          <article
            key={item.q}
            className="rounded-[4px] bg-white px-8 py-7 shadow-[0_14px_26px_rgba(38,61,91,0.04)]"
          >
            <div className="flex items-center justify-between gap-8">
              <h3 className="text-[17px] font-black text-[#29385a]">
                {item.q}
              </h3>
              <span className="text-4xl font-light leading-none text-[#00aeef]">
                {index === 0 ? "×" : "+"}
              </span>
            </div>
            {item.a && (
              <p className="mt-7 border-l-2 border-[#00c8ff] pl-7 text-[15px] leading-7 text-[#8b8f9a]">
                {item.a}
              </p>
            )}
          </article>
        ))}
        <a
          href="#контакты"
          className="block pt-4 text-center text-[15px] font-bold text-[#00aeef] underline"
        >
          У меня есть вопрос
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="контакты"
      className="relative overflow-hidden bg-[#eef3f9] pt-16"
    >
      <SectionTitle>КОНТАКТЫ</SectionTitle>

      {/* Curved Wave Background */}
      <div className="absolute bottom-0 left-0 w-full h-[420px] overflow-hidden">
        <svg
          viewBox="0 0 1440 420"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,180 C220,300 500,280 720,180 C980,60 1200,40 1440,20 L1440,420 L0,420 Z"
            fill="url(#footerGradient)"
          />
          <defs>
            <linearGradient
              id="footerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#2459f3" />
              <stop offset="100%" stopColor="#75dbed" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto mt-20 max-w-[1180px] px-6">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-end">
          {/* Gift Box */}
          {/* <div className="relative flex justify-center items-end">
            <img
              src={gift}
              alt="PUBG Gift Box"
              className="absolute top-[-70px] left-1/2 -translate-x-1/2 w-[280px] lg:w-[350px] z-20"
            />

            
            <img
              src={smoke}
              alt="Smoke"
              className="w-[500px] lg:w-[600px] relative z-10 drop-shadow-2xl"
            />
          </div> */}
          <div className="relative flex justify-center lg:w-1/2">
  <img
    src={smoke}
    alt="Blue Curve"
    className="w-[550px] lg:w-[700px]"
  />

  <img
    src={gift}
    alt="PUBG Gift Box"
    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] lg:w-[360px] z-20"
  />
</div>

          {/* Contact Form */}
          <div className="relative w-full max-w-[500px] rounded bg-white px-10 py-10 shadow-2xl">
            {/* Telegram */}
            <div className="absolute -right-12 -top-12 flex h-20 w-20 rotate-45 items-center justify-center rounded-xl bg-[#09c9ef] shadow-xl">
              <span className="-rotate-45 text-3xl text-white">✈</span>
            </div>

            {/* Discord */}
            <div className="absolute -left-10 bottom-0 flex h-16 w-16 rotate-45 items-center justify-center rounded-xl bg-[#09c9ef] shadow-xl">
              <span className="-rotate-45 text-xl text-white">💬</span>
            </div>

            <h3 className="mb-8 text-lg font-bold text-[#29385a]">
              Обратная связь
            </h3>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full border-b border-gray-200 pb-3 outline-none"
              />

              <input
                type="email"
                placeholder="E-mail"
                className="w-full border-b border-gray-200 pb-3 outline-none"
              />

              <textarea
                rows="3"
                placeholder="Комментарий"
                className="w-full resize-none border-b border-gray-200 pb-3 outline-none"
              />
            </div>

            <button className="mx-auto mt-10 block h-[56px] w-[170px] rounded bg-gradient-to-r from-[#ff9a05] to-[#ff8237] font-bold text-white">
              Отправить
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pb-8 pt-10 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="text-xs">Logo</div>

            <nav className="flex flex-wrap justify-center gap-8 text-[11px] font-black uppercase">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white/80"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden h-10 items-center gap-3 rounded bg-white px-4 text-xs font-black text-[#29385a] md:flex">
                <span className="h-3 w-5 bg-gradient-to-b from-white via-[#1f52aa] to-[#e82f37] shadow" />{" "}
                RU
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded bg-[#ff9800] text-white">
                👤
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-[11px] text-white/70">
            Защищено 2022 (C)
          </p>
        </footer>
      </div>
    </section>
  );
}

export default function PubgCheatsLanding() {
  return (
    <main className="min-h-screen bg-[#eef6ff] font-sans">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}

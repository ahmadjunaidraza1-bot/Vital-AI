// PayMonthlyLanding.jsx
import React, { useState } from "react";
import {
  CheckCircleFill,
  Whatsapp,
  TelephoneFill,
  Globe2,
  ShieldCheck,
  EnvelopeFill,
  LightningChargeFill,
  Search,
  GearFill,
  BrushFill,
  ChevronDown,
  StarFill,
  Quote,
  RocketTakeoffFill,
  PeopleFill,
  GraphUpArrow,
  PatchCheckFill,
  CreditCard2FrontFill,
  Apple,
  Google,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PayMonthlyLanding() {
  const [openFaq, setOpenFaq] = useState(0);

  const cards = [
    { icon: <BrushFill />, title: "Bespoke Design", text: "Custom website design created around your business, services, brand and target customers." },
    { icon: <ShieldCheck />, title: "SSL Certificate", text: "Secure website setup with SSL protection to help keep your visitors and forms protected." },
    { icon: <EnvelopeFill />, title: "Business Emails", text: "Professional branded business email guidance to help your business look more trusted." },
    { icon: <LightningChargeFill />, title: "Fast Website Setup", text: "Clean, lightweight and mobile-friendly pages designed for smooth customer experience." },
    { icon: <Search />, title: "Basic SEO Setup", text: "SEO-friendly structure, headings, meta basics and content layout to support online visibility." },
    { icon: <GearFill />, title: "Monthly Updates", text: "Website edits, content changes and ongoing support guidance included in your monthly plan." },
  ];

  const packageItems = [
    "Professional landing page / website design",
    "Mobile responsive layout",
    "Hero section with strong call-to-action",
    "Service sections and trust-building content",
    "WhatsApp / call / contact buttons",
    "Basic SEO-friendly structure",
    "SSL and secure setup guidance",
    "Monthly content updates",
    "Official website link included",
    "Suitable for ads and lead generation",
  ];

  const websites = [
    "/Images/website1.webp",
    "/Images/website2.webp",
    "/Images/website3.webp",
    "/Images/website4.webp",
    "/Images/website5.webp",
    "/Images/website6.webp",
  ];

  const reviews = [
    {
      name: "Roofing Business Owner",
      role: "UK Local Service Business",
      text: "Vital AI created a clean, professional website concept for our business. The page looked modern, loaded well on mobile and made it easy for customers to contact us.",
    },
    {
      name: "Salon Owner",
      role: "Beauty & Local Services",
      text: "The landing page helped us present our services in a much better way. The design looked premium and the WhatsApp button made enquiries simple.",
    },
    {
      name: "E-commerce Client",
      role: "Online Store",
      text: "The team understood our business quickly and gave us a professional web presence with clear sections, better visuals and a strong call-to-action.",
    },
  ];

  const paymentMethods = [
    { name: "Visa", brand: "VISA", className: "visa-pay", icon: <CreditCard2FrontFill /> },
    { name: "Mastercard", brand: "mastercard.", className: "master-pay", icon: <CreditCard2FrontFill /> },
    { name: "Apple Pay", brand: "Apple Pay", className: "apple-pay", icon: <Apple /> },
    { name: "Google Pay", brand: "G Pay", className: "google-pay", icon: <Google /> },
  ];

  const faqs = [
    {
      q: "What is included in the £24.99/month price?",
      a: "The plan includes a professional website or landing page design, mobile responsive layout, basic SEO-friendly structure, call-to-action setup, WhatsApp/contact links and monthly update support.",
    },
    {
      q: "Is there a large upfront cost?",
      a: "No. This offer is designed for small businesses that want a professional online presence without paying a large upfront website design fee.",
    },
    {
      q: "Can I use this landing page for ads?",
      a: "Yes. This landing page is ideal for Facebook, Instagram, TikTok, LinkedIn or Google ads. You can keep it hidden from your main website menu and use the direct URL in ads.",
    },
    {
      q: "Can customers visit the official Vital AI website from this page?",
      a: "Yes. The page includes an official website button so visitors can also explore your main Vital AI website.",
    },
    {
      q: "Can I upgrade the package later?",
      a: "Yes. You can start with the monthly website plan and later upgrade to more pages, advanced SEO, e-commerce, booking systems, automation or social media management.",
    },
    {
      q: "Is the price fixed forever?",
      a: "The £24.99/month price can be used as your advertised starting price. You can mention that final scope may depend on client requirements if the project becomes larger.",
    },
  ];

  return (
    <main className="vital-pay-page">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .vital-pay-page {
          --primary: #7c3aed;
          --secondary: #2563eb;
          --pink: #ec4899;
          --cyan: #06b6d4;
          --dark: #0f172a;
          --muted: #64748b;
          font-family: "Poppins", "Inter", sans-serif;
          color: var(--dark);
          background:
            radial-gradient(circle at 12% 8%, rgba(124,58,237,.12), transparent 32%),
            radial-gradient(circle at 90% 12%, rgba(37,99,235,.12), transparent 30%),
            radial-gradient(circle at 50% 90%, rgba(236,72,153,.08), transparent 34%),
            #ffffff;
          overflow-x: hidden;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .vital-pay-page * {
          box-sizing: border-box;
        }

        .vital-pay-container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .vital-hero {
          min-height: 92vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 110px 0 145px;
          overflow: visible;
          text-align: center;
          background:
            radial-gradient(circle at 0% 65%, rgba(124,58,237,.48), transparent 28%),
            radial-gradient(circle at 100% 18%, rgba(236,72,153,.55), transparent 30%),
            radial-gradient(circle at 90% 75%, rgba(236,72,153,.28), transparent 28%),
            linear-gradient(135deg, #07008a 0%, #4c05a9 42%, #ec0f8f 100%);
        }

        .vital-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(circle at 18% -8%, rgba(255,255,255,.18), transparent 20%),
            radial-gradient(circle at 96% 84%, rgba(255,255,255,.16), transparent 24%),
            linear-gradient(120deg, rgba(0,0,0,.05), rgba(255,255,255,.03));
          pointer-events: none;
        }

        .hero-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .hero-copy {
          width: min(980px, 100%);
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 3;
          padding-top: 20px;
        }

        .vital-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 20px;
          border-radius: 999px;
          color: #fff;
          background: rgba(255,255,255,.14);
          border: 1px solid rgba(255,255,255,.28);
          font-weight: 800;
          margin-bottom: 22px;
          box-shadow: 0 10px 24px rgba(15,23,42,.12);
          text-align: center;
        }

        .section-heading .vital-badge,
        .payment-shell .vital-badge {
          color: var(--primary);
          background: rgba(124,58,237,.08);
          border-color: rgba(124,58,237,.16);
          box-shadow: 0 10px 24px rgba(124,58,237,.06);
        }

        .vital-hero h1 {
          max-width: 900px;
          margin: 0 auto 20px;
          color: #fff;
          font-size: clamp(42px, 6vw, 78px);
          line-height: 1.04;
          letter-spacing: -2.5px;
          font-weight: 950;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ff4fbe, #ffffff, #38bdf8);
          background-size: 220% 220%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 8s ease infinite;
        }

        .section-heading .gradient-text,
        .package-card .gradient-text {
          background: linear-gradient(135deg, var(--primary), var(--secondary), var(--pink), var(--cyan));
          background-size: 220% 220%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .vital-hero p {
          max-width: 720px;
          margin: 0 auto;
          color: rgba(255,255,255,.92);
          font-size: 18px;
          line-height: 1.75;
          font-weight: 500;
        }

        .vital-price-pill {
          display: inline-flex;
          align-items: flex-end;
          justify-content: center;
          gap: 8px;
          margin: 26px auto 12px;
          padding: 18px 32px;
          border-radius: 20px;
          color: #fff;
          background: linear-gradient(135deg, rgba(236,72,153,.95), rgba(219,39,119,.92));
          box-shadow: 0 18px 45px rgba(15,23,42,.18);
          border: 1px solid rgba(255,255,255,.18);
          transition: transform .25s ease, box-shadow .25s ease;
          will-change: transform;
        }

        .vital-price-pill:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 45px rgba(236,72,153,.24);
        }

        .vital-price-pill strong {
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 950;
          line-height: 1;
        }

        .vital-price-pill span {
          color: rgba(255,255,255,.9);
          font-weight: 800;
          padding-bottom: 7px;
        }

        .vital-checks,
        .vital-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .vital-checks {
          max-width: 860px;
          margin: 26px auto 0;
        }

        .vital-actions {
          margin-top: 28px;
        }

        .vital-checks span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-width: 190px;
          padding: 9px 17px;
          border-radius: 999px;
          color: #fff;
          background: rgba(255,255,255,.09);
          border: 1px solid rgba(255,255,255,.22);
          font-weight: 800;
          box-shadow: 0 10px 24px rgba(15,23,42,.08);
          transition: transform .25s ease, border-color .25s ease;
          text-align: center;
        }

        .vital-checks span:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,.45);
        }

        .vital-checks svg {
          color: #ff4fbe;
          flex-shrink: 0;
        }

        .vital-btn-primary,
        .vital-btn-light {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 54px;
          min-width: 190px;
          padding: 15px 26px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 900;
          transition: transform .25s ease, box-shadow .25s ease;
          will-change: transform;
          text-align: center;
        }

        .vital-btn-primary {
          color: #fff;
          background: linear-gradient(135deg, #ff1493, #ec4899);
          box-shadow: 0 16px 36px rgba(236,72,153,.32);
        }

        .vital-btn-light {
          color: var(--primary);
          background: rgba(255,255,255,.94);
          border: 1px solid rgba(255,255,255,.4);
          box-shadow: 0 12px 28px rgba(15,23,42,.08);
        }

        .vital-btn-primary:hover,
        .vital-btn-light:hover {
          transform: translateY(-4px);
        }

        .hero-trust-strip {
          position: absolute;
          left: 50%;
          bottom: -54px;
          transform: translateX(-50%);
          width: min(1040px, calc(100% - 40px));
          z-index: 5;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          overflow: hidden;
          border-radius: 22px;
          background: rgba(255,255,255,.92);
          border: 1px solid rgba(255,255,255,.75);
          box-shadow: 0 18px 45px rgba(15,23,42,.16);
        }

        .hero-trust-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px 24px;
          border-right: 1px solid rgba(15,23,42,.08);
          text-align: left;
        }

        .hero-trust-item:last-child {
          border-right: 0;
        }

        .hero-trust-icon {
          width: 46px;
          height: 46px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          color: #fff;
          font-size: 22px;
          flex-shrink: 0;
          background: linear-gradient(135deg, var(--primary), var(--secondary), var(--pink));
        }

        .hero-trust-item strong {
          display: block;
          font-size: 15px;
          font-weight: 950;
          color: var(--dark);
          line-height: 1.25;
        }

        .hero-trust-item span {
          display: block;
          color: var(--muted);
          font-size: 12px;
          font-weight: 700;
          margin-top: 3px;
        }

        .vital-section {
          padding: 100px 0 90px;
          position: relative;
        }

        .section-heading {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 52px;
        }

        .section-heading h2 {
          font-size: clamp(32px, 5vw, 58px);
          font-weight: 950;
          letter-spacing: -2px;
          margin-bottom: 14px;
        }

        .section-heading p {
          color: var(--muted);
          font-size: 18px;
          line-height: 1.8;
        }

        .cards-grid,
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .service-card,
        .review-card,
        .process-card,
        .package-card,
        .payment-card,
        .website-shot {
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          will-change: transform;
        }

        .service-card {
          position: relative;
          padding: 38px 30px;
          border-radius: 30px;
          background: #fff;
          border: 2px solid #e8e8ef;
          min-height: 270px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(15,23,42,.05);
        }

        .service-card::before,
        .review-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(124,58,237,.09), rgba(37,99,235,.07), rgba(236,72,153,.07));
          opacity: 0;
          transition: opacity .25s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(124,58,237,.36);
          box-shadow: 0 18px 45px rgba(124,58,237,.13);
        }

        .service-card:hover::before,
        .review-card:hover::before {
          opacity: 1;
        }

        .service-icon {
          position: relative;
          z-index: 1;
          width: 70px;
          height: 70px;
          display: grid;
          place-items: center;
          border-radius: 22px;
          color: #fff;
          font-size: 30px;
          margin-bottom: 22px;
          background: linear-gradient(135deg, var(--primary), var(--secondary), var(--pink));
          box-shadow: 0 12px 28px rgba(124,58,237,.22);
          transition: transform .25s ease;
        }

        .service-card:hover .service-icon {
          transform: rotate(-4deg) scale(1.04);
        }

        .service-card h3,
        .service-card p,
        .quote-icon,
        .stars,
        .review-card p,
        .review-card h5,
        .review-card span {
          position: relative;
          z-index: 1;
        }

        .service-card h3 {
          font-size: 22px;
          font-weight: 950;
          margin-bottom: 10px;
        }

        .service-card p {
          color: var(--muted);
          line-height: 1.75;
          margin: 0;
        }

        .marquee-section {
          padding: 30px 0 90px;
        }

        .marquee-shell {
          overflow: hidden;
          position: relative;
          border-radius: 38px;
          padding: 24px 0;
          background:
            radial-gradient(circle at top left, rgba(124,58,237,.12), transparent 32%),
            radial-gradient(circle at bottom right, rgba(37,99,235,.10), transparent 34%),
            #f8fafc;
          border: 1px solid rgba(124,58,237,.1);
        }

        .marquee-shell::before,
        .marquee-shell::after {
          content: "";
          position: absolute;
          top: 0;
          width: 120px;
          height: 100%;
          z-index: 3;
          pointer-events: none;
        }

        .marquee-shell::before {
          left: 0;
          background: linear-gradient(90deg, #f8fafc, transparent);
        }

        .marquee-shell::after {
          right: 0;
          background: linear-gradient(270deg, #f8fafc, transparent);
        }

        .website-marquee {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: websiteScroll 46s linear infinite;
          will-change: transform;
        }

        .website-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes websiteScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .website-shot {
          width: 360px;
          height: 235px;
          flex: 0 0 auto;
          border-radius: 28px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(15,23,42,.1);
          box-shadow: 0 14px 34px rgba(15,23,42,.1);
        }

        .website-shot:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 45px rgba(124,58,237,.14);
        }

        .website-shot img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .split-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 44px;
          align-items: center;
        }

        .gradient-box {
          border-radius: 36px;
          padding: 42px;
          color: #fff;
          background: linear-gradient(135deg, #7c3aed, #2563eb, #ec4899);
          box-shadow: 0 18px 45px rgba(124,58,237,.18);
        }

        .gradient-box h2 {
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 950;
          letter-spacing: -2px;
        }

        .gradient-box p {
          color: rgba(255,255,255,.86);
          line-height: 1.8;
          font-size: 17px;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 26px;
        }

        .stat-card {
          padding: 22px;
          border-radius: 24px;
          background: rgba(255,255,255,.15);
          border: 1px solid rgba(255,255,255,.25);
          transition: transform .25s ease, background .25s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,.22);
        }

        .stat-card strong {
          display: block;
          font-size: 28px;
          font-weight: 950;
        }

        .stat-card span {
          color: rgba(255,255,255,.82);
          font-weight: 700;
        }

        .package-card {
          padding: 38px;
          border-radius: 36px;
          background: #fff;
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: 0 16px 40px rgba(15,23,42,.08);
        }

        .package-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 45px rgba(124,58,237,.14);
        }

        .package-card h3 {
          font-size: 32px;
          font-weight: 950;
        }

        .main-price {
          margin: 16px 0;
          font-size: 58px;
          font-weight: 950;
          color: var(--primary);
          line-height: 1;
        }

        .main-price span {
          font-size: 18px;
          color: var(--muted);
        }

        .package-list {
          list-style: none;
          padding: 0;
          margin: 26px 0 0;
        }

        .package-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 14px;
          font-weight: 700;
          color: #334155;
        }

        .package-list svg {
          color: var(--primary);
          margin-top: 3px;
          flex-shrink: 0;
        }

        .payment-section {
          padding: 10px 0 90px;
        }

        .payment-shell {
          border-radius: 42px;
          padding: 48px;
          background:
            radial-gradient(circle at top left, rgba(124,58,237,.12), transparent 32%),
            radial-gradient(circle at bottom right, rgba(6,182,212,.1), transparent 34%),
            rgba(255,255,255,.92);
          border: 1px solid rgba(124,58,237,.12);
          box-shadow: 0 16px 40px rgba(15,23,42,.06);
        }

        .payment-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 35px;
        }

        .payment-card {
          position: relative;
          min-height: 165px;
          border-radius: 30px;
          padding: 24px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: 0 12px 28px rgba(15,23,42,.06);
        }

        .payment-card::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity .25s ease;
        }

        .payment-card::after {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 999px;
          right: -42px;
          bottom: -48px;
          opacity: .2;
          transition: transform .25s ease, opacity .25s ease;
        }

        .payment-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 45px rgba(124,58,237,.14);
          border-color: rgba(124,58,237,.28);
        }

        .payment-card:hover::before {
          opacity: 1;
        }

        .payment-card:hover::after {
          opacity: .45;
          transform: scale(1.12);
        }

        .payment-icon {
          position: relative;
          z-index: 1;
          width: 58px;
          height: 58px;
          border-radius: 20px;
          display: grid;
          place-items: center;
          color: #fff;
          font-size: 28px;
          margin-bottom: 18px;
          transition: transform .25s ease;
        }

        .payment-card:hover .payment-icon {
          transform: rotate(-5deg) scale(1.05);
        }

        .payment-brand {
          position: relative;
          z-index: 1;
          font-size: 27px;
          font-weight: 950;
          letter-spacing: -1px;
          margin-bottom: 6px;
        }

        .payment-name {
          position: relative;
          z-index: 1;
          color: var(--muted);
          font-weight: 800;
          font-size: 14px;
        }

        .visa-pay .payment-icon { background: linear-gradient(135deg, #1a1f71, #2563eb); }
        .visa-pay::before { background: linear-gradient(135deg, rgba(26,31,113,.1), rgba(37,99,235,.06)); }
        .visa-pay::after { background: #1a1f71; }

        .master-pay .payment-icon { background: linear-gradient(135deg, #eb001b, #f79e1b); }
        .master-pay::before { background: linear-gradient(135deg, rgba(235,0,27,.1), rgba(247,158,27,.08)); }
        .master-pay::after { background: #f79e1b; }

        .apple-pay .payment-icon { background: linear-gradient(135deg, #111827, #4b5563); }
        .apple-pay::before { background: linear-gradient(135deg, rgba(17,24,39,.1), rgba(75,85,99,.06)); }
        .apple-pay::after { background: #111827; }

        .google-pay .payment-icon { background: linear-gradient(135deg, #4285f4, #34a853); }
        .google-pay::before { background: linear-gradient(135deg, rgba(66,133,244,.1), rgba(52,168,83,.08)); }
        .google-pay::after { background: #4285f4; }

        .payment-note {
          margin-top: 28px;
          padding: 16px 20px;
          border-radius: 18px;
          color: #fff;
          font-weight: 800;
          text-align: center;
          background: linear-gradient(135deg, var(--primary), var(--secondary), var(--pink));
          box-shadow: 0 14px 34px rgba(124,58,237,.14);
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .process-card {
          padding: 28px;
          border-radius: 28px;
          background: #fff;
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: 0 12px 30px rgba(15,23,42,.05);
        }

        .process-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 45px rgba(37,99,235,.12);
          background: linear-gradient(135deg, rgba(124,58,237,.05), rgba(37,99,235,.04), #fff);
        }

        .process-number {
          width: 46px;
          height: 46px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          color: #fff;
          font-weight: 950;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          margin-bottom: 18px;
        }

        .process-card h4 {
          font-size: 18px;
          font-weight: 950;
          margin-bottom: 8px;
        }

        .process-card p {
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
          font-size: 14px;
        }

        .review-card {
          padding: 32px;
          border-radius: 32px;
          background: #fff;
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: 0 14px 34px rgba(15,23,42,.06);
          position: relative;
          overflow: hidden;
        }

        .review-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 45px rgba(124,58,237,.12);
        }

        .quote-icon {
          width: 50px;
          height: 50px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, rgba(124,58,237,.12), rgba(37,99,235,.12));
          color: var(--primary);
          margin-bottom: 18px;
        }

        .stars {
          display: flex;
          gap: 4px;
          color: #f59e0b;
          margin-bottom: 16px;
        }

        .review-card p {
          color: var(--muted);
          line-height: 1.8;
          margin-bottom: 22px;
        }

        .review-card h5 {
          font-weight: 950;
          margin-bottom: 4px;
        }

        .review-card span {
          color: var(--muted);
          font-size: 14px;
          font-weight: 700;
        }

        .faq-wrap {
          max-width: 920px;
          margin: 0 auto;
        }

        .faq-item {
          background: #fff;
          border-radius: 22px;
          border: 1px solid rgba(15,23,42,.08);
          margin-bottom: 14px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(15,23,42,.05);
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }

        .faq-item:hover {
          transform: translateY(-3px);
          border-color: rgba(124,58,237,.22);
          box-shadow: 0 16px 38px rgba(124,58,237,.1);
        }

        .faq-question {
          width: 100%;
          border: 0;
          background: transparent;
          padding: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          font-weight: 900;
          text-align: left;
          color: var(--dark);
        }

        .faq-question svg {
          flex-shrink: 0;
        }

        .faq-answer {
          padding: 0 22px 22px;
          color: var(--muted);
          line-height: 1.8;
        }

        .final-cta {
          padding: 65px 28px;
          border-radius: 40px;
          text-align: center;
          color: #fff;
          background:
            linear-gradient(135deg, rgba(15,23,42,.76), rgba(124,58,237,.78)),
            url("https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
          box-shadow: 0 18px 45px rgba(15,23,42,.16);
        }

        .final-cta h2 {
          font-size: clamp(34px, 5vw, 58px);
          font-weight: 950;
          letter-spacing: -2px;
        }

        .final-cta p {
          max-width: 700px;
          margin: 16px auto 0;
          color: rgba(255,255,255,.86);
          font-size: 18px;
          line-height: 1.8;
        }

        @media (max-width: 1199px) {
          .payment-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 992px) {
          .vital-pay-container {
            width: min(100% - 28px, 760px);
          }

          .cards-grid,
          .split-section,
          .reviews-grid,
          .hero-trust-strip {
            grid-template-columns: 1fr;
          }

          .hero-trust-strip {
            position: relative;
            bottom: auto;
            left: auto;
            transform: none;
            width: 100%;
            margin: 42px auto -20px;
            border-radius: 24px;
          }

          .hero-trust-item {
            border-right: 0;
            border-bottom: 1px solid rgba(15,23,42,.08);
          }

          .hero-trust-item:last-child {
            border-bottom: 0;
          }

          .vital-hero {
            min-height: auto;
            padding: 95px 0 70px;
          }

          .stats-row {
            grid-template-columns: 1fr;
          }

          .website-shot {
            width: 300px;
            height: 205px;
          }

          .payment-shell {
            padding: 34px 22px;
            border-radius: 32px;
          }
        }

        @media (max-width: 768px) {
          .vital-pay-container {
            width: min(100% - 24px, 620px);
          }

          .vital-hero {
            display: block;
            padding: 76px 0 44px;
            min-height: auto;
            overflow: hidden;
            border-bottom-left-radius: 34px;
            border-bottom-right-radius: 34px;
          }

          .hero-grid {
            display: block;
            width: 100%;
          }

          .hero-copy {
            width: 100%;
            max-width: 100%;
            padding: 0;
            text-align: center;
          }

          .vital-badge {
            max-width: 100%;
            padding: 9px 14px;
            font-size: 12.5px;
            line-height: 1.3;
            margin-bottom: 16px;
          }

          .vital-hero h1 {
            font-size: clamp(31px, 9.2vw, 45px);
            line-height: 1.12;
            letter-spacing: -1.1px;
            max-width: 100%;
            margin: 0 auto 15px;
          }

          .vital-hero p {
            max-width: 96%;
            font-size: 15.5px;
            line-height: 1.65;
            margin: 0 auto;
          }

          .vital-price-pill {
            width: min(100%, 320px);
            padding: 15px 20px;
            border-radius: 18px;
            margin: 22px auto 0;
          }

          .vital-price-pill strong {
            font-size: 40px;
          }

          .vital-price-pill span {
            font-size: 14px;
          }

          .vital-checks {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
            gap: 10px;
            margin-top: 20px;
          }

          .vital-checks span {
            min-width: 0;
            width: 100%;
            padding: 10px 8px;
            font-size: 12.5px;
            border-radius: 15px;
            line-height: 1.25;
          }

          .vital-actions {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            gap: 10px;
            margin-top: 20px;
          }

          .vital-btn-primary,
          .vital-btn-light {
            width: 100%;
            min-width: 0;
            min-height: 50px;
            padding: 13px 16px;
          }

          .hero-trust-strip {
            position: relative;
            left: auto;
            bottom: auto;
            transform: none;
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            margin: 28px auto 0;
            border-radius: 20px;
            overflow: hidden;
          }

          .hero-trust-item {
            width: 100%;
            padding: 15px 16px;
            gap: 12px;
            border-right: 0;
            border-bottom: 1px solid rgba(15,23,42,.08);
          }

          .hero-trust-icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            font-size: 19px;
          }

          .hero-trust-item strong {
            font-size: 14px;
            line-height: 1.2;
          }

          .hero-trust-item span {
            font-size: 11.5px;
          }

          .section-heading {
            margin-bottom: 34px;
          }

          .section-heading h2 {
            font-size: clamp(28px, 8vw, 40px);
            letter-spacing: -1.2px;
          }

          .section-heading p {
            font-size: 15.5px;
            line-height: 1.65;
          }

          .vital-section {
            padding: 58px 0;
          }

          .cards-grid,
          .reviews-grid,
          .process-grid,
          .payment-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .service-card,
          .package-card,
          .gradient-box,
          .review-card,
          .process-card {
            padding: 24px 20px;
            border-radius: 24px;
          }

          .service-card {
            min-height: auto;
          }

          .service-icon {
            width: 58px;
            height: 58px;
            border-radius: 18px;
            font-size: 25px;
            margin-bottom: 16px;
          }

          .marquee-section {
            padding: 15px 0 58px;
          }

          .marquee-shell {
            border-radius: 24px;
            padding: 18px 0;
          }

          .marquee-shell::before,
          .marquee-shell::after {
            width: 45px;
          }

          .website-marquee {
            gap: 16px;
            animation-duration: 60s;
          }

          .website-shot {
            width: 255px;
            height: 170px;
            border-radius: 20px;
          }

          .split-section {
            gap: 22px;
          }

          .gradient-box h2 {
            font-size: clamp(28px, 8vw, 40px);
            letter-spacing: -1.2px;
          }

          .main-price {
            font-size: 44px;
          }

          .package-list li {
            font-size: 14.5px;
            line-height: 1.45;
          }

          .payment-section {
            padding: 0 0 58px;
          }

          .payment-shell {
            padding: 28px 18px;
            border-radius: 26px;
          }

          .payment-grid {
            margin-top: 25px;
          }

          .payment-card {
            min-height: 138px;
            padding: 20px;
            border-radius: 22px;
          }

          .payment-icon {
            width: 50px;
            height: 50px;
            border-radius: 16px;
            font-size: 24px;
            margin-bottom: 14px;
          }

          .payment-brand {
            font-size: 23px;
          }

          .payment-note {
            font-size: 13.5px;
            line-height: 1.5;
          }

          .process-number {
            width: 42px;
            height: 42px;
            border-radius: 14px;
          }

          .faq-question {
            padding: 18px;
            font-size: 15px;
            line-height: 1.45;
          }

          .faq-answer {
            padding: 0 18px 18px;
            font-size: 14.5px;
          }

          .final-cta {
            padding: 42px 18px;
            border-radius: 28px;
          }

          .final-cta h2 {
            font-size: clamp(30px, 8vw, 42px);
            letter-spacing: -1.2px;
          }

          .final-cta p {
            font-size: 15.5px;
            line-height: 1.65;
          }

          .service-card:hover,
          .review-card:hover,
          .process-card:hover,
          .package-card:hover,
          .payment-card:hover,
          .website-shot:hover,
          .stat-card:hover,
          .faq-item:hover,
          .vital-btn-primary:hover,
          .vital-btn-light:hover,
          .vital-price-pill:hover {
            transform: none;
          }
        }

        @media (max-width: 430px) {
          .vital-pay-container {
            width: calc(100% - 20px);
          }

          .vital-hero {
            padding: 68px 0 40px;
          }

          .vital-hero h1 {
            font-size: 30px;
            letter-spacing: -0.8px;
          }

          .vital-hero p {
            font-size: 14.5px;
          }

          .vital-price-pill {
            width: 100%;
            padding: 14px 18px;
          }

          .vital-price-pill strong {
            font-size: 36px;
          }

          .vital-checks {
            grid-template-columns: 1fr;
          }

          .vital-checks span {
            border-radius: 14px;
            min-height: 44px;
          }

          .hero-trust-item {
            align-items: center;
          }

          .website-shot {
            width: 230px;
            height: 155px;
          }

          .section-heading h2 {
            font-size: 28px;
          }

          .service-card h3,
          .package-card h3 {
            font-size: 21px;
          }

          .main-price {
            font-size: 40px;
          }

          .payment-card {
            min-height: 128px;
          }

          .reviews-grid {
            gap: 14px;
          }
        }
      `}</style>

      <section className="vital-hero">
        <div className="vital-pay-container hero-grid">
          <div className="hero-copy">
            <div className="vital-badge">
              <CheckCircleFill /> Pay Monthly Website Package
            </div>

            <h1>
              Professional Website Design for{" "}
              <span className="gradient-text">UK Businesses</span>
            </h1>

            <p>
              Affordable monthly websites with modern design, mobile friendly layout,
              SEO basics, WhatsApp integration and ongoing support.
            </p>

            <div className="vital-price-pill">
              <strong>£24.99</strong>
              <span>/ month</span>
            </div>

            <div className="vital-checks">
              <span><CheckCircleFill /> No Large Upfront Fees</span>
              <span><CheckCircleFill /> Mobile Friendly</span>
              <span><CheckCircleFill /> Built for Leads</span>
              <span><CheckCircleFill /> One Monthly Price</span>
            </div>

            <div className="vital-actions">
              <a href="https://wa.me/447398390815" target="_blank" rel="noreferrer" className="vital-btn-primary">
                <Whatsapp /> Chat on WhatsApp
              </a>

              <a href="tel:+441618837520" className="vital-btn-light">
                <TelephoneFill /> Call Now
              </a>

              <a href="https://vitalai.co.uk" target="_blank" rel="noreferrer" className="vital-btn-light">
                <Globe2 /> Official Website
              </a>
            </div>
          </div>
        </div>

        <div className="hero-trust-strip">
          <div className="hero-trust-item">
            <div className="hero-trust-icon"><ShieldCheck /></div>
            <div>
              <strong>No Large<br />Upfront Fees</strong>
              <span>Start without stress</span>
            </div>
          </div>

          <div className="hero-trust-item">
            <div className="hero-trust-icon"><PeopleFill /></div>
            <div>
              <strong>Design That<br />Builds Trust</strong>
              <span>Look professional online</span>
            </div>
          </div>

          <div className="hero-trust-item">
            <div className="hero-trust-icon"><GraphUpArrow /></div>
            <div>
              <strong>Built to<br />Generate Leads</strong>
              <span>More enquiries, more sales</span>
            </div>
          </div>

          <div className="hero-trust-item">
            <div className="hero-trust-icon"><GearFill /></div>
            <div>
              <strong>Monthly Updates<br />& Support</strong>
              <span>We’re always here</span>
            </div>
          </div>
        </div>
      </section>

      <section className="vital-section">
        <div className="vital-pay-container">
          <div className="section-heading">
            <span className="vital-badge"><PatchCheckFill /> What You Get</span>
            <h2>Everything Needed for a <span className="gradient-text">Professional Online Presence</span></h2>
            <p>This monthly website package is made for small businesses that want to look professional, get more enquiries and avoid confusing technical work.</p>
          </div>

          <div className="cards-grid">
            {cards.map((card, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="marquee-section">
        <div className="vital-pay-container">
          <div className="section-heading">
            <span className="vital-badge"><Globe2 /> Website Showcase</span>
            <h2>Clean Website Styles That <span className="gradient-text">Attract Customers</span></h2>
            <p>A smooth scrolling showcase section can be used to display your recent website work, landing page previews or client project visuals.</p>
          </div>

          <div className="marquee-shell">
            <div className="website-marquee">
              {[...websites, ...websites].map((img, index) => (
                <div className="website-shot" key={index}>
                  <img src={img} alt={`Website preview ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="vital-section" id="package">
        <div className="vital-pay-container split-section">
          <div className="gradient-box">
            <span className="vital-badge" style={{ background: "rgba(255,255,255,.18)", color: "#fff" }}>
              <RocketTakeoffFill /> Designed for Growth
            </span>

            <h2>One Monthly Plan. A Professional Website Without Stress.</h2>
            <p>We keep the process simple. Your landing page or website is designed to present your business professionally, explain your services clearly and encourage visitors to contact you.</p>

            <div className="stats-row">
              <div className="stat-card"><strong>100%</strong><span>Mobile Friendly</span></div>
              <div className="stat-card"><strong>24/7</strong><span>Online Presence</span></div>
              <div className="stat-card"><strong>Lead</strong><span>Focused Layout</span></div>
            </div>
          </div>

          <div className="package-card">
            <h3>Pay Monthly Website Package</h3>
            <div className="main-price">£24.99 <span>/ month</span></div>

            <p style={{ color: "#64748b", lineHeight: "1.8", marginBottom: 0 }}>
              A simple starting package for businesses that need a clean, professional and conversion-focused web presence.
            </p>

            <ul className="package-list">
              {packageItems.map((item, index) => (
                <li key={index}><CheckCircleFill /> {item}</li>
              ))}
            </ul>

            <div className="vital-actions" style={{ justifyContent: "flex-start" }}>
              <a href="https://wa.me/447398390815" target="_blank" rel="noreferrer" className="vital-btn-primary">
                Start on WhatsApp <Whatsapp />
              </a>

              <a href="tel:+441618837520" className="vital-btn-light">
                Call Us <TelephoneFill />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="payment-section">
        <div className="vital-pay-container">
          <div className="payment-shell">
            <div className="section-heading" style={{ marginBottom: 0 }}>
              <span className="vital-badge"><CreditCard2FrontFill /> Payment Accepted</span>
              <h2>Premium & Secure <span className="gradient-text">Payment Options</span></h2>
              <p>We can accept major payment methods through secure payment links after project discussion and approval. This section is visual only and has no payment functionality.</p>
            </div>

            <div className="payment-grid">
              {paymentMethods.map((method, index) => (
                <div className={`payment-card ${method.className}`} key={index}>
                  <div className="payment-icon">{method.icon}</div>
                  <div className="payment-brand">{method.brand}</div>
                  <div className="payment-name">{method.name}</div>
                </div>
              ))}
            </div>

            <div className="payment-note">
              Visa, Mastercard, Apple Pay and Google Pay can be supported through secure payment links.
            </div>
          </div>
        </div>
      </section>

      <section className="vital-section">
        <div className="vital-pay-container">
          <div className="section-heading">
            <span className="vital-badge"><GraphUpArrow /> Simple Process</span>
            <h2>From Idea to Live Page in a <span className="gradient-text">Clear Process</span></h2>
            <p>The page is designed to keep your ad funnel simple: user clicks ad, lands on this page, understands the offer, then contacts you.</p>
          </div>

          <div className="process-grid">
            <div className="process-card"><div className="process-number">1</div><h4>Send Requirements</h4><p>Client shares business name, services, location, logo and contact details.</p></div>
            <div className="process-card"><div className="process-number">2</div><h4>Design Layout</h4><p>We create a professional responsive layout focused on trust and enquiries.</p></div>
            <div className="process-card"><div className="process-number">3</div><h4>Review & Update</h4><p>Content, sections, images and calls-to-action are adjusted before launch.</p></div>
            <div className="process-card"><div className="process-number">4</div><h4>Launch & Promote</h4><p>Use the hidden direct link in ads and track enquiries from interested users.</p></div>
          </div>
        </div>
      </section>

      <section className="vital-section">
        <div className="vital-pay-container">
          <div className="section-heading">
            <span className="vital-badge"><PeopleFill /> Client Feedback</span>
            <h2>Reviews from <span className="gradient-text">Business Clients</span></h2>
            <p>Add your real client reviews here later. For now, these professional review cards are ready to match the landing page design.</p>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <div className="quote-icon"><Quote size={24} /></div>
                <div className="stars"><StarFill /><StarFill /><StarFill /><StarFill /><StarFill /></div>
                <p>“{review.text}”</p>
                <h5>{review.name}</h5>
                <span>{review.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vital-section">
        <div className="vital-pay-container">
          <div className="section-heading">
            <span className="vital-badge"><CheckCircleFill /> Pricing FAQ</span>
            <h2>Frequently Asked Questions <span className="gradient-text">About Our Price</span></h2>
            <p>Clear answers for customers who want to understand the monthly website package before contacting Vital AI.</p>
          </div>

          <div className="faq-wrap">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  {faq.q}
                  <ChevronDown />
                </button>
                {openFaq === index && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vital-section" id="contact">
        <div className="vital-pay-container">
          <div className="final-cta">
            <h2>Ready to Launch Your Professional Website?</h2>
            <p>Start with a simple monthly website package and give your business a cleaner, stronger and more professional online presence.</p>

            <div className="vital-actions" style={{ justifyContent: "center" }}>
              <a href="https://wa.me/447398390815" target="_blank" rel="noreferrer" className="vital-btn-light">
                <Whatsapp /> Chat on WhatsApp
              </a>

              <a href="tel:+441618837520" className="vital-btn-light">
                <TelephoneFill /> Call Now
              </a>

              <a href="https://vitalai.co.uk" target="_blank" rel="noreferrer" className="vital-btn-light">
                <Globe2 /> Official Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
// PayMonthlyLanding.jsx
import React, { useState } from "react";
import {
  CheckCircleFill,
  Whatsapp,
  TelephoneFill,
  ShieldCheck,
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
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PayMonthlyLanding() {
  const whatsappNumber = "447398390815";

  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  });

  const updateField = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const message = `
New Website Mockup Request

Name: ${formData.name}
Business Name: ${formData.business}
Phone: ${formData.phone}
Email: ${formData.email}
Business Type: ${formData.type}

Message:
${formData.message}

Package Interest:
£24.99/month website plan
Live in 7 days
No £1,500 upfront fee
`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const cards = [
    {
      icon: <BrushFill />,
      title: "Bespoke Design",
      text: "A clean website designed around your services, offer and target customers.",
    },
    {
      icon: <ShieldCheck />,
      title: "Hosting & SSL",
      text: "Secure hosting, SSL setup and professional online structure included.",
    },
    {
      icon: <Search />,
      title: "Basic SEO",
      text: "SEO-friendly headings, sections and content layout from day one.",
    },
    {
      icon: <LightningChargeFill />,
      title: "Fast Launch",
      text: "Your website can be designed, refined and launched within 7 days.",
    },
    {
      icon: <GearFill />,
      title: "Monthly Updates",
      text: "Need changes? Send details and we update your website every month.",
    },
    {
      icon: <TelephoneFill />,
      title: "Lead Focused",
      text: "Built with WhatsApp, call buttons and enquiry form to generate leads.",
    },
  ];

  const packageItems = [
    "Professional website / landing page",
    "Mobile responsive design",
    "Live in 7 days",
    "No £1,500 upfront agency fee",
    "Hosting and SSL included",
    "WhatsApp, call and form buttons",
    "Basic SEO structure",
    "Monthly updates included",
    "Perfect for ads and lead generation",
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
      text: "The website looked professional, loaded smoothly on mobile and helped us get more customer enquiries.",
    },
    {
      name: "Salon Owner",
      role: "Beauty & Local Services",
      text: "The page looked premium and made it very easy for customers to contact us through WhatsApp.",
    },
    {
      name: "Takeaway Business Owner",
      role: "Food & Delivery Business",
      text: "The layout was clear, modern and helped us present our menu, offers and contact details properly.",
    },
  ];

  const faqs = [
    {
      q: "What is included in £24.99/month?",
      a: "A professional website or landing page, mobile responsive layout, hosting, SSL, basic SEO setup, WhatsApp/contact buttons and monthly content updates.",
    },
    {
      q: "Is there a large upfront cost?",
      a: "No. This package is designed for businesses that do not want to pay the typical £1,500+ upfront website fee.",
    },
    {
      q: "How quickly can my website go live?",
      a: "Most small business websites can go live within 7 days after receiving your content, images and approval.",
    },
    {
      q: "Can I use this page for ads?",
      a: "Yes. The page is suitable for Google, Facebook, Instagram, TikTok and LinkedIn ads.",
    },
  ];

  return (
    <main className="vital-pay-page">
      <style>{`
        html { scroll-behavior: smooth; }

        .vital-pay-page {
          --primary:#7c3aed;
          --secondary:#2563eb;
          --pink:#ec4899;
          --dark:#0f172a;
          --muted:#64748b;
          --green:#22c55e;
          --soft:#f8fafc;
          font-family:"Poppins","Inter",system-ui,sans-serif;
          color:var(--dark);
          background:#fff;
          overflow-x:hidden;
        }

        .vital-pay-page * { box-sizing:border-box; }

        .vital-pay-container {
          width:min(1180px,calc(100% - 32px));
          margin:0 auto;
        }

        .vital-hero {
          position:relative;
          min-height:94vh;
          display:flex;
          align-items:center;
          padding:88px 0 78px;
          color:#fff;
          overflow:hidden;
          background:
            radial-gradient(circle at 10% 20%,rgba(236,72,153,.35),transparent 28%),
            radial-gradient(circle at 88% 8%,rgba(37,99,235,.35),transparent 30%),
            radial-gradient(circle at 75% 85%,rgba(124,58,237,.40),transparent 28%),
            linear-gradient(135deg,#050018 0%,#1b0b4f 45%,#5b12a8 100%);
        }

        .vital-hero::before {
          content:"";
          position:absolute;
          inset:0;
          background-image:
            linear-gradient(rgba(255,255,255,.055) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px);
          background-size:42px 42px;
          opacity:.45;
        }

        .hero-inner {
          position:relative;
          z-index:2;
          display:grid;
          grid-template-columns:1.05fr .95fr;
          gap:48px;
          align-items:center;
        }

        .hero-badge {
          display:inline-flex;
          align-items:center;
          gap:9px;
          padding:11px 18px;
          border-radius:999px;
          background:rgba(255,255,255,.12);
          border:1px solid rgba(255,255,255,.22);
          font-weight:900;
          margin-bottom:22px;
        }

        .hero-copy h1 {
          font-size:clamp(42px,6vw,78px);
          line-height:1.03;
          font-weight:950;
          letter-spacing:-2.5px;
          margin:0 0 20px;
        }

        .hero-copy h1 span {
          background:linear-gradient(135deg,#fff,#ff4fbe,#38bdf8);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hero-copy p {
          max-width:720px;
          font-size:18px;
          line-height:1.75;
          color:rgba(255,255,255,.86);
          margin:0 0 28px;
        }

        .hero-actions {
          display:flex;
          flex-wrap:wrap;
          gap:14px;
          margin-bottom:30px;
        }

        .btn-main,
        .btn-light {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          min-height:54px;
          padding:15px 26px;
          border-radius:16px;
          border:0;
          text-decoration:none;
          font-weight:950;
          cursor:pointer;
          transition:.25s ease;
        }

        .btn-main {
          background:linear-gradient(135deg,#ff1493,#ec4899);
          color:#fff;
          box-shadow:0 18px 38px rgba(236,72,153,.32);
        }

        .btn-light {
          background:#fff;
          color:var(--primary);
        }

        .btn-main:hover,
        .btn-light:hover {
          transform:translateY(-4px);
        }

        .hero-proof-row {
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:12px;
          max-width:900px;
        }

        .proof-mini {
          padding:16px;
          border-radius:20px;
          background:rgba(255,255,255,.105);
          border:1px solid rgba(255,255,255,.18);
          backdrop-filter:blur(10px);
        }

        .proof-mini strong {
          display:block;
          font-size:24px;
          font-weight:950;
          color:#fff;
          line-height:1.1;
        }

        .proof-mini span {
          display:block;
          color:rgba(255,255,255,.74);
          font-size:12.5px;
          font-weight:750;
          margin-top:5px;
        }

        .hero-visual {
          position:relative;
          min-height:480px;
        }

        .website-mockup {
          position:relative;
          border-radius:34px;
          overflow:hidden;
          background:#fff;
          border:1px solid rgba(255,255,255,.75);
          box-shadow:0 36px 90px rgba(0,0,0,.34);
          transform:rotate(1deg);
        }

        .mockup-top {
          height:42px;
          display:flex;
          align-items:center;
          gap:8px;
          padding:0 16px;
          background:#f8fafc;
          border-bottom:1px solid #e2e8f0;
        }

        .mockup-top i {
          width:10px;
          height:10px;
          border-radius:999px;
          background:#cbd5e1;
        }

        .mockup-screen {
          padding:20px;
          background:
            linear-gradient(135deg,rgba(124,58,237,.12),rgba(236,72,153,.08)),
            #fff;
        }

        .mock-nav {
          height:42px;
          border-radius:16px;
          background:#fff;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 16px;
          box-shadow:0 8px 20px rgba(15,23,42,.06);
          margin-bottom:14px;
        }

        .mock-logo {
          width:120px;
          height:14px;
          border-radius:999px;
          background:linear-gradient(135deg,var(--primary),var(--pink));
        }

        .mock-btn {
          width:94px;
          height:26px;
          border-radius:999px;
          background:#ec4899;
        }

        .mock-hero {
          height:245px;
          border-radius:24px;
          padding:24px;
          display:flex;
          flex-direction:column;
          justify-content:flex-end;
          background:
            linear-gradient(135deg,rgba(15,23,42,.56),rgba(124,58,237,.28)),
            url("https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1100&q=80");
          background-size:cover;
          background-position:center;
          color:#fff;
        }

        .mock-hero h3 {
          max-width:330px;
          font-weight:950;
          font-size:30px;
          line-height:1.12;
          margin:0 0 10px;
        }

        .mock-hero span {
          width:150px;
          height:34px;
          border-radius:999px;
          background:#fff;
          display:block;
        }

        .mock-cards {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:12px;
          margin-top:14px;
        }

        .mock-card {
          min-height:88px;
          border-radius:18px;
          background:#fff;
          box-shadow:0 8px 20px rgba(15,23,42,.06);
          padding:14px 10px;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .mock-card-content {
          display:none;
        }

        .floating-proof {
          position:absolute;
          left:-20px;
          bottom:45px;
          background:#fff;
          color:var(--dark);
          border-radius:22px;
          padding:16px 18px;
          box-shadow:0 22px 55px rgba(0,0,0,.22);
          display:flex;
          align-items:center;
          gap:12px;
        }

        .floating-proof .icon {
          width:46px;
          height:46px;
          border-radius:16px;
          display:grid;
          place-items:center;
          background:#ecfdf5;
          color:#16a34a;
          font-size:22px;
        }

        .floating-proof strong {
          display:block;
          font-size:20px;
          font-weight:950;
        }

        .floating-proof span {
          color:var(--muted);
          font-size:13px;
          font-weight:800;
        }

        .floating-reviews {
          position:absolute;
          right:-8px;
          top:38px;
          background:#fff;
          color:var(--dark);
          border-radius:22px;
          padding:16px 18px;
          box-shadow:0 22px 55px rgba(0,0,0,.22);
        }

        .floating-reviews .stars {
          color:#f59e0b;
          display:flex;
          gap:3px;
          margin-bottom:7px;
        }

        .floating-reviews strong {
          font-size:22px;
          font-weight:950;
        }

        .floating-reviews span {
          display:block;
          color:var(--muted);
          font-size:13px;
          font-weight:800;
        }

        .section {
          padding:95px 0;
        }

        .section-soft {
          background:
            radial-gradient(circle at top left,rgba(124,58,237,.08),transparent 30%),
            #f8fafc;
        }

        .section-heading {
          max-width:850px;
          margin:0 auto 52px;
          text-align:center;
        }

        .small-badge {
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:10px 16px;
          border-radius:999px;
          background:rgba(124,58,237,.08);
          color:var(--primary);
          font-weight:950;
          margin-bottom:16px;
        }

        .section-heading h2 {
          font-size:clamp(32px,5vw,58px);
          font-weight:950;
          letter-spacing:-1.8px;
          margin-bottom:14px;
        }

        .section-heading p {
          color:var(--muted);
          font-size:18px;
          line-height:1.75;
        }

        .proof-band {
          margin-top:-44px;
          position:relative;
          z-index:3;
        }

        .proof-band-card {
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:16px;
          padding:22px;
          border-radius:30px;
          background:#fff;
          box-shadow:0 24px 60px rgba(15,23,42,.13);
          border:1px solid rgba(15,23,42,.06);
        }

        .proof-card {
          padding:22px;
          border-radius:24px;
          background:#f8fafc;
          border:1px solid rgba(15,23,42,.06);
        }

        .proof-card.highlight {
          color:#fff;
          background:linear-gradient(135deg,var(--primary),var(--secondary),var(--pink));
        }

        .proof-card strong {
          display:block;
          font-size:32px;
          font-weight:950;
          line-height:1;
        }

        .proof-card span {
          display:block;
          margin-top:8px;
          color:var(--muted);
          font-weight:800;
          font-size:13px;
        }

        .proof-card.highlight span {
          color:rgba(255,255,255,.78);
        }

        .form-section {
          padding:95px 0;
          background:#fff;
        }

        .form-layout {
          display:grid;
          grid-template-columns:.9fr 1.1fr;
          gap:38px;
          align-items:center;
        }

        .form-copy {
          padding:38px;
          border-radius:34px;
          color:#fff;
          background:
            linear-gradient(135deg,rgba(15,23,42,.75),rgba(124,58,237,.78)),
            url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1300&q=80");
          background-size:cover;
          background-position:center;
          box-shadow:0 20px 52px rgba(15,23,42,.18);
        }

        .form-copy h2 {
          font-size:clamp(34px,5vw,54px);
          font-weight:950;
          letter-spacing:-1.8px;
          margin-bottom:14px;
        }

        .form-copy p {
          color:rgba(255,255,255,.84);
          line-height:1.75;
          font-size:17px;
        }

        .form-copy ul {
          list-style:none;
          padding:0;
          margin:24px 0 0;
          display:grid;
          gap:13px;
        }

        .form-copy li {
          display:flex;
          gap:10px;
          font-weight:850;
        }

        .form-copy svg {
          color:#38f59f;
          flex-shrink:0;
          margin-top:3px;
        }

        .hero-form-card {
          background:#fff;
          border-radius:32px;
          padding:30px;
          box-shadow:0 24px 60px rgba(15,23,42,.12);
          border:1px solid rgba(15,23,42,.08);
        }

        .form-top {
          margin-bottom:20px;
        }

        .form-pill {
          display:inline-flex;
          align-items:center;
          gap:8px;
          background:#ecfdf5;
          color:#15803d;
          padding:9px 14px;
          border-radius:999px;
          font-size:13px;
          font-weight:950;
          margin-bottom:14px;
        }

        .hero-form-card h3 {
          font-size:30px;
          line-height:1.12;
          font-weight:950;
          margin:0 0 8px;
        }

        .hero-form-card p {
          margin:0;
          color:var(--muted);
          line-height:1.6;
        }

        .price-box {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:12px;
          margin:20px 0;
        }

        .price-old,
        .price-new {
          padding:16px;
          border-radius:18px;
          text-align:center;
        }

        .price-old {
          background:#fff1f2;
          border:1px solid rgba(239,68,68,.16);
        }

        .price-new {
          background:#f5f3ff;
          border:1px solid rgba(124,58,237,.16);
        }

        .price-old span,
        .price-new span {
          display:block;
          color:var(--muted);
          font-size:12px;
          font-weight:850;
          margin-bottom:5px;
        }

        .price-old strong {
          color:#ef4444;
          font-size:28px;
          font-weight:950;
        }

        .price-new strong {
          color:var(--primary);
          font-size:28px;
          font-weight:950;
        }

        .lead-form {
          display:grid;
          gap:13px;
        }

        .form-row {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:12px;
        }

        .lead-form input,
        .lead-form select,
        .lead-form textarea {
          width:100%;
          border:1px solid #dbe4f0;
          border-radius:14px;
          padding:14px 15px;
          outline:none;
          font-size:14px;
          background:#fff;
        }

        .lead-form textarea {
          resize:none;
        }

        .lead-form input:focus,
        .lead-form select:focus,
        .lead-form textarea:focus {
          border-color:var(--primary);
          box-shadow:0 0 0 4px rgba(124,58,237,.1);
        }

        .form-note {
          text-align:center;
          color:var(--muted);
          font-size:12.5px;
          font-weight:700;
        }

        .cards-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:22px;
        }

        .service-card {
          background:#fff;
          border:1px solid rgba(15,23,42,.08);
          border-radius:28px;
          padding:30px;
          box-shadow:0 14px 34px rgba(15,23,42,.06);
          transition:.25s ease;
        }

        .service-card:hover {
          transform:translateY(-8px);
          box-shadow:0 18px 45px rgba(124,58,237,.13);
        }

        .service-icon {
          width:64px;
          height:64px;
          display:grid;
          place-items:center;
          border-radius:20px;
          color:#fff;
          font-size:28px;
          margin-bottom:20px;
          background:linear-gradient(135deg,var(--primary),var(--secondary),var(--pink));
        }

        .service-card h3 {
          font-size:22px;
          font-weight:950;
          margin-bottom:10px;
        }

        .service-card p {
          color:var(--muted);
          line-height:1.75;
          margin:0;
        }

        .package-layout {
          display:grid;
          grid-template-columns:.95fr 1.05fr;
          gap:34px;
          align-items:center;
        }

        .gradient-box {
          border-radius:34px;
          padding:40px;
          color:#fff;
          background:linear-gradient(135deg,#7c3aed,#2563eb,#ec4899);
          box-shadow:0 20px 50px rgba(124,58,237,.2);
        }

        .gradient-box h2 {
          font-size:clamp(34px,5vw,54px);
          font-weight:950;
          letter-spacing:-1.8px;
        }

        .gradient-box p {
          color:rgba(255,255,255,.86);
          line-height:1.75;
          font-size:17px;
        }

        .stats-row {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:14px;
          margin-top:24px;
        }

        .stat-card {
          background:rgba(255,255,255,.14);
          border:1px solid rgba(255,255,255,.22);
          padding:20px;
          border-radius:22px;
        }

        .stat-card strong {
          display:block;
          font-size:28px;
          font-weight:950;
        }

        .stat-card span {
          color:rgba(255,255,255,.78);
          font-weight:750;
        }

        .package-card {
          background:#fff;
          border-radius:34px;
          padding:38px;
          border:1px solid rgba(15,23,42,.08);
          box-shadow:0 16px 40px rgba(15,23,42,.08);
        }

        .main-price {
          font-size:58px;
          font-weight:950;
          color:var(--primary);
          line-height:1;
          margin:14px 0;
        }

        .main-price span {
          font-size:18px;
          color:var(--muted);
        }

        .package-list {
          list-style:none;
          padding:0;
          margin:24px 0 0;
          display:grid;
          gap:12px;
        }

        .package-list li {
          display:flex;
          gap:10px;
          color:#334155;
          font-weight:760;
        }

        .package-list svg {
          color:var(--green);
          flex-shrink:0;
          margin-top:3px;
        }

        .marquee-shell {
          overflow:hidden;
          border-radius:34px;
          padding:24px 0;
          background:#fff;
          border:1px solid rgba(15,23,42,.08);
          box-shadow:0 14px 34px rgba(15,23,42,.06);
        }

        .website-marquee {
          display:flex;
          gap:22px;
          width:max-content;
          animation:websiteScroll 44s linear infinite;
        }

        @keyframes websiteScroll {
          from { transform:translateX(0); }
          to { transform:translateX(-50%); }
        }

        .website-shot {
          width:360px;
          height:235px;
          border-radius:24px;
          overflow:hidden;
          background:#e2e8f0;
          flex:0 0 auto;
        }

        .website-shot img {
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .process-grid {
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
        }

        .process-card {
          background:#fff;
          border-radius:26px;
          padding:26px;
          border:1px solid rgba(15,23,42,.08);
          box-shadow:0 12px 30px rgba(15,23,42,.05);
        }

        .process-number {
          width:46px;
          height:46px;
          border-radius:16px;
          display:grid;
          place-items:center;
          color:#fff;
          font-weight:950;
          background:linear-gradient(135deg,var(--primary),var(--secondary));
          margin-bottom:18px;
        }

        .process-card h4 {
          font-weight:950;
          margin-bottom:8px;
        }

        .process-card p {
          color:var(--muted);
          line-height:1.65;
          margin:0;
        }

        .reviews-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:22px;
        }

        .review-card {
          background:#fff;
          border-radius:28px;
          padding:30px;
          border:1px solid rgba(15,23,42,.08);
          box-shadow:0 14px 34px rgba(15,23,42,.06);
        }

        .quote-icon {
          width:50px;
          height:50px;
          display:grid;
          place-items:center;
          border-radius:18px;
          color:var(--primary);
          background:rgba(124,58,237,.10);
          margin-bottom:16px;
        }

        .stars {
          display:flex;
          gap:4px;
          color:#f59e0b;
          margin-bottom:14px;
        }

        .review-card p {
          color:var(--muted);
          line-height:1.75;
        }

        .review-card h5 {
          font-weight:950;
        }

        .review-card span {
          color:var(--muted);
          font-weight:700;
          font-size:14px;
        }

        .faq-wrap {
          max-width:920px;
          margin:0 auto;
        }

        .faq-item {
          background:#fff;
          border-radius:20px;
          border:1px solid rgba(15,23,42,.08);
          margin-bottom:14px;
          overflow:hidden;
          box-shadow:0 10px 28px rgba(15,23,42,.05);
        }

        .faq-question {
          width:100%;
          border:0;
          background:transparent;
          padding:21px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          font-weight:900;
          text-align:left;
        }

        .faq-answer {
          padding:0 21px 21px;
          color:var(--muted);
          line-height:1.75;
        }

        .final-cta {
          padding:65px 28px;
          border-radius:38px;
          text-align:center;
          color:#fff;
          background:
            linear-gradient(135deg,rgba(15,23,42,.78),rgba(124,58,237,.82)),
            url("https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80");
          background-size:cover;
          background-position:center;
        }

        .final-cta h2 {
          font-size:clamp(34px,5vw,58px);
          font-weight:950;
          letter-spacing:-1.8px;
        }

        .final-cta p {
          max-width:720px;
          margin:16px auto 0;
          color:rgba(255,255,255,.86);
          font-size:18px;
          line-height:1.75;
        }

        .final-actions {
          display:flex;
          justify-content:center;
          gap:14px;
          flex-wrap:wrap;
          margin-top:26px;
        }

        .mobile-sticky-cta {
          display:none;
        }

        @media (max-width:1024px) {
          .hero-inner,
          .form-layout,
          .package-layout {
            grid-template-columns:1fr;
          }

          .hero-copy {
            text-align:center;
          }

          .hero-copy p {
            margin-left:auto;
            margin-right:auto;
          }

          .hero-actions {
            justify-content:center;
          }

          .hero-proof-row {
            margin:0 auto;
          }

          .hero-visual {
            min-height:auto;
            max-width:680px;
            margin:0 auto;
            width:100%;
          }

          .cards-grid,
          .reviews-grid {
            grid-template-columns:repeat(2,1fr);
          }

          .process-grid,
          .proof-band-card {
            grid-template-columns:repeat(2,1fr);
          }
        }

        @media (max-width:768px) {
          .vital-pay-container {
            width:min(100% - 24px,620px);
          }

          .vital-hero {
            min-height:auto;
            padding:48px 0 38px;
          }

          .hero-inner {
            gap:24px;
          }

          .hero-copy h1 {
            font-size:clamp(32px,9.5vw,44px);
            letter-spacing:-1.1px;
            line-height:1.08;
          }

          .hero-copy p {
            font-size:15.5px;
            line-height:1.65;
            margin-bottom:22px;
          }

          .hero-badge {
            font-size:12.5px;
            padding:9px 14px;
            margin-bottom:16px;
          }

          .hero-actions {
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:10px;
            margin-bottom:18px;
          }

          .btn-main,
          .btn-light {
            width:100%;
            min-height:48px;
            padding:12px 12px;
            font-size:13.5px;
            border-radius:14px;
          }

          .hero-proof-row {
            grid-template-columns:repeat(2,1fr);
            gap:9px;
            width:100%;
          }

          .proof-mini {
            padding:12px 10px;
            border-radius:16px;
            text-align:center;
          }

          .proof-mini strong {
            font-size:18px;
          }

          .proof-mini span {
            font-size:11px;
            line-height:1.25;
          }

          .hero-visual {
            width:100%;
            max-width:430px;
            margin:4px auto 0;
          }

          .website-mockup {
            transform:none;
            border-radius:22px;
            box-shadow:0 18px 42px rgba(0,0,0,.28);
          }

          .mockup-top {
            height:32px;
            padding:0 12px;
          }

          .mockup-top i {
            width:8px;
            height:8px;
          }

          .mockup-screen {
            padding:12px;
          }

          .mock-nav {
            height:34px;
            border-radius:12px;
            padding:0 10px;
            margin-bottom:10px;
          }

          .mock-logo {
            width:90px;
            height:10px;
          }

          .mock-btn {
            width:64px;
            height:20px;
          }

          .mock-hero {
            height:155px;
            padding:15px;
            border-radius:18px;
          }

          .mock-hero h3 {
            font-size:18px;
            max-width:230px;
            margin-bottom:8px;
          }

          .mock-hero span {
            width:105px;
            height:26px;
          }

          .mock-cards {
            grid-template-columns:repeat(3,1fr);
            gap:8px;
            margin-top:10px;
          }

          .mock-card {
            min-height:62px;
            padding:8px 5px;
            border-radius:12px;
          }

          .mock-card-content {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            text-align:center;
          }

          .mock-card-icon {
            width:24px;
            height:24px;
            border-radius:9px;
            display:grid;
            place-items:center;
            margin-bottom:4px;
            background:#f5f3ff;
            color:var(--primary);
            font-size:12px;
          }

          .mock-card strong {
            display:block;
            font-size:13.5px;
            font-weight:950;
            color:var(--dark);
            line-height:1;
          }

          .mock-card span {
            display:block;
            margin-top:3px;
            color:var(--muted);
            font-size:8.5px;
            font-weight:800;
            line-height:1.15;
          }

          .floating-proof,
          .floating-reviews {
            display:none;
          }

          .proof-band {
            margin-top:0;
            padding-top:22px;
          }

          .proof-band-card {
            grid-template-columns:repeat(2,1fr);
            gap:10px;
            padding:12px;
            border-radius:22px;
          }

          .proof-card {
            padding:14px 10px;
            border-radius:17px;
            text-align:center;
          }

          .proof-card strong {
            font-size:20px;
          }

          .proof-card span {
            font-size:11.5px;
            line-height:1.25;
          }

          .section,
          .form-section {
            padding:58px 0;
          }

          .section-heading {
            margin-bottom:34px;
          }

          .section-heading h2 {
            font-size:clamp(29px,8vw,40px);
            letter-spacing:-1.1px;
          }

          .section-heading p {
            font-size:15.5px;
          }

          .form-layout,
          .price-box,
          .form-row,
          .cards-grid,
          .reviews-grid,
          .process-grid,
          .stats-row {
            grid-template-columns:1fr;
          }

          .service-card,
          .review-card,
          .process-card,
          .package-card,
          .gradient-box,
          .form-copy,
          .hero-form-card {
            padding:24px 20px;
            border-radius:24px;
          }

          .hero-form-card h3 {
            font-size:25px;
          }

          .main-price {
            font-size:44px;
          }

          .website-shot {
            width:270px;
            height:185px;
          }

          .final-cta {
            padding:42px 20px;
            border-radius:28px;
          }

          .final-actions {
            display:grid;
            grid-template-columns:1fr;
          }

          .mobile-sticky-cta {
            display:block;
            position:fixed;
            left:14px;
            right:14px;
            bottom:14px;
            z-index:9999;
          }

          .mobile-sticky-cta a {
            display:block;
            text-align:center;
            color:#fff;
            text-decoration:none;
            font-weight:950;
            padding:15px;
            border-radius:15px;
            background:linear-gradient(135deg,#7c3aed,#ec4899);
            box-shadow:0 10px 30px rgba(0,0,0,.25);
          }
        }

        @media (max-width:420px) {
          .hero-actions {
            grid-template-columns:1fr;
          }

          .hero-proof-row {
            grid-template-columns:repeat(2,1fr);
          }

          .mock-hero {
            height:140px;
          }

          .mock-hero h3 {
            font-size:16px;
          }

          .mock-cards {
            grid-template-columns:repeat(3,1fr);
          }

          .mock-card {
            min-height:58px;
          }

          .mock-card strong {
            font-size:12.5px;
          }

          .mock-card span {
            font-size:8px;
          }
        }
      `}</style>

      <section className="vital-hero" id="top">
        <div className="vital-pay-container">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="hero-badge">
                <RocketTakeoffFill /> Pay Monthly Website Offer
              </div>

              <h1>
                Get Your Business Website <span>Live In 7 Days</span>
              </h1>

              <p>
                Professional website for UK small businesses without the usual
                £1,500+ upfront agency cost. Built for leads, calls, WhatsApp
                messages and online presence.
              </p>

              <div className="hero-actions">
                <a href="#lead-form" className="btn-main">
                  Get Free Mockup
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-light"
                >
                  <Whatsapp /> WhatsApp Now
                </a>
              </div>

              <div className="hero-proof-row">
                <div className="proof-mini">
                  <strong>£0 Setup</strong>
                  <span>No £1,500 upfront fee</span>
                </div>

                <div className="proof-mini">
                  <strong>7 Days</strong>
                  <span>Fast website launch</span>
                </div>

                <div className="proof-mini">
                  <strong>550+</strong>
                  <span>UK local reviews</span>
                </div>

                <div className="proof-mini">
                  <strong>17+</strong>
                  <span>Enquiries in first month</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="website-mockup">
                <div className="mockup-top">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <div className="mockup-screen">
                  <div className="mock-nav">
                    <div className="mock-logo"></div>
                    <div className="mock-btn"></div>
                  </div>

                  <div className="mock-hero">
                    <h3>Professional Website For Local Businesses</h3>
                    <span></span>
                  </div>

                  <div className="mock-cards">
                    <div className="mock-card">
                      <div className="mock-card-content">
                        <div className="mock-card-icon">
                          <StarFill />
                        </div>
                        <strong>550+</strong>
                        <span>UK local reviews</span>
                      </div>
                    </div>

                    <div className="mock-card">
                      <div className="mock-card-content">
                        <div className="mock-card-icon">
                          <GraphUpArrow />
                        </div>
                        <strong>17+</strong>
                        <span>Enquiries first month</span>
                      </div>
                    </div>

                    <div className="mock-card">
                      <div className="mock-card-content">
                        <div className="mock-card-icon">
                          <RocketTakeoffFill />
                        </div>
                        <strong>7 Days</strong>
                        <span>Fast website launch</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-reviews">
                <div className="stars">
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                </div>
                <strong>550+</strong>
                <span>UK local reviews</span>
              </div>

              <div className="floating-proof">
                <div className="icon">
                  <GraphUpArrow />
                </div>
                <div>
                  <strong>17+ Enquiries</strong>
                  <span>in just first month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="proof-band">
        <div className="vital-pay-container">
          <div className="proof-band-card">
            <div className="proof-card highlight">
              <strong>£1,500+</strong>
              <span>Typical upfront agency cost avoided</span>
            </div>

            <div className="proof-card">
              <strong>7 Days</strong>
              <span>Website launch timeline</span>
            </div>

            <div className="proof-card">
              <strong>550+</strong>
              <span>UK local reviews</span>
            </div>

            <div className="proof-card">
              <strong>17+</strong>
              <span>Enquiries in just first month</span>
            </div>
          </div>
        </div>
      </div>

      <section className="form-section" id="lead-form">
        <div className="vital-pay-container">
          <div className="form-layout">
            <div className="form-copy">
              <h2>Request Your Free Website Mockup</h2>
              <p>
                Fill the form and your details will open directly in WhatsApp.
                We will review your business and prepare a professional website
                concept designed to generate more enquiries.
              </p>

              <ul>
                <li>
                  <CheckCircleFill /> Free mockup before you decide
                </li>
                <li>
                  <CheckCircleFill /> No £1,500 upfront website fee
                </li>
                <li>
                  <CheckCircleFill /> Mobile responsive on all devices
                </li>
                <li>
                  <CheckCircleFill /> Built for calls, WhatsApp and enquiries
                </li>
              </ul>
            </div>

            <div className="hero-form-card">
              <div className="form-top">
                <div className="form-pill">
                  <PatchCheckFill /> Free Website Mockup
                </div>

                <h3>Send Your Details On WhatsApp</h3>
                <p>
                  Complete the form below. When you submit, your message opens
                  directly in WhatsApp.
                </p>
              </div>

              <div className="price-box">
                <div className="price-old">
                  <span>Typical Agency</span>
                  <strong>£1,500+</strong>
                </div>

                <div className="price-new">
                  <span>Vital AI Plan</span>
                  <strong>£24.99/mo</strong>
                </div>
              </div>

              <form className="lead-form" onSubmit={sendToWhatsApp}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={updateField}
                    required
                  />

                  <input
                    type="text"
                    name="business"
                    placeholder="Business Name"
                    value={formData.business}
                    onChange={updateField}
                    required
                  />
                </div>

                <div className="form-row">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={updateField}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={updateField}
                    required
                  />
                </div>

                <select
                  name="type"
                  value={formData.type}
                  onChange={updateField}
                  required
                >
                  <option value="">Select Business Type</option>
                  <option>Restaurant / Takeaway</option>
                  <option>Roofing / Construction</option>
                  <option>Beauty / Salon</option>
                  <option>Cleaning Services</option>
                  <option>Retail / E-commerce</option>
                  <option>Other Business</option>
                </select>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your business"
                  value={formData.message}
                  onChange={updateField}
                />

                <button type="submit" className="btn-main">
                  <Whatsapp /> Send Details On WhatsApp
                </button>

                <div className="form-note">
                  No spam. Your message opens directly in WhatsApp.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="vital-pay-container">
          <div className="section-heading">
            <div className="small-badge">
              <CheckCircleFill /> What's Included
            </div>

            <h2>Everything Your Business Needs To Look Professional Online</h2>

            <p>
              A clean, modern and lead-focused website package for small
              businesses that want online presence without heavy upfront cost.
            </p>
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

      <section className="section">
        <div className="vital-pay-container">
          <div className="package-layout">
            <div className="gradient-box">
              <h2>Why Pay £1,500 Upfront When You Can Start Monthly?</h2>

              <p>
                Most small businesses delay getting a website because of high
                agency setup fees. Our monthly plan helps you go online quickly,
                professionally and affordably.
              </p>

              <div className="stats-row">
                <div className="stat-card">
                  <strong>7 Days</strong>
                  <span>Fast launch</span>
                </div>

                <div className="stat-card">
                  <strong>£0</strong>
                  <span>Setup fee</span>
                </div>

                <div className="stat-card">
                  <strong>£24.99</strong>
                  <span>Per month</span>
                </div>
              </div>
            </div>

            <div className="package-card">
              <div className="small-badge">
                <PatchCheckFill /> Monthly Website Plan
              </div>

              <h3>Website Package</h3>

              <div className="main-price">
                £24.99 <span>/month</span>
              </div>

              <p>
                No £1,500 upfront fee. Start with a professional online presence
                and upgrade later when your business grows.
              </p>

              <ul className="package-list">
                {packageItems.map((item, index) => (
                  <li key={index}>
                    <CheckCircleFill /> {item}
                  </li>
                ))}
              </ul>

              <a
                href="#lead-form"
                className="btn-main"
                style={{ width: "100%", marginTop: "22px" }}
              >
                Get Free Mockup
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="vital-pay-container">
          <div className="section-heading">
            <div className="small-badge">
              <GraphUpArrow /> Website Showcase
            </div>

            <h2>Modern Website Designs Built For First Impressions</h2>

            <p>
              Showcase your services clearly and make it easy for customers to
              call, message or submit an enquiry.
            </p>
          </div>

          <div className="marquee-shell">
            <div className="website-marquee">
              {[...websites, ...websites].map((img, index) => (
                <div className="website-shot" key={index}>
                  <img src={img} alt={`Website design ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="vital-pay-container">
          <div className="section-heading">
            <div className="small-badge">
              <RocketTakeoffFill /> Simple Process
            </div>

            <h2>From First Message To Live Website In 7 Days</h2>

            <p>A clear and simple process designed for busy business owners.</p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">1</div>
              <h4>Send Details</h4>
              <p>Share your business name, services, logo and contact details.</p>
            </div>

            <div className="process-card">
              <div className="process-number">2</div>
              <h4>Free Mockup</h4>
              <p>We prepare a professional homepage concept for your business.</p>
            </div>

            <div className="process-card">
              <div className="process-number">3</div>
              <h4>Build Website</h4>
              <p>We build a responsive website with lead-focused sections.</p>
            </div>

            <div className="process-card">
              <div className="process-number">4</div>
              <h4>Go Live</h4>
              <p>Your website goes live with WhatsApp, call and form setup.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="vital-pay-container">
          <div className="section-heading">
            <div className="small-badge">
              <PeopleFill /> Client Feedback
            </div>

            <h2>Trusted By UK Local Businesses</h2>

            <p>
              550+ UK local reviews and lead-focused pages designed to generate
              real customer enquiries.
            </p>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <div className="quote-icon">
                  <Quote />
                </div>

                <div className="stars">
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                </div>

                <p>{review.text}</p>
                <h5>{review.name}</h5>
                <span>{review.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="vital-pay-container">
          <div className="section-heading">
            <div className="small-badge">
              <ChevronDown /> FAQ
            </div>

            <h2>Questions Business Owners Ask</h2>

            <p>
              Clear answers about the monthly website offer and launch process.
            </p>
          </div>

          <div className="faq-wrap">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.q}
                  <ChevronDown />
                </button>

                {openFaq === index && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="vital-pay-container">
          <div className="final-cta">
            <h2>Ready To Get Your Business Website Live?</h2>

            <p>
              Start with a free website mockup and launch your professional
              online presence without paying a large upfront agency fee.
            </p>

            <div className="final-actions">
              <a href="#lead-form" className="btn-main">
                Get Free Mockup
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="btn-light"
              >
                <Whatsapp /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mobile-sticky-cta">
        <a href="#lead-form">Get Free Mockup</a>
      </div>
    </main>
  );
}
import React, { useState } from "react";
import {
  CheckCircleFill,
  ArrowRight,
  LightningChargeFill,
  ShieldCheck,
  Globe2,
  EnvelopeFill,
  Search,
  GearFill,
  PhoneFill,
  Whatsapp,
  ChevronDown,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PayMonthlyLanding() {
  const [openFaq, setOpenFaq] = useState(0);

  const features = [
    {
      icon: <LightningChargeFill />,
      title: "Fast Website Design",
      text: "Modern, responsive and conversion-focused website design for your business.",
    },
    {
      icon: <Globe2 />,
      title: "Domain & Hosting",
      text: "Domain setup, secure hosting and technical configuration handled for you.",
    },
    {
      icon: <ShieldCheck />,
      title: "SSL & Security",
      text: "Secure website setup with SSL, protection and ongoing maintenance.",
    },
    {
      icon: <EnvelopeFill />,
      title: "Business Email",
      text: "Professional branded email setup to make your business look trusted.",
    },
    {
      icon: <Search />,
      title: "Basic SEO",
      text: "SEO-friendly structure, page titles, meta setup and Google-ready pages.",
    },
    {
      icon: <GearFill />,
      title: "Monthly Updates",
      text: "Website changes, content updates and support included every month.",
    },
  ];

  const faqs = [
    {
      q: "Can I pay monthly instead of paying upfront?",
      a: "Yes. Our monthly website plan helps businesses get a professional website without a large upfront cost.",
    },
    {
      q: "What is included in the monthly website package?",
      a: "Website design, hosting, domain setup, business email, basic SEO, SSL security, updates and support.",
    },
    {
      q: "Is this suitable for UK small businesses?",
      a: "Yes. It is designed for local service businesses, shops, contractors, salons, restaurants and startups.",
    },
    {
      q: "Do you manage everything?",
      a: "Yes. Vital AI handles design, setup, updates, technical support and ongoing website management.",
    },
  ];

  return (
    <main className="vitalLanding">
      <style>{`
        .vitalLanding {
          --primary: #7c3aed;
          --secondary: #2563eb;
          --dark: #0f172a;
          --muted: #64748b;
          --light: #f8fafc;
          font-family: "Inter", "Poppins", sans-serif;
          color: var(--dark);
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(124,58,237,.16), transparent 35%),
            radial-gradient(circle at top right, rgba(37,99,235,.16), transparent 32%),
            #ffffff;
        }

        .vitalSection {
          padding: 90px 20px;
        }

        .vitalContainer {
          max-width: 1180px;
          margin: 0 auto;
        }

        .hero {
          min-height: 92vh;
          display: flex;
          align-items: center;
          position: relative;
          text-align: center;
          padding: 110px 20px 70px;
        }

        .badgeSoft {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(124, 58, 237, .1);
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 22px;
        }

        .hero h1 {
          font-size: clamp(42px, 7vw, 82px);
          font-weight: 900;
          line-height: .98;
          letter-spacing: -3px;
          margin-bottom: 22px;
        }

        .gradientText {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero p {
          max-width: 760px;
          margin: 0 auto 28px;
          font-size: 20px;
          color: var(--muted);
          line-height: 1.7;
        }

        .heroChecks {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin: 28px 0;
        }

        .heroChecks span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 16px;
          border: 1px solid rgba(124,58,237,.16);
          background: rgba(255,255,255,.82);
          border-radius: 999px;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(15,23,42,.06);
        }

        .heroChecks svg {
          color: var(--primary);
        }

        .btnWrap {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 26px;
        }

        .btnPrimary,
        .btnSecondary {
          border: 0;
          padding: 15px 26px;
          border-radius: 16px;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: .3s ease;
        }

        .btnPrimary {
          color: #fff;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          box-shadow: 0 18px 45px rgba(124,58,237,.28);
        }

        .btnSecondary {
          color: var(--dark);
          background: #fff;
          border: 1px solid rgba(15,23,42,.1);
        }

        .btnPrimary:hover,
        .btnSecondary:hover {
          transform: translateY(-4px);
        }

        .floatingCard {
          margin: 55px auto 0;
          max-width: 920px;
          border-radius: 34px;
          padding: 26px;
          background: rgba(255,255,255,.7);
          backdrop-filter: blur(18px);
          box-shadow: 0 35px 90px rgba(15,23,42,.14);
          border: 1px solid rgba(255,255,255,.8);
        }

        .browserMock {
          border-radius: 24px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(15,23,42,.08);
        }

        .browserTop {
          padding: 14px 18px;
          background: #f1f5f9;
          display: flex;
          gap: 8px;
        }

        .browserTop i {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #cbd5e1;
        }

        .mockContent {
          padding: 30px;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 22px;
          text-align: left;
        }

        .mockPanel {
          min-height: 220px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(124,58,237,.16), rgba(37,99,235,.16));
          padding: 26px;
        }

        .mockPanel h3 {
          font-weight: 900;
        }

        .mockSide {
          display: grid;
          gap: 14px;
        }

        .miniCard {
          padding: 18px;
          border-radius: 20px;
          background: #f8fafc;
          font-weight: 800;
        }

        .sectionHead {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 50px;
        }

        .sectionHead h2 {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 900;
          letter-spacing: -2px;
        }

        .sectionHead p {
          color: var(--muted);
          font-size: 18px;
          line-height: 1.7;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .featureCard {
          padding: 34px;
          border-radius: 28px;
          background: #fff;
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: 0 20px 55px rgba(15,23,42,.07);
          transition: .3s ease;
        }

        .featureCard:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 70px rgba(124,58,237,.14);
        }

        .featureIcon {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          color: #fff;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          font-size: 25px;
          margin-bottom: 22px;
        }

        .featureCard h3 {
          font-size: 21px;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .featureCard p {
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .pricingCard {
          background: linear-gradient(135deg, #111827, #312e81);
          color: #fff;
          border-radius: 34px;
          padding: 38px;
          box-shadow: 0 30px 80px rgba(37,99,235,.25);
        }

        .pricingCard h3 {
          font-size: 32px;
          font-weight: 900;
        }

        .price {
          font-size: 56px;
          font-weight: 950;
          margin: 18px 0;
        }

        .price span {
          font-size: 18px;
          color: #cbd5e1;
        }

        .pricingCard ul {
          list-style: none;
          padding: 0;
          margin: 25px 0 0;
        }

        .pricingCard li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 13px;
          color: #e5e7eb;
          font-weight: 600;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 24px;
        }

        .stat {
          padding: 22px;
          border-radius: 22px;
          background: rgba(124,58,237,.08);
          border: 1px solid rgba(124,58,237,.12);
        }

        .stat strong {
          display: block;
          font-size: 30px;
          font-weight: 950;
          color: var(--primary);
        }

        .stat span {
          color: var(--muted);
          font-weight: 700;
        }

        .faqWrap {
          max-width: 900px;
          margin: 0 auto;
        }

        .faqItem {
          background: #fff;
          border: 1px solid rgba(15,23,42,.08);
          border-radius: 22px;
          margin-bottom: 14px;
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(15,23,42,.05);
        }

        .faqQ {
          width: 100%;
          padding: 22px;
          border: 0;
          background: transparent;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 900;
          text-align: left;
        }

        .faqA {
          padding: 0 22px 22px;
          color: var(--muted);
          line-height: 1.7;
        }

        .ctaBox {
          text-align: center;
          border-radius: 38px;
          padding: 60px 30px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: #fff;
          box-shadow: 0 30px 80px rgba(124,58,237,.25);
        }

        .ctaBox h2 {
          font-size: clamp(32px, 5vw, 58px);
          font-weight: 950;
          letter-spacing: -2px;
        }

        .ctaBox p {
          max-width: 680px;
          margin: 16px auto 26px;
          color: rgba(255,255,255,.86);
          font-size: 18px;
        }

        @media (max-width: 992px) {
          .featureGrid,
          .split,
          .mockContent {
            grid-template-columns: 1fr;
          }

          .featureGrid {
            gap: 18px;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: auto;
          }
        }

        @media (max-width: 576px) {
          .vitalSection {
            padding: 65px 16px;
          }

          .hero h1 {
            letter-spacing: -1.5px;
          }

          .hero p {
            font-size: 16px;
          }

          .btnPrimary,
          .btnSecondary {
            width: 100%;
            justify-content: center;
          }

          .floatingCard {
            padding: 14px;
            border-radius: 24px;
          }

          .mockContent {
            padding: 20px;
          }

          .featureCard,
          .pricingCard {
            padding: 26px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="vitalContainer">
          <div className="badgeSoft">
            <CheckCircleFill /> Vital AI Website Management
          </div>

          <h1>
            Pay Monthly <span className="gradientText">Website Design</span>
          </h1>

          <p>
            Professional websites for UK businesses with hosting, domain setup,
            business email, basic SEO, monthly updates and support included.
          </p>

          <div className="heroChecks">
            <span><CheckCircleFill /> One Monthly Price</span>
            <span><CheckCircleFill /> No Large Upfront Fees</span>
            <span><CheckCircleFill /> Mobile Friendly</span>
            <span><CheckCircleFill /> Fully Managed</span>
          </div>

          <div className="btnWrap">
            <a href="#contact" className="btnPrimary">
              Arrange a Call <ArrowRight />
            </a>
            <a
              href="https://wa.me/447000000000"
              target="_blank"
              rel="noreferrer"
              className="btnSecondary"
            >
              <Whatsapp /> Chat on WhatsApp
            </a>
          </div>

          <div className="floatingCard">
            <div className="browserMock">
              <div className="browserTop">
                <i></i><i></i><i></i>
              </div>
              <div className="mockContent">
                <div className="mockPanel">
                  <h3>Website Built to Bring More Leads</h3>
                  <p>
                    Clean design, strong CTA, responsive layout and service pages
                    made for local business growth.
                  </p>
                </div>
                <div className="mockSide">
                  <div className="miniCard">Hosting Included</div>
                  <div className="miniCard">Basic SEO Setup</div>
                  <div className="miniCard">Monthly Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vitalSection">
        <div className="vitalContainer">
          <div className="sectionHead">
            <h2>Everything Your Business Website Needs</h2>
            <p>
              We design, launch and manage your website so you can focus on
              getting customers instead of handling technical work.
            </p>
          </div>

          <div className="featureGrid">
            {features.map((item, index) => (
              <div className="featureCard" key={index}>
                <div className="featureIcon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vitalSection">
        <div className="vitalContainer split">
          <div>
            <div className="badgeSoft">Monthly Website Package</div>
            <h2 style={{ fontWeight: 950, fontSize: "clamp(34px,5vw,58px)", letterSpacing: "-2px" }}>
              One package. Everything managed.
            </h2>
            <p style={{ color: "#64748b", fontSize: 18, lineHeight: 1.8 }}>
              Perfect for businesses that need a professional online presence,
              regular updates and technical support without paying a large
              upfront website cost.
            </p>

            <div className="stats">
              <div className="stat">
                <strong>14</strong>
                <span>Days Launch Target</span>
              </div>
              <div className="stat">
                <strong>100%</strong>
                <span>Responsive Design</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Online Presence</span>
              </div>
            </div>
          </div>

          <div className="pricingCard">
            <h3>Website Management Plan</h3>
            <div className="price">
              £49.99 <span>/ month</span>
            </div>
            <p style={{ color: "#cbd5e1" }}>
              Ideal for small businesses, service providers and startups.
            </p>

            <ul>
              <li><CheckCircleFill /> Professional website design</li>
              <li><CheckCircleFill /> Domain & hosting setup</li>
              <li><CheckCircleFill /> SSL certificate</li>
              <li><CheckCircleFill /> Business email setup</li>
              <li><CheckCircleFill /> Basic SEO setup</li>
              <li><CheckCircleFill /> Monthly updates & support</li>
              <li><CheckCircleFill /> Google Business Profile guidance</li>
            </ul>

            <div className="btnWrap" style={{ justifyContent: "flex-start" }}>
              <a href="#contact" className="btnPrimary">
                Get Started <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="vitalSection">
        <div className="vitalContainer">
          <div className="sectionHead">
            <h2>Frequently Asked Questions</h2>
            <p>Clear answers for businesses interested in monthly website design.</p>
          </div>

          <div className="faqWrap">
            {faqs.map((faq, index) => (
              <div className="faqItem" key={index}>
                <button className="faqQ" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  {faq.q}
                  <ChevronDown />
                </button>
                {openFaq === index && <div className="faqA">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vitalSection" id="contact">
        <div className="vitalContainer">
          <div className="ctaBox">
            <h2>Ready to Build Your Website?</h2>
            <p>
              Let Vital AI design and manage your business website with one simple
              monthly plan.
            </p>

            <div className="btnWrap">
              <a href="tel:+447000000000" className="btnSecondary">
                <PhoneFill /> Call Now
              </a>
              <a
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noreferrer"
                className="btnSecondary"
              >
                <Whatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
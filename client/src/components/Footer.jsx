import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  GeoAltFill,
  TelephoneFill,
  EnvelopeFill,
  Whatsapp,
  CreditCard2FrontFill,
  Apple,
  Google,
  ShieldLockFill,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <style>{`
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.08); }
        }

        @keyframes paymentSlide {
          0% { transform: translateX(-8px); opacity: 0.75; }
          50% { transform: translateX(8px); opacity: 1; }
          100% { transform: translateX(-8px); opacity: 0.75; }
        }

        .vital-footer {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #6a5bff 0%, #8b5cf6 45%, #3b82f6 100%);
          color: #fff;
          padding-top: 90px;
          padding-bottom: 20px;
        }

        .vital-footer::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(600px circle at 10% 20%, rgba(255,255,255,0.18), transparent 40%),
            radial-gradient(500px circle at 90% 80%, rgba(59,130,246,0.35), transparent 45%);
          pointer-events: none;
        }

        .vital-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.55;
          pointer-events: none;
          animation: floatOrb 12s ease-in-out infinite;
        }

        .vital-orb.one {
          width: 260px;
          height: 260px;
          background: #a78bfa;
          top: -80px;
          left: -60px;
        }

        .vital-orb.two {
          width: 320px;
          height: 320px;
          background: #60a5fa;
          bottom: -120px;
          right: -80px;
          animation-delay: 3s;
        }

        .glass-card {
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 18px;
          padding: 26px 24px;
          height: 100%;
          transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
        }

        .glass-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 12px 40px rgba(139, 92, 246, 0.35);
        }

        .vital-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: 1.5px;
          color: #fff;
        }

        .footer-logo {
          height: 40px;
          width: auto;
          object-fit: contain;
        }

        .footer-heading {
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 18px;
          font-size: 1.1rem;
          color: #fff;
          position: relative;
          display: inline-block;
        }

        .footer-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 32px;
          height: 3px;
          border-radius: 3px;
          background: linear-gradient(90deg, #f0abfc, #a78bfa, #60a5fa);
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }

        .footer-link {
          color: rgba(255,255,255,0.82);
          text-decoration: none;
          display: inline-block;
          padding: 6px 0;
          transition: 0.25s ease;
        }

        .footer-link:hover {
          color: #fff;
          padding-left: 4px;
        }

        .contact-row {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 14px;
          color: rgba(255,255,255,0.9);
        }

        .contact-icon {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.22);
          color: #fff;
        }

        .social-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.28);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-btn:hover {
          transform: translateY(-4px) scale(1.08);
          color: #fff;
        }

        .payment-line-card {
          margin-top: 34px;
          padding: 18px 20px;
          border-radius: 18px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 10px 35px rgba(31, 38, 135, 0.16);
        }

        .payment-line-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .payment-line-title span {
          color: rgba(255,255,255,0.9);
        }

        .payment-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          animation: paymentSlide 5s ease-in-out infinite;
        }

        .payment-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.24);
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          box-shadow: inset 0 0 12px rgba(255,255,255,0.08);
          transition: all 0.3s ease;
        }

        .payment-pill:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.2);
          box-shadow: 0 10px 28px rgba(255,255,255,0.14);
        }

        .payment-note {
          margin-top: 12px;
          color: rgba(255,255,255,0.78);
          font-size: 13px;
          text-align: center;
        }

        .shine-text {
          font-weight: 700;
          background: linear-gradient(90deg, #f0abfc, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bottom-bar {
          margin-top: 38px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.85);
        }

        .bottom-bar a {
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          margin-left: 18px;
        }

        .bottom-bar a:hover {
          color: #fff;
        }

        @media (max-width: 767px) {
          .vital-footer {
            padding-top: 60px;
          }

          .payment-line {
            justify-content: flex-start;
            animation: none;
          }

          .payment-pill {
            width: 100%;
            justify-content: center;
          }

          .bottom-bar a {
            margin-left: 8px;
            margin-right: 8px;
          }
        }
      `}</style>

      <footer className="vital-footer">
        <span className="vital-orb one"></span>
        <span className="vital-orb two"></span>

        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="gy-4">
            <Col xs={12} md={6} lg={3}>
              <div className="glass-card">
                <div className="vital-brand mb-3">
                  <img src="/Images/logoW.png" alt="Vital AI Logo" className="footer-logo" />
                  <span>VITAL AI</span>
                </div>

                <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
                  Empowering businesses with cutting-edge AI solutions. We transform
                  complex challenges into scalable digital growth.
                </p>

                <div className="d-flex gap-2 mt-3">
                  <a href="#facebook" className="social-btn"><Facebook size={16} /></a>
                  <a href="#twitter" className="social-btn"><Twitter size={16} /></a>
                  <a href="#linkedin" className="social-btn"><Linkedin size={16} /></a>
                  <a href="#instagram" className="social-btn"><Instagram size={16} /></a>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} lg={2}>
              <div className="glass-card">
                <h5 className="footer-heading">Quick Links</h5>
                <ul className="list-unstyled m-0">
                  <li><a href="/home" className="footer-link">Home</a></li>
                  <li><a href="/services" className="footer-link">Services</a></li>
                  <li><a href="/our-work" className="footer-link">Our Work</a></li>
                  <li><a href="/blog" className="footer-link">Blog</a></li>
                  <li><a href="/contact" className="footer-link">Contact</a></li>
                  <li><a href="/about" className="footer-link">About</a></li>
                </ul>
              </div>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <div className="glass-card">
                <h5 className="footer-heading">Services</h5>
                <ul className="list-unstyled m-0">
                  <li><a href="/services/ai-website-design-development-uk" className="footer-link">AI Websites</a></li>
                  <li><a href="/services/ai-digital-marketing-paid-ads-uk" className="footer-link">Social Media Management & Paid Ads</a></li>
                  <li><a href="/services/tiktok-shop-management-uk" className="footer-link">TikTok Shop Management</a></li>
                  <li><a href="/services/ai-product-visualization-virtual-try-on-uk" className="footer-link">AI Product Visuals</a></li>
                  <li><a href="/services/ai-ecommerce-growth-solutions-uk" className="footer-link">Ecommerce Management</a></li>
                </ul>
              </div>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <div className="glass-card">
                <h5 className="footer-heading">Contact Us</h5>

                <div className="contact-row">
                  <span className="contact-icon"><GeoAltFill size={15} /></span>
                  <span>Bartle House, Oxford Court, Manchester M2 3WQ, United Kingdom</span>
                </div>

                <div className="contact-row">
                  <span className="contact-icon"><TelephoneFill size={14} /></span>
                  <span>+44 161 883 7520</span>
                </div>

                <div className="contact-row">
                  <span className="contact-icon"><Whatsapp size={15} /></span>
                  <span>+44 7398 390815</span>
                </div>

                <div className="contact-row">
                  <span className="contact-icon"><EnvelopeFill size={14} /></span>
                  <span>info@vitalai.co.uk</span>
                </div>

                <Form
                  className="d-flex gap-2 mt-3"
                  onSubmit={(e) => e.preventDefault()}
                ></Form>
              </div>
            </Col>
          </Row>

          <div className="payment-line-card">
            <div className="payment-line-title justify-content-center">
              <ShieldLockFill size={18} />
              <span>Secure Payment Methods</span>
            </div>

            <div className="payment-line">
              <span className="payment-pill">
                <CreditCard2FrontFill size={17} /> Visa / Cards
              </span>
              <span className="payment-pill">
                <CreditCard2FrontFill size={17} /> Mastercard
              </span>
              <span className="payment-pill">
                <Apple size={17} /> Apple Pay
              </span>
              <span className="payment-pill">
                <Google size={17} /> Google Pay
              </span>
            </div>

            <div className="payment-note">
              Secure payment links are shared manually through WhatsApp or email after quotation approval.
            </div>
          </div>

          <Row className="bottom-bar">
            <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
              © 2026 <span className="shine-text">VITAL AI Solutions.</span> All rights reserved
            </Col>

            <Col md={6} className="text-center text-md-end">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
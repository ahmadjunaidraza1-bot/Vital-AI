import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import {
  EnvelopeFill,
  Whatsapp,
  GeoAltFill,
  TelephoneFill,
  ClockFill,
  SendFill,
  CheckCircleFill,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <style>{`
        body {
          background: #f8f9fc;
          font-family: 'Poppins', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(90deg, #7c3aed, #ec4899, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4);
        }

        .main-btn {
          border: none;
          padding: 12px 32px;
          border-radius: 50px;
          color: #fff;
          font-weight: 600;
          background: linear-gradient(90deg, #7c3aed, #ec4899);
          transition: all 0.3s ease;
        }

        .main-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
        }

        .outline-btn {
          border: 2px solid #7c3aed;
          color: #7c3aed;
          padding: 10px 28px;
          border-radius: 50px;
          font-weight: 600;
          background: transparent;
          transition: all 0.3s ease;
        }

        .outline-btn:hover {
          background: #7c3aed;
          color: #fff;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 24px;
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .contact-card {
          background: white;
          border-radius: 20px;
          padding: 24px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid #e5e7eb;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 35px rgba(124, 58, 237, 0.1);
          border-color: #7c3aed;
        }

        .contact-icon {
          width: 55px;
          height: 55px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: white;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          margin-bottom: 18px;
        }

        .form-control-custom {
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          padding: 12px 18px;
          transition: all 0.3s ease;
          font-size: 15px;
        }

        .form-control-custom:focus {
          border-color: #7c3aed;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
          outline: none;
        }

        .section-title {
          font-size: 14px;
          font-weight: 700;
          color: #7c3aed;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 15px;
          display: inline-block;
        }

        .success-message {
          background: linear-gradient(135deg, #10b98120, #05966920);
          border: 1px solid #10b981;
          border-radius: 12px;
          padding: 12px 20px;
          color: #059669;
          font-weight: 600;
        }

        .info-row {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .info-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #7c3aed10, #ec489910);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7c3aed;
          font-size: 18px;
        }

        .availability-badge {
          background: linear-gradient(135deg, #7c3aed10, #ec489910);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 13px;
          color: #7c3aed;
          font-weight: 600;
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-5" style={{ paddingTop: "120px" }}>
        <Container>
          <div className="text-center mb-5">
            <span className="section-title">Contact Us</span>
            <h1 className="display-3 fw-bold mb-3">
              Let's Build Something <br />
              <span className="gradient-text">Exceptional Together</span>
            </h1>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "600px" }}>
              Have a project in mind? We'd love to hear from you. Our team of
              experts is ready to help you scale your business with AI.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Options and Form */}
      <section className="py-4">
        <Container>
          <Row className="g-5">
            {/* Left Side - Contact Options */}
            <Col lg={5}>
              {/* Email Card */}
              <div className="contact-card mb-4">
                <div className="contact-icon">
                  <EnvelopeFill size={24} />
                </div>
                <h5 className="fw-bold mb-2">Email Us</h5>
                <p className="text-muted mb-3">Get a response within 24 hours</p>
                <a
                  href="mailto:hello@vital-ai.com"
                  style={{ color: "#7c3aed", textDecoration: "none", fontWeight: "600" }}
                >
                  Info@vitalai.co.uk →
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="contact-card mb-4">
                <div className="contact-icon" style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
                  <Whatsapp size={24} />
                </div>
                <h5 className="fw-bold mb-2">WhatsApp Us</h5>
                <p className="text-muted mb-3">Instant chat support</p>
                <a
                  href="https://wa.me/15550001234"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#25D366", textDecoration: "none", fontWeight: "600" }}
                >
                  +44 7398 390815 →
                </a>
              </div>

              {/* Map / Location Card */}
              <div className="contact-card mb-4">
                <div className="contact-icon">
                  <GeoAltFill size={24} />
                </div>
                <h5 className="fw-bold mb-2">Our Headquarters</h5>
                <p className="text-muted mb-0">MANCHESTER</p>
                <p className="text-muted">United Kingdom</p>
              </div>

              {/* Availability */}
              <div className="glass-card p-4 mt-3">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <ClockFill color="#7c3aed" size={22} />
                  <h6 className="fw-bold mb-0">Ready to Start?</h6>
                </div>
                <p className="text-muted small mb-3">
                  Click one of the options above to get in touch with our team
                  immediately. We usually respond within 2 hours.
                </p>
                <div className="availability-badge">
                  📅  Mon - Fri, 09:00 AM – 06:00 PM (BST)
                </div>
              </div>
            </Col>

            {/* Right Side - Contact Form */}
            <Col lg={7}>
              <div className="glass-card p-4 p-lg-5">
                <h3 className="fw-bold mb-2">Send us a Message</h3>
                <p className="text-muted mb-4">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                {submitted && (
                  <div className="success-message mb-4 d-flex align-items-center gap-2">
                    <CheckCircleFill size={18} />
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Label className="fw-semibold">Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="form-control-custom"
                        required
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Label className="fw-semibold">Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Info@vitalai.co.uk"
                        className="form-control-custom"
                        required
                      />
                    </Col>
                    <Col md={12}>
                      <Form.Label className="fw-semibold">Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 7398 390815"
                        className="form-control-custom"
                      />
                    </Col>
                    <Col md={12}>
                      <Form.Label className="fw-semibold">Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="form-control-custom"
                        required
                      />
                    </Col>
                    <Col md={12}>
                      <Button type="submit" className="main-btn w-100">
                        <SendFill size={16} className="me-2" />
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>

                <div className="mt-4 pt-3 text-center">
                  <p className="text-muted small mb-0">
                    By submitting this form, you agree to our{" "}
                    <a href="#" style={{ color: "#7c3aed" }}>Privacy Policy</a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-5">
        <Container>
          <div className="glass-card p-2 overflow-hidden" style={{ borderRadius: "24px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.3759876462436!2d-2.2487476!3d53.4796115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c2f9e3cdf9%3A0x429f267898d93986!2sDeansgate%2C%20Manchester%2C%20UK!5e0!3m2!1sen!2s!4v1776843668991!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "16px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Manchester Location"
            ></iframe>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="section-title">FAQ</span>
            <h2 className="display-5 fw-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <Row className="g-4">
            {[
              {
                q: "How quickly can you start on my project?",
                a: "We typically begin within 2-3 business days after signing the agreement and receiving initial requirements."
              },
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on complexity. Most projects take 4-8 weeks from start to launch."
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! We offer various maintenance and support packages to keep your project running smoothly."
              },
              {
                q: "Can you work with our existing team?",
                a: "Absolutely! We collaborate seamlessly with in-house teams to extend your capabilities."
              }
            ].map((faq, i) => (
              <Col md={6} key={i}>
                <div className="glass-card p-4 h-100">
                  <h6 className="fw-bold mb-2 gradient-text">{faq.q}</h6>
                  <p className="text-muted mb-0">{faq.a}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 mb-5">
        <Container>
          <div className="gradient-bg p-5 text-center rounded-4">
            <h2 className="display-5 fw-bold text-white mb-3">
              Ready to Scale Your Business?
            </h2>
            <p className="text-white-50 fs-5 mb-4">
              Join 500+ businesses already growing with VITAL AI
            </p>
            <Button
              className="main-btn bg-white"
              style={{ color: "#7c3aed", background: "white" }}
              onClick={() => window.location.href = "/pricing"}
            >
              View Pricing Plans →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
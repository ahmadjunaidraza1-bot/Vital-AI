import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [serviceSearch, setServiceSearch] = useState("");

  const serviceOptions = [
    "Google Ads",
    "Meta Ads",
    "Social Media Management",
    "Web Development",
    "TikTok Marketing",
    "Branding",
    "AI Product Showcase",
    "AI Powered Ecommerce Management",
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: [],
    message: "",
  });

  const filteredServices = serviceOptions.filter((service) =>
    service.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const navItems = ["Home", "About", "Services", "Our Work", "Blog", "Contact"];

  const handleNavClick = () => setExpanded(false);

  const openStrategyForm = () => {
    setShowForm(true);
    setFormStatus("");
    setExpanded(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormStatus("");
  };

  const handleServiceChange = (service) => {
    setFormStatus("");

    setFormData((prev) => {
      const selected = prev.services.includes(service);
      return {
        ...prev,
        services: selected
          ? prev.services.filter((item) => item !== service)
          : [...prev.services, service],
      };
    });
  };

  const removeService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.filter((item) => item !== service),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      setFormStatus("serviceError");
      return;
    }

    setLoading(true);
    setFormStatus("");

    emailjs
      .send(
        "service_hu2j0xj",
        "template_fsra6hr",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.services.join(", "),
          message: formData.message,
          to_email: "Info@vitalai.co.uk",
        },
        "3dGE9V8RomIrvwleh"
      )
      .then(() => {
        setFormStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          services: [],
          message: "",
        });
        setServiceSearch("");
        setServiceDropdownOpen(false);
      })
      .catch(() => setFormStatus("error"))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="header-wrap">
        <Navbar
          expand="lg"
          expanded={expanded}
          onToggle={(isOpen) => setExpanded(isOpen)}
          className="vital-navbar"
          style={{
            width: scrolled ? "92%" : "100%",
            position: "fixed",
            top: scrolled ? "12px" : "0px",
            left: "50%",
            transform: `translateX(-50%) ${scrolled ? "scale(0.96)" : "scale(1)"}`,
            zIndex: 999,
            padding: scrolled ? "10px 28px" : "16px 40px",
            background: scrolled
              ? "rgba(255,255,255,0.65)"
              : "rgba(255,255,255,0.75)",
            backdropFilter: "blur(18px)",
            borderRadius: scrolled ? "16px" : "0px",
            boxShadow: scrolled
              ? "0 10px 35px rgba(0,0,0,0.12)"
              : "0 8px 30px rgba(0,0,0,0.06)",
            transition: "all 0.35s ease",
          }}
        >
          <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
            <div className="brand-box">
              <img src="/Images/logo.webp" alt="logo" className="brand-logo" />

              <div style={{ lineHeight: "1.1" }}>
                <div className="brand-title">VITAL AI</div>
                <div className="brand-subtitle">INTELLIGENT SYSTEM</div>
              </div>
            </div>
          </Navbar.Brand>

          {/* MOBILE RIGHT ACTIONS */}
          <div className="mobile-header-actions">
            <button
              type="button"
              className="strategy-header-btn mobile-strategy-btn"
              onClick={openStrategyForm}
            >
              Book Call ✨
            </button>

            <Navbar.Toggle
              aria-controls="main-navbar-nav"
              onClick={() => setExpanded(!expanded)}
            />
          </div>

          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto align-items-center gap-4 vital-nav">
              {navItems.map((item, i) => {
                const path =
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`;

                return (
                  <Nav.Link
                    key={i}
                    as={Link}
                    to={path}
                    onClick={handleNavClick}
                    className="nav-link-custom"
                    style={{
                      color: isActive(path) ? "#111" : "#6b7280",
                    }}
                  >
                    {item}

                    <span
                      style={{
                        display: isActive(path) ? "block" : "none",
                        height: "2px",
                        background: "#2563eb",
                        marginTop: "4px",
                        borderRadius: "10px",
                      }}
                    />
                  </Nav.Link>
                );
              })}

              <button
                type="button"
                className="strategy-header-btn desktop-strategy-btn"
                onClick={openStrategyForm}
              >
                Book a Strategy Call ✨
              </button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="consultation-form">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ×
            </button>

            <h2>Book A Free Consultation</h2>

            {formStatus === "success" && (
              <div className="success-message">
                Thank you for your booking. Our team will contact you soon.
              </div>
            )}

            {formStatus === "error" && (
              <div className="error-message">Something went wrong. Please try again.</div>
            )}

            {formStatus === "serviceError" && (
              <div className="error-message">Please select at least one service.</div>
            )}

            <form onSubmit={handleSubmit}>
              <label>
                Name <span>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>
                Phone Number <span>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label>
                Email <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>
                Choose your services <span>*</span>
              </label>

              <div className="premium-select">
                <div
                  className="premium-select-control"
                  onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                >
                  <div className="selected-services">
                    {formData.services.length === 0 ? (
                      <span className="placeholder-text">Select services</span>
                    ) : (
                      formData.services.map((service) => (
                        <span className="selected-chip" key={service}>
                          {service}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeService(service);
                            }}
                          >
                            ×
                          </button>
                        </span>
                      ))
                    )}
                  </div>

                  <span className="dropdown-arrow">
                    {serviceDropdownOpen ? "▲" : "▼"}
                  </span>
                </div>

                {serviceDropdownOpen && (
                  <div className="premium-dropdown">
                    <input
                      type="text"
                      placeholder="Search service..."
                      className="service-search"
                      value={serviceSearch}
                      onChange={(e) => setServiceSearch(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />

                    <div className="service-options">
                      {filteredServices.length > 0 ? (
                        filteredServices.map((service) => (
                          <div
                            key={service}
                            className={`service-option ${
                              formData.services.includes(service) ? "active" : ""
                            }`}
                            onClick={() => handleServiceChange(service)}
                          >
                            <span>{service}</span>
                            {formData.services.includes(service) && (
                              <span className="check-mark">✓</span>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="no-service">No service found</div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <label>Message</label>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Book Free Consultation"}
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .header-wrap{
          width:100%;
          min-height:80px;
          background:radial-gradient(circle at top, #e9f1ff 0%, #f8fafc 40%, #eef2ff 100%);
          font-family:'Poppins', sans-serif;
        }

        .brand-box{
          display:flex;
          align-items:center;
          gap:12px;
        }

        .brand-logo{
          width:40px;
          height:40px;
          transition:transform .4s ease;
          cursor:pointer;
        }

        .brand-logo:hover{
          transform:scale(1.2);
        }

        .brand-title{
          font-weight:900;
          font-size:20px;
          letter-spacing:1px;
          background:linear-gradient(90deg,#2563eb,#60a5fa,#1e40af,#7c3aed);
          background-size:300% 300%;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:gradientMove 6s ease infinite;
        }

        .brand-subtitle{
          font-size:10px;
          letter-spacing:3px;
          margin-top:2px;
          color:#64748b;
          font-weight:600;
        }

        .mobile-header-actions{
          display:none;
          align-items:center;
          gap:10px;
          margin-left:auto;
        }

        .desktop-strategy-btn{
          display:flex;
        }

        .mobile-strategy-btn{
          display:none;
        }

        .navbar-toggler{
          border:2px solid rgba(17,24,39,.65) !important;
          border-radius:12px !important;
          padding:7px 10px !important;
          box-shadow:none !important;
        }

        .strategy-header-btn{
          border:none;
          padding:12px 22px;
          border-radius:50px;
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          color:#fff;
          font-size:14px;
          font-weight:800;
          line-height:1;
          align-items:center;
          justify-content:center;
          white-space:nowrap;
          box-shadow:0 12px 30px rgba(124,58,237,.30);
          transition:all .3s ease;
          cursor:pointer;
        }

        .strategy-header-btn:hover{
          color:#fff;
          transform:translateY(-4px) scale(1.03);
          box-shadow:0 18px 40px rgba(236,72,153,.35);
        }

        .nav-link-custom{
          font-style:italic;
          font-size:12px;
          font-weight:700;
          transition:.3s;
        }

        .nav-link-custom:hover{
          color:#2563eb !important;
          transform:translateY(-2px);
        }

        @keyframes gradientMove{
          0%{background-position:0% 50%;}
          50%{background-position:100% 50%;}
          100%{background-position:0% 50%;}
        }

        .premium-select{position:relative;width:100%;}

        .premium-select-control{
          min-height:52px;
          width:100%;
          border:1px solid rgba(124,58,237,.22);
          border-radius:14px;
          padding:9px 42px 9px 12px;
          background:rgba(255,255,255,.94);
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .selected-services{
          display:flex;
          flex-wrap:wrap;
          gap:7px;
        }

        .placeholder-text{
          color:#6b7280;
          font-size:14px;
        }

        .selected-chip{
          display:inline-flex;
          align-items:center;
          gap:6px;
          padding:6px 9px;
          border-radius:999px;
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          color:#fff;
          font-size:12px;
          font-weight:700;
        }

        .selected-chip button{
          border:none;
          background:rgba(255,255,255,.22);
          color:#fff;
          width:18px;
          height:18px;
          border-radius:50%;
          line-height:1;
          cursor:pointer;
          font-size:13px;
        }

        .dropdown-arrow{
          position:absolute;
          right:14px;
          top:17px;
          font-size:11px;
          color:#7c3aed;
        }

        .premium-dropdown{
          position:absolute;
          top:calc(100% + 8px);
          left:0;
          right:0;
          z-index:9999999;
          padding:12px;
          border-radius:18px;
          background:linear-gradient(#fff,#fff) padding-box,
            linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4) border-box;
          border:2px solid transparent;
          box-shadow:0 20px 55px rgba(124,58,237,.25);
        }

        .service-search{
          width:100%;
          border:1px solid rgba(124,58,237,.22);
          border-radius:12px;
          padding:10px 12px;
          font-size:14px;
          outline:none;
          margin-bottom:10px;
        }

        .service-options{
          max-height:190px;
          overflow-y:auto;
          display:flex;
          flex-direction:column;
          gap:7px;
        }

        .service-option{
          padding:10px 12px;
          border-radius:12px;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:space-between;
          font-size:14px;
          font-weight:600;
          color:#111827;
          background:rgba(248,250,252,.95);
        }

        .service-option:hover,
        .service-option.active{
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          color:#fff;
        }

        .success-message,
        .error-message{
          margin:12px 0;
          padding:12px 14px;
          border-radius:10px;
          font-size:14px;
          font-weight:700;
          text-align:center;
        }

        .success-message{
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          color:#fff;
        }

        .error-message{
          background:#fee2e2;
          color:#991b1b;
        }

        .form-overlay{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,.62);
          backdrop-filter:blur(7px);
          z-index:999999;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:15px;
        }

        .consultation-form{
          position:relative;
          width:100%;
          max-width:480px;
          border-radius:24px;
          padding:26px 22px;
          background:linear-gradient(#fff,#fff) padding-box,
            linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4) border-box;
          border:2px solid transparent;
          box-shadow:0 30px 90px rgba(124,58,237,.35);
        }

        .close-btn{
          position:absolute;
          top:-14px;
          right:-14px;
          width:38px;
          height:38px;
          border-radius:50%;
          border:none;
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          color:#fff;
          font-size:24px;
          line-height:1;
          cursor:pointer;
        }

        .consultation-form h2{
          text-align:center;
          background:linear-gradient(90deg,#7c3aed,#ec4899,#06b6d4);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          font-weight:900;
          margin:0;
          font-size:28px;
        }

        .consultation-form label{
          display:block;
          color:#111827;
          font-size:15px;
          font-weight:600;
          margin-bottom:5px;
          margin-top:9px;
        }

        .consultation-form label span{
          color:#ec4899;
        }

        .consultation-form input,
        .consultation-form textarea{
          width:100%;
          border:1px solid rgba(124,58,237,.22);
          border-radius:12px;
          padding:12px 15px;
          font-size:15px;
          outline:none;
          background:rgba(255,255,255,.92);
        }

        .consultation-form textarea{
          min-height:102px;
          resize:vertical;
        }

        .submit-btn{
          width:100%;
          margin-top:14px;
          padding:15px;
          border:none;
          border-radius:50px;
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          color:#fff;
          font-size:16px;
          font-weight:800;
          cursor:pointer;
        }

        .submit-btn:disabled{
          opacity:.75;
          cursor:not-allowed;
        }

        @media (max-width:991px){
          .vital-navbar{
            padding-left:22px !important;
            padding-right:22px !important;
          }

          .navbar-toggler{
            display:block !important;
          }

          .mobile-header-actions{
            display:flex;
          }

          .desktop-strategy-btn{
            display:none;
          }

          .mobile-strategy-btn{
            display:flex;
            padding:10px 14px;
            font-size:12px;
            max-width:118px;
          }

          .vital-nav{
            width:100%;
            align-items:flex-start !important;
            gap:12px !important;
            padding-top:18px;
          }
        }

        @media (max-width:575px){
          .vital-navbar{
            width:92% !important;
            padding:11px 14px !important;
            border-radius:16px !important;
          }

          .brand-box{
            gap:8px;
          }

          .brand-logo{
            width:34px;
            height:34px;
          }

          .brand-title{
            font-size:16px;
          }

          .brand-subtitle{
            font-size:8px;
            letter-spacing:2px;
          }

          .mobile-header-actions{
            gap:7px;
          }

          .mobile-strategy-btn{
            padding:8px 10px;
            font-size:10px;
            max-width:92px;
          }

          .navbar-toggler{
            padding:5px 8px !important;
            border-radius:10px !important;
          }

          .consultation-form{
            max-width:95%;
            padding:24px 14px 20px;
          }

          .consultation-form h2{
            font-size:23px;
          }
        }
      `}</style>
    </>
  );
}
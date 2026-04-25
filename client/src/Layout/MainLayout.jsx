import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Whatsapp } from "react-bootstrap-icons";
import emailjs from "@emailjs/browser";

export default function MainLayout() {
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
    "AI Powered Ecommerce Management"
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
      .catch(() => {
        setFormStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />

      <a
        href="https://wa.me/447398390815"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp Chat"
      >
        <Whatsapp />
      </a>

      <button
        type="button"
        className="strategy-float"
        onClick={() => {
          setShowForm(true);
          setFormStatus("");
        }}
      >
        Book a Strategy Call ✨
      </button>

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
              <div className="error-message">
                Something went wrong. Please try again.
              </div>
            )}

            {formStatus === "serviceError" && (
              <div className="error-message">
                Please select at least one service.
              </div>
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
                              formData.services.includes(service)
                                ? "active"
                                : ""
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
        .premium-select{
          position: relative;
          width: 100%;
        }

        .premium-select-control{
          min-height: 52px;
          width: 100%;
          border: 1px solid rgba(124,58,237,0.22);
          border-radius: 14px;
          padding: 9px 42px 9px 12px;
          background: rgba(255,255,255,0.94);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: 0.25s ease;
        }

        .premium-select-control:hover{
          border-color: #ec4899;
          box-shadow: 0 0 0 4px rgba(236,72,153,0.10);
        }

        .selected-services{
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .placeholder-text{
          color: #6b7280;
          font-size: 14px;
        }

        .selected-chip{
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 9px;
          border-radius: 999px;
          background: linear-gradient(90deg,#7c3aed,#ec4899);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 8px 18px rgba(124,58,237,0.18);
        }

        .selected-chip button{
          border: none;
          background: rgba(255,255,255,0.22);
          color: #fff;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          line-height: 1;
          cursor: pointer;
          font-size: 13px;
        }

        .dropdown-arrow{
          position: absolute;
          right: 14px;
          top: 17px;
          font-size: 11px;
          color: #7c3aed;
        }

        .premium-dropdown{
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          z-index: 9999999;
          padding: 12px;
          border-radius: 18px;
          background:
            linear-gradient(#ffffff, #ffffff) padding-box,
            linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4) border-box;
          border: 2px solid transparent;
          box-shadow: 0 20px 55px rgba(124,58,237,0.25);
          animation: dropdownOpen 0.25s ease forwards;
        }

        @keyframes dropdownOpen{
          from{
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to{
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .service-search{
          width: 100%;
          border: 1px solid rgba(124,58,237,0.22);
          border-radius: 12px;
          padding: 10px 12px;
          font-size: 14px;
          outline: none;
          margin-bottom: 10px;
        }

        .service-search:focus{
          border-color: #ec4899;
          box-shadow: 0 0 0 4px rgba(236,72,153,0.12);
        }

        .service-options{
          max-height: 190px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .service-option{
          padding: 10px 12px;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 600;
          color: #111827;
          background: rgba(248,250,252,0.95);
          transition: 0.25s ease;
        }

        .service-option:hover,
        .service-option.active{
          background: linear-gradient(90deg,#7c3aed,#ec4899);
          color: #fff;
        }

        .check-mark{
          font-weight: 900;
        }

        .no-service{
          padding: 12px;
          text-align: center;
          color: #6b7280;
          font-size: 14px;
        }

        .success-message{
          margin: 12px 0;
          padding: 14px 16px;
          border-radius: 10px;
          background: linear-gradient(90deg,#7c3aed,#ec4899);
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          text-align: center;
          box-shadow: 0 12px 30px rgba(124,58,237,0.22);
        }

        .error-message{
          margin: 12px 0;
          padding: 12px 14px;
          border-radius: 8px;
          background: #fee2e2;
          color: #991b1b;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
        }

        .whatsapp-float{
          position: fixed;
          right: 50px;
          bottom: 70px;
          width: 58px;
          height: 58px;
          background: #25D366;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          text-decoration: none;
          z-index: 99999;
          box-shadow: 0 12px 30px rgba(37,211,102,0.35);
          transition: all 0.3s ease;
          animation: whatsappPulse 2s infinite;
        }

        .whatsapp-float:hover{
          transform: scale(1.08);
          color: #fff;
        }

        .whatsapp-float svg{
          width: 30px;
          height: 30px;
        }

        @keyframes whatsappPulse{
          0%{ box-shadow: 0 0 0 0 rgba(37,211,102,0.45); }
          70%{ box-shadow: 0 0 0 18px rgba(37,211,102,0); }
          100%{ box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }

        .strategy-float{
          position: fixed;
          top: 95px;
          right: 50px;
          z-index: 99999;
          padding: 12px 22px;
          border-radius: 50px;
          border: none;
          background: linear-gradient(90deg,#7c3aed,#ec4899);
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          box-shadow: 0 12px 30px rgba(124,58,237,0.30);
          transition: all 0.3s ease;
          animation: strategyPulse 2s infinite;
          cursor: pointer;
        }

        .strategy-float:hover{
          color:#fff;
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 18px 40px rgba(236,72,153,0.35);
        }

        @keyframes strategyPulse{
          0%{ box-shadow: 0 0 0 0 rgba(236,72,153,0.35); }
          70%{ box-shadow: 0 0 0 18px rgba(236,72,153,0); }
          100%{ box-shadow: 0 0 0 0 rgba(236,72,153,0); }
        }

        .form-overlay{
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.62);
          backdrop-filter: blur(7px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
          animation: overlayFade 0.35s ease forwards;
        }

        .consultation-form{
          position: relative;
          width: 100%;
          max-width: 480px;
          border-radius: 24px;
          padding: 26px 22px;
          background:
            linear-gradient(#ffffff, #ffffff) padding-box,
            linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4) border-box;
          border: 2px solid transparent;
          box-shadow: 0 30px 90px rgba(124,58,237,0.35);
          animation: formPop 0.45s ease forwards;
        }

        .consultation-form::before{
          content:"";
          position:absolute;
          inset:0;
          border-radius:22px;
          background:
            radial-gradient(circle at top left, rgba(124,58,237,0.12), transparent 35%),
            radial-gradient(circle at bottom right, rgba(236,72,153,0.12), transparent 35%);
          pointer-events:none;
        }

        .consultation-form > *{
          position:relative;
          z-index:1;
        }

        @keyframes overlayFade{
          from{opacity:0;}
          to{opacity:1;}
        }

        @keyframes formPop{
          from{
            opacity:0;
            transform:translateY(35px) scale(0.94);
          }
          to{
            opacity:1;
            transform:translateY(0) scale(1);
          }
        }

        .close-btn{
          position: absolute;
          top: -14px;
          right: -14px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(90deg,#7c3aed,#ec4899);
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(236,72,153,0.35);
        }

        .consultation-form h2{
          text-align: center;
          background: linear-gradient(90deg,#7c3aed,#ec4899,#06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
          margin: 0;
          font-size: 28px;
        }

        .consultation-form label{
          display: block;
          color: #111827;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 5px;
          margin-top: 9px;
        }

        .consultation-form label span{
          color: #ec4899;
        }

        .consultation-form input,
        .consultation-form textarea{
          width: 100%;
          border: 1px solid rgba(124,58,237,0.22);
          border-radius: 12px;
          padding: 12px 15px;
          font-size: 15px;
          outline: none;
          background: rgba(255,255,255,0.92);
          transition: 0.25s ease;
        }

        .consultation-form input:focus,
        .consultation-form textarea:focus{
          border-color: #ec4899;
          box-shadow: 0 0 0 4px rgba(236,72,153,0.12);
        }

        .consultation-form textarea{
          min-height: 102px;
          resize: vertical;
        }

        .submit-btn{
          width: 100%;
          margin-top: 14px;
          padding: 15px;
          border: none;
          border-radius: 50px;
          background: linear-gradient(90deg,#7c3aed,#ec4899);
          color: #fff;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 14px 35px rgba(124,58,237,0.28);
          transition: 0.3s ease;
        }

        .submit-btn:hover{
          transform: translateY(-3px);
          box-shadow: 0 18px 45px rgba(236,72,153,0.36);
        }

        .submit-btn:disabled{
          opacity: 0.75;
          cursor: not-allowed;
        }

        @media (max-width: 575px){
          .whatsapp-float{
            right: 15px;
            bottom: 15px;
            width: 52px;
            height: 52px;
          }

          .strategy-float{
            top: 78px;
            right: 12px;
            padding: 10px 14px;
            font-size: 12px;
            max-width: 190px;
            text-align: center;
            line-height: 1.3;
          }

          .consultation-form{
            max-width: 95%;
            padding: 24px 14px 20px;
          }

          .close-btn{
            top: -12px;
            right: -8px;
          }

          .consultation-form h2{
            font-size: 23px;
          }
        }
      `}</style>
    </div>
  );
}
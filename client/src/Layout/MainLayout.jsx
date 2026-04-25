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

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Google Ads",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          service: formData.service,
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
          service: "Google Ads",
          message: "",
        });
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
            <h5>Guaranteed Response Within One Hour!</h5>

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

              <label>Choose your service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option>Google Ads</option>
                <option>Social Media Marketing</option>
                <option>Web Development</option>
                <option>Branding</option>
                <option>AI Product Showcase</option>
              </select>

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
          animation: successGlow 2s infinite alternate;
        }

        @keyframes successGlow{
          0%{
            box-shadow: 0 10px 25px rgba(124,58,237,0.20);
            transform: scale(1);
          }
          100%{
            box-shadow: 0 18px 40px rgba(236,72,153,0.28);
            transform: scale(1.01);
          }
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
  top: 12px;
  right: 14px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(90deg,#7c3aed,#ec4899);
  color: #fff;
  font-size: 22px;
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

.consultation-form h5{
  text-align: center;
  color: #7c3aed;
  font-weight: 700;
  margin-bottom: 14px;
  font-size: 15px;
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
.consultation-form select,
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
.consultation-form select:focus,
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
      `}</style>
    </div>
  );
}
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Whatsapp, TelephoneFill } from "react-bootstrap-icons";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />

      <a href="tel:+441613940458" className="phone-float" aria-label="Call Us">
        <TelephoneFill />
      </a>

      <a
        href="https://wa.me/447398390815"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp Chat"
      >
        <Whatsapp />
      </a>

      <style>{`
        .phone-float,
        .whatsapp-float{
          position: fixed;
          right: 50px;
          width: 58px;
          height: 58px;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          z-index: 999999;
          transition: all 0.3s ease;
        }

        .phone-float{
          bottom: 145px;
          background: linear-gradient(135deg,#7c3aed,#ec4899);
          box-shadow: 0 12px 30px rgba(124,58,237,0.35);
        }

        .whatsapp-float{
          bottom: 70px;
          background: #25D366;
          box-shadow: 0 12px 30px rgba(37,211,102,0.35);
          animation: whatsappPulse 2s infinite;
        }

        .phone-float:hover,
        .whatsapp-float:hover{
          transform: scale(1.08);
          color: #fff;
        }

        .phone-float svg,
        .whatsapp-float svg{
          width: 30px;
          height: 30px;
        }

        @keyframes whatsappPulse{
          0%{ box-shadow: 0 0 0 0 rgba(37,211,102,0.45); }
          70%{ box-shadow: 0 0 0 18px rgba(37,211,102,0); }
          100%{ box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }

        @media (max-width: 575px){
          .phone-float,
          .whatsapp-float{
            right: 15px;
            width: 52px;
            height: 52px;
          }

          .phone-float{
            bottom: 82px;
          }

          .whatsapp-float{
            bottom: 15px;
          }
        }
      `}</style>
    </div>
  );
}
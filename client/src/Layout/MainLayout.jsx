import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Whatsapp } from "react-bootstrap-icons";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/447398390815"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp Chat"
      >
        <Whatsapp />
      </a>

      {/* Floating Strategy Button */}
      <Link
        to="/contact"
        className="strategy-float"
        aria-label="Book a Strategy Call"
      >
        Book a Strategy Call ✨
      </Link>

      <style>{`
        /* WHATSAPP BUTTON */
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
          0%{
            box-shadow: 0 0 0 0 rgba(37,211,102,0.45);
          }
          70%{
            box-shadow: 0 0 0 18px rgba(37,211,102,0);
          }
          100%{
            box-shadow: 0 0 0 0 rgba(37,211,102,0);
          }
        }

        /* STRATEGY BUTTON */
        .strategy-float{
          position: fixed;
          top: 95px;
          right: 50px;
          z-index: 99999;

          padding: 12px 22px;
          border-radius: 50px;

          background: linear-gradient(90deg,#7c3aed,#ec4899);
          color: #fff;
          text-decoration: none;

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
        }

        .strategy-float:hover{
          color:#fff;
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 18px 40px rgba(236,72,153,0.35);
        }

        @keyframes strategyPulse{
          0%{
            box-shadow: 0 0 0 0 rgba(236,72,153,0.35);
          }
          70%{
            box-shadow: 0 0 0 18px rgba(236,72,153,0);
          }
          100%{
            box-shadow: 0 0 0 0 rgba(236,72,153,0);
          }
        }

        /* TABLET */
        @media (max-width: 991px){
          .strategy-float{
            top: 88px;
            right: 22px;
            padding: 11px 18px;
            font-size: 13px;
          }
        }

        /* MOBILE */
        @media (max-width: 575px){
          .whatsapp-float{
            right: 15px;
            bottom: 15px;
            width: 52px;
            height: 52px;
          }

          .whatsapp-float svg{
            width: 27px;
            height: 27px;
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
        }
      `}</style>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Route change hone par bhi navbar close ho jaye
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Case Study",
    "Blog",
    "Pricing",
    "Contact",
  ];

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "80px",
        background:
          "radial-gradient(circle at top, #e9f1ff 0%, #f8fafc 40%, #eef2ff 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={(isOpen) => setExpanded(isOpen)}
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
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/Images/logo.webp"
              alt="logo"
              style={{
                width: scrolled ? "34px" : "40px",
                height: scrolled ? "34px" : "40px",
                transition: "transform 0.4s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />

            <div style={{ lineHeight: "1.1" }}>
              <div
                style={{
                  fontWeight: "900",
                  fontSize: scrolled ? "18px" : "20px",
                  letterSpacing: "1px",
                  background:
                    "linear-gradient(90deg,#2563eb,#60a5fa,#1e40af,#7c3aed)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientMove 6s ease infinite",
                }}
              >
                VITAL AI
              </div>

              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "3px",
                  marginTop: "2px",
                  color: "#64748b",
                  fontWeight: "600",
                }}
              >
                INTELLIGENT SYSTEM
              </div>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-center gap-4">
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
                  style={{
                    color: isActive(path) ? "#111" : "#6b7280",
                    fontStyle: "italic",
                    fontSize: scrolled ? "14px" : "12px",
                    fontWeight:700,
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#2563eb";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = isActive(path) ? "#111" : "#6b7280";
                    e.target.style.transform = "translateY(0px)";
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

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .main-btn{
          border:none;
          padding:10px 25px;
          border-radius:50px;
          color:#fff;
          font-weight:700;
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          transition:.4s;
        }

        .main-btn:hover{
          transform:translateY(-3px) scale(1.03);
          box-shadow:0 15px 35px rgba(236,72,153,.3);
        }
      `}</style>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // 🔥 ADD THIS

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Case Study",
    "Blog",
    "Pricing",
  ];

  // 🔥 AUTO CLOSE FUNCTION
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
        expanded={expanded} // 🔥 CONTROLLED
        onToggle={(val) => setExpanded(val)} // 🔥 IMPORTANT
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
              }}
            />

            <div>
              <div style={{ fontWeight: "900" }}>VITAL AI</div>
              <div style={{ fontSize: "10px" }}>INTELLIGENT SYSTEM</div>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
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
                  onClick={handleNavClick} // 🔥 AUTO CLOSE HERE
                  style={{
                    color: isActive(path) ? "#111" : "#6b7280",
                  }}
                >
                  {item}
                </Nav.Link>
              );
            })}

            <Button
              as={Link}
              to="/contact"
              onClick={handleNavClick} // 🔥 CLOSE ON BUTTON TOO
              className="animated-btn"
            >
              Book a strategy Call ✨
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <style>{`
        .animated-btn {
          border: none;
          border-radius: 12px;
          padding: 10px 18px;
          font-weight: 600;
          color: white;
          background: linear-gradient(270deg,#2563eb,#7c3aed,#a855f7);
          background-size: 300% 300%;
          animation: move 6s ease infinite;
        }

        @keyframes move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobile, setMobile] = useState(window.innerWidth <= 900);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 900);

      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "FACILITIES", path: "/facilities" },
    { name: "PRICING", path: "/pricing" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          background: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: mobile ? "18px 25px" : "18px 60px",
          boxSizing: "border-box",
          borderBottom: "1px solid #222",
        }}
      >
        {/* LOGO */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <img
              src={require("../logo.png")}
              alt="Ajay Gym"
              style={{
                width: mobile ? "55px" : "70px",
                height: mobile ? "55px" : "70px",
                objectFit: "contain",
                borderRadius: "50%",
              }}
            />

            <h1
              style={{
                color: "#ffcc15",
                margin: 0,
                fontWeight: "900",
                letterSpacing: "2px",
                fontSize: mobile ? "26px" : "38px",
              }}
            >
              AJAY GYM
            </h1>
          </Link>
        </motion.div>

        {/* DESKTOP MENU */}

        {!mobile && (
          <div
            style={{
              display: "flex",
              gap: "40px",
            }}
          >
            {links.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                }}
              >
                <Link
                  to={item.path}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "600",
                    transition: "0.3s",
                  }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* MOBILE BUTTON */}

        {mobile && (
          <motion.div
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            style={{
              color: "white",
              fontSize: "42px",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            ☰
          </motion.div>
        )}
      </motion.nav>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {mobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: "90px",
              left: 0,
              width: "100%",
              background: "#111",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            {links.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #222",
                    color: "white",
                    textDecoration: "none",
                    fontSize: "20px",
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    {
      title: "AFFORDABLE FEES",
      text: "Best fitness at low cost",
    },
    {
      title: "GOOD EQUIPMENT",
      text: "All basic gym equipment available",
    },
    {
      title: "CLEAN & SAFE",
      text: "Daily cleaned environment",
    },
    {
      title: "FRIENDLY SUPPORT",
      text: "We are always here to help",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Happy Members",
    },
    {
      number: "20+",
      label: "Gym Equipments",
    },
    {
      number: "6",
      label: "Days Open",
    },
    {
      number: "5AM - 10AM\n5PM - 10PM",
      label: "Working Hours",
    },
  ];

  return (
    <motion.div
      style={{ background: "black", color: "white" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* HERO SECTION */}
      <div
        id="home"
        style={{
          minHeight: mobile ? "85vh" : "100vh",
          paddingTop: mobile ? "100px" : "120px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          paddingLeft: mobile ? "30px" : "80px",
          paddingRight: mobile ? "30px" : "80px",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          style={{
            maxWidth: mobile ? "100%" : "700px",
          }}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            style={{
              fontSize: mobile ? "55px" : "95px",
              lineHeight: mobile ? "65px" : "95px",
              margin: 0,
              fontWeight: "900",
            }}
          >
            YOUR FITNESS
          </h1>

          <h1
            style={{
              fontSize: mobile ? "55px" : "95px",
              lineHeight: mobile ? "65px" : "95px",
              marginTop: "10px",
              marginBottom: "20px",
              color: "#ffcc15",
              fontWeight: "900",
            }}
          >
            OUR MISSION
          </h1>

          <p
            style={{
              fontSize: mobile ? "22px" : "26px",
              lineHeight: "40px",
              color: "#ddd",
              maxWidth: "700px",
            }}
          >
            Simple workouts. Affordable membership. Better health and stronger
            body for everyone.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "35px",
              flexWrap: "wrap",
            }}
          >
            {/* JOIN NOW BUTTON */}

            <motion.button
              onClick={() =>
                window.open("https://wa.me/919867798371")
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: mobile ? "16px 35px" : "18px 45px",
                background: "#ffcc15",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              JOIN NOW
            </motion.button>

            {/* CONTACT BUTTON */}

            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: mobile ? "16px 35px" : "18px 45px",
                background: "transparent",
                border: "2px solid white",
                color: "white",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              CONTACT US
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* FEATURES */}
      <div
        style={{
          padding: mobile ? "50px 20px" : "80px",
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
          gap: "30px",
        }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            style={{
              background: "#111",
              borderRadius: "25px",
              padding: mobile ? "50px 30px" : "70px 40px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#ffcc15",
                fontSize: mobile ? "32px" : "38px",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h2>

            <p
              style={{
                fontSize: mobile ? "20px" : "24px",
                color: "#ddd",
              }}
            >
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* STATS */}
      <div
        style={{
          background: "#f3f3f3",
          color: "black",
          padding: mobile ? "50px 20px" : "80px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: mobile ? "45px" : "70px",
            marginBottom: "60px",
          }}
        >
          WHY PEOPLE CHOOSE US
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
            gap: "30px",
          }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              style={{
                background: "white",
                borderRadius: "25px",
                padding: mobile ? "60px 20px" : "80px",
                textAlign: "center",
                boxShadow: "0 0 20px rgba(0,0,0,0.1)",
              }}
            >
              <h1
                style={{
                  color: "#ffcc15",
                  fontSize: mobile ? "55px" : "75px",
                  marginBottom: "20px",
                  whiteSpace: "pre-line",
                }}
              >
                {item.number}
              </h1>

              <p
                style={{
                  fontSize: mobile ? "24px" : "30px",
                }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
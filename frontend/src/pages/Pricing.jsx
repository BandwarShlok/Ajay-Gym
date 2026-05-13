import { motion } from "framer-motion";

export default function Pricing() {
  const mobile = window.innerWidth <= 768;

  const plans = [
    {
      title: "3 MONTH",
      price: "₹1500",
      popular: false,
      whatsapp:
        "https://wa.me/919867798371?text=Hi%20Ajay%20Gym,%20I%20want%20to%20join%20the%203%20Months%20plan",
    },
    {
      title: "6 MONTHS",
      price: "₹2800",
      popular: true,
      whatsapp:
        "https://wa.me/919867798371?text=Hi%20Ajay%20Gym,%20I%20want%20to%20join%20the%206%20Months%20plan",
    },
    {
      title: "1 YEAR",
      price: "₹5000",
      popular: false,
      whatsapp:
        "https://wa.me/919867798371?text=Hi%20Ajay%20Gym,%20I%20want%20to%20join%20the%201%20Year%20plan",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        background: "#f3f3f3",
        minHeight: "100vh",
        padding: mobile ? "120px 20px 60px" : "150px 80px 80px",
        boxSizing: "border-box",
      }}
    >
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        <h1
          style={{
            fontSize: mobile ? "50px" : "90px",
            lineHeight: mobile ? "55px" : "95px",
            margin: 0,
            fontWeight: "900",
            color: "black",
          }}
        >
          MEMBERSHIP <br /> PLANS
        </h1>

        <div
          style={{
            width: "90px",
            height: "5px",
            background: "#ffcc00",
            margin: "25px auto",
          }}
        />
      </motion.div>

      {/* PLANS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile
            ? "1fr"
            : "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "35px",
          alignItems: "stretch",
        }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            style={{
              background: "white",
              borderRadius: "25px",
              padding: mobile ? "40px 25px" : "50px 40px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              border: plan.popular
                ? "3px solid #ffcc00"
                : "1px solid #e5e5e5",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* POPULAR TAG */}
            {plan.popular && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  top: "18px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#ffcc00",
                  color: "black",
                  padding: "8px 18px",
                  borderRadius: "30px",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                MOST POPULAR
              </motion.div>
            )}

            <h2
              style={{
                marginTop: plan.popular ? "40px" : "0",
                marginBottom: "25px",
                fontSize: mobile ? "34px" : "42px",
                color: "black",
                fontWeight: "800",
              }}
            >
              {plan.title}
            </h2>

            <motion.h1
              whileHover={{
                scale: 1.05,
              }}
              style={{
                color: "#ffcc00",
                fontSize: mobile ? "52px" : "70px",
                margin: "0 0 30px",
                fontWeight: "900",
              }}
            >
              {plan.price}
            </motion.h1>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                marginBottom: "35px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#444",
                  fontSize: mobile ? "18px" : "20px",
                }}
              >
                ✔ Gym Access
              </p>

              <p
                style={{
                  margin: 0,
                  color: "#444",
                  fontSize: mobile ? "18px" : "20px",
                }}
              >
                ✔ All Basic Equipment
              </p>

              <p
                style={{
                  margin: 0,
                  color: "#444",
                  fontSize: mobile ? "18px" : "20px",
                }}
              >
                ✔ Timings: 6 AM - 10 PM
              </p>
            </div>

            {/* WHATSAPP BUTTON */}

            <a
              href={plan.whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                style={{
                  background: plan.popular ? "#ffcc00" : "black",
                  color: plan.popular ? "black" : "white",
                  border: "none",
                  padding: mobile ? "16px 35px" : "18px 45px",
                  borderRadius: "12px",
                  fontSize: mobile ? "16px" : "18px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                JOIN NOW
              </motion.button>
            </a>
          </motion.div>
        ))}
      </div>

      {/* EXTRA BOX */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.02,
        }}
        style={{
          marginTop: "60px",
          background: "#ffcc00",
          color: "black",
          borderRadius: "25px",
          padding: mobile ? "35px 25px" : "50px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: mobile ? "34px" : "48px",
            fontWeight: "900",
          }}
        >
          Special Discount for Students
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: mobile ? "18px" : "24px",
            lineHeight: "1.7",
          }}
        >
          Bring your ID card and get 10% OFF on all membership plans.
        </p>
      </motion.div>
    </motion.div>
  );
}
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const mobile = window.innerWidth <= 768;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message Sent Successfully");

        setName("");
        setPhone("");
        setMessage("");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        background: "#f3f3f3",
        minHeight: "100vh",
        padding: mobile ? "110px 16px 50px" : "150px 80px 80px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: "center",
          marginBottom: mobile ? "40px" : "70px",
        }}
      >
        <h1
          style={{
            fontSize: mobile ? "42px" : "90px",
            lineHeight: mobile ? "48px" : "90px",
            margin: 0,
            color: "black",
            fontWeight: "900",
          }}
        >
          CONTACT US
        </h1>

        <div
          style={{
            width: mobile ? "70px" : "90px",
            height: "4px",
            background: "#ffcc00",
            margin: "20px auto",
            borderRadius: "20px",
          }}
        />
      </motion.div>

      {/* MAIN SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
          gap: mobile ? "35px" : "50px",
          alignItems: "start",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* CONTACT INFO */}
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            style={{
              background: "white",
              padding: mobile ? "25px" : "40px",
              borderRadius: "22px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: mobile ? "17px" : "20px",
                  color: "#444",
                  lineHeight: "1.7",
                  wordBreak: "break-word",
                }}
              >
                📍 Tulshet Pada, Bhandup West, Mumbai, Maharashtra 400078
              </p>

              <p
                style={{
                  margin: 0,
                  fontSize: mobile ? "17px" : "20px",
                  color: "#444",
                }}
              >
                📞 +91 98677 98371
              </p>

              <p
                style={{
                  margin: 0,
                  fontSize: mobile ? "17px" : "20px",
                  color: "#444",
                  wordBreak: "break-word",
                }}
              >
                🟢 WhatsApp: +91 98677 98371
              </p>

              <p
                style={{
                  margin: 0,
                  fontSize: mobile ? "17px" : "20px",
                  color: "#444",
                }}
              >
                🕒 Morning 6:00 AM - 10:00 AM
              </p>

              <p
                style={{
                  margin: 0,
                  fontSize: mobile ? "17px" : "20px",
                  color: "#444",
                }}
              >
                🕒 Evening 5:00 PM - 10:00 PM
              </p>
            </div>
          </motion.div>

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.02,
            }}
            style={{
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <iframe
              title="Ajay Gym Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.012038017386!2d72.93000527381892!3d19.160905449304284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b92dd1e89193%3A0x261d461582845ec5!2sAjay%20gymnasium!5e1!3m2!1sen!2sin!4v1778406902710!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{
                border: 0,
                borderRadius: "18px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{
            y: -8,
          }}
          style={{
            background: "black",
            borderRadius: "25px",
            padding: mobile ? "30px 20px" : "45px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              color: "white",
              marginTop: 0,
              marginBottom: "30px",
              fontSize: mobile ? "34px" : "48px",
              fontWeight: "900",
              textAlign: mobile ? "center" : "left",
            }}
          >
            SEND MESSAGE
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <motion.input
              whileFocus={{
                scale: 1.02,
              }}
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                padding: mobile ? "16px" : "18px",
                borderRadius: "12px",
                border: "1px solid #333",
                background: "#111",
                color: "white",
                fontSize: "16px",
                outline: "none",
                width: "100%",
                boxSizing: "border-box",
              }}
            />

            <motion.input
              whileFocus={{
                scale: 1.02,
              }}
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{
                padding: mobile ? "16px" : "18px",
                borderRadius: "12px",
                border: "1px solid #333",
                background: "#111",
                color: "white",
                fontSize: "16px",
                outline: "none",
                width: "100%",
                boxSizing: "border-box",
              }}
            />

            <motion.textarea
              whileFocus={{
                scale: 1.02,
              }}
              placeholder="Your Message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{
                padding: mobile ? "16px" : "18px",
                borderRadius: "12px",
                border: "1px solid #333",
                background: "#111",
                color: "white",
                fontSize: "16px",
                outline: "none",
                resize: "none",
                width: "100%",
                boxSizing: "border-box",
              }}
            />

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              type="submit"
              style={{
                background: "#ffcc00",
                color: "black",
                border: "none",
                padding: mobile ? "16px" : "18px",
                borderRadius: "12px",
                fontWeight: "800",
                fontSize: mobile ? "16px" : "18px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
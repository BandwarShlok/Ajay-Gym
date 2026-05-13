import { motion } from "framer-motion";

export default function About() {
  const mobile = window.innerWidth <= 768;

  const stats = [
    {
      number: "500+",
      text: "Happy Members",
    },
    {
      number: "20+",
      text: "Equipments",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        background: "#f3f3f3",
        padding: mobile ? "120px 20px 60px" : "150px 80px 80px",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* TOP SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            style={{
              fontSize: mobile ? "42px" : "85px",
              lineHeight: mobile ? "48px" : "90px",
              margin: 0,
              fontWeight: "900",
              color: "black",
            }}
          >
            ABOUT <br /> US
          </h1>

          <div
            style={{
              width: "80px",
              height: "5px",
              background: "#ffcc00",
              margin: "25px 0",
            }}
          />

          <p
            style={{
              fontSize: mobile ? "18px" : "22px",
              color: "#444",
              lineHeight: "1.8",
            }}
          >
            Ajay Gym is a gym with the goal of making fitness affordable and
            simple for everyone.
          </p>

          <p
            style={{
              fontSize: mobile ? "18px" : "22px",
              color: "#444",
              lineHeight: "1.8",
            }}
          >
            We provide all the basic equipment needed for strength training,
            cardio and daily fitness workouts.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.02,
          }}
        >
          <motion.img
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.4 }}
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
            alt="gym"
            style={{
              width: "100%",
              height: mobile ? "300px" : "600px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          />
        </motion.div>
      </div>

      {/* STATS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
          gap: "30px",
          marginTop: "60px",
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
              background: "black",
              color: "white",
              padding: mobile ? "45px 20px" : "50px 35px",
              width: "100%",
              boxSizing: "border-box",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
            }}
          >
            <h1
              style={{
                color: "#ffcc00",
                fontSize: mobile ? "50px" : "65px",
                margin: 0,
              }}
            >
              {item.number}
            </h1>

            <p
              style={{
                marginTop: "15px",
                fontSize: mobile ? "20px" : "24px",
              }}
            >
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM IMAGE */}
      <motion.div
        style={{ marginTop: "60px" }}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          whileHover={{
            scale: 1.03,
          }}
          transition={{ duration: 0.4 }}
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
          alt="workout"
          style={{
            width: "100%",
            height: mobile ? "250px" : "500px",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

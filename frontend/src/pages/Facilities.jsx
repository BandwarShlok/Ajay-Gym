import { motion } from "framer-motion";

export default function Facilities() {
  const mobile = window.innerWidth <= 768;

  const facilities = [
    {
      title: "FREE WEIGHTS",
      desc: "Dumbbells, Plates and Bars",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "WEIGHT MACHINES",
      desc: "All important machines available",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "CARDIO ZONE",
      desc: "Treadmill, Cycle and more",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "CLEAN ENVIRONMENT",
      desc: "Clean and maintained gym",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "AMPLE SPACE",
      desc: "Spacious area for workout",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
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
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: mobile ? "48px" : "90px",
            lineHeight: mobile ? "55px" : "95px",
            margin: 0,
            color: "black",
            fontWeight: "900",
          }}
        >
          OUR <br /> FACILITIES
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

      {/* FACILITY CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile
            ? "1fr"
            : "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "35px",
        }}
      >
        {facilities.map((item, index) => (
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
              scale: 1.02,
            }}
            style={{
              background: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            {/* IMAGE */}
            <motion.img
              whileHover={{
                scale: 1.08,
              }}
              transition={{ duration: 0.4 }}
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: mobile ? "220px" : "260px",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* TEXT */}
            <div
              style={{
                padding: mobile ? "25px 20px" : "30px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: mobile ? "26px" : "30px",
                  color: "black",
                  fontWeight: "800",
                }}
              >
                {item.title}
              </h2>

              <p
                style={{
                  marginTop: "12px",
                  color: "#666",
                  fontSize: mobile ? "16px" : "18px",
                  lineHeight: "1.6",
                }}
              >
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
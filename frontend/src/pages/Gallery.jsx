import { motion } from "framer-motion";

export default function Gallery() {
  const mobile = window.innerWidth <= 768;

  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        background: "White",
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
            color: "black",
            fontSize: mobile ? "48px" : "90px",
            lineHeight: mobile ? "55px" : "95px",
            margin: 0,
            fontWeight: "900",
          }}
        >
          OUR <br /> GALLERY
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

      {/* IMAGE GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile
            ? "1fr"
            : "repeat(auto-fit, minmax(320px, 1fr))",
          gap: mobile ? "25px" : "35px",
        }}
      >
        {images.map((img, index) => (
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
            }}
            style={{
              overflow: "hidden",
              borderRadius: "22px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            }}
          >
            <motion.img
              whileHover={{
                scale: 1.08,
              }}
              transition={{ duration: 0.4 }}
              src={img}
              alt="gym"
              style={{
                width: "100%",
                height: mobile ? "260px" : "350px",
                objectFit: "cover",
                display: "block",
                transition: "0.4s",
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
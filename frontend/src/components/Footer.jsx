export default function Footer() {
  const mobile = window.innerWidth <= 768;

  return (
    <footer
      style={{
        background: "black",
        color: "white",
        padding: mobile ? "50px 20px" : "70px 80px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1.5fr 1fr 1fr",
          gap: "50px",
        }}
      >
        {/* LEFT */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              src={require("../logo.png")}
              alt="logo"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
            />

            <h1
              style={{
                color: "#ffcc00",
                margin: 0,
                fontSize: mobile ? "28px" : "36px",
              }}
            >
              AJAY GYM
            </h1>
          </div>

          <p
            style={{
              color: "#aaa",
              lineHeight: "1.8",
              marginTop: "20px",
              fontSize: "17px",
            }}
          >
            Affordable fitness and strength training gym for everyone.
            Train hard. Stay healthy. Stay consistent.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2
            style={{
              color: "#ffcc00",
              marginBottom: "20px",
            }}
          >
            QUICK LINKS
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <a href="/" style={linkStyle}>Home</a>
            <a href="/about" style={linkStyle}>About</a>
            <a href="/facilities" style={linkStyle}>Facilities</a>
            <a href="/pricing" style={linkStyle}>Pricing</a>
            <a href="/gallery" style={linkStyle}>Gallery</a>
            <a href="/contact" style={linkStyle}>Contact</a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h2
            style={{
              color: "#ffcc00",
              marginBottom: "20px",
            }}
          >
            CONTACT
          </h2>

          <p style={textStyle}>
            📍 Tulshet Pada, Bhandup West, Mumbai
          </p>

          <p style={textStyle}>
            📞 +91 98677 98371
          </p>

          <p style={textStyle}>
            🕒 6 AM - 10 PM
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
              fontSize: "24px",
            }}
          >
            <span style={{ cursor: "pointer" }}>📘</span>
            <span style={{ cursor: "pointer" }}>📸</span>
            <span style={{ cursor: "pointer" }}>▶️</span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          borderTop: "1px solid #222",
          marginTop: "50px",
          paddingTop: "25px",
          textAlign: "center",
          color: "#777",
          fontSize: "15px",
        }}
      >
        © 2026 AJAY GYM. All Rights Reserved.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#ccc",
  textDecoration: "none",
  fontSize: "17px",
};

const textStyle = {
  color: "#aaa",
  lineHeight: "1.8",
  fontSize: "17px",
};
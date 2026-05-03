import { useState, useRef } from "react";
import bgImage from "./images/My-fav.jpg";
import music from "./music/Music-1.mp3";

function App() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);

  return (
    <>
      <audio
        ref={audioRef}
        autoPlay
        loop
        onLoadedData={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 20;
            audioRef.current.play().catch(() => {
              console.log("Autoplay diblokir, klik layar untuk mulai musik.");
            });
          }
        }}
      >
        <source src={music} type="audio/mp3" />
      </audio>

      <div
        onClick={() => {
          if (audioRef.current && audioRef.current.paused) {
            audioRef.current.currentTime = 20;
            audioRef.current.play();
          }
        }}
        style={{
          minHeight: "100vh",
          background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
          color: "white",
        }}
      >
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
              100% { transform: translateY(0px); }
            }

            @keyframes pop {
              from { opacity: 0; transform: scale(0.85) translateY(20px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }

            @keyframes heartFall {
              0% { transform: translateY(-100px); opacity: 0; }
              20% { opacity: 1; }
              100% { transform: translateY(100vh); opacity: 0; }
            }

            .heart {
              position: fixed;
              top: -50px;
              animation: heartFall 6s linear infinite;
              font-size: 24px;
              pointer-events: none;
              z-index: 1;
            }
          `}
        </style>

        <div className="heart" style={{ left: "10%" }}>💖</div>
        <div className="heart" style={{ left: "25%", animationDelay: "1s" }}>💕</div>
        <div className="heart" style={{ left: "45%", animationDelay: "2s" }}>💗</div>
        <div className="heart" style={{ left: "70%", animationDelay: "1.5s" }}>💘</div>
        <div className="heart" style={{ left: "88%", animationDelay: "3s" }}>💞</div>

        <div
          style={{
            maxWidth: "720px",
            width: "100%",
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.35)",
            borderRadius: "30px",
            padding: "45px 30px",
            boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
            animation: "float 4s ease-in-out infinite",
            zIndex: 2,
          }}
        >
          <div style={{ fontSize: "52px", marginBottom: "10px" }}>💌</div>

          <h1 style={{ fontSize: "46px", fontWeight: "800" }}>
            Hi Sayangkuuu 💖
          </h1>

          <p style={{ fontSize: "19px", marginTop: "15px", color: "#fce7f3" }}>
            Aku punya sesuatu kecil buat kamu...
          </p>

          {!open && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);

                if (audioRef.current && audioRef.current.paused) {
                  audioRef.current.currentTime = 20;
                  audioRef.current.play();
                }
              }}
              style={{
                marginTop: "25px",
                padding: "14px 30px",
                borderRadius: "999px",
                border: "none",
                background: "linear-gradient(135deg, #e11d48, #fb7185)",
                color: "white",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 12px 25px rgba(225,29,72,0.45)",
              }}
            >
              Buka Pesan Ini 💗
            </button>
          )}

          {open && (
            <div
              style={{
                marginTop: "30px",
                background: "rgba(255,255,255,0.92)",
                color: "#9f1239",
                padding: "28px",
                borderRadius: "24px",
                animation: "pop 0.5s ease",
              }}
            >
              <h2 style={{ color: "#e11d48" }}>
                For My Girlfriend 💖
              </h2>

              <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
                Thank you for being in my life. You are the reason I am happy every day.  
                I hope we always take care of each other, support each other, and stay together.  
                I hope we are always happy together forever 💕
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
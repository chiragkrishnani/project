import { useState, useRef } from "react";
import "./Valentine.css";

export default function Valentine() {
  const [accepted, setAccepted] = useState(false);
  const [noIndex, setNoIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const audioRef = useRef(null);

  const noTexts = [
    "Noo 😢",
    "Really?",
    "Think again 🤔",
    "Don't do this 😵",
    "I'll be sad 😭",
    "Give me a chance 🥺",
    "Are you sure? 😞",
    "Please reconsider 🙏",
    "My heart can't take this 💔",
    "Be my Valentine please 💖"
  ];

  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * 100) - 100;
    const randomY = Math.floor(Math.random() * 100) - 100;
    setPosition({ x: randomX, y: randomY });
    setNoIndex((prev) => (prev + 1) % noTexts.length);
  };

  const handleYes = () => {
    setAccepted(true);
    setTimeout(() => {
      audioRef.current?.play();
    }, 300);
  };

  return (
    <div className="valentine-container">
      <div className="valentine-card">
        {!accepted ? (
          <>
            <h1>Will you be my Valentine ?? Purva💘</h1>

            <div className="buttons">
              <button className="yes-btn" onClick={handleYes}>
                Yes 💖
              </button>

              <button
                className="no-btn"
                onMouseEnter={handleNoHover}
                onClick={handleNoHover}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`
                }}
              >
                {noTexts[noIndex]}
              </button>
            </div>
          </>
        ) : (
          <div className="love-message">
            Every time I see your name on my phone, my heart does a little happy dance 💕
            You’re my favorite notification, my favorite person, and my favorite everything.
            I don’t need perfect days… I just need you in them.
            You make my ordinary days feel magical ✨
            You’re the reason I smile randomly looking at my phone like a fool.
            No matter how my day goes, talking to you makes everything better.
            Purva bhale he tu kha kha ke Imax ki trh faaihaall jaa tu 60 saal ki hoo jayegi
            tere chehere pe rinckles aa jynge tu chidd chiddii hoo jayegi lekin tu aaj jitni
            khubsoorat h tu humesha mere liye utni he khubsoorat rahegi kyuki tu tu h yaarr !!
            Aur haa sach bolu toh I didn’t believe in ‘my person’ until I found you.
            Happy valentine’s day baby ❤️
          </div>
        )}

        {/* MUSIC */}
        <audio ref={audioRef} src="/Samjhawan(KoshalWorld.Com).mp3" loop />
      </div>
    </div>
  );
}

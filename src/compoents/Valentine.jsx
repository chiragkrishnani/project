import { useState } from "react";
import "./Valentine.css";

export default function Valentine() {
  const [accepted, setAccepted] = useState(false);
  const [noIndex, setNoIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const noTexts = [
  "Noo 😢",
  "Really?",
  "Think again 🤔",
  "Don't do this 😵",
  "I'll be sad 😭",
  "Give me a chance 🥺",
  "Are you sure? 😞",
  "Please reconsider 🙏",
  "You might regret this 😔",
  "My heart can't take this 💔",
  "At least think once more 🥹",
  "Don't reject me like this 😩",
  "I practiced asking this 😭",
  "You clicked No accidentally right? 😶",
  "Maybe try Yes once? 👉👈",
  "My feelings are buffering... ⏳",
  "Loading sadness... 😭",
  "Please don't do this to me 😞",
  "You’re too cute to say No 😤",
  "I'll bring chocolates 🍫",
  "I'll share my fries 🍟",
  "I'll laugh at your jokes 😌",
  "I'll send good morning texts 🌞",
  "I’ll watch your favorite movies 🎬",
  "I promise I'll be nice 🥺",
  "This is getting painful 😭",
  "Last chance 😔",
  "Okay this is the last last chance 🥲",
  "You're making my heart lag 💔",
  "Please click Yes... just once 🥹",
  "Don't friendzone me like this 😭",
  "You're really pressing No huh 😶",
  "Be my Valentine please 💖",
  "Pretty please? 🥺",
  "Say Yes and I'll be happy forever 😌",
  "You’re making this very difficult 😭",
  "Okay now I'm actually sad 💔"
];


  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    setPosition({ x: randomX, y: randomY });
    setNoIndex((prev) => (prev + 1) % noTexts.length);
  };

  return (
    <div className="valentine-container">
        <div className="valentine-card">
      {!accepted ? (
        <>
          <h1>Will you be my Valentine ?? Purva💘</h1>

          <div className="buttons">
            <button className="yes-btn" onClick={() => setAccepted(true)}>
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
        <h1 className="success-text">Yes, I knew it 💕🥰</h1>
      )}
      </div>
    </div>
  );
}

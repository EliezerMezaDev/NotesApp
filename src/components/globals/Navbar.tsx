import { useState } from "react";
import { FaCircleHalfStroke } from "react-icons/fa6";

type palette = {
  id: number;
  color: string;
  name: string;
};

const palettes = [
  {
    id: 0,
    color: "#6fffe9b3",
    name: "cyan-palette",
  },
  {
    id: 1,
    color: "#6B18B3b3",
    name: "purple-palette",
  },
];

export const Navbar = () => {
  const [showPalettes, setShowPalettes] = useState<Boolean>(false);
  const [currentPalette, setCurrentPalette] = useState(palettes[0]);

  const handlePalette = (p: palette) => {
    setCurrentPalette(p);
    setShowPalettes(false);
  };

  return (
    <nav className="container navbar">
      <span className="logo">Notes App</span>

      <div className="options">
        <div className={showPalettes ? `palettes show` : `palettes`}>
          {palettes.map((p: palette, index) => (
            <button
              key={index}
              className={
                currentPalette.id === p.id
                  ? "palettes__item active"
                  : "palettes__item"
              }
              style={{ backgroundColor: p.color }}
              onClick={() => handlePalette(p)}
            ></button>
          ))}
        </div>

        <button
          className="option"
          onClick={() => setShowPalettes((prev) => !prev)}
        >
          <FaCircleHalfStroke className="icon" />
        </button>
      </div>
    </nav>
  );
};

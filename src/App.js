import "./App.css";
import { useState } from "react";

// Get all Images inside assets folder
function importAll(r) {
  let images = {};
  r.keys().forEach((key) => {
    images[key.replace("./", "")] = r(key);
  });
  return images;
}

const images = importAll(
  require.context("./assets", true, /\.(png|jpe?g|svg)$/)
);

//Structure to map through names and render buttons
const structure = {
  accessories: ["earings", "flower", "glasses", "headphone"],
  backgrounds: ["blue50", "blue60", "blue70", "darkblue30"],
  ears: ["default", "tilt-backward", "tilt-forward"],
  eyes: ["angry", "default", "naughty", "panda", "smart", "star"],
  hair: ["bang", "curls", "default", "elegant", "fancy", "quiff", "short"],
  leg: [
    "bubble-tea",
    "cookie",
    "game-console",
    "default",
    "tilt-backward",
    "tilt-forward",
  ],
  mouth: ["astonished", "default", "eating", "laugh", "tongue"],
  neck: ["bend-backward", "bend-forward", "default", "thick"],
};

function App() {
  const [active, setActive] = useState("accessories");

  /** Images States */

  const [accessories, setAccessories] = useState("headphone");
  const [backgrounds, setBackgrounds] = useState("blue50");
  const [ears, setEars] = useState("default");
  const [eyes, setEyes] = useState("default");
  const [hair, setHair] = useState("default");
  const [leg, setLeg] = useState("default");
  const [mouth, setMouth] = useState("default");
  const [neck, setNeck] = useState("default");

  function handleBtnClick(e) {
    setActive(e.target.textContent);
  }

  function handleStyleClick(img) {
    switch (active) {
      case "accessories":
        setAccessories(img);
        break;
      case "backgrounds":
        setBackgrounds(img);
        break;
      case "ears":
        setEars(img);
        break;
      case "eyes":
        setEyes(img);
        break;
      case "hair":
        setHair(img);
        break;
      case "leg":
        setLeg(img);
        break;
      case "mouth":
        setMouth(img);
        break;
      case "neck":
        setNeck(img);
        break;
      default:
        break;
    }
  }
  return (
    <div className="App">
      <div>
        <h1>Alpaca Generator</h1>
      </div>
      <div className="main">
        <div className="alpacaBuilder">
          <div className="alpaca">
            <div className="images">
              <img
                className="background img"
                src={images[`backgrounds/${backgrounds}.png`]}
                alt=""
              />
              <img
                className="accessory img"
                src={images[`accessories/${accessories}.png`]}
                alt=""
              />
              <img
                className="ear img"
                src={images[`ears/${ears}.png`]}
                alt=""
              />
              <img
                className="eye img"
                src={images[`eyes/${eyes}.png`]}
                alt=""
              />
              <img
                className="hair img"
                src={images[`hair/${hair}.png`]}
                alt=""
              />
              <img className="leg img" src={images[`leg/${leg}.png`]} alt="" />
              <img
                className="mouth img"
                src={images[`mouth/${mouth.png}`]}
                alt=""
              />
              <img
                className="neck img"
                src={images[`neck/${neck}.png`]}
                alt=""
              />
              <img className="nose img" src={images["nose.png"]} alt="" />
            </div>
          </div>
        </div>
        <div className="btnsComponent">
          <h2>Accessorice The Alpaca's</h2>
          <div className="btns-container">
            {Object.keys(structure).map((part) => {
              return (
                <button
                  onClick={handleBtnClick}
                  className={`btn ${active === part ? "active" : ""}`}
                  key={part}
                >
                  {part}
                </button>
              );
            })}
          </div>
          <h2>Style</h2>
          <div className="btns-container">
            {structure[active].map((img) => {
              return (
                <button
                  onClick={() => handleStyleClick(img)}
                  className={`btn ${structure[active] === img ? "active" : ""}`}
                  key={img}
                >
                  {img}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Settings() {
    const getSavedSettings = () => {
        const savedSettings = JSON.parse(localStorage.getItem("userSettings"));
        return savedSettings || {
            "--primary-color": "rgb(255,0,86)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757",
            "--font-size": "16px",
            "--animation-speed": 1
        };
    };

    const [settings, setSettings] = useState(getSavedSettings);
    const [primaryColor, setPrimaryColor] = useState(Number(localStorage.getItem("primaryColor")) || 0);
    const [fontSize, setFontSize] = useState(Number(localStorage.getItem("fontSize")) || 1);
    const [animationSpeed, setAnimationSpeed] = useState(Number(localStorage.getItem("animationSpeed")) || 1);

    useEffect(() => {
        const root = document.documentElement;
        for (let key in settings) {
            root.style.setProperty(key, settings[key]);
        }
        document.body.style.fontSize = settings["--font-size"];
        localStorage.setItem("userSettings", JSON.stringify(settings));
    }, [settings]);

    const primaryColors = [
        "rgb(255,0,86)",
        "rgb(33,150,243)",
        "rgb(255,193,7)",
        "rgb(0,200,83)",
        "rgb(156,39,176)"
    ];

    function changeColor(i) {
        const _color = primaryColors[i];
        let _settings = { ...settings, "--primary-color": _color };
        setPrimaryColor(i);
        localStorage.setItem("primaryColor", i);
        setSettings(_settings);
    }

    const fontSizes = [
        { title: "Small", value: "12px" },
        { title: "Medium", value: "16px" },
        { title: "Large", value: "20px" }
    ];

    function changeFontSize(i) {
        const _size = fontSizes[i].value;
        let _settings = { ...settings, "--font-size": _size };
        setFontSize(i);
        localStorage.setItem("fontSize", i);
        setSettings(_settings);
    }

    const animationSpeeds = [
        { title: "Slow", value: 2 },
        { title: "Medium", value: 1 },
        { title: "Fast", value: 0.5 }
    ];

    function changeAnimationSpeed(i) {
        let _speed = animationSpeeds[i];
        let _settings = { ...settings, "--animation-speed": _speed.value };
        setAnimationSpeed(i);
        localStorage.setItem("animationSpeed", i);
        setSettings(_settings);
    }

    return (
        <div>
            {/* ❌ Removed "Preferred Theme" Section */}

            <div className="section d-block">
                <h2>Preferred Color</h2>
                <div className="options-container">
                    {primaryColors.map((color, index) => (
                        <div
                            key={index}
                            className="option light"
                            style={{ backgroundColor: color }}
                            onClick={() => changeColor(index)}
                        >
                            {primaryColor === index && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="section d-block">
                <h2>Font Size</h2>
                <div className="options-container">
                    {fontSizes.map((size, index) => (
                        <button key={index} className="btn" onClick={() => changeFontSize(index)}>
                            {size.title}
                            {fontSize === index && (
                                <span>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="section d-block">
                <h2>Animation Speed</h2>
                <div className="options-container">
                    {animationSpeeds.map((speed, index) => (
                        <button key={index} className="btn" onClick={() => changeAnimationSpeed(index)}>
                            {speed.title}
                            {animationSpeed === index && (
                                <span>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

import {useState} from "react"
export default function Settings(){
    const [settings,setSettings]=useState({
        "--background-color":"#fff",
        "--background-light":"#fff",
        "--primary-color":"rgb(255,0,86)",
        "--shadow-color":"rgba(0,0,0,0.2)",
        "text-color":"0A0A0A",
        "--text-light":"#575757",
        "--font-size":"16px",
        "--animation-speed":1
    })

    const [theme,setTheme]=useState("light")
    
    const themes=[
        {
        "--background-color":"#fff",
        "--background-light":"#fff",
        "--shadow-color":"rgba(0,0,0,0.2)",
        "text-color":"0A0A0A",
        "--text-light":"#575757",
        },
        {
        "--background-color":"rgb(29,29,29)",
        "--background-light":"rgb(77,77,77)",
        "--shadow-color":"rgba(0,0,0,0.2)",
        "text-color":"#ffffff",
        "--text-light":"#eceaea",
        }
    ]

    function changeTheme(i){
        const _theme ={...themes[i]}
        setTheme(i===0 ? "light":"dark")
        //update settings
        let _settings ={...settings}
        for(let key in _settings){
            console.log(key)
        }


    }
    const primaryColors = [
        "rgb(255,0,86)",
        "rgb(33,150,243)",
        "rgb(255,193,7)",
        "rgb(0,200,83)",
        "rgb(156,39,176)"
    ]
    const fontSizes= [
        {
            title:"Small",
            value:"12px"
        },
        {
            title:"Medium",
            value:"16px"
        },
        {
            title:"Large",
            value:"20px"
        }
    ]
    const animationSpeeds=[
        {
            title:"Slow",
            value:2
        },
        {
            title:"Medium",
            value:1
        },
        {
            title:"Fast",
            value:.5
        }

    ]
    const [primaryColor, setPrimaryColor] = useState(0)
    const [fontSize, setFontSize]= useState(1)
    const [animationSpeed,setAnimationSpeed]=useState(1)
    return(
        <div>
            <div className="section d-block">
                <h2>Preferrd theme</h2>
                <div className="options-container">

                    <div className="option light" onClick={()=>changeTheme(0)}>
                        {theme === "light" && (
                            <div className="check">
                            <FontAwesomeIcon icon={faCheck}/>
                        </div>
                        )}
                    </div>

                    <div className="option dark"onClick={()=>changeTheme(1)}>
                        {theme === "dark" && (
                            <div className="check">
                            <FontAwesomeIcon icon={faCheck}/>
                        </div>
                        )}
                    </div>

                </div>
            </div>


            <div className="section d-block">
                <h2>Primary Color</h2>
                <div className="options-container">

                    {primaryColors.map((color,index) => (
                        <div className="option light" style={{backgroundColor: color}}>
                        {primaryColor === index && (
                            <div className="check">
                            <FontAwesomeIcon icon={faCheck}/>
                        </div>
                        )}
                    </div>
                    ) )}

                </div>
            </div>

            <div className="section d-block">
                <h2>Font Size</h2>
                <div className="options-container">

                    {fontSizes.map((size,index) => (
                    <button key={index} className="btn" onClick={() => setFontSize(index)}>{size.title}
                    {fontSize === index && <span><FontAwesomeIcon icon={faCheck}/></span> }
                    </button>
                    )
                     )}
   
                </div>
            </div>
            
            <div className="section d-block">
                <h2>Animation Speed</h2>
                <div className="options-container">

                    {animationSpeeds.map((speed,index) => (
                    <button key={index} className="btn" onClick={() => setAnimationSpeed(index)}>{speed.title}
                    {animationSpeed === index && <span><FontAwesomeIcon icon={faCheck}/></span> }
                    </button>
                    )
                     )}
   
                </div>
            </div>

        </div>
    )
}
import { useState, useRef, useEffect, useContext } from "react";
import MainPageRight_top from "./top";
import MainPageRight_bottom from "./bottom";
import { isMinimized_obj as isMinimized_obj_import } from "../mainPage";


export default function MainPageRight() {
    let [hideSection, set_hideSection] = useState(false)
    let isMinimized_obj = useContext(isMinimized_obj_import)


    return (
        <section className="mainPage_right">
            {  hideSection === false &&
            <>          
                <MainPageRight_top/>
                <MainPageRight_bottom/>
            </>
            }

            <div 
                className="minimizeButtonContainer" 
                onClick={() => {
                    set_hideSection((prev) => !prev)
                    isMinimized_obj.setter((prev) => !prev)
                }}
            >
                <div className="minimizeButton">
                    {isMinimized_obj.value === false && <i className="fa-solid fa-arrow-right"></i>}
                    {isMinimized_obj.value === true && <i className="fa-solid fa-arrow-left"></i>}
                </div>
            </div>
        </section>
    )
}
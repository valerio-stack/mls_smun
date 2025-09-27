import { useState, useRef, useEffect, createContext, useContext } from "react"
import Navbar from "../navbar"
import MainPageLeft from "./mainPageLeft/mainPageLeft"
import MainPageRight from "./mainPageRight/mainPageRight"



export let isMinimized_obj = createContext()

export default function MainPage() {
    let [isMinimized, set_isMinimized] = useState(false)

    return (
        <isMinimized_obj.Provider value={{value: isMinimized, setter: set_isMinimized}}>
            <Navbar/>

            <div className="mainPageContainer" style={{gridTemplateColumns: isMinimized ? "95% 5%" : "61.5% 38.5%"}}>
                <MainPageLeft/>
                <MainPageRight/>
                <div className="mainPageMask"></div>
            </div>
        </isMinimized_obj.Provider>
    )
}
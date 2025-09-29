import { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"

export default function NavbarMenu(props) {
    let [isActive, set_isActive] = useState(false)

    useEffect(() => {
        if (props.activeMenu !== props.title) { set_isActive(false) }
    },[props.activeMenu])

    return (
        <div 
            className="navbarMenus" 
            onClick={() => {
                if (props.activeMenu !== props.title) { 
                    set_isActive((prev) => !prev) 
                    props.set_activeMenu(props.title)
                }
            }}
        >
            <h3>{props.title}</h3>
            
            <div 
                className="navbarMenus_underline"
                style={{opacity: isActive ? 1 : 0}}
            />
        </div>
    )
}
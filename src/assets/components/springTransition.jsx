import { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";

export default function SpringTransition({children, type, state, duration=1000}) {
    let config = 
        (type === "fade") ? {
            from: {opacity: 0},
            enter: {opacity: 1},
            leave: {opacity: 0},
            config: {duration: duration}
        } :
        null

    let transition = useTransition(state, config)
    let AnimatedChild = animated(children.type)

    return (
        transition((style, state) => 
            <AnimatedChild {...children.props} style={style}/>
        )
    )
}
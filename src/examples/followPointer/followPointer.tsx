"use client"

import {frame, motion, useSpring} from "motion/react"
import {RefObject, useEffect, useRef} from "react"

export const Drag = () => {
    const ref = useRef<HTMLDivElement>(null)
    const {x, y} = useFollowPointer(ref)

    return <motion.div ref={ref} style={{...ball, x, y}}/>
}

const spring = {}

// eslint-disable-next-line react-refresh/only-export-components
export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
    const x = useSpring(0, spring)
    const y = useSpring(0, spring)

    useEffect(() => {
        if (!ref.current) return

        const handlePointerMove = ({clientX, clientY}: MouseEvent) => {
            const element = ref.current!

            frame.read(() => {
                x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
                y.set(clientY - element.offsetTop - element.offsetHeight / 2)
            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () =>
            window.removeEventListener("pointermove", handlePointerMove)
    }, [])

    return {x, y}
}

/**
 * ==============   Styles   ================
 */

const ball = {
    width: 300,
    height: 300,
    borderRadius: "50%",
    background: "rgba(22,255,255, 0.2)",
    filter: "blur(100px)",
    zIndex: -1,
}

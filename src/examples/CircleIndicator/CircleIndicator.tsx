import {motion, useScroll} from "framer-motion"

export const CircleIndicator = () => {
    const {scrollYProgress} = useScroll()

    return (
        <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
            <motion.circle
                cx="50"
                cy="50"
                r="30"
                stroke="red"
                strokeWidth="5"
                style={{pathLength: scrollYProgress}}
            />
        </svg>
    )
}
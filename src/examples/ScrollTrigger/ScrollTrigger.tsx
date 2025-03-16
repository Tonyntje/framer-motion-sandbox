import {motion} from "framer-motion"
import {useRef} from "react";

export const ScrollTrigger = () => {
    const ref = useRef(null)

    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2, delay: 0.5}}
            ref={ref}
        >Should appear when scrolled in</motion.div>
    )
}
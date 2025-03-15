import {motion} from "framer-motion";
import {Stack} from "../../components/Stack/Stack.tsx";

export const Gestures = () => {
    return (
        <Stack>
            <motion.button
                whileHover={{scale: 1.3}}
            >Grow on Hover
            </motion.button>
            <motion.button
                whileTap={{scale: 0.9}}
            >Shrink on Tap
            </motion.button>
            <motion.button
                whileFocus={{scale: 1.3}}
            >Grow on Focus
            </motion.button>
        </Stack>
    )
}
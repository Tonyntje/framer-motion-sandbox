import {motion, useMotionValue, useTransform} from "framer-motion";
import './MotionValues.scss'

export const MotionValues = () => {
    const x = useMotionValue(0)
    const background = useTransform(
        x,
        // Indexes correspond to the x-position;
        [-100, -50, 0, 50, 100],
        // Color's based on x-position;
        ["#ff008c", "#00fff7", "#7700ff", "#E49E1AFF", "#C52424FF"]
    )

    const scale = useTransform(x, [-100, 100], [0.5, 2]);

    return (
        <motion.div style={{background}} className="motion-value-box">
            <motion.div
                drag="x"
                dragConstraints={{left: 0, right: 0}}
                style={{x, scale}}
            >
                Drag to see motion
            </motion.div>
        </motion.div>
    )
}
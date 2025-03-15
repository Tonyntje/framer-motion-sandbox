import {motion} from "framer-motion";
import {useState} from "react";

export const Keyframes = () => {
    const [variant, setVariant] = useState("")

    const variants = {
        triangle: {
            x: [0, 100, 50, 0, 0],
            y: [0, 0, -50, 0, 0],
        },
        square: {
            x: [0, 100, 100, 0, 0, 0],
            y: [0, 0, -100, -100, 0, 0],
        },
        circle: {
            rotate: [0, 360]
        },
    }

    return (
        <>
            <motion.div
                animate={variant}
                variants={variants}
                transition={{duration: 2}}
                style={{
                    width: '100px'
                }}
            >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '20px',
                    width: '40px',
                    color: 'black',
                    backgroundColor: 'white',
                }}>Test
                </div>
            </motion.div>
            <br/>
            <div className="content__box__buttons">
                <button onClick={() => setVariant("square")}> Square</button>
                <button onClick={() => setVariant("circle")}> Circle</button>
                <button onClick={() => setVariant("triangle")}> Triangle</button>
            </div>
        </>
    )
}
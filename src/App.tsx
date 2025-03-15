import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {motion, useMotionValue, useTransform} from 'framer-motion'
import {useState} from "react";

function App() {
    const [variant, setVariant] = useState("")

    const variants = {
        triangle: {
            x:  [0, 300, 0, -300, 0],
            y:  [0, 0, -300, 0, 0],
        },
        square: {
            x:  [0, 150, 150, -150, -150, 0],
            y:  [0, 0, -300, -300, 0, 0],
        },
        circle: {
            x:  [0, 500, 0, -500, 0],
            y:  [0, 0, 500, 0, 0],
        },
    }

    const x = useMotionValue(0)
    const background = useTransform(
        x,
        [-100, 0, 100],
        ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
    )

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>

            <motion.nav
                animate={variant}
                variants={variants}
                transition={{duration: 2}}
            >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100px',
                    width: '100px',
                    color: 'black',
                    backgroundColor: 'white',
                }}>Test
                </div>
            </motion.nav>
            <br/>
            <button onClick={() => setVariant("square")}> Square</button>
            <button onClick={() => setVariant("circle")}> Circle</button>
            <button onClick={() => setVariant("triangle")}> Triangle</button>

            <motion.button
                whileHover={{scale: 2.1}}
                whileTap={{scale: 0.9}}
            />

            <motion.div style={{background}}>
                <motion.div
                    drag="x"
                    dragConstraints={{left: 0, right: 0}}
                    style={{x}}
                >
                    BIG X
                </motion.div>
            </motion.div>
        </>
    )
}

export default App

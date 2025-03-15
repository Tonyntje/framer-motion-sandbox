import './App.css'
import {Box} from "./components/Box/Box.tsx";
import {Stack} from "./components/Stack/Stack.tsx";
import {Keyframes} from "./examples/Keyframes/Keyframes.tsx";
import {Gestures} from "./examples/Gestures/Gestures.tsx";
import {MotionValues} from "./examples/MotionValues/MotionValues.tsx";

function App() {
    return (
        <Stack>
            <h1>Framer Motion Sandbox Lab</h1>
            <p>Visit <a href="https://examples.motion.dev/react">Motion.dev</a> for more examples</p>

            <Box description="Based on the state value I can use different animation styles"
                 title="Combining Keyframes & variants">
                <Keyframes/>
            </Box>

            <Box description="Button Examples with Gestures like: Hover, Focus, Click" title="Gestures">
                <Gestures/>
            </Box>

            <Box
                description="Using custom values and indexes to tween between styles. useAnimationFrame increments to trigger fade-in's for example."
                title="Using Motion values">
                <MotionValues/>
            </Box>
        </Stack>
    )
}

export default App

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
            
            <Box description="Based on the state value I can use different animation styles"
                 title="Combining Keyframes & variants">
                <Keyframes/>
            </Box>

            <Box description="Button Examples with Gestures like: Hover, Focus, Click" title="Gestures">
                <Gestures/>
            </Box>

            <Box description="Working with keframes" title="Keygrames with Variants">
                <MotionValues/>
            </Box>
        </Stack>
    )
}

export default App

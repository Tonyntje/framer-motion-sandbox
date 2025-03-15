import {ReactNode} from "react";
import "./Stack.scss"

export const Stack = ({children}: { children: ReactNode }) => {
    return (<div className="content__stack">{children}</div>)
}
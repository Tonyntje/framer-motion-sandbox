import type {ReactNode} from "react";
import './Box.scss'

export const Box = ({children, title, description}: {
    children: ReactNode, title: string; description: string;
}) => {
    return (<div className="content__box">
        <h3>{title}</h3>

        <div className="content__box__inner">
            <div>
                {children}
            </div>
        </div>

        <p>{description}</p>
    </div>)
}
import {FC, ReactNode} from "react";

const NewsBlock: FC<{children: ReactNode, title: string}> = ({ children, title }) => {
    return (
        <div className={"section"}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}
export default NewsBlock

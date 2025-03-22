import {HNStory} from "../types.ts";
import {FC} from "react";

const History: FC<{history: HNStory}> = ({history}) => {
    return (
        <a href={history.url ?? ''}>
            <div className={"block"} key={history.objectID}>
                <div className={"block__title"}>
                    <h3>{history.title}</h3>
                    <span>Author: {history.author}</span>
                </div>
                <div className={"block__stats"}>
                    <span>Comments: {history.num_comments}</span>
                    <span>Views: {history.points}</span>
                </div>
            </div>
        </a>
    )
}
export default History

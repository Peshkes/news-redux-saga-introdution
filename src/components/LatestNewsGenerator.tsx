import {HNStory} from "../types.ts";
import {latestErrorSelector, latestLoadingSelector, latestNewsSelector} from "../redux/news/newsSelectors.ts";
import {useSelector} from "react-redux";
import History from "./History.tsx";

const LatestNewsGenerator = () => {
    const latestNews = useSelector(latestNewsSelector);
    const latestNewsLoading = useSelector(latestLoadingSelector);
    const latestNewsError = useSelector(latestErrorSelector);

    if (latestNewsLoading) return <div>Loading...</div>
    if (latestNewsError) return <div>{latestNewsError}</div>

    return (
        <>
            {latestNews.map((item: HNStory) => (
                <History key={item.objectID} history={item}/>
            ))}
        </>
    )
}
export default LatestNewsGenerator

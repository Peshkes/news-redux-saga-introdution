import {HNStory} from "../types.ts";
import History from "./History.tsx";
import {popularErrorSelector, popularLoadingSelector, popularNewsSelector} from "../redux/news/newsSelectors.ts";
import {useSelector} from "react-redux";

const PopularNewsGenerator = () => {
    const popularNews = useSelector(popularNewsSelector);
    const popularNewsLoading = useSelector(popularLoadingSelector);
    const popularNewsError = useSelector(popularErrorSelector);

    if (popularNewsLoading) return <div>Loading...</div>
    if (popularNewsError) return <div>{popularNewsError}</div>

    return (
        <>
            {popularNews.map((item: HNStory) => (
                <History key={item.objectID} history={item}/>
            ))}
        </>
    )
}
export default PopularNewsGenerator

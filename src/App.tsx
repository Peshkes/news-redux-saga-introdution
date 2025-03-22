import "./App.css";
import {useEffect} from "react";
import {AppDispatch} from "./redux/store.ts";
import {useDispatch} from "react-redux";
import NewsBlock from "./components/NewsBlock.tsx";
import LatestNewsGenerator from "./components/LatestNewsGenerator.tsx";
import PopularNewsGenerator from "./components/PopularNewsGenerator.tsx";
import {fetchAllNewsAction} from "./redux/news/newsSilce.ts";

function App() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchAllNewsAction());
    }, [dispatch]);

    return (
        <div>
            <NewsBlock title={"Latest news"}>
                <LatestNewsGenerator/>
            </NewsBlock>
            <NewsBlock title={"Popular news"}>
                <PopularNewsGenerator/>
            </NewsBlock>
        </div>
    )
}

export default App

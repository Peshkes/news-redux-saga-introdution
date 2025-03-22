import {HNResponse} from "../types.ts";

export const getLatestNews = async (searchQuery: string): Promise<HNResponse> => {
    const request = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10`);
    return await request.json();
}

export const getPopularNews = async (): Promise<HNResponse> => {
    const request = await fetch(`https://hn.algolia.com/api/v1/search?hitsPerPage=10`);
    return await request.json();
}

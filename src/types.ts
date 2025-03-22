export type HNStory = {
    objectID: string;
    title: string | null;
    url: string | null;
    author: string;
    points: number;
    num_comments: number;
    created_at: string;
}

export type HNResponse = {
    hits: HNStory[];
    page: number;
    hitsPerPage: number;
    nbPages: number;
}

export type NewsStore = {
    latestNews: Array<HNStory>;
    popularNews: Array<HNStory>;
    latestLoading: boolean,
    popularLoading: boolean,
    latestError: string | null,
    popularError: string | null,
}

export type AllNewsActionAttribute = Pick<NewsStore, "latestNews" | "popularNews">

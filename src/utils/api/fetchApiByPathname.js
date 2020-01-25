import { fetchList, fetchItem, fetchUserArchive } from "./apiQuery";

const fetchApiByPathname = {
    "/": {
        tag: "front_page",
        fetchFn: fetchList
    },
    "/news": {
        tag: "front_page",
        fetchFn: fetchList
    },
    "/newest": {
        tag: "story",
        fetchFn: fetchList
    },
    "/ask": {
        tag: "ask_hn",
        fetchFn: fetchList
    },
    "/show": {
        tag: "show_hn",
        fetchFn: fetchList
    },
    "/newcomments": {
        tag: "comment",
        fetchFn: fetchList
    },
    "/jobs": {
        tag: "job",
        fetchFn: fetchList
    },
    "/user": {
        tag: "users",
        fetchFn: fetchItem
    },
    "/item": {
        tag: "items",
        fetchFn: fetchItem
    },
    "/submitted": {
        tag: "story",
        fetchFn: fetchUserArchive
    },
    "/threads": {
        tag: "comment",
        fetchFn: fetchUserArchive
    }
};

export default fetchApiByPathname;

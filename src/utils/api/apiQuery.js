const BASE_URL = "https://hn.algolia.com/api";
const VERSION = "v1";
const HITSPERPAGE = 30;

function fetchList(tag, page) {
    const endpoint = `${BASE_URL}/${VERSION}/search_by_date?tags=${tag}&hitsPerPage=${HITSPERPAGE}&page=${page}`;

    return fetch(endpoint)
        .then(response => response.json())
        .then(data => data);
}

function fetchItem(tag, id) {
    const endpoint = `${BASE_URL}/${VERSION}/${tag}/${id}`;

    return fetch(endpoint)
        .then(response => response.json())
        .then(data => data);
}

function fetchUserArchive(tag, page, id) {
    const endpoint = `${BASE_URL}/${VERSION}/search?tags=${tag},author_${id}&hitsPerPage=${HITSPERPAGE}&page=${page}`;

    return fetch(endpoint)
        .then(response => response.json())
        .then(data => data);
}

export { fetchList, fetchItem, fetchUserArchive };

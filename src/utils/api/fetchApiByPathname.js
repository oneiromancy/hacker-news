import { fetchItemList, fetchItem, fetchUserArchive } from './apiTransaction';

const fetchApiByPathname = {
    '/': {
        tag: 'front_page',
        fetchFn: fetchItemList
    },
    '/news': {
        tag: 'front_page',
        fetchFn: fetchItemList
    },
    '/newest': {
        tag: 'story',
        fetchFn: fetchItemList
    },
    '/ask': {
        tag: 'ask_hn',
        fetchFn: fetchItemList
    },
    '/show': {
        tag: 'show_hn',
        fetchFn: fetchItemList
    },
    '/newcomments': {
        tag: 'comment',
        fetchFn: fetchItemList
    },
    '/jobs': {
        tag: 'job',
        fetchFn: fetchItemList
    },
    '/user': {
        tag: 'users',
        fetchFn: fetchItem
    },
    '/item': {
        tag: 'items',
        fetchFn: fetchItem
    },
    '/submitted': {
        tag: 'story',
        fetchFn: fetchUserArchive
    },
    '/threads': {
        tag: 'comment',
        fetchFn: fetchUserArchive
    }
};

export default fetchApiByPathname;
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
    // bad approach
    const resp = await jsonPlaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: resp
    };
};
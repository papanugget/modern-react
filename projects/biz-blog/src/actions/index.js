import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState)  => {
    // wait for response from fetchPosts func
    // console.log('about to fetch posts');
    await dispatch(fetchPosts());
    // console.log(getState().posts);
    // iterate over posts and ids and get unique ids
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // console.log(userIds);
    // userIds.forEach(id => dispatch(fetchUser(id)));
    // lodash refactor
    _.chain(getState().posts)
    // passes posts object to map
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        // execute chained lodash function
        .value()
};

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
};

// export const fetchUser = (id) => dispatch => {
//     // const response = await jsonPlaceholder.get(`/users/${id}`);
//     // // console.log(response.data);
//     // dispatch({
//     //     type: 'FETCH_USER',
//     //     payload: response.data
//     // });
//     _fetchUser(id, dispatch);
// }

// // private memoized function to fetch users one
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// });
// memoized experiment
// export const fetchUser = function(id) {

//     return  _.memoize(async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER', payload: response.data});
//     });
// };
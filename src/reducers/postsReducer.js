import {
    SET_RECENT_POSTS,
    SET_RESULT_POSTS
} from "../actions/types";
import recentPosts from "../components/recentPosts";

const INIT_STATE = {
    resultsPosts: [],
    recentPosts: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_POSTS:
            const recentPosts = action.payload;
            return {
                ...state, 
                recentPosts 
            }
        case SET_RESULT_POSTS:
            const resultsPosts = action.payload;
            return {
                ...state, 
                posts: resultsPosts 
            }
        default:
            return state
    }
}
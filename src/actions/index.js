import { SET_RECENT_POSTS } from "./types";
import axios from "axios";

export function fetchReactPosts() {
    return function(dispatch) {
        //perform request here
        // console.log("yo! this is working");
        axios
        .get("https://api.dailysmarty.com/posts")
        .then( response => {
            console.log("fetchReactPosts response", response.data.posts);
            dispatch({
                type: SET_RECENT_POSTS,
                payload: response.data.posts
            })
        })
        .catch(error => {
            console.log("error with fetchReactPosts", error);
        });
    }
}
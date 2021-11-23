import * as api from '../api'
import {CREATE, FETCH_ALL, ID_CAPTURE, UPDATE, DELETE} from '../constants/actionTypes'

export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts()
        dispatch({
            type : FETCH_ALL,
            payload : data
        }) // dispatch is coming form redux-thunk also the aysn (dispatch)
    } catch (error) {
        console.log(error.message)
    }
}

export const createNewPost = (newPost) => async (dispatch) => {
    try {
        const {data} = await api.createPost(newPost)
        dispatch({
            type : CREATE,
            payload : data
        })
    } catch (error) {
        console.log(error)
    }
}
export const idCapture = (id) => {
    return {type  : ID_CAPTURE,
    payload : id};
}

export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };


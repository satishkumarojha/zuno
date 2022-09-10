import axios from "axios";
import { ADD_BOOKS_FAILURE, ADD_BOOKS_LOADING, ADD_BOOKS_SUCCESS, GET_BOOKS_FAILURE, GET_BOOKS_LOADING, GET_BOOKS_SUCCESS, LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes"

export const getBooks = (params)=>(dispatch)=>{
    dispatch({type:GET_BOOKS_LOADING});
    axios.get("https://zuno-intern.herokuapp.com/books",params)
    .then((r)=>dispatch({type:GET_BOOKS_SUCCESS,payload:r.data}))
    .catch((e)=>dispatch({type:GET_BOOKS_FAILURE}));

};
export const addBooks = (params,token)=>(dispatch)=>{
    dispatch({type:ADD_BOOKS_LOADING});
    axios.post("https://zuno-intern.herokuapp.com/books",params,
       {
        headers:{
            'Authorization':`Bearer ${token}`
        }
       }
    )
    .then((r)=>{
        console.log(r.data);
        dispatch({type:ADD_BOOKS_SUCCESS,payload:r.data.book});
    })
    .catch((e)=>{
        console.log(e);
        dispatch({type:ADD_BOOKS_FAILURE})
    });

};
export const loginUser =(params)=>(dispatch)=>{
    dispatch({type:LOGIN_LOADING});
    axios.post("https://zuno-intern.herokuapp.com/user/login",params)
    .then((r)=>{
        dispatch({type:LOGIN_SUCCESS,payload:r.data.token})
    })
    .catch((e)=>{
        console.log(e);
        dispatch({type:LOGIN_FAILURE})
    })
}
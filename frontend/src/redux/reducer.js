import { ADD_BOOKS_FAILURE, ADD_BOOKS_LOADING, ADD_BOOKS_SUCCESS, GET_BOOKS_FAILURE, GET_BOOKS_LOADING, GET_BOOKS_SUCCESS, LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes"

const initialState = {
    books:[],
    isError:false,
    isLoading:false,
    token:""
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_BOOKS_LOADING :{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case GET_BOOKS_SUCCESS :{
            console.log(payload);
            return {
                ...state,
                books:payload.books,
                isLoading:false,
                isError:false
            }
        }
        case GET_BOOKS_FAILURE :{
            return {
                ...state,
                isError:true,
                isLoading:false
            }
        }
        case ADD_BOOKS_LOADING:{
            return{
                ...state,
                isLoading:true
            }
        }
        case ADD_BOOKS_SUCCESS:{
            let newbooks = state.books;
            let newbook=[...newbooks,payload];
            console.log(newbook);
            return{
                ...state,
                isLoading:false,
                books:newbook
            }
        }
        case ADD_BOOKS_FAILURE:{
            return{
                ...state,
                isError:true
            }
        }
        case LOGIN_LOADING :{
            return {
                ...state,
                isLoading:true,
            }
        }
        case LOGIN_SUCCESS :{
            console.log(payload);
            return{
                ...state,
                isLoading:false,
                token:payload
            }
        }
        case LOGIN_FAILURE :{
            return{
                ...state,
                isError:false
            }
        }
        default :{
            return state;
        }
    }
}
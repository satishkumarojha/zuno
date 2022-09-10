import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
export const Book = () => {
    const [singleBook,setBook] = useState({
       
    });
    const books = useSelector((state)=>state.books);
    const todos = useSelector((state)=>state.todo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(()=>{
       books.map((e)=>{
        if(e._id==id){
            setBook(e);
        }
       })
     },[books,id])
    //  console.log();
  return (
    <div className='single_book_page'>
        <div className='single_book'>
        <img src={singleBook?.image} alt="books_img" />
        <h1>{singleBook?.title}</h1>
        <p>Category:{singleBook?.category}</p>
        <p>publication:{singleBook?.publication}</p>
        <p>Price:{singleBook?.price}</p>
    </div>
    </div>
  )
}

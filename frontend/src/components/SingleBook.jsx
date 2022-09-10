import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
export const SingleBook = ({image,title,publication,category,id,price}) => {
  const navigate = useNavigate();
  return (
    <div className='single_book' onClick={()=>navigate(`/books/${id}`)}>
        <img src={image} alt="books_img" />
        <h1>{title}</h1>
        <p>Category:{category}</p>
        <p>publication:{publication}</p>
        <p>Price:{price}</p>
    </div>
  )
}
import React from 'react'
import { BookList } from '../components/BookList'
import { Filter } from '../components/Filter'

export const Books = () => {
  return (
    <div >
    <h1>Books Store</h1>
  <div className='books_div'>
    <div className='booklist'>
    <BookList/>
    </div>
    <div className='filter'>
    <Filter/>
    </div>
 
  </div>  
  </div>
  )
}

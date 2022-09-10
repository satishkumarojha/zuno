import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Privateauth } from '../hoc/Privateauth';
import { Book } from './Book';
import { Books } from './Books';
import { InsertBooks } from './InsertBooks';
import { Login } from './Login';
export const MainRoute = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path='/'element={<Books/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/insertbook'element={<Privateauth><InsertBooks/></Privateauth>}/>
            <Route path='/books/:id'element={<Book/>}/>
        </Routes>
    </div>
  )
}

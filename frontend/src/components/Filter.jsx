import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { getBooks } from '../redux/action';
export const Filter = () => {
  const[searchParams,setSearchparams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  const urlsort = searchParams.get("sort");
  const [category,setcategory]= useState(urlCategory||[]);
  const[sort,setsort]=useState(urlsort||"");
  const dispatch = useDispatch();
  const handleChange = (e)=>{
    const option = e.target.value;
    let newcategory = [...category];
    if(category.includes(option)){
      newcategory.splice(newcategory.indexOf(option),1);
    }
    else{
      newcategory.push(option);
    }
    setcategory(newcategory);
  }
  const handleSort = (e)=>{
    setsort(e.target.value);
  }
  useEffect(()=>{
    if(category){
      // console.log("run");
      setSearchparams({category:category});
      // dispatch(getBooks({params:{category}}));
    }
    
  },[setSearchparams,category,dispatch,searchParams]);
  useEffect(()=>{
    if(sort){
      const params = {
        category:searchParams.getAll("category"),
        sort,
      }
      
      setSearchparams(params);
      // dispatch(getBooks(getBooksParams));
    }
    
  },[setSearchparams,sort,dispatch,searchParams])
  return (
    <div>Filter
      <h3>category</h3>
      <input type="checkbox" name="Novel" value="Novel" defaultChecked={category.includes("Novel")} onChange={handleChange} />Novel
      <input type="checkbox" name="Self" value="Self" defaultChecked={category.includes("Self")} onChange={handleChange}/>Self help
      <input type="checkbox" name="Fiction" value="Fiction" defaultChecked={category.includes("Fiction")} onChange={handleChange}/>Fiction
      <input type="checkbox" name="Personal" value="Personal" defaultChecked={category.includes("Personal")} onChange={handleChange}/>Personal Finance
      <input type="checkbox" name="Motivational" value="Motivational" defaultChecked={category.includes("Motivational")} onChange={handleChange}/>Motivational
      <h3>Sort</h3>
      <input type="radio" name="sort" value="1" onChange={handleSort} defaultChecked={sort=="1"} />Asc
      <input type="radio" name="sort" value="-1" onChange={handleSort} defaultChecked={sort=="-1"} />Des
    </div>
  )
}
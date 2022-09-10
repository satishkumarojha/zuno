import { Box, Button, Input,Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addBooks } from '../redux/action'
export const InsertBooks = () => {
  const dispatch = useDispatch();
  const token = useSelector((state)=>state.token);
  const[info,setInfo]= useState({
    title:"",
    author:"",
    category:"",
    publication:"",
    price:"",
    image:""
  });
  const handleChange = (e)=>{
    let{name,value}=e.target
    setInfo({...info,[name]:value});
  }
  console.log(info)
  const handleSubmit = ()=>{
    dispatch(addBooks(info,token));
  }
  return (
    <Box w={'100%'} h={"100vh"} display={'flex'} justifyContent={"center"} alignItems={"center"} >
      <Box w={"400PX"} h={"500px"} display={'flex'} flexDirection={"column"} padding={5} boxShadow={ "rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
        <Text textAlign={"left"} fontWeight={"bold"} ml={4}>Title</Text>
        <Input placeholder='title' name='title' value={info.title} onChange={handleChange} size='md' />
      <Text textAlign={"left"} fontWeight={"bold"} ml={4}>Author</Text>
      <Input placeholder='author'name='author'value={info.author} onChange={handleChange} size='md' />
      <Text textAlign={"left"} fontWeight={"bold"} ml={4}>Category</Text>
      <Input placeholder='category'name='category' value={info.category} onChange={handleChange} size='md' />
      <Text textAlign={"left"} fontWeight={"bold"} ml={4}>Publication</Text>
      <Input placeholder='publication' name='publication' value={info.publication} onChange={handleChange} size='md' />
      <Text textAlign={"left"} fontWeight={"bold"} ml={4}>Price</Text>
      <Input placeholder='price' name='price' value={info.price} onChange={handleChange} size='md' />
      <Text textAlign={"left"} fontWeight={"bold"} ml={4}>Image</Text>
      <Input placeholder='image'name='image' value={info.image} onChange={handleChange} size='md' />
      <Button mt={8} onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  )
}

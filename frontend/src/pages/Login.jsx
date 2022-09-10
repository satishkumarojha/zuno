import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/action';
import { useSelector } from 'react-redux'; 
export function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state)=>state.token);
  const[info,setInfo]= useState({
    email:"ku@gmail.com",
    password:"1234satish"
  });
  const handleChange=(e)=>{
    let{name,value}=e.target;
    setInfo({...info,[name]:value})
  }
  // console.log(info)
  const handleLogin=()=>{
    if(email&&password){
      dispatch(loginUser(info))
    }
    else{
      alert("All fields are required");
    }
  }
  useEffect(() => {
    if (token) {
      navigate(location?.state?.pathname || `/`, { replace: true });
    }
  }, [navigate, token]);
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' value={info.email} onChange={handleChange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password' value={info.password} onChange={handleChange}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
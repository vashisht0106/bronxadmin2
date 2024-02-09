import {
    Box,
    FormControl,
    Input,
    Button,
    Heading,
    VStack,Text,
    Center,InputGroup,InputLeftElement, HStack, Modal, ModalOverlay, ModalContent,ModalFooter, ModalHeader, ModalBody, ModalCloseButton, useDisclosure
  } from '@chakra-ui/react';
  import { FaUser } from "react-icons/fa";
  
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RiLockPasswordFill } from "react-icons/ri";
import axios from 'axios';
import { bgColour, txtColor } from '../Dynamic';

function Login () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  

  const onLoginClick = () => {

      axios.post("http://localhost:3000/login", {
        email: email,
        password: password
      })
      .then(response => {
        alert(response.data.message); 
      })
      
      
    
    
    
    
  };

  const onForgotPasswordClick = () => {
    onOpen();
  };


    const backgroundImageUrl = 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg';
  return (
    <VStack bgImage={`url(${backgroundImageUrl})`}
      bgSize="cover"
      bgPosition="center"
      h="100vh" >
    <Box maxW={{ base: '90%', md: '50%', lg: '30%' }} mx="auto" mt="20"   p={'6'} rounded={8}>
      <Heading mb="8" fontSize={'25'} textAlign="center" color={bgColour}>
        Login
      </Heading>
      <FormControl>
        <InputGroup>
        <InputLeftElement>
        <FaUser   color='gray'/>
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </InputGroup>
      </FormControl>
      <FormControl mt="4">
        <InputGroup>
        <InputLeftElement>
        <RiLockPasswordFill  color='gray'/>
        </InputLeftElement>
        <Input
          type="password"
          placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </InputGroup>
          <HStack spacing={'5'}>
<Box w={'50'}  p={'2'} cursor={'pointer'}>

 <Text  onClick={onForgotPasswordClick} fontSize={'11'} color={bgColour}>Forgot Password</Text>

</Box>



         
          </HStack>
          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reset Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <InputGroup>
        <InputLeftElement>
        <FaUser   color={bgColour}/>
        </InputLeftElement>
        <Input
          type="text"
          placeholder=" Username"
          //   value={username}
          //   onChange={(e) => setEmail(e.target.value)}
          />
          </InputGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='gray' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue'>OK</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          
      </FormControl>
      <Center>

      <Button colorScheme="blue.800" variant={'outline'} mt="6" mb={'4'} onClick={onLoginClick}
      
    >
        Login
      </Button>
          </Center>
          
    </Box>
    </VStack>
  )
}

export default Login 

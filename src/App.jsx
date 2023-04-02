import React, { useState } from 'react';
import './App.css';
import { Box, Button, Center, Container, Heading } from "@chakra-ui/react";

function App() {
    let[state,setState] = useState(0);
  return (
    <Container>
        <Box bg='gray' w='100%' p='200px auto' color='white'>
            <Center>
                <Heading mb='25px'>{state}</Heading>
            </Center>
            <Center>
                <button onClick={()=>setState(state + 5)} m='0 20px'>Add</button>
                <button onClick={()=>setState(state - 3)} m='0 20px'>Remove</button>
                <button onClick={()=>setState(0)} m='0 20px'>Clear</button>
            </Center>
        </Box>
    </Container>
  )
}

export default App
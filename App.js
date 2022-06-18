/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Login from './src/Login';
import Signup from './src/Signup';
import { NativeBaseProvider, StatusBar } from 'native-base';
// import { NativeBaseProvider, Text, Box, View, ScrollView, input  } from 'native-base';
// import colors from 'native-base/lib/typescript/theme/base/colors';


const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor="red" />


      {/* <Login /> */}
      <Signup />
      {/* <Box flex={1} bg="amber.100" >
        {/* <Text color="red.400" fontSize={22} bold>Hhghjghghjghgjhghgi</Text> */}

      {/* <Box shadow={'8'} bg="blue.200" flex={0.2} justifyContent="center" alignItems={'center'}>
          <Text>Hghgjhghgi</Text>
        </Box>

        <Box borderRadius={'2xl'} bg="cyan.200" flex={1} justifyContent="center" px={4}>
          <HStack space={2} px="4" justifyContent="center" alignItems={'center'} mb={4}>
            <Text bold>Name</Text>
            <Input rounded="2xl" bg="white" fontSize={22} placeholder='Enter Your Name' />
          </HStack>
          <HStack space={2} px="4" justifyContent="center" alignItems={'center'}>
            <Text>Name</Text>
            <Input rounded="2xl" flexGrow={1} bg="white" placeholder='Enter Your Name' />
          </HStack> */}

      {/* <View space={4}>
            <Center>
              <Heading>Name</Heading>
            </Center>
            <Text>Name</Text>
          </View>
        </Box> */}
      {/* 
      </Box>  */}
    </NativeBaseProvider >
  )
};


export default App;

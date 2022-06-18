
import React, { useState } from 'react'
import { Box, Button, Heading, HStack, Input, ScrollView, Stack, Text } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Login = () => {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleShow = () => setShow(!show);

    return (
        <ScrollView bg="white" showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <Box flex={1}>
                <Box alignItems={"center"} py="8">
                    <Stack space={8} alignItems="center">
                        <Heading color={"red.500"} size="3xl" fontWeight='extrabold'>ARG</Heading>
                        <Heading color={"red.500"} size="xl" fontWeight='extrabold'>WELCOME</Heading>
                    </Stack>
                </Box>

                <Box px={8} mt={20}>
                    <Stack space={2}>
                        <Text fontSize={20} ml={2} bold color="red.500">Email</Text>
                        <Input bgColor="coolGray.100" rounded="xl" fontSize={18} py={3} placeholder='Enter email address' keyboardType='email-address' value={email} onChangeText={(e) => setEmail(e)}
                            InputLeftElement={<Icon name='email' size={22} style={{ marginLeft: 10 }} />}
                        />
                    </Stack>
                    <Stack space={2} mt={6}>
                        <Text fontSize={20} ml={2} bold color="red.500">Password</Text>
                        <Input bgColor="coolGray.100" type={show ? 'text' : 'password'} rounded="xl" fontSize={18} py={3} placeholder='Enter password' value={password} onChangeText={(e) => setPassword(e)}
                            InputLeftElement={<Icon name='lock' size={22} style={{ marginLeft: 10 }} />}
                            InputRightElement={<Icon onPress={handleShow} name={show ? "visibility-off" : "visibility"} size={22} style={{ marginRight: 10 }} />}
                        />
                    </Stack>

                    <HStack justifyContent="flex-end">
                        <Button _text={{ fontWeight: "bold", letterSpacing: "lg" }} variant="link" colorScheme="red">Forgot Password ?</Button>
                    </HStack>
                    <HStack mt={5} justifyContent={"center"}>
                        <Button shadow={'9'} rounded={"xl"} _text={{ fontWeight: "bold", letterSpacing: "lg", fontSize: 18 }} size="md" px={8} colorScheme="red">Login</Button>
                    </HStack>
                    <HStack mt={5} justifyContent="center" alignItems={"center"}>
                        <Text color="lightBlue.500" bold fontSize={16}>New Customer ?</Text>
                        <Button _text={{ fontWeight: "bold", letterSpacing: "lg", fontSize: 16 }} variant="link" colorScheme="red">Create an Account</Button>
                    </HStack>
                </Box>
            </Box>
        </ScrollView>
    )
}

export default Login
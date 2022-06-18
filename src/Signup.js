import React, { useState } from 'react'
import { Box, Text, Heading, Stack, Input, Button, HStack, ScrollView, Checkbox } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Signup = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [term, setTerm] = useState(false);

    return (
        <ScrollView bg="white" showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <Box flex={1}>
                <Box alignItems={"center"} py="4">
                    <Stack space={4} alignItems="center">
                        <Heading color={"red.500"} size="3xl" fontWeight='extrabold'>ARG</Heading>
                        <Heading color={"red.500"} size="xl" fontWeight='extrabold'>SIGNUP</Heading>
                    </Stack>
                </Box>

                <Box px={7}>
                    <Stack space={1}>
                        <Text bold ml={2} color='red.500' fontSize={20}>Full Name</Text>
                        <Input fontSize={20} rounded={'2xl'} placeholder="Full Name"
                            InputLeftElement={<Icon name="person" size={30} style={{ marginLeft: 10 }} />} />
                    </Stack>
                    <Stack mt={4} space={1}>
                        <Text bold ml={2} color='red.500' fontSize={20}>Email</Text>
                        <Input fontSize={20} rounded={'2xl'} placeholder="Enter Email Address" keyboardType='email-address'
                            InputLeftElement={< Icon name="email" size={30} style={{ marginLeft: 10 }} />} />
                    </Stack>
                    <Stack mt={4} space={1}>
                        <Text bold ml={2} color='red.500' fontSize={20}>Mobile</Text>
                        <Input fontSize={20} rounded={'2xl'} placeholder="Enter Mobile Number"
                            InputLeftElement={< Icon name="phone-iphone" size={30} style={{ marginLeft: 10 }} />} />
                    </Stack>
                    <Stack mt={4} space={1}>
                        <Text bold ml={2} color='red.500' fontSize={20}>Password</Text>
                        <Input fontSize={20} rounded={'2xl'} placeholder="Enter Password"
                            InputLeftElement={< Icon name="lock" size={30} style={{ marginLeft: 10 }} />} />
                    </Stack>
                    <Stack mt={4} space={1}>
                        <Text bold ml={2} color='red.500' fontSize={20}>Confirm password</Text>
                        <Input fontSize={20} rounded={'2xl'} placeholder="Enter Password"
                            InputLeftElement={< Icon name="lock" size={30} style={{ marginLeft: 10 }} />} />
                    </Stack>

                    <HStack space={3} mt={4} px={6}>
                        <Checkbox value={term} onChange={() => setTerm(!term)} colorScheme="danger" accessibilityLabel="This is a dummy checkbox" />
                        <HStack space={1} flexWrap="wrap" mt={-1}>
                            <Text fontSize={16} bold color="lightBlue.500">I agree to the</Text>
                            <Text fontSize={16} bold color="red.500">Terms of service of</Text>
                            <Text fontSize={16} bold color="lightBlue.500">and</Text>
                            <Text fontSize={16} bold color="red.500">Privacy Policy.</Text>
                        </HStack>
                    </HStack>

                    <HStack justifyContent={'center'} mt={5}>
                        <Button shadow={'9'} rounded={"xl"} _text={{ fontWeight: "bold", letterSpacing: "lg", fontSize: 18 }} size="md" px={8} colorScheme="red">Signup</Button>
                    </HStack>

                    <HStack mt={2} justifyContent="center" alignItems={"center"}>
                        <Text color="lightBlue.500" bold fontSize={16}>Already have an Account ?</Text>
                        <Button _text={{ fontWeight: "bold", letterSpacing: "lg", fontSize: 16 }} variant="link" colorScheme="red">Login</Button>
                    </HStack>
                </Box>
            </Box>
        </ScrollView>
    )
}

export default Signup
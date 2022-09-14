import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { signupWithEmailAndPass } from "../../store/redux/auth";

export type ISignupProps = {};

const Signup: React.FC<ISignupProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log("values", { email, pass, pass2 });

    dispatch(signupWithEmailAndPass({ email, password: pass }));
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={setEmail} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input value={pass} onChangeText={setPass} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input value={pass2} onChangeText={setPass2} />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={onSubmit}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export { Signup };

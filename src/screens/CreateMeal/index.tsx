import React, { useLayoutEffect } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Icon,
  Input,
  ScrollView,
  Text,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";

const CreateMeal = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          as={AntDesign}
          name="check"
          color={"white"}
          size={6}
          onPress={() => navigation.navigate("ConfirmMeal")}
        />
      ),
    });
  }, [navigation]);

  return (
    <Box flex={1} alignItems={"center"}>
      <Box width={"4/5"}>
        <FormControl isRequired pt={4}>
          <FormControl.Label
            _astrick={{ color: "white" }}
            _text={{ color: "white" }}
          >
            Meal Name
          </FormControl.Label>
          <Input placeholder="Ex. Scrambled Eggs" />
        </FormControl>
        <FormControl isRequired pt={4}>
          <FormControl.Label
            _astrick={{ color: "white" }}
            _text={{ color: "white" }}
          >
            Ingredients
          </FormControl.Label>

          <Input placeholder="Ex. 2 Large Eggs" />
          <FormControl.HelperText>
            Add one indgredient at a time
          </FormControl.HelperText>
          <Button mt={2}>Add Ingredient</Button>
        </FormControl>
        <FormControl isRequired pt={4}>
          <FormControl.Label
            _astrick={{ color: "white" }}
            _text={{ color: "white" }}
          >
            Steps
          </FormControl.Label>

          <Input placeholder="Ex. Crack open 2 large eggs in a medium sized bowl." />
          <FormControl.HelperText>
            Add one step at a time
          </FormControl.HelperText>
          <Button mt={2}>Add Ingredient</Button>
        </FormControl>
        <ScrollView>
          <Box pb={20} bg={"#434343"}>
            <Box>
              <Text pt={5} alignSelf={"center"} fontSize={20} color={"white"}>
                Ingredients
              </Text>
              <Box
                alignSelf={"center"}
                borderRadius={"full"}
                bg={"white"}
                h={"1px"}
                w={10}
                margin={2}
              ></Box>
            </Box>
            <Box>
              <Text pt={5} alignSelf={"center"} fontSize={20} color={"white"}>
                Steps
              </Text>
              <Box
                alignSelf={"center"}
                borderRadius={"full"}
                bg={"white"}
                h={"1px"}
                w={10}
                margin={2}
              ></Box>
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default CreateMeal;

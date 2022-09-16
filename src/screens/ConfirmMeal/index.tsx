import React from "react";
import {
  Center,
  CheckIcon,
  FormControl,
  Icon,
  Select,
  WarningOutlineIcon,
} from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const ConfirmMeal = () => {
  return (
    <Center flex={1}>
      <Center borderRadius={"xl"} bg={"#aaa"} mb={4}>
        <Icon
          as={MaterialCommunityIcons}
          name="food-variant"
          size={40}
          color="#0891B2"
        />
      </Center>
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Category</FormControl.Label>
        <Select
          minWidth="200"
          accessibilityLabel="Choose a Category"
          placeholder="Choose a Category"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          <Select.Item label="Italian" value="Italian" />
          <Select.Item label="French" value="French" />
          <Select.Item label="Asian" value="Asian" />
          <Select.Item label="Quick and Easy" value="Quick and Easy" />
          <Select.Item label="Hamburgers" value="Hamburgers" />
          <Select.Item label="Breakfast" value="Breakfast" />
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
};

export default ConfirmMeal;

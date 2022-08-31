import { useNavigation } from "@react-navigation/native";
import { Box, Center, Pressable, Text } from "native-base";
import React from "react";
import { View } from "react-native";

export type ICategoryGridTileProps = {
  title: string;
  color?: string;
  id: string;
};

const CategoryGridTile: React.FC<ICategoryGridTileProps> = ({
  title,
  color,
  id,
}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("CategoryDetails", { title, id })}
      margin={3}
      height={48}
      width={40}
      shadow={"4"}
      bg={color}
      borderRadius={10}
    >
      <Center flex={1}>
        <Text>{title}</Text>
      </Center>
    </Pressable>
  );
};

export { CategoryGridTile };

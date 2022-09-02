import { useNavigation } from "@react-navigation/native";
import { Box, Center, Image, Pressable, Text } from "native-base";
import React from "react";
import { View } from "react-native";

export type ICategoryGridTileProps = {
  title: string;
  image?: string;
  id: string;
};

const CategoryGridTile: React.FC<ICategoryGridTileProps> = ({
  title,
  image,
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
      borderRadius={10}
      overflow={"hidden"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image
        source={{
          uri: image,
        }}
        alt="IMAGE"
        position={"absolute"}
        h={"full"}
        w={"full"}
      />
      <Center bg={"#10101090"} borderRadius={"xl"}>
        <Text py={2} px={4} color={"white"} fontSize={18}>
          {title}
        </Text>
      </Center>
    </Pressable>
  );
};

export { CategoryGridTile };

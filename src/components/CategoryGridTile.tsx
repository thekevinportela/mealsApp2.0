import { useNavigation } from "@react-navigation/native";
import { Box, Center, Icon, Image, Pressable, Text } from "native-base";
import React from "react";
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

export type ICategoryGridTileProps = {
  name: string;
  image?: string;
  id: string;
};

const CategoryGridTile: React.FC<ICategoryGridTileProps> = ({
  name,
  image,
  id,
  onEditPress,
}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("CategoryDetails", { name, id })}
      margin={3}
      height={48}
      width={40}
      shadow={"9"}
      borderRadius={10}
      // overflow={"hidden"}
      alignItems={"center"}
      justifyContent={"center"}
      bg={"black"}
    >
      <Image
        source={{
          uri: image,
        }}
        alt="IMAGE"
        position={"absolute"}
        h={"full"}
        w={"full"}
        zIndex={-1}
        borderRadius={10}
      />
      {/* <Center bg={"#10101090"} h={"full"} w={"full"}> */}
      <Center
        overflow={"hidden"}
        bg={"#10101060"}
        h={"full"}
        w={"full"}
        borderRadius={10}
      >
        <BlurView
          intensity={5}
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            // position: "absolute",
            borderRadius: 40,
          }}
        >
          <Icon
            as={Entypo}
            name="dots-three-vertical"
            size={5}
            color="white"
            zIndex={10000}
            position={"absolute"}
            top={3}
            right={0}
            onPress={onEditPress}
          />
          <Text
            textAlign={"center"}
            py={2}
            px={4}
            color={"white"}
            fontSize={20}
            fontWeight={"600"}
          >
            {name}
          </Text>
        </BlurView>
      </Center>
      {/* </BlurView> */}
    </Pressable>
  );
};

export { CategoryGridTile };

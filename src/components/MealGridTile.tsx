import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { Box, Center, Image, Pressable, Text } from "native-base";
import React from "react";

export type IMealGridTileProps = {
  item: any;
};

const bgHeight = 300;
const bgWidth = 250;

const MealGridTile: React.FC<IMealGridTileProps> = ({ item }) => {
  const navigation = useNavigation();
  const onPressMeal = () => navigation.navigate("MealDetails", { item });
  return (
    <Pressable onPress={onPressMeal}>
      <Box
        bg={"white"}
        width={bgWidth}
        height={bgHeight}
        borderRadius={10}
        shadow={9}
        margin={8}
        // overflow={"hidden"}
      >
        <Image
          src={item.imageUrl}
          width={bgWidth}
          height={bgHeight}
          borderRadius={10}
          alt={"MEAL IMAGE"}
        />

        <Center
          bottom={5}
          alignSelf={"center"}
          position={"absolute"}
          width={"4/5"}
          bg={"#00000090"}
          borderRadius={5}
          overflow="hidden"
        >
          <BlurView
            intensity={10}
            // style={{
            //   position: "absolute",
            //   alignSelf: "center",
            //   width: "80%",
            //   backgroundColor: "#00000090",
            //   bottom: 20,
            //   borderRadius: 20,
            //   alignItems: "center",
            //   zIndex: 10,
            // }}
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <Text
              textAlign={"center"}
              fontSize={20}
              color={"white"}
              padding={1}
            >
              {item.title}
            </Text>
            <Text color={"#bbb"} paddingBottom={1} padding={1}>
              {item.duration} min | {item.complexity}
            </Text>
          </BlurView>
        </Center>
      </Box>
    </Pressable>
  );
};

export { MealGridTile };

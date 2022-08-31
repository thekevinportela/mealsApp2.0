import { Box, Center, FlatList, Text } from "native-base";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CategoryGridTile } from "../../components/CategoryGridTile";
import { CATEGORIES } from "../../data/dummy-data";

const renderCategoryItem = ({ item }) => {
  return (
    <CategoryGridTile title={item.title} color={item.color} id={item.id} />
  );
};

export type IHomeProps = {};

const Home: React.FC<IHomeProps> = ({}) => {
  const { height, width } = useWindowDimensions();
  const safeArea = useSafeAreaInsets();
  return (
    <Center flex={1}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: safeArea.bottom }}
      />
    </Center>
  );
};

export { Home };

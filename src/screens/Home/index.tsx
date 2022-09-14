import { useNavigation } from "@react-navigation/native";
import { Center, FlatList, Icon } from "native-base";
import { useEffect, useLayoutEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CategoryGridTile } from "../../components/CategoryGridTile";
import { CATEGORIES } from "../../data/dummy-data";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import CatModal from "./CatModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/redux/meals";

const renderCategoryItem = ({ item }) => {
  return (
    <CategoryGridTile title={item.title} image={item.image} id={item.id} />
  );
};

export type IHomeProps = {};

const Home: React.FC<IHomeProps> = ({ navigation }) => {
  // const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.meals.categories);
  console.log("CATEGORIES", categories);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icon
            as={AntDesign}
            name="plus"
            size={6}
            color="white"
            mr={3}
            onPress={openModal}
          />
        );
      },
    });
  }, [navigation, openModal]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const safeArea = useSafeAreaInsets();

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <>
      <Center flex={1}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: safeArea.bottom }}
        />
      </Center>
      <CatModal modalVisible={modalVisible} closeModal={closeModal} />
    </>
  );
};

export { Home };

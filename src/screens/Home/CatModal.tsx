import {
  Button,
  Center,
  FormControl,
  Icon,
  Image,
  Input,
  Modal,
} from "native-base";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addCategory, editCategory } from "../../store/redux/meals";

const CatModal = ({ modalVisible, closeModal, selectedCat }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!modalVisible) {
      setName("");
      setImage(null);
    } else {
      if (selectedCat) {
        setName(selectedCat.name);
        setImage(selectedCat.image);
      }
    }
  }, [modalVisible]);

  const onSubmit = () => {
    console.log("on submit");
    dispatch(addCategory({ name: name, image: image }));
    closeModal();
  };

  const onEdit = () => {
    console.log("ONEDIT");
    dispatch(editCategory({ name: name, image: image, id: selectedCat.id }));
    closeModal();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Modal
      isOpen={modalVisible}
      onClose={() => {
        closeModal();
      }}
      avoidKeyboard
      justifyContent="center"
      size="lg"
      safeAreaTop
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>New Category</Modal.Header>
        <Modal.Body>
          <FormControl isRequired>
            <FormControl.Label>Category Name</FormControl.Label>
            <Input value={name} onChangeText={setName} />
          </FormControl>
          <FormControl.Label isRequired mt={5}>
            Category Image Upload
          </FormControl.Label>
          <Center marginY={5} flex={1}>
            <Icon
              as={MaterialIcons}
              name="add-a-photo"
              size={10}
              color="#0891B2"
              onPress={pickImage}
              mb={5}
            />
            {image && (
              <Image
                source={{ uri: image }}
                width={40}
                height={48}
                borderRadius={"xl"}
                resizeMode={"cover"}
              />
            )}
          </Center>
        </Modal.Body>
        <Modal.Footer>
          <Button flex="1" onPress={selectedCat ? onEdit : onSubmit}>
            {selectedCat ? "Edit" : "Submit"}
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default CatModal;

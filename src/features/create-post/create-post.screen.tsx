import { Pressable, Text, TextInput, View } from "react-native";
import useCreatePost from "./create-post.hook";

const CreatePostScreen = () => {
  const { handleCreatePost, setBody, setTitle } = useCreatePost();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 12 }}>
      <View style={{ gap: 20, width:"100%" }}>
        <TextInput
          style={{ borderWidth: 1}}
          placeholder="Title"
          onChangeText={setTitle}
        />
        <TextInput
          style={{ borderWidth: 1 }}
          placeholder="Body"
          onChangeText={setBody}
        />
        <Pressable onPress={handleCreatePost}>
          <Text>Create Post</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreatePostScreen;

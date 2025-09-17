import { router } from "expo-router";
import React from "react";
import {
    ActivityIndicator,
    FlatList,
    Pressable,
    Text,
    View,
} from "react-native";
import usePosts from "./posts.hook";

const PostScreen = () => {
  const { loadingPosts, posts } = usePosts();
  return (
    <View>
      <View>
        <Pressable
          onPress={() => router.navigate("/createPost")}
          style={{
            height: 45,
            backgroundColor: "lightblue",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 8,
          }}
        >
          <Text>Create Post</Text>
        </Pressable>
      </View>
      {loadingPosts ? (
        <ActivityIndicator size={"large"} color={"red"} />
      ) : (
        <FlatList
          contentContainerStyle={{ padding: 10 }}
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 10,
                borderBottomWidth: 2,
                borderBottomColor: "lightblue",
              }}
            />
          )}
          renderItem={({ item }) => {
            return (
              <View>
                <Text style={{ fontWeight: "bold", color: "black" }}>
                  {item.title}
                </Text>
                <Text style={{ fontWeight: "bold", color: "darkgray" }}>
                  {item.body}
                </Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default PostScreen;

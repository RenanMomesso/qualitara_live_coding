import PostScreenDetails from "@/src/features/post-details/post-details.screen";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const PostIdDetails = () => {
  const params = useLocalSearchParams(); //we should get the postID from the localSearchparams;
  const postId = "1"; // used 1 as an example

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PostScreenDetails id={postId} />
    </SafeAreaView>
  );
};

export default PostIdDetails;

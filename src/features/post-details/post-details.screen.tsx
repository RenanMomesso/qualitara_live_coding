import React from "react";
import { Text, View } from "react-native";
import usePostDetails from "./post-details.hook";

export interface PostScreenDetails {
  id: string;
}
const PostScreenDetails = ({ id }: PostScreenDetails) => {
  const { postDetails, loadingPostDetails } = usePostDetails({ id });

  if (loadingPostDetails) {
    return (
      <View>
        <Text>Loading Post Details...</Text>
      </View>
    );
  }
  return (
    <View>
      <View>
        <Text style={{ fontWeight: "bold", color: "black" }}>
          {postDetails.title}
        </Text>
        <Text style={{ fontWeight: "bold", color: "darkgray" }}>
          {postDetails.body}
        </Text>
      </View>
    </View>
  );
};

export default PostScreenDetails;

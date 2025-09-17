import { router } from "expo-router";
import { useState } from "react";
import { createPost } from "./create-post.api";

const useCreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCreatePost = async () => {
    try {
      const response = await createPost({
        body,
        title,
      });
      if (response.id) {
        router.navigate({
          pathname: response.id,
          params: response.id,
        });
      }
      return response;
    } catch (error) {
      console.log("Error creating POST: ", (error as Error).message);
    }
  };

  return {
    setTitle,
    setBody,
    handleCreatePost,
  };
};

export default useCreatePost;

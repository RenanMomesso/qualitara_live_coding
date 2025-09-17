import { useEffect, useState } from "react";
import { fetchAllPosts } from "./posts.api";

const usePosts = () => {
  const [posts, setPosts] = useState("");
  const [loadingPosts, setLoadingPosts] = useState(false);

  const getPosts = async () => {
    try {
      setLoadingPosts(true);
      const fetchData = await fetchAllPosts();
      setPosts(fetchData);
    } catch (error) {
      console.log("Error", (error as Error).message);
    } finally {
      setLoadingPosts(false);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return {
    posts,
    loadingPosts,
  };
};

export default usePosts;

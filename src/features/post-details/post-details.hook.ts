import { useEffect, useState } from "react";
import { fetchSinglePost } from "./post-details.api";

interface UsePostDetails {
  id: string;
}

interface PostDetails {
  title: string;
  body: string;
  id: string;
}
const usePostDetails = ({ id }: UsePostDetails) => {
  const [loadingPostDetails, setLoadingPostDetails] = useState(false);
  const [postDetails, setPostDetails] = useState<PostDetails>({} as PostDetails);

  const fetchPost = async () => {
    setLoadingPostDetails(true);
    try {
      const response = await fetchSinglePost(id);
      setPostDetails(response);
    } catch (error) {
      console.log("Error fetching single post", (error as Error).message);
    } finally {
      setLoadingPostDetails(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return {
    postDetails,
    loadingPostDetails
  };
};

export default usePostDetails;

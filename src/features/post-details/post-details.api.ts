export const fetchSinglePost = async (id: string) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      {
        headers: {
          method: "GET",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

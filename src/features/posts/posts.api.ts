export const fetchAllPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        method: "GET",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

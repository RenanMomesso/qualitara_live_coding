type ICreatePostPayload = {
  title: string;
  body: string;
};
export const createPost = async ({ body, title }: ICreatePostPayload) => {
  try {
    const payload = {
      body,
      title,
    };
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

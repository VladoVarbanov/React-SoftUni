export const formatDate = (input) => {
  const date = new Date(input);

  return date.toLocaleString("en-US", {
    mouth: "long",
    day: "numeric",
    year: "numeric",
  });
};

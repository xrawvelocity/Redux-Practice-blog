export default (posts = null, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return (posts = action.payload);
    default:
      return posts;
  }
};

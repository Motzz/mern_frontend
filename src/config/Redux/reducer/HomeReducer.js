const initialStateHome = {
  dataBlogs: [],
  page: {
    currenPage: 1,
    totalPage: 1,
  },
};
const HomeReducer = (state = initialStateHome, action) => {
  if (action.type == "DATA_BLOG") {
    return {
      ...state,
      dataBlogs: action.payload, //ubah ke data baru
    };
  }
  if (action.type == "UPDATE_PAGE") {
    return {
      ...state,
      page: action.payload, //ubah ke data baru
    };
  }
  return state;
};

const initialStateGlobal = {
  name: "wahyudi",
};

export default HomeReducer;

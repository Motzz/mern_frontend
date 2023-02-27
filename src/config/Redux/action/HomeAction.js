// export const setDataBlog = (paramPayload) => {
//   return { type: "DATA_BLOG", payload: paramPayload };
// };
// import axios from "axios";
// export const setDataBlog = (page) => {
//   return (dispatch) => {
//     axios
//       .get(`http://localhost:4000/v1/blog/indexPost?page=${page}&perPage=5`)
//       .then((result) => {
//         const responseApi = result.data;

//         // setDataBlog(responseApi.data);
//         dispatch({ type: "DATA_BLOG", payload: responseApi.data });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };
import axios from "axios";
export const setDataBlog = (page) => (dispatch) => {
  axios
    .get(`http://localhost:4000/v1/blog/indexPost?page=${page}&perPage=2`)
    .then((result) => {
      const responseApi = result.data;

      // setDataBlog(responseApi.data);
      dispatch({ type: "DATA_BLOG", payload: responseApi.data });
      dispatch({ type: "UPDATE_PAGE", payload: { currentPage: responseApi.page_sekarang, totalPage: Math.ceil(responseApi.total_Data / responseApi.data_PerPage) } });
    })
    .catch((err) => {
      console.log(err);
    });
};

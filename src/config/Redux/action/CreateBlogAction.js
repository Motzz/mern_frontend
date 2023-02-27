import axios from "axios";
export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};
export const setImgPreview = (payload) => {
  return { type: "SET_IMG_PREVIEW", payload };
};

export const postToApi = (dataDariDepan) => {
  const data = new FormData();
  data.append("title", dataDariDepan.title);
  data.append("body", dataDariDepan.body);
  data.append("image", dataDariDepan.image);
  axios
    .post("http://localhost:4000/v1/blog/create", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log("masukkan data sukses", res);
    })
    .catch((err) => {
      console.log("masukkan data gagal", err);
    });
};

export const updateToApi = (dataDariDepan, idDariDepan) => {
  const data = new FormData();
  data.append("title", dataDariDepan.title);
  data.append("body", dataDariDepan.body);
  data.append("image", dataDariDepan.image);
  axios
    .put(`http://localhost:4000/v1/blog/update/${idDariDepan}`, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log("update data sukses", res);
    })
    .catch((err) => {
      console.log("masukkan data gagal", err);
    });
};

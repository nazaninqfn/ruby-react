import http from "../../interceptor/interceptor";
const Url = process.env.REACT_APP_PUBLIC_API_URL;

const UploadImg = async (obj) => {
  try {
    const formData = new FormData();
    formData.append("image", obj);
    const result = await http.post(`${Url}upload/image`, formData);
    return result.data.result;
  } catch (error) {
    return false;
  }
};

export { UploadImg };

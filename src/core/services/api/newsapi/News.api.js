import http from "../../interceptor/interceptor";
const Url = process.env.REACT_APP_PUBLIC_API_URL;
const getAllNewsApi = async () => {
  try {
    const result = await http.get(`${Url}news`);
    return result.data.result;
  } catch (error) {
    console.log(error);
  }
};
export default getAllNewsApi;

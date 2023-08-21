import http from "../../interceptor/interceptor";
const Url = process.env.REACT_APP_PUBLIC_API_URL;
const getAllLikeApi = async () => {
  try {
    const result = await http.get(`${Url}course/like`);
    console.log("getall",result.data);
    return result.data.result;
  } catch (error) {
    console.log(error);
    
  }
};
export default getAllLikeApi;

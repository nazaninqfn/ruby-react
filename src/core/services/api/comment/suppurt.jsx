import http from "../../interceptor/interceptor";
const Url = process.env.REACT_APP_PUBLIC_API_URL;
const posttcoment = async (obj) => {
  try {
    const result = await http.post(`${Url}contactUs`,obj);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return false;
  }
};
export default posttcoment;
import http from "../../interceptor/interceptor";
const Url = process.env.REACT_APP_PUBLIC_API_URL;
const gettcoment = async () => {
  try {
    const result = await http.get(`${Url}comments/`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return false;
  }
};
export default gettcoment;
import http from "../../interceptor/interceptor";
const Url = process.env.REACT_APP_PUBLIC_API_URL;
const getcourspageApi = async () => {
  try {
    const result = await http.get(`${Url}course/getall`);
    return result.data.result;
  } catch (error) {
    console.log(error);
  }
};
export default getcourspageApi;

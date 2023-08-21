import http from "../../interceptor/interceptor";
const Url = process.env.REACT_APP_PUBLIC_API_URL;
const getAllteachersApi = async () => {
  try {
    const result = await http.get(`${Url}employee/getallteachers`);
    return result.data.result;
  } catch (error) {
    console.log(error);
  }
};
export default getAllteachersApi;

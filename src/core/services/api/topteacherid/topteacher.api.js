import http from "../../interceptor/interceptor";
const Url = process.env.REACT_APP_PUBLIC_API_URL;
const getteacherapi = async () => {
  try {
    const result = await http.get(`${Url}employee/getallteachers`);
    console.log(result.data.result);
    return result.data.result;
  } catch (error) {
    console.log(error);
  }
};
export default getteacherapi;
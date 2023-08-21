import http from "../../interceptor/interceptor";
const Url = process.env.REACT_APP_PUBLIC_API_URL;

const getAllCourseApi = async () => {
  try {
    const result = await http.get(`${Url}course/getall`);
    console.log("getall",result.data);
    return result.data.result;
  } catch (error) {
    console.log(error);
    
  }
};

export const getLikeCount = async (courseId) => {
  try {
    const result = await http.get(`${Url}course/likeCount/${courseId}`);
    return result.data.result;
  } catch (error) {
    console.log(error);
  }
};

export default getAllCourseApi;

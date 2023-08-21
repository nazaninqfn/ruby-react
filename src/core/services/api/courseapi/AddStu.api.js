import http from "../../interceptor/interceptor";
const Url = process.env.REACT_APP_PUBLIC_API_URL;

const AddStuToCourse = async (obj) => {
  try {
    const data = { courseId: obj.courseId };
    const result = await http.post(
      `${Url}course/addStudentToCourse/${obj.userId}`,
      data
    );
    return result.data;
  } catch (error) {
    return false;
  }

};

export { AddStuToCourse };

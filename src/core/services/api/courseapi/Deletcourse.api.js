import { toast } from "react-toastify";
import http from "../../interceptor/interceptor";
const Url = process.env.REACT_APP_PUBLIC_API_URL;

const DeleteStuOfCourse = async (obj) => {
  try {
    const data = { courseId: obj.courseId };
    const result = await http.post(
      `${Url}course/removeStudentFromCourse/${obj.userId}`,
      data
    );
    // toast.success("دوره با موفقیت حذف شد");
    return result.data;
  } catch (error) {
    return false;
  }
};

export { DeleteStuOfCourse };

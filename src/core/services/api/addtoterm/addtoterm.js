import { toast } from "react-toastify";
import http from "../../interceptor/interceptor";
import { getItem } from "../../storage/storage";
const Url = process.env.REACT_APP_PUBLIC_API_URL;

const AddCourse = async (courseID) => {
  const user = JSON.parse(getItem("user"));
  const obj = { courseId: courseID };

  try {
    const result = await http.post(
      `${Url}course/addStudentToCourse/${user._id}`,
      obj
    );
    toast.success("شما به دوره اضافه شدید");
    return result;
  } catch (error) {
    console.log(error);
    toast.error("شما در این دوره حضور دارید");
    return false;
  }
};

export default AddCourse;

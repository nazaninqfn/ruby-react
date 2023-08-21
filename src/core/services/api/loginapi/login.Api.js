import { setItem } from "../../storage/storage";
import http from "../../interceptor/interceptor";

import { toast } from "react-toastify";

const Url = process.env.REACT_APP_PUBLIC_API_URL;

const LoginUser = async (obj) => {
  try {
    const result = await http.post(`${Url}auth/login`, obj);

    const token = result.data.result.jwtToken;
    const user = result.data.result.studentModel;

    setItem("token", token);
    setItem("user", JSON.stringify(user));

    return result.data.result.studentModel;
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.message.message[0].message);
  }
};

export default LoginUser;

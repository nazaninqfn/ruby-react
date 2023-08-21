// import { setItem } from "../storage/storage";
// import http from "../interceptor/interceptor";

// // main url of backend
// const Url = process.env.REACT_APP_PUBLIC_PATH;

// const RegisterUser = async (obj) => {
//   try {
//     const result = await http.post(`${Url}auth/register`, obj);

//     const token = result.data.result.jwtToken;

//     setItem("token", token);

//     return result.data.result;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export { RegisterUser };

import { setItem } from "../storage/storage";
import http from "../interceptor/interceptor";
import { toast } from 'react-toastify';


const Url = process.env.REACT_APP_PUBLIC_API_URL;

const RegisterUser =  async(obj) => {
    
      try {
        const result =  await http.post( `${Url}auth/register`,obj);

        const token = result.data.result.jwtToken;
        setItem("token", token);

        toast.dark(" ثبت نام شما با موفقیت انجام شد!");

        return result.data.result;
    
      } catch (err) {
        console.log(err);
        toast.error(err.response.data.message[0].message);
      }
}

export default RegisterUser;
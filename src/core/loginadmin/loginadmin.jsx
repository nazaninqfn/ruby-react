import { setItem } from "../../core/services/storage/storage";
import http from "../../core/services/interceptor/interceptor";
import jwt_decode from "jwt-decode";

const Url = process.env.REACT_APP_PUBLIC_API_URL;

const Loginadmin = async (obj) => {
    try {
        const result = await http.post(`${Url}auth/employee/login`, obj)

        const token = result.data.result.jwtToken;
        const user = result.data.result.employeeModel;

        setItem("token", token);
        setItem("user", JSON.stringify(user));

        const decode = jwt_decode(token);
        setItem("role" , decode.user);

        return result.data;

    } catch (err) {
        console.log(err);
        return false;
    }
};

export { Loginadmin };
import http from "../../interceptor/interceptor";
const Url = process.env.REACT_APP_PUBLIC_API_URL;

const getbyid = async (_id) => {
  try {
    const result = await http.get(Url + `news/` + _id);
    console.log(result.data);
    return result.data.result;
  } catch (error) {
    console.log(error);
  }
};
export default getbyid;

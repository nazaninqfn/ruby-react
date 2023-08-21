import http from "../../interceptor/interceptor";
const Url = process.env.REACT_APP_PUBLIC_API_URL;

const GetById = async (id) => {
  try {
    const result = await http.get(`${Url}student/${id}`);
    return result.data.result;
  } catch (error) {
    return [];
  }
};

export { GetById };

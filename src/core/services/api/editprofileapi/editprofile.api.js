import http from "../../interceptor/interceptor";
import { toast } from 'react-toastify';
import { getItem, setItem } from "../../storage/storage";


const Url = process.env.REACT_APP_PUBLIC_API_URL;

const EditProfile =  async(obj) => {
const user=JSON.parse(getItem("user"));


    
    try {
        const result =  await http.put( `${Url}student/${user._id}`,obj);

        

        toast.dark(" تغیرات  با موفقیت اعمال شد");

        return result.data.result;
    
    } catch (err) {
        console.log(err);
        toast.error(err.response.data.message[0].message);
    }
}

export default EditProfile;
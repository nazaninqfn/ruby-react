import React from "react";
import Data from "./commentcase/data";
import Input from "./commentcase/input";
import Textarea from "./commentcase/textarea";


const Commenttext=(props)=>{
    const{control,...rest}=props;
    switch(control){
        case "input":return<Input {...rest}/>
        case "data":return<Data {...rest}/>
        case "textarea":return<Textarea {...rest}/>
        default :return null ;
    }
   
}
export default Commenttext;
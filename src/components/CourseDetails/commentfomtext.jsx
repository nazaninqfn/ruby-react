import React from "react";
import Data from "./casesforcomment/data";
import Input from "./casesforcomment/input";
import Textarea from "./casesforcomment/textarea";


const Commentformtext=(props)=>{
    const{control,...rest}=props;
    switch(control){
        case "input":return<Input {...rest}/>
        case "data":return<Data {...rest}/>
        case "textarea":return<Textarea {...rest}/>
        default :return null ;
    }
   
}
export default Commentformtext;
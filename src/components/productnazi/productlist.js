import React from "react";
import { Product } from "./product";
export function Productlist(props){

    return (
        <>{props.products.map((item)=>(
            <div className="card mx-1 my-2 col-xl-3 col-lg-3  col-md-12 col-sm-12 col-12" >
                <Product data={item} key={item.id}/>
            </div>
        ))}</>
    );
}

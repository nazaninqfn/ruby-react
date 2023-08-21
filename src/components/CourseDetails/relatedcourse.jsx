import React from "react";
import "./coursedetail.css";
import "./slid.css";



const Relatedcourse = () => {
return (
    <>
    <div className="container">
    

        <div
        className="row position-relative my-4"
        style={{ borderBottom: "1px solid black" }}
        >
        <div
            className="position-absolute top-100 start-50 translate-middle "
            style={{
            width: "150px",
            zIndex: "100",
            backgroundColor: "#Ffff",
            }}
        >
            <p className="relatednews ">دوره های مرتبط</p>
        </div>
        </div>

        {/* <div className="row  relatednewscontainernazi">
                    <div class="card text-center col-xl-2 col-lg-3 col-5 m-2">
                        <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" className="img-fluid rounded"></img>
                        <div class="card-body">
                            <h6 class="card-title col-">معرفی استاد جدید ریکت</h6>
                            <div class="my-2 text-muted">2 روز پیش</div>
                            
                        </div>
                        
                    </div>
                    
                    
                </div> */}
        <div className="row d-flex justify-content-between">
                    {/* /////////////////////////////////////////////////////////////// */}
                    <div className="horizontal_slider">
                        <div className="slider_container">
                            <div className="item">
                                <div className="card text-center  m-2 p-2">
                                    <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" style={{width: "100%"}}></img>
                                    <div className="card-body">
                                        <h6 className="card-title "> دوره ریکت ترم بهار </h6>
                                        <div className="my-2 text-muted">2 روز پیش</div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="item">
                                <div className="card text-center  m-2 p-2">
                                    <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" style={{width: "100%"}}></img>
                                    <div className="card-body">
                                        <h6 className="card-title " >دوره ریکت ترم بهار </h6>
                                        <div className="my-2 text-muted">2 روز پیش</div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="item">
                                <div className="card text-center  m-2 p-2">
                                    <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" style={{width: "100%"}}></img>
                                    <div className="card-body">
                                        <h6 className="card-title ">دوره ریکت ترم بهار </h6>
                                        <div className="my-2 text-muted">2 روز پیش</div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="item">
                                <div className="card text-center  m-2 p-2">
                                    <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" style={{width: "100%"}}></img>
                                    <div className="card-body">
                                        <h6 className="card-title ">دوره ریکت ترم بهار </h6>
                                        <div className="my-2 text-muted">2 روز پیش</div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="item">
                                <div className="card text-center  m-2 p-2">
                                    <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" style={{width: "100%"}}></img>
                                    <div className="card-body">
                                        <h6 className="card-title ">دوره ریکت ترم بهار </h6>
                                        <div className="my-2 text-muted">2 روز پیش</div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="item">
                                <div className="card text-center  m-2 p-2">
                                    <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" style={{width: "100%"}}></img>
                                    <div className="card-body">
                                        <h6 className="card-title ">دوره ریکت ترم بهار </h6>
                                        <div className="my-2 text-muted">2 روز پیش</div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {/* /////////////////////////////////////////////////////////////// */}
                </div>
    </div>
    </>
);
};
export default Relatedcourse;

// import React from "react";
// import "./coursedetail.css";
// import "./slid.css";



// const Relatedcourse = () => {
// return (
//     <>
//     <div className="container">
    

//         <div
//         className="row position-relative my-4"
//         style={{ borderBottom: "1px solid black" }}
//         >
//         <div
//             className="position-absolute top-100 start-50 translate-middle "
//             style={{
//             width: "150px",
//             zIndex: "100",
//             backgroundColor: "#F3F3F3",
//             }}
//         >
//             <p className="relatednews ">دوره های مرتبط</p>
//         </div>
//         </div>

//         {/* <div className="row  relatednewscontainernazi">
//                     <div class="card text-center col-xl-2 col-lg-3 col-5 m-2">
//                         <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" className="img-fluid rounded"></img>
//                         <div class="card-body">
//                             <h6 class="card-title col-">معرفی استاد جدید ریکت</h6>
//                             <div class="my-2 text-muted">2 روز پیش</div>
                            
//                         </div>
                        
//                     </div>
                    
                    
//                 </div> */}
//         <div className="row d-flex justify-content-between">
//                     {/* /////////////////////////////////////////////////////////////// */}
//                     <div className="horizontal_slider">
//                         <div className="slider_container">
//                             <div className="item">
//                                 <div className="card text-center  m-2 p-2">
//                                     <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" style={{width: "100%"}}></img>
//                                     <div className="card-body">
//                                         <h6 className="card-title "> دوره ریکت ترم بهار </h6>
//                                         <div className="my-2 text-muted">2 روز پیش</div>
                                        
//                                     </div>
                                    
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div className="card text-center  m-2 p-2">
//                                     <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" style={{width: "100%"}}></img>
//                                     <div className="card-body">
//                                         <h6 className="card-title " >دوره ریکت ترم بهار </h6>
//                                         <div className="my-2 text-muted">2 روز پیش</div>
                                        
//                                     </div>
                                    
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div className="card text-center  m-2 p-2">
//                                     <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" style={{width: "100%"}}></img>
//                                     <div className="card-body">
//                                         <h6 className="card-title ">دوره ریکت ترم بهار </h6>
//                                         <div className="my-2 text-muted">2 روز پیش</div>
                                        
//                                     </div>
                                    
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div className="card text-center  m-2 p-2">
//                                     <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" style={{width: "100%"}}></img>
//                                     <div className="card-body">
//                                         <h6 className="card-title ">دوره ریکت ترم بهار </h6>
//                                         <div className="my-2 text-muted">2 روز پیش</div>
                                        
//                                     </div>
                                    
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div className="card text-center  m-2 p-2">
//                                     <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" style={{width: "100%"}}></img>
//                                     <div className="card-body">
//                                         <h6 className="card-title ">دوره ریکت ترم بهار </h6>
//                                         <div className="my-2 text-muted">2 روز پیش</div>
                                        
//                                     </div>
                                    
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div className="card text-center  m-2 p-2">
//                                     <img src={"./image/undraw_learning_sketching_nd4f.png"} alt="'" style={{width: "100%"}}></img>
//                                     <div className="card-body">
//                                         <h6 className="card-title ">دوره ریکت ترم بهار </h6>
//                                         <div className="my-2 text-muted">2 روز پیش</div>
                                        
//                                     </div>
                                    
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                     {/* /////////////////////////////////////////////////////////////// */}
//                 </div>
//     </div>
//     </>
// );
// };
// export default Relatedcourse;

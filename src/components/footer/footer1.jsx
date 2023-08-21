import React from 'react';

import {

    Footcontainer, Contact, Links,
    Circletag, Alink, Text, Submit,
    Email, Footformdiv

} from './footer.style';
import "./footerrisponsiv.css"

export default function Footer1() {
    return (
        <Footcontainer className="footcontainer">

            <footer className="text-center text-lg-start bg-none text-muted">

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">
                            <Links className="col-md-3 col-lg-2 col-xl-2 mx-auto footlink">

                                <h5 className="text-light  mb-2">
                                    لینک ها
                                </h5>
                                <div>
                                    <Circletag></Circletag>
                                    <Alink href="#!" className="text-light ">صفحه اصلی</Alink>
                                </div>
                                <div>
                                    <Circletag></Circletag>
                                    <Alink href="#!" className="text-light">اموزش</Alink>
                                </div>
                                <div>
                                    <Circletag></Circletag>
                                    <Alink href="#!" className="text-light">مالی</Alink>
                                </div>
                                <div>
                                    <Circletag></Circletag>
                                    <Alink href="#!" className="text-light">خدمات</Alink>
                                </div>

                            </Links>

                            <Contact className="col-md-3  me-right mb-md-0 mb-2 footcontact">

                                <h5 className="text-light fw-bold mb-4 ">ارتباط با ما</h5>
                                <p className='text-light'>

                                    <img src='../image/icons-1.png' className=' mb-1' style={{ width: 20 }} />
                                    + 01 234 567 88
                                </p>

                                <p className='text-light'>

                                    <img src='../image/icons8-email-open-50.png' className=' mb-1' style={{ width: 20 }} />
                                    info@example.com
                                </p>

                            </Contact>

                            <form action="">

                                <Footformdiv className='col-md-4 col-4 mb-4 me-auto footform'>
                                    <Text className="text-light my-2 ">
                                        برای دریافت اخبار از طریق ایمیل ثبت نام کنید
                                    </Text>
                                    <Email className="col-md-12 col-12 mb-4 me-auto w-8 mb-md-0 bg-light rounded">

                                        <div className="form-outline mb-0 ">
                                            <input type="email" id="form5Example25" className="form-control" />
                                            <label className="form-label mb-6" for="form5Example25 ">flowerfbf18@gmail.com</label>
                                        </div>
                                        <div className="col-auto mb-md-0">

                                            <Submit type="submit" className="btn" >
                                                ارسال
                                            </Submit>
                                        </div>
                                    </Email>



                                </Footformdiv>

                            </form>


                        </div>

                    </div>
                </section>


            </footer>




        </Footcontainer>
    );
}


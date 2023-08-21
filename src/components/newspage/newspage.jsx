// import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";

import { Button, Form, Im, Input } from "../coursepage/coursepage.style";
import React, { useEffect, useState } from "react";

import Loading from "../../components/loading/loading";
import Footer from "../footer/footer";

import Navbar4 from "../header/navbar4";
import NewsContent from "../newscontent/newscontent";
import getAllNewsApi from "../../core/services/api/newsapi/News.api";

import Search from "../../common/search";
import { Paginate } from "../pagination/paginate";
import Pagination from "../pagination/pagination";
import "../button/hover.css";
// import { Productlist } from "../productnazi";

export default function Newspage() {
  const [news, setNews] = useState([]);
  const getNewsApi = async () => {
    const news = await getAllNewsApi();
    setNews(news);
    console.log(news);
  };

  useEffect(() => {
    getNewsApi();
  }, []);

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // paginate and search
  const [q, setQ] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [seleted, setSeleted] = useState([0]);

  const paginatedCourses = Paginate(news, currentPage, pageSize);

  const searchHandler = (e) => {
    setQ(e.target.value);
  };
  const search = (paginatedCourses) => {
    if (q === "") return paginatedCourses;
    else return paginatedCourses.filter((news) => news.title.indexOf(q) > -1);
  };

  const onSelect = (item) => {
    setCurrentPage(1);
    setSeleted(item);
  };

  return (
    <>
      {" "}
      <>
        {" "}
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Navbar4 />
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 my-5 ">
                  <div className="row d-flex justify-content-center">
                    <img
                      className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6"
                      src={"./image/newsorg.png"}
                      alt="Error"
                    ></img>
                  </div>

                  <div className=" d-flex justify-content-center">
                    <div>
                      <h4>اخبار و مقالات</h4>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <Search value={q} onChange={searchHandler} />
                  </div>
                </div>
              </div>

              <div class="container">
                <div className="d-flex justify-content-center">
                  <div className="my-app">
                    <div className="row d-flex justify-content-center">
                      {search(paginatedCourses).map((item) => (
                        <div className="col-md-4" style={{ width: "380px" }}>
                          <NewsContent
                            image={item.image}
                            title={item.title}
                            text={item.text}
                            _id={item._id}
                            category={item.category}
                          />
                        </div>
                      ))}
                    </div>

                    <div
                      className="pagination-background"
                      style={{ margin: "10px auto", display: "table" }}
                    >
                      <Pagination
                        itemsCount={news.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                      />
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>

            <Footer />
          </>
        )}
      </>
    </>
  );
}

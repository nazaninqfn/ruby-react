import React, { useState, useEffect } from "react";
import { Button } from "../../as/rigester/buttons";
import { Link } from "react-router-dom";
import { Seprator, Newsimage, Arrowimage, Newstext } from "./newssection.style";
import AOS from "aos";
import "aos/dist/aos.css";
import getAllNewsApi from "../../../core/services/api/newsapi/News.api";
import NewsItem from "./NewsItem";
// import"./news.css";
const Newssection3 = () => {
  const [news, setNews] = useState([]);
  const getNewsApi = async () => {
    const news = await getAllNewsApi();
    const news1 = news.filter((x) => x.category === "news").slice(0, 3);
    setNews(news1);
    console.log(news1);
  };

  useEffect(() => {
    getNewsApi();
  }, []);

  AOS.init({
    duration: 2000,
  });

  return (
    <div className="container d-flex justify-content-center my-5 pb-5">
      <div className="row col-lg-10">
        <div className="row d-flex justify-content-center py-4">
          <h2 className="d-flex justify-content-center">اخبار و مقالات</h2>
        </div>

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 position-relative">
            <div className="col-md-12 d-flex justify-content-center">
              <span>اخبار</span>
              <Seprator className="col-md-10" />
            </div>
            {news.map((item) => (
              <NewsItem
                category={item.category}
                image={item.image}
                _id={item._id}
                text={item.text.substr(0, 100)}
              />
            ))}
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 position-relative">
            <div className="col-md-12 d-flex justify-content-center">
              <span>مقالات</span>
              <Seprator className="col-md-10" />
            </div>
            {news.map((item) => (
              <NewsItem
                category={item.category}
                image={item.image}
                _id={item._id}
                text={item.text.substr(0, 100)}
              />
            ))}
          </div>
        </div>
        <Link to="newspage">
          <div className=" row d-flex justify-content-center mt-5">
            <Button>مشاهده بیشتر</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Newssection3;

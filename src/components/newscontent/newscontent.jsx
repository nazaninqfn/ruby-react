import React from "react";
import { Data } from "./data";
import {
  Card,
  Title,
  Teacher,
  Img,
  Image,
  Button,
  P,
} from "./newscontent.style";
import { Link } from "react-router-dom";

import "../LandingComponents/newssection/news.css";
export default function NewsContent({ image, title, text, _id }) {
  return (
    <>
      <Card className="card  p-2 my-3 newscard">
        <div>
          <Img src={image} className="card-img-top" />
        </div>
        <div className="card-body">
          <Title>{title}</Title>
          <Teacher>{text}</Teacher>
          <P className="text-muted">آخرین بروزرسانی 12:45</P>
          <Link to={"/newsdetailetab/" + _id}>
            <Image src="image/left-arrow.png"></Image>
          </Link>
        </div>
      </Card>
    </>
  );
}

{
  /* 
          {!this.state.hideLoadMore && (
            <Button className="redhover" onClick={this.loadMore}>
              بیشتر
            </Button>
          )}
          {this.state.showResetButton && (
            <div>
              <Button className="redhover" onClick={this.resetList}>
                کمتر
              </Button>
            </div>
          )} */
}

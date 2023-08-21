import React, { Component } from "react";
import { Data } from "../newscontent/data";
import {
Card,
Title,
Teacher,
Img,
Image,
Button,
P,
} from "../newscontent/newscontent.style";
import { Link } from "react-router-dom";

import "../LandingComponents/newssection/news.css";
class NewsContentcategory extends Component {
constructor(props) {
    super(props);
    this.state = {
    itemList: [],
    itemsToShowList: [],
    hideLoadMore: false,
    showResetButton: false,
    };
}

componentDidMount() {
    this.getInitialItemList();
}

getInitialItemList = () => {
    this.setState({
    itemList: Data,
    itemsToShowList: Data.slice(0, 3),
    });
};

loadMore = () => {
    const visibleItemsCount = this.state.itemsToShowList.length;
    const totalItems = Data.length;

    const datatoLoad = [
    ...this.state.itemsToShowList,
    ...Data.slice(visibleItemsCount, visibleItemsCount + 6),
    ];

    const isAllItemsLoaded = datatoLoad.length === totalItems;

    this.setState({
    itemsToShowList: datatoLoad,
    hideLoadMore: isAllItemsLoaded,
    showResetButton: isAllItemsLoaded,
    });
};

resetList = () => {
    this.getInitialItemList();
    this.setState({
    hideLoadMore: false,
    showResetButton: false,
    });
};

render() {
    return (
    <div className="my-app">
        <div className="row  d-flex justify-content-between ">
        {" "}
        {this.state.itemsToShowList.map((item) => (
            <div
            className="col-xl-4 col-lg-3  col-md-12 col-sm-12 col-12   my-4"
            key={item}
            >
            <Card className="card  p-2 my-3 newscard">
                <Img src={item.pic} className="card-img-top" />
                <div className="card-body">
                <Title>{item.titel}</Title>
                <Teacher>{item.dec}</Teacher>
                <P className="text-muted">{item.update}</P>
                <Link to="/newsdetailetab">
                    <Image src={item.arow}></Image>
                </Link>
                </div>
            </Card>
            </div>
        ))}{" "}
        </div>

        
    </div>
    );
}
}

export { NewsContentcategory };

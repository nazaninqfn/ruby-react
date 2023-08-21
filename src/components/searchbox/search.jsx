
import React from "react";

import {Container ,Searchinput ,SearchButton ,Searchimg} from "./search.style"

export default function Search(){
    return(
        <Container className="container">
            <Searchinput type="serch" placeholder="جستو جوی دوره ..." />
            <SearchButton>
                <Searchimg src="../image/icons-3.png" alt="searchPic" />
            </SearchButton>
        </Container>
    );
}
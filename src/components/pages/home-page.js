import React from "react";
import BoolList from "../book-list";

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan Fowler'
        },
        {
            id: 2,
            title: 'Release it!',
            author: 'Michael T.Nygard'
        }
    ];
    return(
        <BoolList books={books}/>
    )
};

export default HomePage;
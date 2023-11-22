import "./App.css";
// import { getArticles } from "../../apiCalls";
import { Routes, Route } from "react-router-dom";
import { mockData } from "../../Data/mockData";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Home from "../Home/Home";

function App() {
  console.log(mockData);
  const [articles, setArticles] = useState([]);

  function getArticlesCall() {
    // getArticles().then((data) => {
    //   setArticles(data.articles);
    // });

    const updatedMockData = mockData.articles.map((article) => {
      article.id = uuidv4();
      return article;
    });
    setArticles(updatedMockData);
    console.log("getting to the articles call", articles);
  }

  useEffect(() => {
    getArticlesCall();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home articles={articles} />}></Route>
        {/* <Route path="/view" element={<View article={article} />}></Route> */}
      </Routes>
    </>
  );
}

export default App;

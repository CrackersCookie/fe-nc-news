import React from "react";
import ArticlesList from "../ArticlesListPage/ArticlesListPage.js";

const HomePage = ({ loggedInUser }) => {
  return (
    <div>
      <h1>most recent articles</h1>
      <ArticlesList loggedInUser={loggedInUser} />
    </div>
  );
};

export default HomePage;

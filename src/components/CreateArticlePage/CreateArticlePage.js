import React from "react";
import CreateArticleForm from "./CreateArticleForm";

const CreateArticlePage = ({ loggedInUser }) => {
  return (
    <section>
      <h1>Create Article</h1>
      <CreateArticleForm loggedInUser={loggedInUser} />
    </section>
  );
};

export default CreateArticlePage;

import React from "react";
import CreateArticleForm from "./CreateArticleForm";

const CreateArticlePage = ({ username }) => {
  return (
    <section>
      <h1>Create Article</h1>
      <CreateArticleForm username={username} />
    </section>
  );
};

export default CreateArticlePage;

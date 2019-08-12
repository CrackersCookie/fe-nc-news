import Axios from "axios";

const request = Axios.create({
  baseURL: "https://nc-news-mc.herokuapp.com/api"
});

export const getArticles = async queries => {
  const URL = "articles";
  const {
    data: { articles, total_count }
  } = await request.get(URL, { params: queries });
  return { articles, total_count };
};

export const getData = async URL => {
  const { data } = await request.get(URL);
  return data;
};

export const postComment = async ({ body, username, article_id }) => {
  const URL = `articles/${article_id}/comments`;
  const {
    data: { comment }
  } = await request.post(URL, { username, body });
  return comment;
};
export const postArticle = async ({ author, title, body, topic }) => {
  const URL = `articles/`;
  const {
    data: { article }
  } = await request.post(URL, { author, title, body, topic });
  return article;
};

export const postUser = async ({ name, username, avatar_url }) => {
  const URL = `users/`;
  const {
    data: { user }
  } = await request.post(URL, { name, username, avatar_url });
  return user;
};

export const deleteData = async URL => {
  const { response } = await request.delete(URL);
  return response;
};

export const updateVotes = async (article_id, comment_id, inc_votes) => {
  const URL = article_id ? `articles/${article_id}` : `comments/${comment_id}`;
  const { response } = await request.patch(URL, { inc_votes });
  return response;
};

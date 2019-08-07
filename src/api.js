import Axios from 'axios'

const request = Axios.create({
  baseURL: "https://nc-news-mc.herokuapp.com/api"
})

export const getArticles = async (queries) => {
  const URL = 'articles'
  let { data: { articles } } = await request.get(URL, { params: queries })
  return articles
}

export const getTopics = async () => {
  const URL = 'topics'
  let { data: { topics } } = await request.get(URL)
  return topics
}

export const getUsers = async () => {
  const URL = 'users'
  let { data: { users } } = await request.get(URL)
  return users
}

export const getArticle = async (article_id) => {
  const URL = `articles/${article_id}`
  let { data: { article } } = await request.get(URL)
  return article
}

export const getComments = async (article_id) => {
  const URL = `articles/${article_id}/comments`
  let { data: { comments } } = await request.get(URL)
  return comments
}

export const postComment = async ({ body, username, article_id }) => {
  const URL = `articles/${article_id}/comments`
  let { data: { comment } } = await request.post(URL, { username, body })
  return comment
}

export const deleteComment = async (comment_id) => {
  const URL = `/comments/${comment_id}`
  let { response } = await request.delete(URL)
  return response
}

export const deleteArticle = async (article_id) => {
  const URL = `articles/${article_id}`
  let { response } = await request.delete(URL)
  return response
}

export const updateVotes = async (article_id, comment_id, inc_votes) => {
  const URL = article_id ? `articles/${article_id}` : `comments/${comment_id}`
  let { response } = await request.patch(URL, { inc_votes })
  return response
}


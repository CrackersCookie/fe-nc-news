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

export const getArticle = async (article_id) => {
  const URL = `articles/${article_id}`
  let { data: { article } } = await request.get(URL)
  return article
}


// GET /api/articles/:article_id/comments
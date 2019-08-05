import Axios from 'axios'

const request = Axios.create({
  baseURL: "https://nc-news-mc.herokuapp.com/api"
})

export const getArticles = () => {
  const URL = 'articles'
  return request.get(URL).then(({ data: articles }) => {
    return articles
  })
}
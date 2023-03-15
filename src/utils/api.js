import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://backend-news-project-drc2.onrender.com",
});

export function getArticles() {
  return newsApi.get("/api/articles").then((articles) => {
    return articles.data.results;
  });
}

export function getArticleById(article_id) {
  return newsApi.get(`/api/articles/${article_id}`).then((article) => {
    return article.data.article[0];
  });
}

export function getComments(article_id) {
  return newsApi
    .get(`/api/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
}

export function postComment(article_id, username, body) {
  return newsApi
    .post(`/api/articles/${article_id}/comments`, {
      username: username,
      body: body,
    })
    .then(({ data }) => {
      console.log(data.newComment);
      return data;
    });
}

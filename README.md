# NC News

This project was created as part of the Northcoders course and consists of two parts - the server and API and the front end news website. This is intended to work as a Reddit style website and is a demonstration of the skills I learnt during the course.

### Front-end:

- Hosted on https://mc-news-by-crackerscookie.netlify.com/
- Repo can be found on https://github.com/CrackersCookie/fe-nc-news

### Back-end:

- hosted on https://nc-news-mc.herokuapp.com/api
- Repo can be found on https://github.com/CrackersCookie/news

### Requirements:

Code Editor (like Visual Studio)
Node.js

### Step 1 - cloning the repo

Clone the repo:

```
git clone https://github.com/CrackersCookie/fe-nc-news
```

Once you have cloned the repo, you should have the repo on your system.

### Step 2 - installing

Install dependancies:

```
npm install
```

### Step 3 - running the app

To run the app locally run the start script by entering:

```
npm start
```

### Logged in/logged out user functionality

The site emulates having different 'logged in' user and also allows you to log out.

- As a logged in user you will be able to:

  - Post an article.
  - Vote on other users articles and posts.
  - view all other users, posts and comments.
  - Not vote on your artciles or comments.

- When you log out for all users:
  - You will not be able to port an article.
  - You will not be able to comment on an article.
  - You will not be able to vote on any articles or coments.

### Endpoints

- **/** - homepage - shows the 3 most recent articles.
- **/articles** - shows all articles with sort options and pagination.
- **/topics/:topic** - shows all articles on a specific topic.
- **/articles/:article_id** - shows an individual article and comment for that article.
- **/article** - for posting an article.
- **/users/:username** - view a user profile and all articles written by that user.
- **/users** - shows all active users.
- **/user** - for posting a new user.

### Authors

Mark Cooke

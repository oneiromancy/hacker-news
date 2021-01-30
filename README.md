# Hacker News Clone (Front-end)

### Description

This is a [clone](https://oneiromancy.github.io/hacker-news/) of the front-end of [Hacker News](https://news.ycombinator.com/). The website has a fairly simple structure, particularly its UI design which may well make the use of ReactJS overkill in comparison to a template engine such as ejs, pug, jade, etc. This was, nonetheless, a great project that allowed me to consider the usage of Higher Order Components (HOC) as a solution for code reuse, as well as a more in-depth look into the react-router library. One of the pitfalls of this project is the absence of any testing features. A Test-Driven-Development (TDD) approach would have been highly desirable.

### Software Design

The approach I took to redesign the website was to create two HOCs, which acted as a data source for the presentational components of the app by handling the external communication with the Algolia API; every route needed to fetch data hence the use of HOCs to avoid code repetition. 

## Built With

* ReactJS (create-react-app setup)
* react-router
* query-string
* moment
* url-parse

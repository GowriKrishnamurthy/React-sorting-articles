import React, { useState } from "react";
import "./App.css";
import Articles from "./components/Articles";

const title = "React Sorting articles";

function App({ articles }) {
  const [articlesList, setArticlesList] = useState(articles);

  const sortByUpvotes = () => {
    var newArticles = [];
    Object.assign(newArticles, articlesList);
    newArticles.sort((a, b) => {
      if (a.upvotes > b.upvotes) {
        return -1;
      }
      if (a.upvotes < b.upvotes) {
        return 1;
      }
      return 0;
    });

    setArticlesList(newArticles);
  };

  const sortByDates = () => {
    var newArticles = [];
    Object.assign(newArticles, articlesList);
    newArticles.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if (aDate > bDate) {
        return -1;
      }
      if (aDate < bDate) {
        return 1;
      }
      return 0;
    });

    setArticlesList(newArticles);
  };

  return (
    <div className="App">
      <h1> {title} </h1>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => sortByUpvotes()}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => sortByDates()}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articlesList} />
    </div>
  );
}

export default App;

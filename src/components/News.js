import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ country, category, pageSize, setProgress }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const Capitalise = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  // fetch initial news when category changes
  useEffect(() => {
    const updateNews = async () => {
      setProgress(10);
      setLoading(true);
      setPage(1); // reset page when category changes

      try {
        let url = `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_GNEWS_API}&lang=en&country=${country}&topic=${category}&max=${pageSize}&page=1`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        let parsedData = await res.json();

        setArticles(parsedData.articles || []);
        setTotalResults(parsedData.totalArticles || 0);
      } catch (err) {
        console.error("Failed to fetch news:", err.message);
      }

      setLoading(false);
      setProgress(100);
    };

    document.title = `${Capitalise(category)} - News-Journal`;
    updateNews();
    // eslint-disable-next-line
  }, [category, country, pageSize]);

  // infinite scroll fetch
  const fetchMoreData = async () => {
    let nextPage = page + 1;
    try {
      let url = `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_GNEWS_API}&lang=en&country=${country}&topic=${category}&max=${pageSize}&page=${nextPage}`;
      let res = await fetch(url);
      if (!res.ok) throw new Error(`Error ${res.status}`);
      let parsedData = await res.json();

      setArticles(prev => prev.concat(parsedData.articles || []));
      setTotalResults(parsedData.totalArticles || 0);
      setPage(nextPage);
    } catch (err) {
      console.error("Failed to load more news:", err.message);
    }
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>
        News-Journal Top {Capitalise(category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles?.length || 0}
        next={fetchMoreData}
        hasMore={articles?.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {Array.isArray(articles) && articles.map((element, index) => {
              if (!element) return null;
              return (
                <div className="col-md-4" key={`${element.url}-${index}`}>
                  <NewsItem
                    title={element.title || ""}
                    description={element.description || ""}
                    imageUrl={element.image}   // GNews uses "image"
                    newsUrl={element.url}
                    author={element.source?.name || "Unknown"}
                    date={element.publishedAt}
                    source={element.source?.name}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
}

News.defaultProps = {
  country: "us",
  pageSize: 5,
  category: "general",
}

export default News;

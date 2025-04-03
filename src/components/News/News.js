import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import NullImage from "../../components/Images/nullImage.png";
import Loading from "../Loading/Loading";
import NewsItem from "../NewsItem/NewsItem";
import { v4 as uuidv4 } from "uuid";
import { endpointPath } from "../../config/api";
import "./News.css";

function News(props) {
  const { newscategory, country } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const category = newscategory;
  const title = capitaLize(category);
  document.title = `${capitaLize(title)} - News`;

  const updatenews = async () => {
    try {
      const response = await axios.get(endpointPath(country, category));
      setLoading(true);
      const parsedData = response.data;
      setArticles(parsedData.articles);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    updatenews();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="news-container">
      {loading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        <>
          <div className="news-header">
            <h1>{capitaLize(category)} News</h1>
          </div>
          {articles.length === 0 ? (
            <div className="empty-state">
              <h2>No News Found</h2>
              <p>We couldn't find any news articles for this category.</p>
            </div>
          ) : (
            <div className="news-grid">
              {articles.map((element) => (
                <div className="news-card" key={uuidv4()}>
                  <div className="category-badge">{category}</div>
                  <img
                    src={element.image === null ? NullImage : element.image}
                    alt="News"
                    className="news-image"
                  />
                  <div className="news-content">
                    <h2 className="news-title">{element.title}</h2>
                    <p className="news-description">{element.description}</p>
                    <div className="news-meta">
                      <span className="news-source">{element.source.name}</span>
                      <span className="news-date">
                        {new Date(element.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <a href={element.url} target="_blank" rel="noopener noreferrer" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

News.defaultProps = {
  country: "us",
  newscategory: "general",
};

News.propTypes = {
  country: PropTypes.string,
  newscategory: PropTypes.string,
};

export default News;

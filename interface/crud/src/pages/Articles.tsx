import img from "../assets/thumbnail.jpg";
import { Article } from "@/components/Cards/Article";
import axios from "axios";
import React from "react";

interface Feed {
  _id: string;
  title: string;
  description: string;
  author: string[];
  date: string;
}
const Articles = () => {
  const [articles, setArticles] = React.useState([]);
  React.useEffect(() => {
    async function fetchArticles() {
      const feed = await axios(
        "http://localhost:8000/api/v1/news/" ||
          "http://192.168.1.64:8000/api/v1/news"
      );
      setArticles(feed.data);
    }

    fetchArticles();
  }, []);
  return (
    <div className="w-full flex-1 h-full">
      <h3 className="text-xl pb-4">Your articles</h3>
      <div className="flex w-full lg:grid lg:grid-cols-3 justify-between gap-4 flex-col">
        {articles.length !== 0 ? (
          articles.map((article: Feed) => (
            <div key={article?._id}>
              <Article title={article?.title} img={img} />
            </div>
          ))
        ) : (
          <h3>You have no articles created</h3>
        )}
      </div>
    </div>
  );
};

export default Articles;

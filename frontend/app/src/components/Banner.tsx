import axios from "axios";
import { useEffect, useState } from "react";
import img from "../assets/Igihe-Logo.png";

type Article = typeof initArticle;
const initArticle = {
  author: "",
  title: "",
  description: "",
  url: "",
  urlToImage: "",
  publishedAt: "",
  content: "",
};

const Banner = () => {
  const [feed, setFeed] = useState<Article>(initArticle);
  const url =
    // "http://localhost:8000/api/v1/news" ||
    "http://192.168.1.64:8000/api/v1/news";
  useEffect(() => {
    const fetchFeed = async () => {
      const request = await axios(url);
      const randomIndex = Math.floor(Math.random() * request.data.length);
      setFeed(request.data[randomIndex]);
    };
    fetchFeed();
  }, []);
  return (
    <div className="w-full flex flex-col cursor-pointer">
      <div className="mx-auto flex-1 h-3/4 object-cover ">
        <img src={feed?.urlToImage || img} alt="..." />
      </div>
      <span className="w-full h-1/4">
        <h2 className="text-xl md:text-3xl">{feed?.title}</h2>
        <p className="text-sm md:text-md">{feed?.description}</p>
      </span>
    </div>
  );
};

export default Banner;

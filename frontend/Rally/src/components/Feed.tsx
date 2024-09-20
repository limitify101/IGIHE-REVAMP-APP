import axios from "axios";
import { useEffect, useState } from "react";
import img from "../assets/Igihe-Logo.png";

interface Feed {
  _id: string;
  author: string[];
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content_text: string;
  content_type: string;
}

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const url =
    // "http://localhost:8000/api/v1/news" ||
    "http://192.168.1.64:8000/api/v1/news";
  useEffect(() => {
    const fetchFeed = async () => {
      const request = await axios(url);
      setFeeds(request.data);
    };
    fetchFeed();
  }, []);
  return feeds.map((feed: Feed) => (
    <div
      className="w-full flex border-t items-center hover:opacity-70 duration-150 cursor-pointer md:h-40 p-0"
      key={feed?._id}
    >
      <div className="h-full flex items-center justify-center w-1/4">
        <img
          src={feed?.urlToImage || img}
          alt="..."
          className="h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between h-fit w-3/4 scale-90 md:scale-100 m-0 mx-10 md:h-32">
        <span>
          <p className="opacity-50 text-sm">{feed?.content_type}</p>
        </span>
        <p className="text-sm font-semibold md:text-md w-full">{feed?.title}</p>
        <span className="text-sm opacity-60">
          <span className="flex flex-col lg:flex-row lg:gap-2">
            Author:{" "}
            {feed?.author.map((person) => (
              <p>{person}</p>
            ))}
          </span>
          <p>1 hr ago | Rwanda</p>
        </span>
      </div>
    </div>
  ));
};

export default Feed;

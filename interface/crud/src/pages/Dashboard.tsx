import { LatestUpload } from "@/components/Cards/LatestUpload";
import img from "../assets/thumbnail.jpg";
import React from "react";
import axios from "axios";
interface Article {
  title: string;
}
const Dashboard = () => {
  const [article, setArticle] = React.useState<Article>({ title: "" });
  React.useEffect(() => {
    async function fetchLastUpload() {
      const results = await axios(
        "http://localhost:8000/api/v1/news" ||
          "http://192.168.1.64:8000/api/v1/news"
      );
      const lastUpload = results.data;
      setArticle(lastUpload[lastUpload.length - 1]);
    }
    fetchLastUpload();
  }, []);
  return (
    <div className="w-full flex-1 h-full">
      <h3 className="text-xl pb-4">Journalist Dashboard</h3>
      <div className="flex w-full lg:flex-row justify-between gap-6 flex-col">
        <LatestUpload title={article?.title} img={img} />
      </div>
    </div>
  );
};

export default Dashboard;

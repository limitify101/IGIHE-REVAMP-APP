// import { Link } from "react-router-dom"
import MainFeed from "@/components/MainFeed";
import SideFeed from "@/components/SideFeed";

function App() {
  return (
    <div className=" flex flex-col md:grid md:grid-cols-7 mt-4 px-4 gap-10">
      {/* App Body */}
      <section className="col-span-full lg:col-span-4 h-full ">
        <MainFeed />
      </section>
      {/* SideFeed*/}
      <section className="lg:col-span-3 h-full w-full">
        <SideFeed />
      </section>
    </div>
  );
}

export default App;

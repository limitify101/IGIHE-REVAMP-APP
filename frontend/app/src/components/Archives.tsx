import Feed from "./Feed";

const Archives = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h2 className="font-light text-sm opacity-70">Archives</h2>
      <div className="w-full flex flex-col gap-2 lg:w-3/4">
        <Feed />
      </div>
    </div>
  );
};

export default Archives;

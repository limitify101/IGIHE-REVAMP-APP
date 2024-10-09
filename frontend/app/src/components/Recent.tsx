import Feed from "./Feed";

const Recent = () => {
  return (
    <div className="w-full lg:w-3/4 h-full flex flex-col">
      <h2 className="font-semibold text-xl">RECENT NEWS</h2>
      <div className="flex flex-col w-full mt-4 gap-2">
        <Feed />
      </div>
    </div>
  );
};

export default Recent;

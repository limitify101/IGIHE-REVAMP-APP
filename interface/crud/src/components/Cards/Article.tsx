import { Pencil } from "lucide-react";

interface Props {
  title: string;
  img: string;
  // views:number;
  // comments:number;
}
export const Article = ({ title, img }: Props) => {
  return (
    <div className="w-full flex flex-col border p-2 rounded-md bg-slate-200 lg:max-w-96 h-full">
      <div className="flex flex-col">
        <img
          src={img}
          alt="sample"
          className="w-full h-52 object-contain m-0"
        />
        <h4 className="text-sm font-light my-1">{title}</h4>
      </div>
      <div className="text-sm text-[#0876bb] font-light flex flex-col space-y-1">
        <div className="w-full flex gap-2 items-center">
          <a
            href="/analytics"
            className="bg-[#0876bb] text-white p-1 indent-1 rounded-sm max-w-36 hover:opacity-60"
          >
            View Feed Analytics
          </a>
          <a
            href="/edit"
            className="bg-[#0876bb] text-white p-1 indent-1 rounded-sm max-w-36 hover:opacity-60"
          >
            <span className="flex items-center space-x-1">
              <p>Edit</p>
              <Pencil size={20} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

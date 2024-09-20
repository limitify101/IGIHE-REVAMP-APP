import { LayoutDashboard , Newspaper, ChartArea,SquarePen,History,Settings} from "lucide-react"
import Avatar from "./Avatar"
import { Link } from "react-router-dom"

interface Props {
    children:React.ReactElement;
}

const SideBar = (props:Props) => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row fixed mt-14">
    <div className="fixed bottom-0 w-full border lg:max-w-52 lg:h-full flex-col items-center p-1 lg:p-0 bg-slate-100 lg:left-0 m-0 rounded md:rounded-none lg:relative lg:top-0 rounded-t-xl lg:rounded-none lg:border-0">
            <nav className="grid grid-flow-col w-full lg:inline-block lg:flex-col p-0 m-0 place-items-start border-r h-full">
                    <Link to={"/create"}>
                        <li className="cursor-pointer hover:opacity-60 hidden flex-col lg:flex-row items-center lg:space-x-4 lg:flex lg:h-12 lg:w-full lg:px-2 hover:text-[#0876BB]">
                            <SquarePen strokeWidth={1.5} size={20}/>
                            <span className="text-sm font-light">
                                <p>Compose</p>
                            </span>
                        </li>
                    </Link>
                    <Link to={"/"}>
                        <li className="cursor-pointer hover:opacity-60 flex flex-col lg:flex-row items-center lg:space-x-4 lg:h-12 m-0 lg:w-full lg:px-2 hover:text-[#0876bb]">
                            <LayoutDashboard strokeWidth={1.5} size={20}/>
                            <span className="text-sm font-light">
                                <p>Dashboard</p>
                            </span>
                        </li>
                    </Link>
                    <Link to={"/articles"}>
                        <li className="cursor-pointer hover:opacity-60 flex flex-col items-center lg:flex-row lg:space-x-4 lg:h-12 m-0 lg:w-full lg:px-2 hover:text-[#0876BB]">
                            <Newspaper strokeWidth={1.5} size={20}/>
                            <span className="text-sm font-light">
                                <p>Articles</p>
                            </span>
                        </li>
                    </Link>
                    <Link to={"/create"}>
                        <li className="cursor-pointer hover:opacity-60 flex flex-col lg:flex-row items-center lg:hidden m-0 hover:text-[#0876BB]">
                            <SquarePen size={35} strokeWidth={1}/>
                        </li>
                    </Link>
                    <Link to={"/analytics"}>
                        <li className="cursor-pointer hover:opacity-60 flex flex-col lg:flex-row items-center lg:space-x-4 lg:h-12 m-0 lg:w-full lg:px-2 hover:text-[#0876BB]">
                            <ChartArea strokeWidth={1.5} size={20}/>
                            <span className="text-sm font-light">
                                <p>Analytics</p>
                            </span>
                        </li>
                    </Link>
                    <li className="cursor-pointer hover:opacity-60 flex flex-col lg:flex-row items-center lg:hidden m-0">
                        <Avatar name="KALISA Aldrick"/>
                    </li>
                    <hr className="hidden lg:flex w-full my-2"/>

                    <div className="hidden lg:flex flex-col w-full">
                    <li className="cursor-pointer hover:opacity-60 hidden flex-col lg:flex-row items-center lg:space-x-4 lg:flex lg:h-12 lg:w-full lg:px-2 hover:text-[#0876BB]">
                        <History strokeWidth={1.5} size={20}/>
                        <span className="text-sm font-light">
                            <p>History</p>
                        </span>
                    </li>
                    <li className="cursor-pointer hover:opacity-60 flex flex-col lg:flex-row items-center lg:space-x-4 lg:h-12 m-0 lg:w-full lg:px-2 hover:text-[#0876bb]">
                        <Settings strokeWidth={1.5} size={20}/>
                        <span className="text-sm font-light">
                            <p>Settings</p>
                        </span>
                    </li>
                    </div>
            </nav>
    </div>
    <div className="w-full h-full overflow-y-auto pb-24 lg:pb-16 scroll-m-0">{props.children}</div>
    </div>
  )
}

export default SideBar
import img from "../assets/Igihe-Logo.png";
import { EllipsisVertical, Languages, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="h-full border-b flex justify-between items-center px-2 lg:justify-around lg:px-0 mx-auto w-full flex-col">
      <div className="flex justify-between h-12 w-screen items-center">
        <Link to={"/"}>
          <img
            src={img}
            alt="Logo"
            className="object-contain h-10 flex-1 mx-2"
          />
        </Link>
        <div className="flex items-center space-x-5 md:space-x-2 mx-2">
          {/* Language Icon */}
          <div className="hidden md:flex lg:items-center">
            <Button className="space-x-1 lg:text-sm" variant={"ghost"}>
              <Languages size={20} color="black" />
              <span className="font-light">English</span>
            </Button>
          </div>
          {/* Login Button */}
          <div className="hidden md:flex">
            <Button variant={"ghost"} className="font-light text-md lg:text-sm">
              Login
            </Button>
          </div>
          {/* Search Icon */}
          <div className="hidden md:flex">
            <Button variant={"ghost"} size={"icon"}>
              <Search size={16} color="#0876BB" />
            </Button>
          </div>
          {/* Menu Icon */}
          <div className="flex 2xl:hidden">
            <Button variant={"ghost"} size={"icon"}>
              <EllipsisVertical size={20} color="#0876BB" />
            </Button>
          </div>
        </div>
      </div>
      <nav className="hidden 2xl:flex justify-center items-center w-full h-10">
        <ul className="space-x-14 font-light md:max-xl:space-x-5 2xl:text-sm w-full flex items-center justify-center">
          <Link to={"/"} className="hover:opacity-60">
            <li>Home</li>
          </Link>
          <Link to={"/news"} className="hover:opacity-60">
            <li>News</li>
          </Link>
          <Link to={"/politics"} className="hover:opacity-60">
            <li>Politics</li>
          </Link>
          <Link to={"/sports"} className="hover:opacity-60">
            <li>Sports</li>
          </Link>
          <Link to={"/economy"} className="hover:opacity-60">
            <li>Economy</li>
          </Link>
          <Link to={"/health"} className="hover:opacity-60">
            <li>Health</li>
          </Link>
          <Link to={"/culture"} className="hover:opacity-60">
            <li>Culture</li>
          </Link>
          <Link to={"/fashion"} className="hover:opacity-60">
            <li>Fashion</li>
          </Link>
          <Link to={"/technology"} className="hover:opacity-60">
            <li>Technology</li>
          </Link>
          <Link to={"/tourism"} className="hover:opacity-60">
            <li>Tourism</li>
          </Link>
          <Link to={"/religion"} className="hover:opacity-60">
            <li>Religion</li>
          </Link>
          <Link to={"/people"} className="hover:opacity-60">
            <li>People</li>
          </Link>
          <Link to={"/environment"} className="hover:opacity-60">
            <li>Environment</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

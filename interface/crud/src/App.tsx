import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Articles from "./pages/Articles";
import Analytics from "./pages/Analytics";
import Compose from "./pages/Compose";
import Edit from "./pages/Edit";
import { Toaster } from "@/components/ui/toaster";
// import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col m-0 p-0 h-dvh">
          <div className="flex-1 flex w-full flex-col h-full">
            {/* Header */}
            <Header />
            {/* SideBar*/}
            <SideBar>
              <main className="flex-1 p-3 h-fit overflow-y-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/create" element={<Compose />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/articles" element={<Articles />} />
                  <Route path="/edit" element={<Edit />} />
                </Routes>
              </main>
            </SideBar>
            <Toaster />
          </div>
          {/* Content */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

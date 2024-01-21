import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to={"./"} className="flex gap-2 md:gap-3 items-center">
          <img
            src="/logo-2.png"
            alt="logo"
            className="w-8 h-8 md:w-12 md:h-12 object-contain"
          />
          <h2 className="text-2xl md:text-3xl text-gradient-2 font-bold tracking-[0.25px] font-inter">
            Imaginify
          </h2>
          {/* <img src={logo} alt="logo" className="w-28 object-contain" /> */}
        </Link>
        <Link
          to={"/create-post"}
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

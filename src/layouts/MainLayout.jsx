import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(location.pathname);
    // console.log(currentPage);
  });

  const getPageBackground = () => {
    const page = currentPage;
    const bgImages = {
      "/": "bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop",
      "/destination":
        "bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop",
      "/crew": "bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop",
      "/technology":
        "bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop",
    };
    return bgImages[page];
  };

  return (
    <div
      className={`w-full min-h-screen bg-no-repeat bg-cover bg-scroll bg-center overflow-x-clip pt-10 sm:pt-0 lg:pt-7 text-light-blue transition-all ${getPageBackground()}`}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;

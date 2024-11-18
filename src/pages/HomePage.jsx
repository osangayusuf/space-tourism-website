import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="mt-12 sm:mt-28 lg:mt-52 text-center lg:text-left lg:max-w-[90%] lg:mx-auto place-content-center flex flex-col lg:flex-row gap-16 lg:gap-28 sm:max-md:gap-0 pb-20">
        <div className="space-y-10 sm:space-y-12 lg:space-y-4 lg:basis-3/5 lg:ml-16 xl:scale-125">
          <p className="font-barlow-condensed tracking-widest lg:tracking-wide text-xl sm:text-4xl lg:text-2xl">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="uppercase font-bellefair text-white text-8xl sm:max-md:text-[11rem]">space</p>
          <p className="font-barlow font-light max-w-[25rem] sm:max-w-[38rem] lg:max-w-[26rem] px-5 sm:px-0 mx-auto lg:mx-0 pt-3 sm:pt-2 leading-relaxed lg:leading-normal tracking-wide lg:tracking-normal sm:text-lg lg:text-sm">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex place-content-center">
          <Link to="/destination" className="w-72 sm:w-[30rem] lg:w-60 rounded-full h-auto aspect-square hover:bg-white hover:bg-opacity-10 transition-all duration-300 delay-0 ease-out flex place-content-center items-center">
            <p className="text-dark-blue uppercase font-bellefair text-xl sm:text-4xl lg:text-xl text-center w-44 sm:w-72 lg:w-40 rounded-full h-auto aspect-square bg-white place-content-center items-center">
              Explore
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;

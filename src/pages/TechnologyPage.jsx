import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Spinner from "../components/Spinner";

const TechnologyPage = () => {
  const [loading, setLoading] = useState(true);
  const [technologies, setTechnologies] = useState([]);
  const [current, setCurrent] = useState(0);
  const [currentTech, setCurrentTech] = useState({});

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const res = await fetch("/api/technology");
        const data = await res.json();
        setTechnologies(data);
        setCurrentTech(data[current]);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch technologies", error);
      }
    };

    fetchTech();
  }, [current]);

  useEffect(() => {
    if (technologies.length > 0) {
      setCurrentTech(technologies[current]);
    }
  }, [technologies, current]);

  const handleSwipe = (direction) => {
    if (direction === "LEFT" && current < technologies.length - 1) {
      setCurrent(current + 1);
    } else if (direction === "RIGHT" && current > 0) {
      setCurrent(current - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <div {...swipeHandlers}>
      <h1 className="uppercase mx-12 lg:ml-32 text-center sm:text-left font-barlow-condensed text-white text-xl sm:text-2xl tracking-widest font-extralight mt-12">
        <span className="opacity-25 mr-3 font-bold">03</span>Space launch 101
      </h1>
      <div className="mt-24 lg:mt-0 pb-20 flex flex-col lg:gap-8 lg:flex-row lg:mx-32 lg:w-screen lg:items-center">
        <div className="w-full lg:w-auto basis-1/2 order-3">
          <img
            src={`${currentTech.images.portrait}`}
            alt={`${currentTech.name}`}
            className="object-cover object-bottom w-full h-auto aspect-[5/4] sm:aspect-[2/1] sm:object-bottom lg:max-h-[30rem] lg:w-auto lg:object-contain lg:aspect-[5/4]"
          />
        </div>
        <div className="flex gap-4 sm:gap-6 place-content-center mt-10 lg:flex-col order-1 h-auto lg:basis-1/12">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`block w-10 sm:w-12 lg:w-10 h-auto aspect-square rounded-full font-bellefair ${
                current === index
                  ? "bg-white text-dark-blue"
                  : "bg-transparent text-white border-white border border-opacity-50 hover:border-opacity-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="text-center lg:text-left mt-10 space-y-4 lg:basis-5/12 order-2">
          <h1 className="font-bellefair uppercase opacity-25 text-white text-lg sm:text-xl lg:text-2xl">
            The terminology...
          </h1>
          <h1 className="font-bellefair uppercase text-white text-2xl sm:text-3xl lg:text-4xl">
            {currentTech.name}
          </h1>
          <p className="font-extralight text-sm sm:text-base lg:text-sm max-w-80 sm:max-w-[33rem] lg:max-w-[25rem] mx-auto lg:mx-0 tracking-wide leading-relaxed">
            {currentTech.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;

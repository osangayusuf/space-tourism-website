import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useSwipeable } from "react-swipeable";

const DestinationPage = () => {
  const [loading, setLoading] = useState(true);
  const [destinations, setDestinations] = useState([]);
  const [current, setCurrent] = useState(0);
  const [currentDestination, setCurrentDestination] = useState({});

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch("/api/destinations");
        const data = await res.json();
        setDestinations(data);
        setCurrentDestination(data[current]);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch destinations", error);
      }
    };

    fetchDestinations();
  }, [current]);

  useEffect(() => {
    if (destinations.length > 0) {
      setCurrentDestination(destinations[current]);
    }
  }, [destinations, current]);

  const handleSwipe = (direction) => {
    if (direction === "LEFT" && current < destinations.length - 1) {
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
      <h1 className="uppercase mx-12 lg:mx-32 text-center sm:text-left font-barlow-condensed text-white text-xl sm:text-2xl tracking-widest font-extralight mt-12">
        <span className="opacity-25 mr-3 font-bold">01</span>Pick your
        destination
      </h1>
      <div className="block lg:flex w-full lg:w-4/5 lg:mx-auto lg:gap-32 mt-10 sm:mt-16 lg:pb-10">
        <div className="w-2/5 mx-auto lg:basis-1/2 flex place-content-center items-center lg:m-0">
          <img
            src={`${currentDestination.images.png}`}
            alt={`${currentDestination.name}`}
            className="object-contain"
          />
        </div>
        <div className="text-left">
          <div className="flex gap-8 lg:gap-4 tracking-widest text-lg lg:text-sm font-light font-barlow-condensed place-content-center lg:place-content-start mt-10 sm:mt-16">
            {destinations.map((destination, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`block uppercase pb-2 hover:scale-110 hover:border-b-2 ${
                  current === index ? "border-b-2" : ""
                }`}
              >
                {destination.name}
              </button>
            ))}
          </div>
          <div className="text-center lg:text-left pt-10 pb-20 space-y-6">
            <h1 className="text-6xl sm:text-[5.2rem] lg:text-7xl text-white uppercase font-bellefair">
              {currentDestination.name}
            </h1>
            <p className="font-barlow font-extralight max-w-[22rem] sm:max-w-[33rem] lg:max-w-[25rem] lg:text-sm tracking-wide leading-relaxed sm:leading-loose mx-auto pb-10 border-b">
              {currentDestination.description}
            </p>
            <div className="flex max-sm:flex-col place-content-center lg:place-content-start gap-7 sm:gap-24">
              <div className="uppercase space-y-4">
                <h2 className="font-barlow-condensed text-light-blue max-md:text-lg font-extralight tracking-wider">
                  Avg. Distance
                </h2>
                <p className="font-bellefair text-3xl lg:text-2xl text-white font-light">
                  {currentDestination.distance}
                </p>
              </div>
              <div className="uppercase space-y-4">
                <h2 className="font-barlow-condensed text-light-blue max-md:text-lg font-extralight tracking-wider">
                  Est. Travel Time
                </h2>
                <p className="font-bellefair text-3xl lg:text-2xl text-white font-light">
                  {currentDestination.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;

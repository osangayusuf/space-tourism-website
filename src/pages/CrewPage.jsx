import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Spinner from "../components/Spinner";

const CrewPage = () => {
  const [loading, setLoading] = useState(true);
  const [crew, setCrew] = useState([]);
  const [current, setCurrent] = useState(0);
  const [currentMember, setCurrentMember] = useState({});

  useEffect(() => {
    const fetchCrew = async () => {
      try {
        const res = await fetch("/api/crew");
        const data = await res.json();
        setCrew(data);
        setCurrentMember(data[current]);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch crew members", error);
      }
    };

    fetchCrew();
  }, [current]);

  useEffect(() => {
    if (crew.length > 0) {
      setCurrentMember(crew[current]);
    }
  }, [crew, current]);

  const handleSwipe = (direction) => {
    if (direction === "LEFT" && current < crew.length - 1) {
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
        <span className="opacity-25 mr-3 font-bold">02</span>Meet your crew
      </h1>
      <div className="flex flex-col lg:flex-row gap-16 mt-20 lg:mt-32 pb-5 lg:mx-32 lg:min-h-[30rem]">
        <div className="text-center lg:text-left font-bellefair space-y-3 lg:h-auto relative">
          <h1 className="uppercase text-xl sm:text-2xl lg:text-3xl opacity-25 text-white">
            {currentMember.role}
          </h1>
          <h1 className="uppercase text-2xl sm:text-4xl lg:text-5xl tracking-wider text-white whitespace-nowrap">
            {currentMember.name}
          </h1>
          <p className="font-barlow font-extralight tracking-wide leading-relaxed max-w-[22rem] min-h-[13rem] sm:max-w-[33rem] sm:min-h-[8rem] lg:max-w-[32.5rem] mx-auto lg:mx-0 pt-5">
            {currentMember.bio}
          </p>
          <div className="flex gap-4 place-content-center lg:place-content-start sm:pt-12 lg:absolute lg:bottom-10">
            {crew.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`block w-3 h-3 rounded-full ${
                  current === index
                    ? "bg-white"
                    : "bg-light-blue bg-opacity-25 hover:scale-125 transition-transform hover:bg-opacity-50"
                }`}
              ></button>
            ))}
          </div>
        </div>
        <div className="max-w-[17rem] sm:max-w-[35rem] lg:max-w-[20rem] mx-auto">
          <img
            src={`${currentMember.images.png}`}
            alt={`${currentMember.name}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CrewPage;

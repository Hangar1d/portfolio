import { Typewriter } from "react-simple-typewriter";
import { IoIosArrowDown } from "react-icons/io"; // Importing an arrow icon from react-icons

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-darkBlack text-lightGray">
      <h1 className="text-6xl font-bold mb-4 text-center">
        Khan's
        <br /> {/* Breaks the line */}
        <span className="block">
          {" "}
          {/* Makes sure Portfolio stays on the next line */}
          <Typewriter
            words={["Portfolio"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p className="text-xl text-gray-300 text-center">
        CS Student | Trader | Developer
      </p>

      {/* Scroll Down Text with Arrow */}
      <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
        <p className="text-med text-gray-400">Scroll Down</p>
        <IoIosArrowDown className="text-3xl text-gray-400" />
      </div>
    </section>
  );
};

export default Home;

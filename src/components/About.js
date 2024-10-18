import {
  FaCode,
  FaChartLine,
  FaBasketballBall,
  FaBook,
  FaGamepad,
  FaDumbbell,
} from "react-icons/fa"; // Added FaGamepad for video games icon
import { GiCook, GiGymBag } from "react-icons/gi"; // Cooking icon

const About = () => {
  return (
    <section className="p-10 bg-jetBlack text-lightGray h-full flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed text-gray-300 text-center mb-8 max-w-screen-md">
        I'm a computer science student and day trader, driven by a passion for
        mastering new technologies. I thrive on building innovative websites and
        exploring cutting-edge tech. Focused, disciplined, and always ready to
        take on the next challenge.
      </p>

      {/* Skills Section */}
      <div className="w-full max-w-screen-md mb-8 mt-10">
        <h3 className="text-2xl font-semibold mb-8 text-center">Skills</h3>
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center">
            <FaCode size={40} className="text-gray-300 mb-2" />
            <p className="text-md">Web Development</p>
          </div>
          <div className="flex flex-col items-center">
            <FaChartLine size={40} className="text-gray-300 mb-2" />
            <p className="text-md">Forex Trading</p>
          </div>
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="w-full max-w-screen-md mt-10">
        <h3 className="text-2xl font-semibold mb-8 text-center">Hobbies</h3>

        {/* First Row of Hobbies */}
        <div className="flex justify-around items-center mb-8">
          <div className="flex flex-col items-center">
            <FaCode size={40} className="text-gray-300 mb-2" />
            <p className="text-md">Coding</p>
          </div>
          <div className="flex flex-col items-center">
            <FaBasketballBall size={40} className="text-gray-300 mb-2" />
            <p className="text-md">Sports</p>
          </div>
          <div className="flex flex-col items-center">
            <FaBook size={40} className="text-gray-300 mb-2" />
            <p className="text-md">Reading</p>
          </div>
        </div>

        {/* Second Row of Hobbies */}
        <div className="flex justify-around items-center mb-8">
          <div className="flex flex-col items-center">
            <FaGamepad size={40} className="text-gray-300 mb-2" />
            <p className="text-md">VideoGames</p>
          </div>
          <div className="flex flex-col items-center">
            <GiCook size={40} className="text-gray-300 mb-2" />
            <p className="text-md">Cooking</p>
          </div>
          <div className="flex flex-col items-center">
            <FaDumbbell size={40} className="text-gray-300 mb-2" />
            <p className="text-md">Workout</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

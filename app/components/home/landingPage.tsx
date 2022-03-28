import React from "react";
import image from "../../../public/images/lpbg.png";

const LandingPage: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-[100%] min-h-auto min-h-[100vh] overflow-hidden">
      <section className="animate-fade-out opacity-0 p-4 flex flex-col sm:items-center gap-4 text-white sm:w-[60%] sm:pt-4 sm:justify-center">
        <p className="text-[42px] md:text-center text-blue font-semibold font-heading sm:text-white mx-auto overflow-hidden">
          Most Trusted and Reliable Drycleaner In Faridabad
        </p>
        <p className="text-xl text-black sm:text-white font-text">
          Here you can put a short description about your project.
        </p>
        <div className="flex flex-row gap-3 my-2">
          <button className=" bg-blue p-3 rounded-lg text-white font-text">
            Book now
          </button>
          <button className="bg-white text-blue p-3 rounded-lg sm:text-blue font-text">
            See how it's work
          </button>
        </div>
      </section>
      <section className="hidden absolute sm:block w-full h-full z-[-1] overflow-hidden">
        <img
          src={image}
          alt="pic"
          className="w-full h-full sm:min-h-[calc(100%-200px)]"
        />
      </section>
    </div>
  );
};

export default LandingPage;

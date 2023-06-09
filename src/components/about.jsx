import React from "react";
import aboutBG from "../assets/about.svg";

const About = () => {
  return (
    <div
      className="relative w-full text-white text-center h-[500px] flex flex-col items-center content-center self-center"
      id="about"
    >
      <img
        src={aboutBG}
        className="w-full h-full object-cover absolute top-0 z-[-10]"
      />

      <div
        className="flex flex-col gap-[20px] my-auto font-inria-serif text-[1.5rem]"
        id="ini"
      >
        <h1 className="font-inter font-[800] text-[2rem] md:text-[2.5rem] ">
          About Us
        </h1>
        <p className="w-[70%] mx-auto md:text-[1.5rem] text-[1rem]">
          kami membuat suatu teknologi yang semaksimal mungkin bisa digunakan
          kembali oleh masyarakat. lorem ipsum dolor
        </p>
      </div>
    </div>
  );
};

export default About;

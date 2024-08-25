import { FC, useState } from "react";

const About: FC = () => {


  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center">
        About VinceNet Solutions
      </h1>
      <p className="mt-4 text-center">
        We specialize in building user-centric applications that solve
        real-world problems.
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Placeholder Image"
        className="mx-auto mt-8"
      />


    </div>
  );
};

export default About;

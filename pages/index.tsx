import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center">
        Welcome to VinceNet Solutions
      </h1>
      <p className="mt-4 text-center">
        We create awesome web applications tailored to your needs.
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Placeholder Image"
        className="mx-auto mt-8"
      />
    </div>
  );
};

export default Home;

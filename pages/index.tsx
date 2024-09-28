import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styles from './Home.module.css';
import UIVidContainer from "@/layouts/UIWrappers/UIVid";

const Home: FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  const fetchData = async () => {
    try {
      const res = await fetch('/api/database?dbName=NextJS&collectionName=VinceNet');
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UIVidContainer>
      <div className="flex flex-col justify-center items-center min-h-screen" onMouseMove={handleMouseMove}>
        <div className={`flex flex-wrap items-center ${styles.contentWrapperH}`} style={{
          '--mouse-x': `${mousePos.x}px`,
          '--mouse-y': `${mousePos.y}px`
        } as React.CSSProperties}>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/Mpho (grad)/3a_361A4988.jpg"
              alt="Graduate Image"
              className="rounded-full shadow-lg"
              height={400}
              width={400}
            />
          </div>
          <div className="w-full md:w-1/2 p-6 text-white">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to VinceNet Solutions
            </h1>
            <p className="mb-6">
              We create awesome web applications tailored to your needs.
            </p>
            <p>
              Feel free to explore this website. Some features and pages are under development, so they might not work as expected. You can comment on features under the report page or suggest new ones. Stay safe!
            </p>
          </div>
        </div>
      </div>
    </UIVidContainer>
  );
};

export default Home;

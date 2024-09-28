import React, { useEffect, useState } from 'react';
import {
  SiMongodb,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
  SiJenkins,
  SiSupabase,
  SiFirebase,
  SiReact,
  SiVite,
  SiNextdotjs,
  SiSpringboot,
  SiAngular,
  SiGit,
  SiGithub,
  SiExpress,
  SiNodedotjs,
} from 'react-icons/si';
import { AiFillAmazonCircle } from 'react-icons/ai';
import { DiJava } from 'react-icons/di';

const IconSlideshow = () => {
  const icons = [
    <SiMongodb key="mongodb" />,
    <SiCss3 key="css" />,
    <SiHtml5 key="html" />,
    <DiJava key="java" />,
    <SiJavascript key="javascript" />,
    <SiTypescript key="typescript" />,
    <SiPython key="python" />,
    <SiMysql key="mysql" />,
    <SiJenkins key="jenkins" />,
    <AiFillAmazonCircle key="aws" />,
    <SiSupabase key="supabase" />,
    <SiFirebase key="firebase" />,
    <SiReact key="react" />,
    <SiVite key="vite" />,
    <SiNextdotjs key="nextjs" />,
    <SiSpringboot key="springboot" />,
    <SiAngular key="angular" />,
    <SiGit key="git" />,
    <SiGithub key="github" />,
    <SiExpress key="express" />,
    <SiNodedotjs key="node" />,
  ];

  const [position, setPosition] = useState(0); // Initial position

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 1; // Move left
        return newPosition <= -100 ? 0 : newPosition; // Reset position after sliding out
      });
    }, 100); // Update position every 100 milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: '100%', height: '100px' }} // Set height based on icon size
    >
      <div
        className="flex"
        style={{
          transform: `translateX(${position}%)`,
          transition: 'transform 0.1s linear',
        }}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: '50%', // Fixed width for icons
              height: '50%', // Fixed height for icons
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 10px', // Fixed margin for spacing between icons
            }}
          >
            {icon}
          </div>
        ))}
        {/* Duplicate icons to create a continuous effect */}
        {icons.map((icon, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0"
            style={{
              width: '50%',
              height: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 10px',
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSlideshow;

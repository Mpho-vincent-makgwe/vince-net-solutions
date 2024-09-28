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

  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [position, setPosition] = useState(0); // Initial position
  const [iconSize, setIconSize] = useState(50); // Initial icon size
  const [spacing, setSpacing] = useState(20); // Initial spacing between icons

  const handleEdgeBounce = () => {
    if (position >= 100) {
      setDirection(-1);
    } else if (position <= 0) {
      setDirection(1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition + direction * 2; // Move by 2% in the current direction
        handleEdgeBounce();
        return Math.max(0, Math.min(newPosition, 100)); // Keep within 0 to 100
      });

      // Adjust icon size and spacing for bouncing effect
      setIconSize((prevSize) => {
        const newSize = prevSize >= 60 ? 50 : prevSize + 1; // Max size is 60, min is 50
        return newSize;
      });
      
      setSpacing((prevSpacing) => {
        const newSpacing = prevSpacing <= 10 ? 20 : prevSpacing - 1; // Max spacing is 20, min is 10
        return newSpacing;
      });

    }, 100); // Update position every 100 milliseconds

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: '100%', height: '100px' }} // Set height based on icon size
    >
      <div
        className="flex"
        style={{
          transform: `translateX(-${position}%)`,
          transition: 'transform 0.1s ease-in-out',
        }}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `${iconSize}px`, // Dynamically set width based on icon size
              height: `${iconSize}px`, // Dynamically set height based on icon size
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: `0 ${spacing}px`, // Dynamic spacing between icons
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

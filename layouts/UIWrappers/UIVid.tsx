import React, { useEffect, useRef, ReactNode } from 'react';
import { SiMongodb, SiCss3, SiHtml5, SiJavascript, SiTypescript, SiPython, SiMysql, SiJenkins, SiSupabase, SiFirebase, SiReact, SiVite, SiNextdotjs, SiSpringboot, SiAngular, SiGit, SiGithub, SiExpress, SiNodedotjs } from 'react-icons/si';
import { AiFillAmazonCircle } from 'react-icons/ai'; 
import { DiJava } from 'react-icons/di';
import styles from './UIVid.module.css';

interface UIVidContainerProps {
  children: ReactNode;
}

const UIVidContainer: React.FC<UIVidContainerProps> = ({ children }) => {
  const iconsRef = useRef<HTMLDivElement[]>([]);

  const createRandomIcons = () => {
    const iconPositions = new Set<string>();

    while (iconPositions.size < 20) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      iconPositions.add(`${x},${y}`);
    }

    return Array.from(iconPositions).map((pos, index) => {
      const [x, y] = pos.split(',').map(Number);
      return (
        <div
          key={index}
          className={styles.iconContainer}
          style={{
            position: 'absolute',
            top: `${y}vh`,
            left: `${x}vw`,
            pointerEvents: 'none',
            animation: `float 10s infinite`,
          }}
        >
          {getRandomIcon()}
        </div>
      );
    });
  };

  const getRandomIcon = () => {
    const icons = [
      <SiMongodb key="mongodb" className={styles.icon} />,
      <SiCss3 key="css" className={styles.icon} />,
      <SiHtml5 key="html" className={styles.icon} />,
      <DiJava key="java" className={styles.icon} />,
      <SiJavascript key="javascript" className={styles.icon} />,
      <SiTypescript key="typescript" className={styles.icon} />,
      <SiPython key="python" className={styles.icon} />,
      <SiMysql key="mysql" className={styles.icon} />,
      <SiJenkins key="jenkins" className={styles.icon} />,
      <AiFillAmazonCircle key="aws" className={styles.icon} />,
      <SiSupabase key="supabase" className={styles.icon} />,
      <SiFirebase key="firebase" className={styles.icon} />,
      <SiReact key="react" className={styles.icon} />,
      <SiVite key="vite" className={styles.icon} />,
      <SiNextdotjs key="nextjs" className={styles.icon} />,
      <SiSpringboot key="springboot" className={styles.icon} />,
      <SiAngular key="angular" className={styles.icon} />,
      <SiGit key="git" className={styles.icon} />,
      <SiGithub key="github" className={styles.icon} />,
      <SiExpress key="express" className={styles.icon} />,
      <SiNodedotjs key="node" className={styles.icon} />,
    ];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  useEffect(() => {
    const interval = setInterval(() => {
        iconsRef.current.forEach((icon) => {
            let direction = Math.random() * 2 * Math.PI; // Random direction
            const speed = Math.random() * 0.5 + 0.1; // Random speed
            let newX = parseFloat(icon.style.left) + Math.cos(direction) * speed;
            let newY = parseFloat(icon.style.top) + Math.sin(direction) * speed;

            if (newX < 0 || newX > 100) {
                newX = Math.max(0, Math.min(newX, 100));
                direction = Math.PI - direction;
            }
            if (newY < 0 || newY > 100) {
                newY = Math.max(0, Math.min(newY, 100));
                direction = -direction;
            }

            icon.style.left = `${newX}vw`;
            icon.style.top = `${newY}vh`;
        });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapperU}>
      <video className={styles.videoBg} autoPlay loop muted>
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.floatingIcons}>
        {createRandomIcons().map((icon, index) => (
          <div key={index} ref={(el) => (iconsRef.current[index] = el)}>
            {icon}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default UIVidContainer;

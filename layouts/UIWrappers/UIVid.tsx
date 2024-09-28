import React from 'react'
import styles from './UIVid.module.css'
const UIVidWrapper = ({ children }:any) => {
  return (
    <div className={styles.wrapper}>
         <video className={styles.videoBg} autoPlay loop muted>
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  )
}

export default UIVidWrapper;

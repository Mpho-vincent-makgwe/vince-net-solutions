import React from 'react';

const UIVidContainer = ({ children }: any) => {
  return (
    <div className="relative w-full overflow-hidden bg-lime-50 min-h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover" // This ensures the video covers the entire container
        autoPlay
        loop
        muted
      >
        <source
          src="/videos/mixkit-light-in-the-background-of-a-virtual-3d-database-19630-hd-ready.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10"> {/* This layer is above the video */}
        {children}
      </div>
    </div>
  );
};

export default UIVidContainer;


import React, { useEffect } from 'react';
import './service.css'
const NYSCVideoSection = () => {
  useEffect(() => {
    // Load Facebook SDK
    if (!window.FB) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      };
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse(); // Re-parse if already loaded
    }
  }, []);

  const handleVideoClick = () => {
    window.open('https://www.youtube.com/watch?v=1xaxw0XKScQ', '_blank');
  };

  return (
    <>
      <div className="videos">
        <div className="videos-title">
          <h1 className="video-tile">
            Building Unity, Inspiring Change: Agbor Ndoma’s NYSC Journey
          </h1>
        </div>
      </div>

      <div className="video-section">
        <h2 className="video-title">Leadership in Action: Mr. Agbor Ndoma Obim at Ede Camp</h2>
        < p className="video-description">
          Explore the vibrant activities, orientation programs, and leadership moments at the NYSC Ede Camp in Osun State.
          This video highlights Mr. Agbor Ndoma Obim’s role in guiding corps members and fostering national unity.
        </p>
        <button className="video-button" onClick={handleVideoClick}>
          Watch on YouTube
        </button>
      </div>

      <div className="facebook-video-section">
        <h2 className="facebook-video-title">Watch NYSC Osun Camp Highlights</h2>
        <p className="facebook-video-description">
          These videos from the official NYSC Osun Facebook page capture key moments from the Ede Camp,
          featuring Mr. Agbor Ndoma Obim and vibrant corps member activities.
        </p>
<div className="nysc-container">
        {/* Facebook Video 1 */}
        <div 
          className="fb-video  nysc-container"
          data-href="https://www.facebook.com/reel/1444861560204614/"
          data-width="500"
          data-show-text="false"
        ></div>

        {/* Facebook Video 2 */}
        <div
          className="fb-video nysc-container"
          data-href="https://www.facebook.com/reel/1444861560204614/"
          data-width="500"
          data-show-text="false"
        ></div>

        {/* Add more videos below as needed */}
       <div
          className="fb-video  nysc-container"
          data-href="https://www.facebook.com/reel/1444861560204614/"
          data-width="500"
          data-show-text="false"
        ></div>
</div>
      </div>
    </>
  );
};

export default NYSCVideoSection;
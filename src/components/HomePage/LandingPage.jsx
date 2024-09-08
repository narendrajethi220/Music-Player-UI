import Logo from "../../assets/Logo.svg";
import Profile from "../../assets/Profile.svg";
import "../../styles/globalStyle.css";
import MusicDashboard from "../MusicDashboard/MusicDashboard";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { useState } from "react";
const LandingPage = () => {
  const [currentSong, setCurrentSong] = useState(null);
  return (
    <div className="landing-page-container">
      <img className="logo-img" src={Logo} alt="logo-img" />
      {/* <img className="profile-img" src={Profile} alt="user-profile" /> */}
      <div className="music-dashboard">
        <MusicDashboard setCurrentSong={setCurrentSong} />
      </div>
      <div className="music-player">
        <MusicPlayer currentSong={currentSong} />
      </div>
      <img className="profile-img" src={Profile} alt="user-profile" />
    </div>
  );
};

export default LandingPage;

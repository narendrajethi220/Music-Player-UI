import { useEffect, useRef } from "react";
import DefaultPlayer from "./DefaultPlayer";

const MusicPlayer = ({ currentSong }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.url;
      audioRef.current.play();
    }
  }, [currentSong]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="player">
      {currentSong ? (
        <>
          <div className="curr-song-detail">
            <h1>{currentSong.name}</h1>
            <p>{currentSong.artist}</p>
          </div>
          <img
            className="curr-song-cover"
            src={`https://cms.samespace.com/assets/${currentSong.cover}`}
            alt={`${currentSong.name} cover`} // Better alt text
          />
          <div className="audio-player">
            <audio ref={audioRef} controls />
          </div>
        </>
      ) : (
        <DefaultPlayer /> // Render DefaultPlayer when no song is selected
      )}
    </div>
  );
};

export default MusicPlayer;

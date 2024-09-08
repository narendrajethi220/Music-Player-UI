import { useEffect, useState } from "react";

const TopTracks = ({ songs }) => {
  // const { data } = useContext(APIContext);
  const [durations, setDurations] = useState({});
  const [playingSong, setPlayingSong] = useState(null);
  useEffect(() => {
    const fetchDurations = async () => {
      const newDurations = {};

      for (const song of songs) {
        const audio = new Audio(song.url);
        await new Promise((resolve) => {
          audio.addEventListener("loadedmetadata", () => {
            newDurations[song.id] = audio.duration;
            resolve();
          });
        });
      }

      setDurations(newDurations);
    };

    if (songs.length > 0) {
      fetchDurations();
    }
  }, [songs]);

  // Function to format duration from seconds to mm:ss
  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const handleSongClick = (song) => {
    document.documentElement.style.setProperty(
      "--background-color",
      song.accent
    );
    setPlayingSong(song.id);
  };

  return (
    <div className="all-song-list">
      {songs
        .filter((song) => song.top_track)
        .map((song) => (
          <button
            className={`song-main-container ${
              playingSong === song.id ? "active" : ""
            }`}
            onClick={() => {
              handleSongClick(song);
            }}
            key={song.id}
          >
            <div className="song-container">
              <div className="song-details">
                <img
                  className="cover-img"
                  src={`https://cms.samespace.com/assets/${song.cover}`}
                  alt="cover-img"
                />

                <div className="song-name-artist">
                  <h1>{song.name}</h1>
                  <p>{song.artist}</p>
                </div>
              </div>
              <div className="song-duration">
                {durations[song.id] !== undefined
                  ? formatDuration(durations[song.id])
                  : "Loading ..."}
              </div>
            </div>
          </button>
        ))}
    </div>
  );
};

export default TopTracks;

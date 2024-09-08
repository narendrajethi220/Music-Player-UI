import { IoSearch } from "react-icons/io5";
import { useContext, useState } from "react";
import SongList from "./SongList";
import TopTracks from "./TopTracks";
import { APIContext } from "../API/APIDataContext";
const MusicDashboard = ({ setCurrentSong }) => {
  const { data } = useContext(APIContext);
  const [activeSection, setActiveSection] = useState("forYou");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSongs = (songs) => {
    return songs.filter(
      (song) =>
        song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  return (
    <div className="dashboard">
      <div className="btn-container">
        <button
          className={`button ${
            activeSection === "forYou" ? "active" : "faded"
          }`}
          onClick={() => setActiveSection("forYou")}
        >
          For You
        </button>
        <button
          className={`button ${
            activeSection === "topTracks" ? "active" : "faded"
          }`}
          onClick={() => setActiveSection("topTracks")}
        >
          Top Tracks
        </button>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Song, Artist"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
          <button className="btn-search">
            <IoSearch className="search-icon" />
          </button>
        </div>
        <div className="song-list">
          {activeSection === "forYou" && (
            <>
              <SongList
                songs={filteredSongs(data)}
                setCurrentSong={setCurrentSong}
              />
            </>
          )}
          {activeSection === "topTracks" && (
            <>
              <TopTracks
                songs={filteredSongs(data)}
                setCurrentSong={setCurrentSong}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicDashboard;

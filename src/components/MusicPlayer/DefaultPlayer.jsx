import defaultImg from "../../assets/default.png";
const DefaultPlayer = () => {
  return (
    <div className="player">
      <div className="curr-song-detail">
        {/* Placeholder for current song details */}
        <h1>No song selected</h1>
        <p>Please select a song to play.</p>
      </div>
      <img
        className="curr-song-cover"
        src={defaultImg} // You can set a default cover image if desired
        alt="cover image"
      />
      <div className="audio-player">
        <audio controls>
          <source src="" type="audio/mpeg" />{" "}
          {/* Placeholder for audio source */}
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default DefaultPlayer;

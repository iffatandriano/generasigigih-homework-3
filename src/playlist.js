import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "./playlist.css";

function Playlist({ spotify }) {
  useEffect(() => {
    getMyPlaylist();
  }, []);

  const [artist, setArtist] = useState([]);
  // const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const getMyPlaylist = async () => {
    try {
      const { data, status, statusText } = await axios.get(
        "https://api.spotify.com/v1/albums/1XVE65TiTaa3bXROXCJwjQ",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${spotify}`,
          },
        }
      );
      if (status !== 200) {
        setError(statusText);
        console.log(error);
      } else {
        console.log(data);
        let playlist = [];
        playlist.push(data);
        setArtist(playlist);
      }
    } catch (error) {
      if (error.response === undefined) {
        setError(error);
        console.log(error);
      }
    }
  };

  return (
    <div className="albums-track">
      <h1>Albums Track</h1>
      {artist.map((playlist, index) => (
        <div className="playlist" key={index}>
          <img
            className="pl_image"
            src="https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b"
            alt="pl_image"
          />
          <div className="description-playlist">
            <span className="title-album">ALBUM</span>
            <span className="title-song">{playlist.name}</span>
            <div className="album-description">
              <img
                className="artist-icon"
                src="https://i.scdn.co/image/6dd0ffd270903d1884edf9058c49f58b03db893d"
                alt="artist-icon"
              />
              <span className="artist-name">Queen</span>
              <span clasName="artist-year">
                &#8226; {moment(playlist.release_date).format("YYYY")} &#8226;
              </span>
              <span className="artist-song">
                {playlist.total_tracks} songs,
              </span>
              <span className="song-minutes">1 hr 19 min</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Playlist;

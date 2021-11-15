import React from "react";
import Listsongs from "../components/Listsongs";
import MusicItemView from "../components/MusicItemView";
import { useState, useEffect } from "react";
import { FaMicrophone, FaHeart, FaEllipsisH } from "react-icons/fa";
import PlayerDetails from "../components/PlayerDetails";

export default function Canhan(props) {
  const lists = [
    "Tổng Quan",
    "Bài Hát",
    "Playlist",
    "Nghệ Sĩ",
    "Album",
    "MV",
    "Tải Lên",
  ];

  const [type, setType] = useState("Bài Hát");

  return (
    <div className="ca-nhan">
      <div className="info">
        <img
          className="avatar"
          src="https://i.pinimg.com/564x/ed/7d/6e/ed7d6eff48c7a201f8b03243d58c5b35.jpg"
          alt="logo"
        ></img>
        <h1 className="title">Hiển Phan</h1>
      </div>
      <div className="menu__music">
        <div className="menu__music-list">
          <div className="menu">
            <ul className="menu-list">
              {lists.map((list) => (
                <li
                  className={type === list ? "list-item active" : "list-item"}
                  key={list}
                  onClick={() => setType(list)}
                >
                  <a>{list}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="playlist">
            <div className="playlist-header">
              <div className="header-left">Bài Hát</div>
              <div className="header-content">Thời Gian</div>
            </div>
            <div className="music-view">
              {props.songs.map((item) => {
                return (
                  <div
                    className={
                      props.songs[props.currentSongIndex] === item
                        ? "list-item active"
                        : "list-item"
                    }
                    onClick={() => item}
                  >
                    <PlayerDetails song={item} />
                    <div className="item-content">
                      <div className="song-duration">04:20</div>
                    </div>
                    <div className="item-right">
                      <div className="level">
                        <FaMicrophone />
                        <FaHeart className="icon-heart" />
                        <FaEllipsisH />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

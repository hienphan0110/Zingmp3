import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaPortrait,
  FaRecordVinyl,
  FaChartLine,
  FaHeadphonesAlt,
  FaRssSquare,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img
          src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
          alt="logo"
        ></img>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__nav">
          <ul className="sidebar__nav-list">
            <li className="sidebar__nav-item">
              <NavLink activeClassName="active" exact to="/">
                <FaPortrait />
                <span>Cá Nhân</span>
              </NavLink>
            </li>
            <li className="sidebar__nav-item">
              <NavLink activeClassName="active" to="/khampha">
                <FaRecordVinyl />
                <span>Khám Phá</span>
              </NavLink>
            </li>
            <li className="sidebar__nav-item">
              <NavLink activeClassName="active" to="/zingchart">
                <FaChartLine />
                <span>#zingchart</span>
              </NavLink>
            </li>
            <li className="sidebar__nav-item">
              <NavLink activeClassName="active" to="/radio">
                <FaHeadphonesAlt />
                <span>Radio</span>
              </NavLink>
            </li>
            <li className="sidebar__nav-item">
              <NavLink activeClassName="active" to="/theodoi">
                <FaRssSquare />
                <span>Theo Dõi</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar-divide"></div>
        <div className="sidebar__music">
          <ul className="sidebar__music-list">
            <li className="sidebar__music-item">
              <NavLink activeClassName="active1" to="/nhacmoi">
                <FaPortrait />
                <span>Nhạc Mới</span>
              </NavLink>
            </li>
            <li className="sidebar__music-item">
              <NavLink activeClassName="active1" to="/theloai">
                <FaRecordVinyl />
                <span>Thể Loại</span>
              </NavLink>
            </li>
            <li className="sidebar__music-item">
              <NavLink activeClassName="active1" to="/top100">
                <FaChartLine />
                <span>Top 100</span>
              </NavLink>
            </li>
            <li className="sidebar__music-item">
              <NavLink activeClassName="active1" to="/mv">
                <FaHeadphonesAlt />
                <span>MV</span>
              </NavLink>
            </li>
          </ul>
          <div className="vip-banner-sidebar">
            <p>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
            <a href="# ">MUA VIP</a>
          </div>
          <div className="sidebar__category">
            <div className="sidebar-text">
              <p>Thư Viện</p>
            </div>

            <ul className="sidebar__category-list">
              <li className="sidebar__category-item">
                <a href="# ">
                  <img
                    src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg"
                    alt=""
                  ></img>
                  <span>Bài hát</span>
                </a>
              </li>
              <li className="sidebar__category-item">
                <a href="# ">
                  <img
                    src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg"
                    alt=""
                  ></img>
                  <span>Playlist</span>
                </a>
              </li>
              <li className="sidebar__category-item">
                <a href="# ">
                  <img
                    src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg"
                    alt=""
                  ></img>
                  <span>Gần đây</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

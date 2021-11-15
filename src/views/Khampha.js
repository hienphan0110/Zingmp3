import React, { useState } from "react";
import MusicItemView from "../components/MusicItemView";
import MusicRadio from "../components/MusicRadio";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import PlayCircleOutline from "@mui/icons-material/PlayCircleOutline";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

export default function KhamPha() {
  const [state, setState] = useState({
    data: [
      {
        img: "https://photo-zmp3.zadn.vn/banner/9/e/d/4/9ed43e634c21551d8c8c75cddf1c6798.jpg",
      },
      {
        img: "https://photo-zmp3.zadn.vn/banner/7/8/f/1/78f1c907a57c026c8a63b6b2fe0f44ee.jpg",
      },
      {
        img: "https://photo-zmp3.zadn.vn/banner/9/f/d/7/9fd7e4db09a00732e8a0ab0320da0fc6.jpg",
      },
      {
        img: "https://photo-zmp3.zadn.vn/banner/7/8/3/0/78305450311f4229b646bee0da92dccb.jpg",
      },
      {
        img: "https://photo-zmp3.zadn.vn/banner/a/d/d/9/add9c5f70640ac1199fcb5e79888ed3c.jpg",
      },
      {
        img: "https://photo-zmp3.zadn.vn/banner/7/9/5/e/795edd96ad2709ebcc9a8c4c5a59d7a3.jpg",
      },
    ],
    dataView: [
      {
        img: "	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/avatars/9/4/6/6/9466b676258c5a5de341ca361efb7ba3.jpg",
        title: "Những Bài Hát Hay Nhất Của Ava Max",
        author: "Ava Max",
      },
      {
        img: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/e/d/7/7ed7ca782187b602ce59f4b4798ee9d3.jpg",
        title: "Enchanted Propaganda",
        author: "Jvcki Wai",
      },
      {
        img: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/9/9/8/c9987d0b16595f7c8bd4405fc6db2f36.jpg",
        title: "K-Pop Deabak",
        author: "IU, MINO, MOBB",
      },
      {
        img: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg",
        title: "Top 100  Electronic/Dance Âu Mỹ Hay Nhất",
        author: "",
      },
      {
        img: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/9/a/8/69a800bb3195f38724ad6b0f212e112a.jpg",
        title: "US-UK Hôm Nay Nghe Gì?",
        author: "Shawn Mendes, Justin Bieber",
      },

      // ===========================================================================

      {
        img: "		https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/2/5/e/625eb87fe88f342859dd1197e60238ff.jpg",
        title: "Trào Lưu Nhạc Hot",
        author: "Nal, The Kid LAROI, Pháo",
      },
      {
        img: "	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/7/4/5/f7452c4bab07a4cfd39c388e73a13922.jpg",
        title: "Pop Ballad Việt Nổi Bật",
        author: "ERIK, Hiền Hồ, Hương Ly",
      },
      {
        img: "	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/f/c/2/8fc20fdf75f3d819b5ed9c3c370a2be0.jpg",
        title: "The Biggest Drop",
        author: "",
      },
      {
        img: "	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/2/6/5/1265e63c52f33a8075b143e2cd3e52ca.jpg",
        title: "Song Ca Hay Nhất",
        author: "Tăng Phúc, Hương Ly, Trịnh Thăng Bình,...",
      },
      {
        img: "	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/b/1/9/bb19d3533ae913605e676538c19364cb.jpg",
        title: "Hôm Nay Nghe Gì?",
        author: "Quân A.P, Orange",
      },

      // ===========================================================================

      {
        img: "			https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/8/5/0/68500d96c5bde3f947bd1f60a641a71e.jpg",
        title: "XONE Today's Hits",
        author: "XONE RADIO",
      },
      {
        img: "	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/a/2/f/6a2fd608cf9d65735752ea3306c77b0e.jpg",
        title: "XONE's Radar",
        author: "XONE RADIO",
      },
      {
        img: "		https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/f/8/e/3f8e25409ad8f440ef2f2c97db0ea96d.jpg",
        title: "A's Flavour",
        author: "XONE RADIO",
      },
      {
        img: "		https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/1/6/9/01693aa27f33675b0d1b33b77e77f243.jpg",
        title: "Pop Breaker",
        author: "XONE RADIO",
      },
      {
        img: "		https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/e/1/4/ce14bd1c509de4019788035dd40c9b45.jpg",
        title: "Asia Tune",
        author: "XONE RADIO",
      },

      // ===========================================================================
      {
        img: "	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/b/1/9/bb19d3533ae913605e676538c19364cb.jpg",
        title: "Nhạc Việt Hôm Nay Nghe Gì?",
        author: "Quân A.P,Orange,Lê Bảo Bình,...",
      },
      {
        img: "	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/0/4/b/604b8492359973ffa7ff6d2059e20e7e.jpg",
        title: "Chạm: Đâu Ai Bình Thường Khi Yêu",
        author: "HURRYKNG,dính,Phương Ly,...",
      },
      {
        img: "	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/3/8/9/0389d21f1cd10834593a3b8ac133f41d.jpg",
        title: "Pop Chill",
        author: "Olivia Rodrigo,Tate McRae,Khalid,...",
      },
      {
        img: "		https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/d/8/b/ed8b6074b8bacbb40b3af6821e01b0ee.jpg",
        title: "K-Pop Ballad",
        author: "Mamamoo,AKMU,Davichi,...",
      },
      {
        img: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/2/d/0/72d067aa555641c89ac84ff9e3397c42.jpg",
        title: "Rap Việt Ngày Nay",
        author: "Tuimi,16 Typh,Đạt G,...",
      },
    ],
  });

  //   gan day
  const renderDataView = (arr) => {
    return arr.map((item, index) => {
      return (
        <div key={index} className="item">
          <div className="musicItemView">
            <img src={item.img} alt={"hihi"} className="img"></img>
            <div className="musicItemOverlay">
              <div className="icon-overlay">
                <FavoriteBorder></FavoriteBorder>
                <PlayCircleOutline></PlayCircleOutline>
                <MoreHoriz></MoreHoriz>
              </div>
            </div>
            <div className="musicItemBtn"></div>
          </div>
          <div className="music-title">
            <p className="title">{item.title}</p>
            <p className="author">{item.author}</p>
          </div>
        </div>
      );
    });
  };
  //
  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const renderData = (items) => {
    return items.map((item, index) => {
      return (
        <div className="slick-img">
          <img src={item.img} alt={"ff"} />
        </div>
      );
    });
  };
  //   co the ban muon Nghe
  return (
    <div className="khamPhaContent">
      <div className="container">
        <Slider {...settings}>{renderData(state.data)}</Slider>
        <div className="ganday">
          <h3>Gần Đây</h3>
          <div className="flex">
            {" "}
            {renderDataView(state.dataView.slice(0, 5))}
          </div>
        </div>
        <div className="ganday">
          <h3>Có Thể Bạn Muốn Nghe</h3>
          <div className="flex">
            {" "}
            {renderDataView(state.dataView.slice(5, 10))}
          </div>
        </div>
        <div className="ganday">
          <h3>XONE's CORNER</h3>
          <div className="flex">
            {" "}
            {renderDataView(state.dataView.slice(10, 15))}
          </div>
        </div>
        <div className="ganday">
          <h3>Lựa Chọn Hôm Nay</h3>
          <div className="flex">
            {" "}
            {renderDataView(state.dataView.slice(15, 20))}
          </div>
        </div>
      </div>
    </div>
  );
}

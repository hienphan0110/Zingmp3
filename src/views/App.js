import "../styles/App.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Canhan from "./Canhan";
import Khampha from "./Khampha";
import Listmusic from "./Listmusic";
import Footer from "./Footer";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import tuemdatinh from "../assets/music/song1.mp3";
import withyou from "../assets/music/withyou.mp3";
import baotienmotmobinhyen from "../assets/music/baotienmotmobinhyen.mp3";
import blue from "../assets/music/blue.mp3";
import bluekeshi from "../assets/music/blue-lyric-video.mp3";
import body from "../assets/music/body.mp3";
import closer from "../assets/music/closer.mp3";
import downtown from "../assets/music/downtown.mp3";
import goodbyeroad from "../assets/music/goodbyeroad.mp3";
import ok from "../assets/music/ok.mp3";
import tatnuocdaudinh from "../assets/music/tatnuocdaudinh.mp3";
import loveme from "../assets/music/lovemeloveme.mp3";

function App() {
  const [songs] = useState([
    {
      name: "Blue",
      singer: "Keshi",
      path: bluekeshi,
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/4/6/8/e/468eb679f07d204bcb1c5223fc1e3f01.jpg?fs=MTYzNzI0NTU4OTQ5MXx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Tự Em Đa Tình",
      singer: "Quinn",
      path: tuemdatinh,
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/0/5/d/2/05d288a21458ea7c380c97b4c27aab12.jpg?fs=MTYzNTQyMjIxNjM0MHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Tát Nước Đầu Đình",
      singer: "Lynk Lee, Binz",
      path: tatnuocdaudinh,
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/covers/5/b/5b0e1e9f8bc5a40c9062cc20ef85929d_1441510933.jpg?fs=MTYzNTkzNTA1MDEzNnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "With You (Ngẫu Hứng)",
      singer: "HOAPROX",
      path: withyou,
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/5/c/f/f/5cffbc808c999aaee75986f27e2918e4.jpg",
    },
    {
      name: "Closer",
      singer: "The Chainsmokers, Halsey",
      path: closer,
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/1/4/b/8/14b821f4a28b17d0ebef3b9a2026d71c.jpg?fs=MTYzNjUzNTgzNzA3OHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "OK",
      singer: "Binz",
      path: ok,
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/0/7/2/b/072ba9ae04687203d6f6af8e526ce631.jpg?fs=MTYzNTQyNDMxODI3Nnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Downtown",
      singer: "Allie X",
      path: downtown,
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/7/6/1/d76178c5ff308509433798be38c034c2.jpg?fs=MTYzNjUzNjU1OTkxN3x3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Love Me Love Me",
      singer: "Winner",
      path: loveme,
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/e/5/f/b/e5fb7d2e5f69d14ab3553d3e67181575.jpg?fs=MTYzNTQyNDU1NjmUsICzNnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Bao Tiền Một Mớ Bình Yên?",
      singer: "14 Casper, Bon",
      path: baotienmotmobinhyen,
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/1/c/3/b/1c3b6283e28b9030d8f6410b210bd765.jpg?fs=MTYzNzA4NDUxOTEwOHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Goodbye Road",
      singer: "iKON",
      path: goodbyeroad,
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/4/9/7/8/497838480a984a04dfff7a0667da5d75.jpg?fs=MTYzNzE0MTA3NzY2OXx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Body",
      singer: "Mino",
      path: body,
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/3/8/1/4/381450fa1bf53dcb9284cc5f73c70e6c.jpg?fs=MTYzNzE0MTIzMDmUsICzNnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },

    {
      name: "Blue",
      singer: "Big Bang",
      path: blue,
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/covers/7/5/75f29937b8cdee5fc152ace3122ecd01_1329874830.jpg?fs=MTYzNzEzODmUsIC4NzE2MXx3ZWJWNHwxNTAdUngOTUdUngMTEwLjE3Mg",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <Listmusic song={songs[currentSongIndex]} songs={songs} />
        <Footer
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          songs={songs}
        />

        <Switch>
          <Route path="/canhan" exact>
            <Canhan
              songs={songs}
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              song={songs[currentSongIndex]}
            />
          </Route>
          <Route path="/Zingmp3">
            <Khampha />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

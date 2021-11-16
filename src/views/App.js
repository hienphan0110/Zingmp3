import "../styles/App.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Canhan from "./Canhan";
import Khampha from "./Khampha";
import Listmusic from "./Listmusic";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [songs] = useState([
    {
      name: "Tự Em Đa Tình",
      singer: "Quinn",
      path: "//mp3-s1-m-zmp3.zadn.vn/6d14322e1868f136a879/2419112025626696242?authen=exp=1637037729~acl=/6d14322e1868f136a879/*~hmac=adb26cb072e539ffbc56ff8807fc3bc0&fs=MTYzNjg2NDkyOTUxM3x3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/0/5/d/2/05d288a21458ea7c380c97b4c27aab12.jpg?fs=MTYzNTQyMjIxNjM0MHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Tát Nước Đầu Đình",
      singer: "Lynk Lee, Binz",
      path: "//mp3-s1-m-zmp3.zadn.vn/d47c4eca478eaed0f79f/655168355244407679?authen=exp=1637119296~acl=/d47c4eca478eaed0f79f/*~hmac=00b463c918201ce2fe03e91641ad352f&fs=MTYzNjk0NjQ5Njg5OXx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/covers/5/b/5b0e1e9f8bc5a40c9062cc20ef85929d_1441510933.jpg?fs=MTYzNTkzNTA1MDEzNnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Alone, Pt. II",
      singer: "Alan Walker, Ava Max",
      path: "//mp3-s1-m-zmp3.zadn.vn/cb2ceedff5981cc64589/7992972939860412770?authen=exp=1637121183~acl=/cb2ceedff5981cc64589/*~hmac=5d3215dbede762c15b4c58ca14d54056&fs=MTYzNjk0ODM4MzYxMHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/2/0/d/d20dbb6279610c6ccf856f08c30a3d5c.jpg?fs=MTYzNjQzMzmUsIC4MTQ0OHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Closer",
      singer: "The Chainsmokers, Halsey",
      path: "https://vnso-zn-23-tf-mp3-s1-m-zmp3.zadn.vn/7d26ad071440fd1ea451/2912325423409613368?authen=exp=1636981389~acl=/7d26ad071440fd1ea451/*~hmac=f8c26246896519d9917a02764061881e&fs=MTYzNjgwODU4OTE5OHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/1/4/b/8/14b821f4a28b17d0ebef3b9a2026d71c.jpg?fs=MTYzNjUzNTgzNzA3OHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "OK",
      singer: "Binz",
      path: "https://vnso-zn-10-tf-mp3-s1-m-zmp3.zadn.vn/4a94a118835f6a01334e/5112995764508793515?authen=exp=1636981455~acl=/4a94a118835f6a01334e/*~hmac=3683f6aa690194bb743fcd74e1064026&fs=MTYzNjgwODY1NTE0MXx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/0/7/2/b/072ba9ae04687203d6f6af8e526ce631.jpg?fs=MTYzNTQyNDMxODI3Nnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Downtown",
      singer: "Allie X",
      path: "https://vnso-zn-15-tf-mp3-s1-m-zmp3.zadn.vn/7214b78dbccb55950cda/7291770380676333755?authen=exp=1636981539~acl=/7214b78dbccb55950cda/*~hmac=33651caa0cfd4da7619e86760d79aeb3&fs=MTYzNjgwODmUsICzOTI2OXx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/7/6/1/d76178c5ff308509433798be38c034c2.jpg?fs=MTYzNjUzNjU1OTkxN3x3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Love Me Love Me",
      singer: "Winner",
      path: "https://vnso-zn-5-tf-mp3-s1-m-zmp3.zadn.vn/abb9b547b900505e0911/3721950449131877428?authen=exp=1636981612~acl=/abb9b547b900505e0911/*~hmac=c879462a1cd659ca2eb05499f269ef9f&fs=MTYzNjgwODgxMjE3M3x3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/e/5/f/b/e5fb7d2e5f69d14ab3553d3e67181575.jpg?fs=MTYzNTQyNDU1NjmUsICzNnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  const [song, setSong] = useState(songs[0]);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <Listmusic
          song={song}
          setSong={setSong}
          songs={songs}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
        />
        <Footer
          song={song}
          setSong={setSong}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          songs={songs}
        />

        <Switch>
          <Route path="/" exact>
            <Canhan
              song={song}
              setSong={setSong}
              songs={songs}
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
            />
          </Route>
          <Route path="/khampha">
            <Khampha />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

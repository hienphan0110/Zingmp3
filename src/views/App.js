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
      path: "https://vnso-zn-24-tf-mp3-s1-m-zmp3.zadn.vn/6d14322e1868f136a879/2419112025626696242?authen=exp=1637220085~acl=/6d14322e1868f136a879/*~hmac=7708c6e3dba6901ec43924eb0da4fa40&fs=MTYzNzA0NzI4NjAxNHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/0/5/d/2/05d288a21458ea7c380c97b4c27aab12.jpg?fs=MTYzNTQyMjIxNjM0MHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Tát Nước Đầu Đình",
      singer: "Lynk Lee, Binz",
      path: "//mp3-s1-m-zmp3.zadn.vn/d47c4eca478eaed0f79f/655168355244407679?authen=exp=1637293840~acl=/d47c4eca478eaed0f79f/*~hmac=566ad83c6bf36e30416e5f6b225af038&fs=MTYzNzEyMTA0MDmUsIC0MXx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
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
      path: "//mp3-s1-m-zmp3.zadn.vn/7d26ad071440fd1ea451/2912325423409613368?authen=exp=1637220171~acl=/7d26ad071440fd1ea451/*~hmac=f86c112ddfd4fd9cb463ddf7af977e22&fs=MTYzNzA0NzM3MTIxMHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/1/4/b/8/14b821f4a28b17d0ebef3b9a2026d71c.jpg?fs=MTYzNjUzNTgzNzA3OHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "OK",
      singer: "Binz",
      path: "//mp3-s1-m-zmp3.zadn.vn/4a94a118835f6a01334e/5112995764508793515?authen=exp=1637220221~acl=/4a94a118835f6a01334e/*~hmac=f11b60808be62767b5050ce640559bf0&fs=MTYzNzA0NzQyMTY3OXx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/0/7/2/b/072ba9ae04687203d6f6af8e526ce631.jpg?fs=MTYzNTQyNDMxODI3Nnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Downtown",
      singer: "Allie X",
      path: "https://vnso-zn-15-tf-mp3-s1-m-zmp3.zadn.vn/7214b78dbccb55950cda/7291770380676333755?authen=exp=1637220274~acl=/7214b78dbccb55950cda/*~hmac=fb5fbcaa23fdb1cc2bd2db23921f9f6a&fs=MTYzNzA0NzQ3NDk5Mnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/7/6/1/d76178c5ff308509433798be38c034c2.jpg?fs=MTYzNjUzNjU1OTkxN3x3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Love Me Love Me",
      singer: "Winner",
      path: "//mp3-s1-m-zmp3.zadn.vn/abb9b547b900505e0911/3721950449131877428?authen=exp=1637220340~acl=/abb9b547b900505e0911/*~hmac=a5bff40a4d97e2cde3e0ee3ef2a8e31f&fs=MTYzNzA0NzU0MDEyNHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/e/5/f/b/e5fb7d2e5f69d14ab3553d3e67181575.jpg?fs=MTYzNTQyNDU1NjmUsICzNnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Bao Tiền Một Mớ Bình Yên?",
      singer: "14 Casper, Bon",
      path: "//mp3-s1-m-zmp3.zadn.vn/d80ca7683a2fd3718a3e/202014890748971286?authen=exp=1637257319~acl=/d80ca7683a2fd3718a3e/*~hmac=4d16047576000bb927aa3e41539fcc9a&fs=MTYzNzA4NDUxOTEwOXx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/1/c/3/b/1c3b6283e28b9030d8f6410b210bd765.jpg?fs=MTYzNzA4NDUxOTEwOHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
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
        <Listmusic song={song} setSong={setSong} songs={songs} />
        <Footer
          song={song}
          setSong={setSong}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          songs={songs}
        />

        <Switch>
          <Route path="/canhan" exact>
            <Canhan
              song={song}
              setSong={setSong}
              songs={songs}
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
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

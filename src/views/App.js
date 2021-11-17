import "../styles/App.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Canhan from "./Canhan";
import Khampha from "./Khampha";
import Listmusic from "./Listmusic";
import Footer from "./Footer";
import { useState, useEffect, useRef } from "react";
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
      path: "//mp3-s1-m-zmp3.zadn.vn/cb2ceedff5981cc64589/7992972939860412770?authen=exp=1637294565~acl=/cb2ceedff5981cc64589/*~hmac=8b151750f7b570e46a1d94a92d24c457&fs=MTYzNzEyMTmUsIC2NTk0M3x3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
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
    {
      name: "Goodbye Road",
      singer: "iKON",
      path: "//mp3-s1-m-zmp3.zadn.vn/f32f03df0f98e6c6bf89/7837165587446028807?authen=exp=1637313877~acl=/f32f03df0f98e6c6bf89/*~hmac=77d8b776b57d2b1e9f03d220f52a558c&fs=MTYzNzE0MTA3NzY3NHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/4/9/7/8/497838480a984a04dfff7a0667da5d75.jpg?fs=MTYzNzE0MTA3NzY2OXx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Body",
      singer: "Mino",
      path: "//mp3-s1-m-zmp3.zadn.vn/e9700b8107c6ee98b7d7/5517625227181620180?authen=exp=1637314030~acl=/e9700b8107c6ee98b7d7/*~hmac=eb9844a59d35be7a214f61d85d5f10ce&fs=MTYzNzE0MTIzMDmUsICzN3x3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/3/8/1/4/381450fa1bf53dcb9284cc5f73c70e6c.jpg?fs=MTYzNzE0MTIzMDmUsICzNnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
    },
    {
      name: "Vẫn Nhớ",
      singer: "SOOBIN",
      path: "//mp3-s1-m-zmp3.zadn.vn/f165a2b5a3f24aac13e3/596551588438777438?authen=exp=1637314244~acl=/f165a2b5a3f24aac13e3/*~hmac=37b344a6e51ca133fab67abac0d44660&fs=MTYzNzE0MTQ0NDQ3Mnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/c/b/1/a/cb1af5489be93740538b70e49e919f7b.jpg",
    },
    {
      name: "Blue",
      singer: "Big Bang",
      path: "//mp3-s1-m-zmp3.zadn.vn/9c40513a547ebd20e46f/7468083091498594488?authen=exp=1637314456~acl=/9c40513a547ebd20e46f/*~hmac=def68b5e0a62d2e6dfcb4275b064f77b&fs=MTYzNzE0MTY1NjmUsIC2OXx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
      image:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/covers/7/5/75f29937b8cdee5fc152ace3122ecd01_1329874830.jpg?fs=MTYzNzEzODmUsIC4NzE2MXx3ZWJWNHwxNTAdUngOTUdUngMTEwLjE3Mg",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  // const [song, setSong] = useState(songs[currentSongIndex]);

  // useEffect(() => {
  //   setNextSongIndex(() => {
  //     if (currentSongIndex + 1 > songs.length - 1) {
  //       return 0;
  //     } else {
  //       return currentSongIndex + 1;
  //     }
  //   });
  // }, [currentSongIndex]);

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;
        if (temp > songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }
        return temp;
      });
    }
  };

  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying ? audioEl.current.play() : audioEl.current.pause();
  });
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <audio
          id="audio"
          src={songs[currentSongIndex].path}
          ref={audioEl}
        ></audio>
        <Header />
        <Sidebar />
        <Listmusic
          song={songs[currentSongIndex]}
          // setSong={songs[setCurrentSongIndex]}
          songs={songs}
        />
        <Footer
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          songs={songs}
          SkipSong={SkipSong}
          handlePlay={handlePlay}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
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

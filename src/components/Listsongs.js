// // import React from "react";
// import React, { useState, useEffect, useRef } from "react";
// import PlayerDetails from "../components/PlayerDetails";
// import Controls from "../components/controls";

// // import {
// //   FaRandom,
// //   FaStepBackward,
// //   FaPlayCircle,
// //   FaStepForward,
// //   FaRedo,
// // } from "react-icons/fa";

// export default function Listsongs(props) {
//   const app = {
//     songs: [
//       {
//         name: "Tự Em Đa Tình",
//         singer: "Quinn",
//         path: "//mp3-s1-m-zmp3.zadn.vn/6d14322e1868f136a879/2419112025626696242?authen=exp=1635595016~acl=/6d14322e1868f136a879/*~hmac=f57ae1ef7395389983d3e803eb9bc8d8&fs=MTYzNTQyMjIxNjM0MXx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//         image:
//           "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/0/5/d/2/05d288a21458ea7c380c97b4c27aab12.jpg?fs=MTYzNTQyMjIxNjM0MHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//       },
//       {
//         name: "Còn Gì Đau Hơn Chữ Đã Từng",
//         singer: "Quân A.P",
//         path: "//mp3-s1-m-zmp3.zadn.vn/71fafd2fdb6832366b79/5310509438322105087?authen=exp=1635591634~acl=/71fafd2fdb6832366b79/*~hmac=56db859edfd4979e7688143656f4b4fd&fs=MTYzNTQxODgzNDEyNHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//         image:
//           "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/5/6/5/1/5651a16e61472b25af4af405a8c3df2c.jpg?fs=MTYzNTQxODgzNDEyMHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//       },
//       {
//         name: "Criminal",
//         singer: "Britney Spears",
//         path: "//mp3-s1-m-zmp3.zadn.vn/bcf2ee98e3dc0a8253cd/7028740150896245369?authen=exp=1635595451~acl=/bcf2ee98e3dc0a8253cd/*~hmac=d1e3cf3e78d5772694777d0f44bfce03&fs=MTYzNTQyMjY1MTIyMHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//         image:
//           "https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/covers/e/8/e81e57ded5d7cfbb50f72626b6e60c48_1299860015.jpg",
//       },
//       {
//         name: "GQ",
//         singer: "Lola Coca",

//         path: "//mp3-s1-m-zmp3.zadn.vn/a5dbd9c5cb8322dd7b92/7300356490016368736?authen=exp=1635595713~acl=/a5dbd9c5cb8322dd7b92/*~hmac=2c29aec998ab4625f64451c77f46c614&fs=MTYzNTQyMjkxMzgwM3x3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//         image:
//           "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/3/5/e/d35e5e8286cd1aa4a50e37f19eef134f.jpg?fs=MTYzNTQyMjkxMzgwMnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//       },
//       {
//         name: "Downtown",
//         singer: "Allie X",
//         path: "//mp3-s1-m-zmp3.zadn.vn/7214b78dbccb55950cda/7291770380676333755?authen=exp=1635595909~acl=/7214b78dbccb55950cda/*~hmac=92e14dde7d24ca04ff4358314c39c8d0&fs=MTYzNTQyMzEwOTgxN3x3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//         image:
//           "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/7/6/1/d76178c5ff308509433798be38c034c2.jpg?fs=MTYzNTQyMzEwOTgxNnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//       },
//       {
//         name: "Crooked",
//         singer: "G-DRAGON",
//         path: "//mp3-s1-m-zmp3.zadn.vn/4f5d7cb970fe99a0c0ef/1563683997214459850?authen=exp=1635596222~acl=/4f5d7cb970fe99a0c0ef/*~hmac=c225db6405dd025031ede85c57b83bf3&fs=MTYzNTQyMzQyMjQyOHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//         image:
//           "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/5/6/c/0/56c0556d1a9bbf6f7ab7629a95235e42.jpg?fs=MTYzNTQyMzQyMjQyMXx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//       },
//       {
//         name: "I Miss You So Bad",
//         singer: "iKON",
//         path: "//mp3-s1-m-zmp3.zadn.vn/dd01b618c35f2a01734e/8316592022735041840?authen=exp=1635596768~acl=/dd01b618c35f2a01734e/*~hmac=89b4496f7c7ca5bc866c5a85dc240575&fs=MTYzNTQyMzk2ODg0NHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//         image:
//           "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/4/6/8/d468ef01c3a7d8af6d41b759a40af199.jpg?fs=MTYzNTQyMzk2ODg0Mnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//       },
//       {
//         name: "OK",
//         singer: "Binz",
//         path: "//mp3-s1-m-zmp3.zadn.vn/4a94a118835f6a01334e/5112995764508793515?authen=exp=1635597118~acl=/4a94a118835f6a01334e/*~hmac=3f7631f684b46b6fd5d58a90420ab92b&fs=MTYzNTQyNDMxODI3OHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//         image:
//           "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/0/7/2/b/072ba9ae04687203d6f6af8e526ce631.jpg?fs=MTYzNTQyNDMxODI3Nnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//       },
//       {
//         name: "Anh Chỉ Là Bạn Thân",
//         singer: "Tăng Phúc",
//         path: "//mp3-s1-m-zmp3.zadn.vn/184391103b57d2098b46/3204199365497895709?authen=exp=1635596969~acl=/184391103b57d2098b46/*~hmac=345a7f58c293f5e4c9f60c03da82f7bf&fs=MTYzNTQyNDE2OTmUsIC2M3x3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//         image:
//           "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/a/8/0/9/a809574acb0d6b3aa026b0d394fab70f.jpg?fs=MTYzNTQyNDE2OTmUsIC1OHx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//       },
//       {
//         name: "Deep Sea",
//         singer: "Binz",
//         path: "//mp3-s1-m-zmp3.zadn.vn/5e600d6a0e2ee770be3f/2678593499193387017?authen=exp=1635597207~acl=/5e600d6a0e2ee770be3f/*~hmac=a7f0714be14a15d90b61a10342cc30d4&fs=MTYzNTQyNDQwODAwMnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//         image:
//           "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/avatars/e/a/eac01a3ef975ced4389084b873301fd7_1454387453.jpg?fs=MTYzNTQyNDQwODAwMXx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//       },
//       {
//         name: "Love Me Love Me",
//         singer: "Winner",
//         path: "//mp3-s1-m-zmp3.zadn.vn/abb9b547b900505e0911/3721950449131877428?authen=exp=1635597356~acl=/abb9b547b900505e0911/*~hmac=c74f77772faae887b6c476dc0a62288a&fs=MTYzNTQyNDU1NjmUsICzN3x3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//         image:
//           "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/e/5/f/b/e5fb7d2e5f69d14ab3553d3e67181575.jpg?fs=MTYzNTQyNDU1NjmUsICzNnx3ZWJWNHwxNzEdUngMjI3LjI0My40Nw",
//       },
//     ],
//   };
//   const renderSongs = (arr) => {
//     return arr.map((song, index) => {
//       return (
//         <div key={index} className="song-content">
//           <div className="details-img">
//             <img src={song.image} alt="hh"></img>
//           </div>
//           <div className="details-title">
//             <h3>{song.name}</h3>
//             <p>{song.singer}</p>
//           </div>
//         </div>
//       );
//     });
//   };

//   // return <div className="list-song">{renderSongs(app.songs)}</div>;
//   return <div className="list-song">{renderSongs(app.songs)}</div>;
// }

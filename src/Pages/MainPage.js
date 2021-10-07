import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ImageMenu from "../Components/ImageMenu";
import Video from "../Components/Video";
import ImagePoster from "../Components/ImagePoster";
import "../Assets/main.css";
import "../Assets/IntroducePage.css";

const array = [
  {
    name: "CapturedMoment",
    src: "img_row/순간포착_세로.png",
    link: "https://www.youtube.com/embed/AWhB7zW9W34",
  },
  {
    name: "Comsongz",
    src: "img_row/컴송즈_세로.png",
    link: "https://www.youtube.com/embed/IYjtPf2HV1o",
  },
  {
    name: "정채영",
    src: "img_row/정채영_세로사진.png",
    link: "https://www.youtube.com/embed/H3j685Fm_gY",
  },
  {
    name: "일력",
    src: "img_row/일력_세로사진.PNG",
    link: "https://www.youtube.com/embed/TYGCUgpeGoA",
  },
  {
    name: "LightAway",
    src: "img_row/lightAway.jpg",
    link: "https://www.youtube.com/embed/EkKZzgq8pQM",
  },
  {
    name: "SoundOfFaires",
    src: "img_row/soundOfFairies.png",
    link: "https://www.youtube.com/embed/I55nPgM8Mf4",
  },
  {
    name: "DeliveryRun",
    src: "img_row/deliveryRun.png",
    link: "https://www.youtube.com/embed/-hbDvNvVQWY",
  },

  {
    name: "ALittleDruid",
    src: "img_row/ALittleDruid.jpg",
    link: "https://www.youtube.com/embed/vpElwaERIK4",
  },
  {
    name: "정민영",
    src: "img_row/정민영_세로.jpg",
    link: "https://www.youtube.com/embed/48zknixNfdk",
  },
  {
    name: "장나리",
    src: "img_row/장나리_세로사진.jpeg",
    link: "https://www.youtube.com/embed/8IWmrn03KdE",
  },
  {
    name: "이가을",
    src: "img_row/이가을_세로사진.PNG",
    link: "https://www.youtube.com/embed/AOUFijGRSIs",
  },
  {
    name: "박해지",
    src: "img_row/박해지_세로사진.png",
    link: "https://www.youtube.com/embed/XJWw8SnUwG4",
  },
  {
    name: "김진영",
    src: "img_row/김진영_세로사진.jpeg",
    link: "https://www.youtube.com/embed/faMXNVb7XfU",
  },
  {
    name: "강단이",
    src: "img_row/강단이_세로사진.jpeg",
    link: "https://www.youtube.com/embed/A43uKW7Gn6s",
  },
  {
    name: "홍희수",
    src: "img_row/홍희수_세로사진.png",
    link: "https://www.youtube.com/embed/RGsnQtI2Thc",
  },
  {
    name: "김다연",
    src: "img_row/김다연_세로사진.png",
    link: "https://www.youtube.com/embed/DzbPLW9E58Q",
  },
];

function MainPage() {
  const dev = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div>
      <Header />
      <ImageMenu />
      <br />
      <Video />
      <br />
      <br />
      <div className="mainStyle">
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          2021 APPS EXHIBITION
        </p>
        <div style={dev}>
          <table className="table poster">
            <tbody>
              <tr>
                <td>
                  <ImagePoster
                    name={array[0].name}
                    poster={array[0].src}
                    link={array[0].link}
                  />
                </td>
                <td>
                  <ImagePoster
                    name={array[1].name}
                    poster={array[1].src}
                    link={array[1].link}
                  />
                </td>
                <td>
                  <ImagePoster
                    name={array[2].name}
                    poster={array[2].src}
                    link={array[2].link}
                  />
                </td>
                <td>
                  <ImagePoster
                    name={array[3].name}
                    poster={array[3].src}
                    link={array[3].link}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <ImagePoster
                    name={array[4].name}
                    poster={array[4].src}
                    link={array[4].link}
                  />
                </td>
                <td>
                  <ImagePoster
                    name={array[5].name}
                    poster={array[5].src}
                    link={array[5].link}
                  />
                </td>
                <td>
                  <ImagePoster
                    name={array[6].name}
                    poster={array[6].src}
                    link={array[6].link}
                  />
                </td>
                <td>
                  <ImagePoster
                    name={array[7].name}
                    poster={array[7].src}
                    link={array[7].link}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <ImagePoster
                    name={array[8].name}
                    poster={array[8].src}
                    link={array[8].link}
                  />
                </td>
                <td>
                  <ImagePoster
                    name={array[9].name}
                    poster={array[9].src}
                    link={array[9].link}
                  />
                </td>
                <td>
                  <ImagePoster
                    name={array[10].name}
                    poster={array[10].src}
                    link={array[10].link}
                  />
                </td>
                <td>
                  <ImagePoster
                    name={array[11].name}
                    poster={array[11].src}
                    link={array[11].link}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <ImagePoster
                    name={array[12].name}
                    poster={array[12].src}
                    link={array[12].link}
                  />
                </td>
                <td>
                  <ImagePoster
                    name={array[13].name}
                    poster={array[13].src}
                    link={array[13].link}
                  />
                </td>
                <td>
                  <ImagePoster
                    name={array[14].name}
                    poster={array[14].src}
                    link={array[14].link}
                  />
                </td>
                <td>
                  <ImagePoster
                    name={array[15].name}
                    poster={array[15].src}
                    link={array[15].link}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;

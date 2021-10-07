import React from "react";
import "../Assets/indiv.css";

const array = [
  {
    name: "스팟지도웹서비스",
    link: "https://www.youtube.com/embed/AWhB7zW9W34",
  },
  {
    name: "DeliveryRun",
    link: "https://www.youtube.com/embed/-hbDvNvVQWY",
  },
  {
    name: "일력",
    link: "https://www.youtube.com/embed/TYGCUgpeGoA",
  },
  {
    name: "LightAway",
    link: "https://www.youtube.com/embed/EkKZzgq8pQM",
  },
  {
    name: "SoundOfFairies",
    link: "https://www.youtube.com/embed/I55nPgM8Mf4",
  },
  {
    name: "Comsongz",
    link: "https://www.youtube.com/embed/IYjtPf2HV1o",
  },
  {
    name: "ALittleDruid",
    link: "https://www.youtube.com/embed/vpElwaERIK4",
  },
  {
    name: "강단이",
    link: "https://www.youtube.com/embed/A43uKW7Gn6s",
  },
  {
    name: "김다연",
    link: "https://www.youtube.com/embed/DzbPLW9E58Q",
  },
  {
    name: "김진영",
    link: "https://www.youtube.com/embed/faMXNVb7XfU",
  },
  {
    name: "박해지",
    link: "https://www.youtube.com/embed/XJWw8SnUwG4",
  },
  {
    name: "이가을",
    link: "https://www.youtube.com/embed/AOUFijGRSIs",
  },
  {
    name: "장나리",
    link: "https://www.youtube.com/embed/8IWmrn03KdE",
  },
  {
    name: "정민영",
    link: "https://www.youtube.com/embed/48zknixNfdk",
  },
  {
    name: "정채영",
    link: "https://www.youtube.com/embed/H3j685Fm_gY",
  },
  {
    name: "홍희수",
    link: "https://www.youtube.com/embed/RGsnQtI2Thc",
  },
];

function Youtube({ name }) {
  const realName = name;
  const index = array.findIndex((i) => i.name === realName);

  return (
    <div>
      <iframe
        src={array[index].link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Youtube;

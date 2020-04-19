import React from "react";
import { Ipresenter } from './interfaces/presenter';
import { Presnter } from "./Presenter";

export default {
  title: "Presenter / PresenterStory",
  component: Presnter,
};

const presnters: Ipresenter[] = [{
  name:"سینا ماشینی",
  education: "دانشگاه آزاد",
  image: "profile.jpg"
},{
  name:"سینا ماشینی",
  education: "دانشگاه آزاد",
  image: "profile.jpg"
},{
  name:"سینا ماشینی",
  education: "دانشگاه آزاد",
  image: "profile.jpg"
},{
  name:"سینا ماشینی",
  education: "دانشگاه آزاد",
  image: "profile.jpg"
},
];

export const Presenter = () => {
  return <Presnter presnters={presnters}/>;
};

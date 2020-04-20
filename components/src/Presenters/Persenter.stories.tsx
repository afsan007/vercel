import React from "react";
import { Presnter } from "./Presenter";
import { SimplePresenterProps } from "../Card/SimplePresenterCard/SimplePresenter"

export default {
  title: "Section Components | Presenters / Presenters",
  component: Presnter,
};

const presnters: SimplePresenterProps[] = [{
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

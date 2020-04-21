import React from "react";
import { NextPage } from "next";
import Page from "$components/layout/Page";
import { Banner, Presnter , SimplePresenterProps, UpComingWebbbinars, WebbinarCardProps } from "bp-components";
import Link from "next/link";

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

const renderWebinarLink = (children: JSX.Element) =>(
  <Link href="/webinnar">{children}</Link>
)

const webbinars: WebbinarCardProps[] = [
  {
  name: "وبینار برای گراف کیوال",
  image:"gph.png",
  presenter:"سینا ماشینی",
  presenterImage:"profile.jpg",
  keywords:["OOP", "Grphql", "Programmig", "برنامه نویسی"],
  date:"1.10.1399",
  link: renderWebinarLink
},
{
  name: "وبینار برای گراف کیوال",
  image:"gph.png",
  presenter:"سینا ماشینی",
  presenterImage:"profile.jpg",
  keywords:["OOP", "Grphql", "Programmig", "برنامه نویسی"],
  date:"1.10.1399",
  link: renderWebinarLink
},
{
  name: "وبینار برای گراف کیوال",
  image:"gph.png",
  presenter:"سینا ماشینی",
  presenterImage:"profile.jpg",
  keywords:["OOP", "Grphql", "Programmig", "برنامه نویسی"],
  date:"1.10.1399",
  link: renderWebinarLink
}
]

const renderAddItemLink = (children: JSX.Element) => (
  <Link href="/">{children}</Link>
);




const Home: NextPage<{ test: string }> = () => {

  return (
    <Page>
      <Banner
        title="درباره وبینار آوید"
        description="این سایت ابزاری برای برنامه ریزی و اجرای وبینارها برای عموم است. بسیاری از گویندگان Avid یا خارج از کشور می توانند وبینار خود را در اینجا اعلام کنند و ما بایگانی وبینارها و همچنین وبینارهای برنامه ریزی شده آینده را نشان می دهیم."
        linktitle="بیشتر بخوانید > "
        linkWrapper={renderAddItemLink}
      ></Banner>
      <UpComingWebbbinars webbinars={webbinars} />
      <Presnter presnters={presnters} />
    </Page>
  );
};

export default Home;

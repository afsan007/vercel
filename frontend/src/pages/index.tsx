import React from "react";
import { NextPage } from "next";
import Page from "$components/layout/Page";
import {
  Banner,
  Presnter,
  SimplePresenterProps,
  UpComingWebbbinars,
  WebbinarCardProps,
  Services,
  ServiceCardProps,
} from "bp-components";
import Link from "next/link";

const service: ServiceCardProps[] = [
  {
    name: "کتاب",
    description:
      "کتاب یکی از ابزار هایی که است می توان در لرنیتو به آن دسترسی داشت",
    image: "reader.png",
  },
  {
    name: "آزمون",
    description:
      "آزمون یکی از ابزار هایی که است می توان در لرنیتو به آن دسترسی داشت",
    image: "studio.png",
  },
  {
    name: "ویدیو",
    description:
      "ویدیو یکی از ابزار هایی که است می توان در لرنیتو به آن دسترسی داشت",
    image: "Store.png",
  },
];

const presnters: SimplePresenterProps[] = [
  {
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
  },
  {
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
  },
  {
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
  },
  {
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
  },
];

const webbinars: WebbinarCardProps[] = [
  {
    name: "وبینار برای گراف کیوال",
    image: "gph.png",
    presenter: "سینا ماشینی",
    presenterImage: "profile.jpg",
    keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
    date: "1.10.1399",
  },
  {
    name: "وبینار برای گراف کیوال",
    image: "gph.png",
    presenter: "سینا ماشینی",
    presenterImage: "profile.jpg",
    keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
    date: "1.10.1399",
  },
  {
    name: "وبینار برای گراف کیوال",
    image: "gph.png",
    presenter: "سینا ماشینی",
    presenterImage: "profile.jpg",
    keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
    date: "1.10.1399",
  },
];

const Home: NextPage<{ test: string }> = () => {
  const renderAddItemLink = (children: JSX.Element) => (
    <Link href="/">{children}</Link>
  );

  return (
    <Page>
      <Banner
        title="درباره وبینار آوید"
        description="این سایت ابزاری برای برنامه ریزی و اجرای وبینارها برای عموم است. بسیاری از گویندگان Avid یا خارج از کشور می توانند وبینار خود را در اینجا اعلام کنند و ما بایگانی وبینارها و همچنین وبینارهای برنامه ریزی شده آینده را نشان می دهیم."
        linktitle="بیشتر بخوانید > "
        linkWrapper={renderAddItemLink}
      />
      <Services services={service} />
      <UpComingWebbbinars webbinars={webbinars} />
      <Presnter presnters={presnters} />
    </Page>
  );
};

export default Home;

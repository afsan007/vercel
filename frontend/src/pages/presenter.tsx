import React from "react";
import { NextPage } from "next";
import {
  PresenterDescSection,
  PresenterPageWebbbinars,
  WebbinarCardProps,
} from "bp-components";
import Page from "$components/layout/Page";
import Link from "next/link";

const renderWebinarLink = (children: JSX.Element) => (
  <Link href="/webinnar">{children}</Link>
);

const webbinars: WebbinarCardProps[] = [
  {
    name: "وبینار برای گراف کیوال",
    image: "gph.png",
    presenter: "سینا ماشینی",
    presenterImage: "profile.jpg",
    keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
    date: "1.10.1399",
    link: renderWebinarLink,
  },
  {
    name: "وبینار برای گراف کیوال",
    image: "gph.png",
    presenter: "سینا ماشینی",
    presenterImage: "profile.jpg",
    keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
    date: "1.10.1399",
    link: renderWebinarLink,
  },
  {
    name: "وبینار برای گراف کیوال",
    image: "gph.png",
    presenter: "سینا ماشینی",
    presenterImage: "profile.jpg",
    keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
    date: "1.10.1399",
    link: renderWebinarLink,
  },
  {
    name: "وبینار برای گراف کیوال",
    image: "gph.png",
    presenter: "سینا ماشینی",
    presenterImage: "profile.jpg",
    keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
    date: "1.10.1399",
    link: renderWebinarLink,
  },
  {
    name: "وبینار برای گراف کیوال",
    image: "gph.png",
    presenter: "سینا ماشینی",
    presenterImage: "profile.jpg",
    keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
    date: "1.10.1399",
    link: renderWebinarLink,
  },
  {
    name: "وبینار برای گراف کیوال",
    image: "gph.png",
    presenter: "سینا ماشینی",
    presenterImage: "profile.jpg",
    keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
    date: "1.10.1399",
    link: renderWebinarLink,
  },
];

const desc = `GraphQL یک پرس و جوی داده ای منبع باز و زبان دستکاری برای API ها است. همچنین یک زمان اجرا برای پاسخ دادن به پرس و جوها با استفاده از داده های موجود است. GraphQL در سال 2012 توسط Facebook توسعه یافت و سپس در سال 2015 به صورت عمومی منتشر شد. این زبان یک رویکرد کار آمد، قدرتمند و انعطاف پذیر را برای توسعه API های وب فراهم می کند و با REST و سایر معماری های سرویس وب مقایسه می شود و در تقابل است. GraphQL از خواندن، نوشتن یا همان تویض و اشتراک گذاری تغییرات در داده ها (به روز رسانی در زمان واقعی) پشتیبانی می کند.
`;

const Presenter: NextPage<{ test: string }> = () => {
  return (
    <Page>
      <PresenterDescSection
        prsenterUniversity="دانشگاه آزاد"
        prsenterImage="profile.jpg"
        prsenterName="سینا ماشینی"
        prsenterEducation="مهندسی نرم افزار"
        description={desc}
      />
      <PresenterPageWebbbinars webbinars={webbinars} />
    </Page>
  );
};

export default Presenter;

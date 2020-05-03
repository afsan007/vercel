import React from "react";
import { NextPage } from "next";
import { VideoCards, VideoCardProps, WebinarDescSection } from "bp-components";
import Page from "$components/layout/Page";


const videos: VideoCardProps [] = [
  {   
      desc:"برگزاری آزمون آنلاین از گروه ؟" ,
      video: "https://as8.cdn.asset.aparat.com/aparat-video/ad3ac60ab5eabb29acb0f3c10d8bf19419820809-144p.mp4",
      duration: "1:37"
  },
  {   
      desc:"دسترسی به سوال های عمومی کنکور هنر در لرنیتو" ,
      video: "https://aspb2.cdn.asset.aparat.com/aparat-video/579d2812c6f5a2bce39ca1c3a9ec3fb27386709-144p.mp4",
      duration: "0:37"
  },
  {   
      desc:"چطور یک آزمون چاپی را به راحتی تصحیح کنیم؟" ,
      video: "https://hw5.cdn.asset.aparat.com/aparat-video/9d7d7dd88af07786ba90406c743048b414501458-144p.mp4",
      duration: "0:59"
  },
];

const keywords = ["graphql","coding", "برنامه نویسی", "OOP"];

const desc = `GraphQL یک پرس و جوی داده ای منبع باز و زبان دستکاری برای API ها است. همچنین یک زمان اجرا برای پاسخ دادن به پرس و جوها با استفاده از داده های موجود است. GraphQL در سال 2012 توسط Facebook توسعه یافت و سپس در سال 2015 به صورت عمومی منتشر شد. این زبان یک رویکرد کار آمد، قدرتمند و انعطاف پذیر را برای توسعه API های وب فراهم می کند و با REST و سایر معماری های سرویس وب مقایسه می شود و در تقابل است. GraphQL از خواندن، نوشتن یا همان تویض و اشتراک گذاری تغییرات در داده ها (به روز رسانی در زمان واقعی) پشتیبانی می کند.
`


const Webbinar: NextPage<{ test: string }> = () => {
    return (
      <Page>
            <WebinarDescSection 
              title="وبینار برای گراف کیوال" 
              image="gph.png" 
              prsenterImage="profile.jpg"
              prsenterName="سینا ماشینی"
              prsenterEducation="دانشگاه آزاد"
              keywords={keywords} 
              description={desc} />
            <VideoCards videos = {videos} />
      </Page>
    );
  };
  
  export default Webbinar;
  
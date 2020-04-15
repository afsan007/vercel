import React from "react";
import { NextPage } from "next";
import Page from "$components/layout/Page";
import { Banner } from "bp-components";
import Link from "next/link";

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
      ></Banner>
    </Page>
  );
};

export default Home;

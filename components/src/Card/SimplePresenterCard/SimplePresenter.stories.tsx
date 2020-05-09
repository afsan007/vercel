import React from "react";
import { SimplePresenter } from "./SimplePresenter";

export default {
  title: "ATOMS | Card / SimplePresenterCard",
  component: SimplePresenter,
};

const renderPresenterLink = (children: JSX.Element) => (
  <a href="#">{children}</a>
);

export const Presenter = () => {
  return (
    <SimplePresenter
      name="سینا ماشینی"
      education="دانشگاه آزاد"
      image="profile.jpg"
      link={renderPresenterLink}
    />
  );
};

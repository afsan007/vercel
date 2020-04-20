import React from "react";
import { SimplePresenter } from "./SimplePresenter";

export default {
    title: "Card / SimplePresenterCard",
    component: SimplePresenter
};

export const Presenter = () => {
    return <SimplePresenter name="سینا ماشینی" education="دانشگاه آزاد" image="profile.jpg" />
};


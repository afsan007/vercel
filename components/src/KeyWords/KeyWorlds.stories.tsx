
import React from "react";
import { WebbinarKeyWords } from "./KeyWords";

export default {
    title: "ATOMS | Keywords / WebbinarKeyWords",
    component: WebbinarKeyWords
};

export const Keywords = () => {
    const keywords = ["graphql", "coding", "برنامه نویسی", "OOP"];
    return <WebbinarKeyWords keywords={keywords} />
};


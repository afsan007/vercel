import React from "react";
import { Header } from "./Header";
import { SearchComponent } from "../Search/SearchToolbar.stories";

export default {
  title: "Layout Components | NavBar / Header",
  component: Header,
};

const HomeLink = (childeren:JSX.Element) => <a href="#">{childeren}</a>

export const HeaderComponent = () => {
  return (
    <Header src="Logo.png" HomeLink = {HomeLink}>
      <SearchComponent />
    </Header>
  );
};

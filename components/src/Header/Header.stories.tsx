import React from "react";
import { Header } from "./Header";
import { SearchComponent } from "../Search/SearchToolbar.stories";

export default {
  title: "Layout Components | NavBar / Header",
  component: Header,
};

export const HeaderComponent = () => {
  return (
    <Header src="Logo.png">
      <SearchComponent />
    </Header>
  );
};

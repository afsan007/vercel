import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";

const ToolBar = styled(Toolbar)`
  background-color: #104c70;
  padding-left: 14px;
`;

export interface HeaderProps {
  src: string;
}

export const Header = ({ src }: HeaderProps) => {
  return (
    <AppBar>
      <ToolBar>
        <img src={src} width="110px" />
      </ToolBar>
    </AppBar>
  );
};
export default Header;

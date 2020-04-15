import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";

const ToolBar = styled(Toolbar)`
  background-color: #104c70;
  padding-left: 14px;
`;

const Img = styled.img`
  width: 110px;
`;

export interface HeaderProps {
  src: string;
}

export const Header = ({ src }: HeaderProps) => {
  return (
    <AppBar>
      <ToolBar>
        <Img src={src} />
      </ToolBar>
    </AppBar>
  );
};
export default Header;

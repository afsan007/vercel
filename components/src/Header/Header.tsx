import React, { FC } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const ToolBar = styled(Toolbar)`
  background-color: #ffffff;
  height: 100px;
`;

const Img = styled.img`
  width: 110px;
  @media (max-width: 767px) {
    width: 80px;
  }
`;

export interface HeaderProps {
  src: string;
  HomeLink: (children: JSX.Element) => JSX.Element;
  children: JSX.Element[] | JSX.Element;
}

export const Header: FC<HeaderProps> = ({ src, children, HomeLink }) => {
  return (
    <AppBar>
      <ToolBar>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item lg={2} xs={4} sm={3} md={2} xl={2}>
          {HomeLink(<Img src={src} />)}
          </Grid>
          <Grid item lg={6} xs={4} sm={3} md={3} xl={6}>
            {children}
          </Grid>
          <Grid item lg={3} xs={4} sm={4} md={5} xl={3}></Grid>
        </Grid>
      </ToolBar>
    </AppBar>
  );
};
export default Header;

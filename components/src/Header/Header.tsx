import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import { Search } from "../Search/Search";
import Grid from "@material-ui/core/Grid";

const ToolBar = styled(Toolbar)`
  background-color: #ffffff;
  height: 100px;
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
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={0}
        >
          <Grid item lg={1} sm={1} md={1} xl={1} />
          <Grid item lg={2} xs={5} sm={3} md={2} xl={2}>
            <Img src={src} />
          </Grid>
          <Grid item lg={3} xs={7} sm={3} md={3} xl={2}>
            <Search />
          </Grid>
          <Grid item lg={6} sm={4} md={5} xl={7}></Grid>
        </Grid>
      </ToolBar>
    </AppBar>
  );
};
export default Header;

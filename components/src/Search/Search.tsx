import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const Input = styled.input`
  border-style: none;
  color: #c2c2c2;
  font-family: "IRANSans";
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

const InputIcon = styled(SearchIcon)`
  width: 22px;
  height: 24px;
  color: #7a7a7a;
`;

const Root = styled(Grid)`
  border-style: solid;
  border-width: 1px;
  border-color: #979797;
  border-radius: 5px;
  height: 32px;
  background-color: #ffffff;
`;
export const Search = () => {
  return (
    <Root
      container
      direction="row"
      justify="space-around"
      alignItems="flex-start"
      spacing={1}
    >
      <Grid item lg={9} xs={8} sm={7} md={9} xl={11}>
        <Input type="text" placeholder="جستجو" />
      </Grid>
      <Grid item lg={1} xs={2} sm={1} md={1} xl={1}>
        <InputIcon />
      </Grid>
    </Root>
  );
};

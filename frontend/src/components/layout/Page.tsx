import React, { FC } from "react";
import Head from "next/head";
import { bool, node, InferProps } from "prop-types";
import { Header, RoundedButton } from "bp-components";
import { Search } from "../Search/Search";
import Link from "next/link";
import { AuthProvider } from '../../pages/auth/context/AuthContext';
import AuthContext from '../../pages/auth/context/AuthContext';
import styled from "styled-components";
import store from 'store';

const Name = styled.span`
 color: black;
`
const userpart =  <AuthProvider>
<AuthContext.Consumer>                
  {(props) => {   
    let login = <RoundedButton label="ورود" onClick = {props.login} variant = "outlined" />;
    if (store.get('user'))
      login = <RoundedButton label="خروج" onClick = {props.logout} variant = "contained" />;          
    return (
      <div>
      <Name>{props.getUser()?.email}</Name>
      {login}
      </div>
    )
    }}
</AuthContext.Consumer>
</AuthProvider>;

const HomeLink = (childeren:JSX.Element | JSX.Element[]) => <Link href="/"><a>{childeren}</a></Link>

type PropTypes = InferProps<typeof propTypes>;

const Page: FC<PropTypes> = (props) => (
  <div>
    {props.headless ? null : (
      <Head>
        <title>Educational Package</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylsheet" href="./global.css" />
      </Head>
    )}
    <Header src="/Logo.png" HomeLink = {HomeLink} userpart = {userpart} >
      <Search />
    </Header>
   
    {props.children}
  </div>
);

const propTypes = {
  headless: bool,
  children: node,
};

Page.propTypes = propTypes;

export default Page;

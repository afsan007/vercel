import React, { FC } from "react";
import Head from "next/head";
import { bool, node, InferProps } from "prop-types";
import { Header } from "bp-components";
import { Search } from "../Search/Search";
import Link from "next/link";
import { AuthProvider } from '../../pages/auth/context/AuthContext';
import AuthContext from '../../pages/auth/context/AuthContext';
import styled from "styled-components";
import store from 'store';

const Name = styled.span`
 color: black;
`

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
    <Header src="/Logo.png" HomeLink = {HomeLink}>
      <Search />
      <AuthProvider>
                <AuthContext.Consumer>                
                  {(props) => {   
                    console.log('user', store.get('user'))
                    console.log(props);                             
                    return (
                      <a onClick={() => props.logout()}>
                      <Name>{props.getUser()?.email}</Name>
                      </a>
                    )
                    }}
     </AuthContext.Consumer>
        </AuthProvider>
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

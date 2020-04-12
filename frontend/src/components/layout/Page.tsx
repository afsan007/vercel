import React, { FC } from 'react';
import Head from 'next/head';
import { bool, node, InferProps } from 'prop-types';
import { Header } from 'bp-components';

type PropTypes = InferProps<typeof propTypes>;

const Page: FC<PropTypes> = (props) => (
  <div>
    {props.headless ? null : (
      <Head>
        <title>Educational Package</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
    )}
    <Header src="Logo.png" />
    {props.children}
  </div>
);

const propTypes = {
  headless: bool,
  children: node,
};

Page.propTypes = propTypes;

export default Page;

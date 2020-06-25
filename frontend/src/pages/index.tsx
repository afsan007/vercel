import React from 'react'
import { NextPage } from 'next'
// import Page from '$components/layout/Page';

const Home: NextPage<{ test: string }> = () => {
	return <h1 className='container'>Welcome to NextJS</h1>
}

export default Home

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'

const Title = styled.h1`
  color:#069;
  font-size:40px;
`

import withAnalytics from '~/hocs/withAnalytics'
const Home = ()=>(
  <div>
    <Head>
      <title>HOME</title>
    </Head>
    <img src="/static/flor.jpg" width="200"/>
    <Title>Hello world next</Title>
    <Link href="/users">
     <a>users</a>
    </Link>
  </div>
)
export default withAnalytics()(Home)
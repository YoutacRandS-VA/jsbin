import React from 'react';
import { Helmet } from 'react-helmet';

const STATIC = process.env.REACT_APP_STATIC;

const Head = () =>
  <Helmet>
    <meta charSet="utf-8" />
    <title>JS Bin</title>
    <link rel="icon" href={`${STATIC}/images/favicon.png`} />
    <link rel="shortcut icon" href={`${STATIC}/images/favicon.png`} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="canonical" href="https://jsbin.com" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  </Helmet>;

export default Head;
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/theme';
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../lib/apolloClient"
import { CommentContext } from "../lib/commentContext"
import { AuthContext } from "../lib/authContext"
import useLocalState from '../lib/useLocalState';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState)
  const [comment, setComment] = useLocalState("comment")
  const [auth, setAuth] = useLocalState("auth")
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <CommentContext.Provider value={{ comment, setComment }}>
        <AuthContext.Provider value={{ auth, setAuth }}>
          <React.Fragment>
            <Head>
              <title>My page</title>
              <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </React.Fragment>
        </AuthContext.Provider>
      </CommentContext.Provider>
    </ApolloProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
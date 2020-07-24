import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import GlobalStyle from './GlobalStyle';



import { Grommet } from "grommet";
import { grommet } from "grommet/themes";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
        </Helmet>
        <GlobalStyle />
        <Grommet
          theme={grommet}
          full
          style={{
            display: "flex",
            flexDirection: "column",
          }}
         >
          {children}
        </Grommet>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

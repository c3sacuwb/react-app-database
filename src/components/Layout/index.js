import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

const Layout = ({ children }) => <Container>{children}</Container>;

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;

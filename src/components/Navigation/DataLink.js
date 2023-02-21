import React from 'react';
import PropTypes from 'prop-types';
import startsWith from 'lodash/startsWith';
import { Link } from 'react-router-dom';

const isExternalLink = to =>
  startsWith(to, 'http') || startsWith(to, 'mailto:') || startsWith(to, 'tel:');

const DataLink = ({ to = '#', children, ...rest }) =>
  isExternalLink(to) ? (
    <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  ) : (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );

DataLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
};

export default DataLink;

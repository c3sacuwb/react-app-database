import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = props => (
  <div className="mi-sectiontitle">
    <h1 className="section-title">{props.title}</h1>
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionTitle;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import countBy from 'lodash/countBy';
import { withGoogleSheets } from 'react-db-google-sheets';
import createD3 from '../helpers/createD3';

import './index.css';

class Page extends Component {
  static propTypes = {
    db: PropTypes.object
  };

  componentDidMount() {
    this.createChart();
  }

  settings = {
    fillColor: 'steelblue',
    xKey: 'answer',
    yKey: 'count'
  };

  questions = [
    {
      question: 'Level of effort [Level of effort you put into the course]',
      choices: ['Poor', 'Fair', 'Satisfactory', 'Very good', 'Excellent']
    }
  ];

  createChart = () => {
    const chartContainer = document.getElementById('chart');

    if (chartContainer) {
      chartContainer.innerHTML = '';

      const allData = this.props.db['Form Responses 1'];

      this.questions.forEach(q => {
        const counts = countBy(allData, q.question);
        const data = q.choices.map(c => ({
          answer: c,
          count: counts[c] || 0
        }));

        const settings = {
          ...this.settings,
          title: q.question,
          data
        };

        createD3(settings);
      });
    } else {
      this.createChart();
    }
  };

  render() {
    return (
      <div id="page">
        <h1 className="title">Results</h1>
        <div style={{ marginTop: '60px' }}>
          <div id="graph">
            <div id="chart" />
          </div>
        </div>
      </div>
    );
  }
}

export default withGoogleSheets('Form Responses 1')(Page);

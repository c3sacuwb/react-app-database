import React, { Component } from 'react';
import PropTypes from 'prop-types';
import countBy from 'lodash/countBy';
import { withGoogleSheets } from 'react-db-google-sheets';
import createD3 from '../helpers/createD3';
import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css';

class Page extends Component {
  static propTypes = {
    db: PropTypes.object
  };

  componentDidMount() {
    this.createChart();
  }

  settings = {
    fillColor: 'lightBlue',
    xKey: 'answer',
    yKey: 'count'
  };

  questions = [
    {
      question: 'Class name',
      choices: ['CSS422', 'CSS343', 'CSS401', 'CSS456', 'CSS 360']
    },

    {
      question: 'Course content [Course organized to allow all students to participate fully]',
      choices: ['Strongly agree', 'Neutral', 'Agree', 'Strongly disagree', 'Disagree']
    },

    {
      question: 'Level of effort [Level of effort you put into the course]',
      choices: ['Poor', 'Fair', 'Satisfactory', 'Very good', 'Excellent']
    },

    {
      question: 'Contribution to learning [Level of skill/knowledge at start of course]',
      choices: ['Satisfactory', 'Excellent', 'Fair', 'Very Good', 'Excellent','Poor']
    },
    {
      question: 'Contribution to learning [Level of skill/knowledge required to complete the course]',
      choices: ['Satisfactory', 'Excellent', 'Fair', 'Very Good', 'Excellent','Poor']
    }
  ];

  createChart = () => {
    const allData = this.props.db['Form Responses 1'];

    this.questions.forEach((q, i) => {
      const chartContainer = document.getElementById('chart-' + (i + 1));

      if (chartContainer) {
        chartContainer.innerHTML = '';

        const counts = countBy(allData, q.question);
        const data = q.choices.map(c => ({
          answer: c,
          count: counts[c] || 0
        }));

        const settings = {
          ...this.settings,
          elementId: 'chart-' + (i + 1),
          title: q.question,
          data
        };

        createD3(settings);
      } else {
        this.createChart();
      }
    });
  };

  render() {
    return (
      <div id="page">
        <h1 className="title">Results</h1>
        <div style={{ marginTop: '60px' }}>
          <div id="graph">
            {this.questions.map((_, i) => (
              <div id={'chart-' + (i + 1)} key={i} />
            ))}
          </div>
          

        </div>
      </div>
    );
  }
}

export default withGoogleSheets('Form Responses 1')(Page);

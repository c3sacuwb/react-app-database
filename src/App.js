import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import GoogleSheetsProvider from 'react-db-google-sheets';
import { Layout, Navigation } from './components';
import Routes from './Routes';

import './App.css';

const App = () => (
  <GoogleSheetsProvider>
    <Router>
      <Navigation />
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </GoogleSheetsProvider>
);

export default App;

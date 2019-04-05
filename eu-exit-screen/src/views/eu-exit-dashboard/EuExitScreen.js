import React, { Component } from 'react';
import { initAll } from 'govuk-frontend';
import Navbar from '../../components/navbar/Navbar';
import "govuk-frontend/all.scss";
import './EuExitScreen.css';

class EuExitScreen extends Component {
  componentDidMount() {
    initAll();
  }

  render() {
    return (
      <div className="EuExitScreen">
        <Navbar />
      </div>
    );
  }
}

export default EuExitScreen;

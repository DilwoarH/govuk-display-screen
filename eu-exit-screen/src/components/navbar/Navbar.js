import React, { Component } from 'react';
import './Navbar.css';
import logo from './govuk-logo.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.title = "GOV.UK EU Exit";
  }
  render() {
    return (
      <div className="Navbar">
        <header className="govuk-header " role="banner" data-module="header">
          <div className="govuk-header__container">
            <div className="govuk-header__logo">
              <a href="/" className="govuk-header__link govuk-header__link--homepage">
                <span className="govuk-header__logotype">
                  <span className="govuk-header__logotype-text">
                    {this.title}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;

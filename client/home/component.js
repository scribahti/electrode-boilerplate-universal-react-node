import React, {PropTypes} from "react";
import {connect} from "react-redux";
import electrodeLogo from "./electrode.svg";

class HomeWrapper extends React.Component {
  render() {
    return (
      <Home data={this.props.data}/>
    );
  }
}

HomeWrapper.propTypes = {
  data: PropTypes.string
};

/* eslint-disable max-len */

export class Home extends React.Component {
  render() {
    return (
      <div>
        <div style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          <a href="https://github.com/electrode-io"> <img style={{
            width: "100%"
          }} alt="Electrode Logo" src={electrodeLogo}/>
          </a>
        </div>
        <h2>Demonstration Components</h2>
        <ul>
          <li><a href="/csrf">CSRF protection using electrode-csrf-jwt</a></li>
          <li>
            <a href="/above-the-fold?skip=true">
              Above the Fold Render with skip=true - increase your App's performance by using a skip prop
            </a>
          </li>
          <li>
            <a href="/above-the-fold?skip=false">
              Above the Fold Render with skip=false - increase your App's performance by using a skip prop
            </a>
          </li>
          <li><a href="/ssrcachingsimpletype">SSR Caching Simple Type Example</a></li>
          <li><a href="/ssrcachingtemplatetype">SSR Caching Template Type Example</a></li>
          <li><a href="/fuel-savings">Demo App from react-slingshot</a></li>
        </ul>
        <p>{this.props.data}</p>
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.string
};

const mapStateToProps = (state) => ({
  data: state && state.data
});

export default connect(
  mapStateToProps
)(HomeWrapper);

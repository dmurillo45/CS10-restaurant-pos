import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';

class Login extends React.Component {
  state = { pin: '', pass: '' };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state, this.props.history.push);
  };

  render() {
    return (
      <div>
        <Link to="/register">Don't have an account? Register here</Link>
        <form onSubmit={this.handleSubmit}>
        <input
            placeholder="pin"
            type="text"
            onChange={this.handleChange}
            name="pin"
            minLength="6"
            maxLength="6"
            autoComplete="username"
            value={this.state.pin}
          />
          <input
            placeholder="password"
            type="password"
            onChange={this.handleChange}
            name="pass"
            minLength="8"
            maxLength="30"
            autoComplete="current-password"
            value={this.state.pass}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default connect(
  null,
  { login }
)(Login);
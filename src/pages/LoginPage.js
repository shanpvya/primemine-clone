import React, { Component } from 'react';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    error: ''
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: ''
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (this.props.login(username, password)) {
      this.setState({ username: '', password: '' });
    } else {
      this.setState({ error: 'Invalid username or password' });
    }
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <h1>Login</h1>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
            </div>
            {this.state.error && <div className="error-message">{this.state.error}</div>}
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
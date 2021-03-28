import React from "react";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <form class="sign-in">
        <h2>Sign in</h2>
        <label className="input">
          Email
          <input type="email" />
        </label>
        <label className="input">
          Password
          <input type="password" />
        </label>
        <input type="submit" value="Sign in" />
      </form>
    );
  }
}

export default SignIn;

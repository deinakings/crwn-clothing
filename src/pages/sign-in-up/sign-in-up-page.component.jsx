import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-up-page.styles.scss";

const SignInUpPage = () => {
  return (
    <div className="sign-in-up">
      <SignIn />
    </div>
  );
};

export default SignInUpPage;

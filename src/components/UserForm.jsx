import React, { useState } from "react";
import FormInput from "./SignInForm.js";

const UserForm = () => {
  const [values, setValues] = useState({
    userProfile: {
      username: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    },
  });

  console.log(values);

  // const { username, email, confirmEmail, password, confirmPassword } = values.userProfile
  // console.log('USER', username)
  Object.values(values).map((value) => console.log("value", value));

  //import Image from 'next/image
  //import logoImg from "./../../../../public/nofomoe-logo.svg";
  //import styes from "./../../../../scss/forms/SignUpForm.module.scss"

  const inputs = [
    {
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage: `"Username should be 3-16 characters and shouldn\'t any special characters."`,
      required: true,
    },
    {
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "email",
      erorMessage: "Pleas provide a valid email.  example: john@gmail.com",
      required: true,
    },
    {
      name: "confirmEmail",
      type: "text",
      placeholder: "Confirm Email",
      label: "Confirm Email",
      errorMessage: "Both emails don't match",
      pattern: values.email,
    },
    {
      name: "password",
      type: "password",
      placeholde: "Password",
      label: "Password",
      errorMessage:
        "Password should contain and include 1 letter, 1 number and 1 special character",
      pattern: "/^ (?=.* [0-9]) (?=.* [a-zA-Z]) ([a-zA-Z0-9]+)$/",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Both password don't match, please try again",
      pattern: values.password,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} action="">
        {inputs.map((input) => {
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />;
        })}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;

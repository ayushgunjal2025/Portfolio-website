import React from 'react';
import Template from '../components/Template';
import Image from "../assets/3d-render-secure-login-password-illustration-removebg-preview.png";

function Login() {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <Template
        heading="Welcome Back"
        desc1="Please enter your credentials to access your account and explore the full range of projects and services"
        desc2="If you don't have an account, you can easily sign up to join our community"
        formtype="login"
        Image={Image}
      />
    </div>
  );
}

export default Login;

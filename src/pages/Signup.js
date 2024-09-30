import React from 'react';
import Template from '../components/Template';
import Image from "../assets/13317062_5208993-removebg-preview.png";

function Signup() {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <Template
        heading="Get Started"
        desc1="Join our community by creating an account to gain access to exclusive content and stay updated with my latest projects"
        desc2="Fill in the details below to get started"
        formtype="signup"
        Image={Image}
      />
    </div>
  );
}

export default Signup;

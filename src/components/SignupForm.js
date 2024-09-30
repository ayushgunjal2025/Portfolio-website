import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function SignupForm() {
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    password: "",
    ConfirmPassword: ""
  });

  const [error, setError] = useState(""); // Error state for error messages
  const [success, setSuccess] = useState(""); // Success message state

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();

    // Reset error and success states before making the request
    setError("");
    setSuccess("");

    if (formData.password !== formData.ConfirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const userData = {
      first_name: formData.Firstname,
      last_name: formData.Lastname,
      email: formData.email,
      password: formData.password,
    };

    try {
      // Make async API request to sign up the user
      const response = await axios.post('https://signin-api-zwg0.onrender.com/users/', userData);
      setSuccess("User successfully signed up!");
      toast.success("User successfully signed up!")
      console.log("User signed up:", response.data);
    } catch (error) {
      // Handle API error
      setError("Error signing up user: " + (error.response?.data?.message || error.message));
      toast.error("Error signing up user");
      console.error("Error:", error);
    }
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}

      <div className="flex">
        <div className="w-1/2 pr-2">
          <label htmlFor='Firstname' className="block text-white mb-2">First Name</label>
          <input
            type='text'
            name='Firstname'
            id='Firstname'
            placeholder='First Name'
            onChange={changeHandler}
            value={formData.Firstname}
            className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label htmlFor='Lastname' className="block text-white mb-2">Last Name</label>
          <input
            type='text'
            name='Lastname'
            id='Lastname'
            placeholder='Last Name'
            onChange={changeHandler}
            value={formData.Lastname}
            className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
          />
        </div>
      </div>

      <div>
        <label htmlFor='email' className="block text-white mb-2">Email Address</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter email address'
          onChange={changeHandler}
          value={formData.email}
          className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
        />
      </div>

      <div className="flex">
        <div className="w-1/2 pr-2">
          <label htmlFor='password' className="block text-white mb-2">Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Password'
            onChange={changeHandler}
            value={formData.password}
            className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label htmlFor='ConfirmPassword' className="block text-white mb-2">Confirm Password</label>
          <input
            type='password'
            name='ConfirmPassword'
            id='ConfirmPassword'
            placeholder='Confirm Password'
            onChange={changeHandler}
            value={formData.ConfirmPassword}
            className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg focus:outline-none focus:shadow-outline mt-4"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;

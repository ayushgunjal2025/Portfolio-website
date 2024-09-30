import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function LoginForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // To programmatically navigate

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();
    setError("");

    try {
      // Fetching all users to check the credentials
      const response = await axios.get('https://signin-api-zwg0.onrender.com/users');

      const users = response.data;

      // Checking if the email and password match any user in the data
      const user = users.find(user => user.email === formData.email && user.password === formData.password);
      
      if (user) {
        // If a user is found, we can assume login is successful
        localStorage.setItem('authToken', 'someGeneratedToken'); // Save token to local storage (or actual token if available)
        setIsLoggedIn(true);  // Update the state to logged in
        toast.success("You are authenticated user!"); // Toast message
        navigate('/'); // Redirect to home
      } else {
        setError("Login failed. Please check your credentials.");
        toast.error("Login failed");
      }
    } catch (error) {
      setError("An error occurred while trying to log in. Please try again.");
      toast.error("An error occurred while trying to log in.");
    }
  }

  return (
    <form onSubmit={submitHandler} className="mx-auto max-w-md">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          onChange={changeHandler}
          value={formData.email}
          className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-white mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={changeHandler}
          value={formData.password}
          className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg focus:outline-none focus:shadow-outline"
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;

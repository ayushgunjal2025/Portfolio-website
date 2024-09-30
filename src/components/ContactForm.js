import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            // Make an API request to submit the contact form data
            const response = await axios.post('https://contact-api-1on2.onrender.com/contacts/', formData);
            toast.success("Message sent successfully!");
            // alert("Message sent successfully!");
            console.log("Response:", response.data);
            // Reset form data after successful submission
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            toast.error("Error sending message: " + error.message);
            // alert("Error sending message: " + error.message);
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <div>
                <label htmlFor='name' className="block text-white mb-2">Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Your Name'
                    onChange={changeHandler}
                    value={formData.name}
                    className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
                />
            </div>

            <div>
                <label htmlFor='email' className="block text-white mb-2">Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Your Email Address'
                    onChange={changeHandler}
                    value={formData.email}
                    className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
                />
            </div>

            <div>
                <label htmlFor='subject' className="block text-white mb-2">Subject</label>
                <input
                    type='text'
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                    onChange={changeHandler}
                    value={formData.subject}
                    className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
                />
            </div>

            <div>
                <label htmlFor='message' className="block text-white mb-2">Message</label>
                <textarea
                    name='message'
                    id='message'
                    placeholder='Your Message'
                    onChange={changeHandler}
                    value={formData.message}
                    className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
                    rows="4"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg focus:outline-none focus:shadow-outline mt-4"
            >
                Send Message
            </button>
        </form>
    );
}

export default ContactForm;

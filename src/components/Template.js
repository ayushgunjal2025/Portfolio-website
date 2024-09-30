import React from 'react';
import { IoLogoGoogle } from "react-icons/io5";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


function Template({ heading, desc1, desc2, formtype, Image }) {
    return (
        <div className="flex flex-row text-white mt-12">
            <div className="w-1/2 p-4">
                <div>
                    <h1 className="text-4xl font-bold">{heading}</h1>
                    <p className="mt-2 text-lg">{desc1}</p>
                    <p className="mt-2 text-lg text-blue-600">{desc2}</p>
                </div>

                <div className="mt-8">
                    {formtype === "signup" ? <SignupForm /> : <LoginForm />}
                </div>

                <div className="flex items-center my-8">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <div className="mx-4 text-gray-400 font-bold">OR</div>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <div className="mt-8">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg flex items-center justify-center text-lg focus:outline-none focus:shadow-outline">
                        <IoLogoGoogle className="mr-3 text-xl" />
                        <span>Sign in with Google</span>
                    </button>
                </div>

            </div>

            <div className="w-1/2 flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                    <img src={Image} className="rounded-lg shadow-lg w-full" alt="profile" />
                </div>
            </div>
        </div>
    );
}

export default Template;

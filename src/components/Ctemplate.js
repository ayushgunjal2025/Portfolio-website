import React from 'react';
import { IoLogoGoogle } from "react-icons/io5";
import ContactForm from './ContactForm';

function Ctemplate({ heading1, des1, des2, img1 }) {
    return (
        <div className="flex flex-row text-white mt-12 mx-auto max-w-6xl"> {/* Centering horizontally with mx-auto and setting max width */}
            <div className="w-1/2 p-4">
                <div>
                    <h1 className="text-4xl font-bold">{heading1}</h1>
                    <p className="mt-2 text-lg">{des1}</p>
                    <p className="mt-2 text-lg text-blue-600">{des2}</p>
                </div>

                <div className="mt-8">
                    <ContactForm />
                </div>

                <div className="flex items-center my-8">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <div className="mx-4 text-gray-400 font-bold">OR</div>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <div className="mt-8">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg flex items-center justify-center text-lg focus:outline-none focus:shadow-outline">
                        <IoLogoGoogle className="mr-3 text-xl" />
                        <span>Contact us through Google</span>
                    </button>
                </div>
            </div>

            <div className="w-1/2 flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                    <img src={img1} className="rounded-lg shadow-lg w-full" alt="contact" />
                </div>
            </div>
        </div>
    )
}

export default Ctemplate;

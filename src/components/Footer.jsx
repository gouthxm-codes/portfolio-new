import React from 'react'
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="py-5 border-t-3/2">
            <div className="flex justify-center mt-4">
                <a href="https://github.com/gouthxm-codes" className="text-xl m-1 p-1 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300">
                    <FaGithub />
                    <span className="sr-only">Github</span>
                </a>
                <a href="https://instagram.com/gouthxm.exe" className="text-xl m-1 p-1 sm:p-2 text-pink-800 hover:bg-pink-800 rounded-full hover:text-white transition-colors duration-300">
                    <FaInstagram />
                    <span className="sr-only">Instagram</span>
                </a>
                <a href="mailto:ninja777official@gmail.com" className="text-xl m-1 p-1 sm:p-2 text-green-900 hover:bg-green-900 rounded-full hover:text-white transition-colors duration-300">
                    <FaEnvelope />
                    <span className="sr-only">Email</span>
                </a>
            </div>
            <div className="flex justify-center mt-4">
                <p className="text-black mb-4">Made With <span className='mr-2' role="link" aria-label='heart'>❤️ By <a className='text-blue-600 hover:underline' href='https://goutham.codes'>Goutham</a></span></p>
            </div>
        </div>
    )
}

export default Footer
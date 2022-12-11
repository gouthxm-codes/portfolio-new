import React from 'react'
import logo from "../images/logo.png"
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
const Card = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5 drop-shadow-sm">
                <div>
                    <img src={logo} alt="" className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" />
                </div>
                <div className="text-center mt-5">
                    <p className="text-xl sm:text-2xl text-gray-900 ">Goutham Vishnu</p>
                    <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2 ">Aspiring MERN Stack Dev</p>
                    <div className="flex align-center justify-center mt-4">
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


                </div>
            </div>
        </div>
    )
}

export default Card
import React from 'react'
import { FaNode } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { SiPhp, SiJavascript } from 'react-icons/si'
const Skills = () => {
    return (
        <div className="max-w-4xl mx-auto justify-center py-12" id='tech'>
            <p className="text-2xl text-center text-black sm:text-4xl pt-4 font-bold">My Skills</p>

            <div className="flex flex-wrap justify-center pt-2">
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <FaNode className='mx-auto text-4xl' color='#215732' />
                    <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">Node.Js</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiMongodb className='mx-auto text-4xl' color='#215732' />
                    <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">MongoDB</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <FaReact className='mx-auto text-4xl' color='#61DBFB' />
                    <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">React.Js</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiExpress className='mx-auto text-4xl' />
                    <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">Express</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiPhp className='mx-auto text-4xl' color='#474A8A' />
                    <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">PHP</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiJavascript className='mx-auto text-4xl' color='#F0DB4F' />
                    <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">JavaScript</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
import React from 'react'
import { FaChevronDown } from "react-icons/fa"
import scrollIntoView from 'scroll-into-view'
const About = () => {
    return (
        <div className="max-w-4xl mt-20 mx-auto">
            <p className="text-2xl text-black md:text-4xl font-bold text-center">
                Hey 👋
            </p>
            <p className="text-base md:text-2xl text-center text-gray-700 leading-relaxed mt-4">
                I'm a self tought web dev , who spends a lot of time on hobby projects and learning new stuffs every day and
                I'm more curious about backend more than front-end. Iam also love mobile development with react-native
            </p>

            <scrollIntoView selector="#tech">

                <div class='mx-auto p-20'>

                    <FaChevronDown class="animate-bounce mx-auto text-3xl text-blue-500 cursor-pointer" />

                </div>
            </scrollIntoView>
        </div>

    )
}

export default About
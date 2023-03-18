import React, { useState } from "react";
import logo from "../assets/images/Shield_ClassicViking.png";

export default function (props) {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (
            <section className="hero bg-[url('./assets/images/2913130.jpg')] is-fullheight is-fullwidth">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className=" w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-gray-900 border-2 border-gray-700">
                            <div className="flex justify-center items-center pb-6">
                                    <img src={logo} className="h-16 mr-3" alt="Conquer.io Logo" />
                                    <span className="self-center lg:text-6xl font-semibold whitespace-nowrap text-white">Conquer.io</span>
                                </div>
                                <form className="">
                                    <p className="has-text-centered"></p>
                                    <div className='flex flex-col'>
                                        <label className='text-lg font-medium text-white'>Email</label>
                                        <input type="text"
                                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                            placeholder="Enter your email" />
                                    </div>
                                    <div className='flex flex-col mt-4 text-white'>
                                        <label className='text-lg font-medium'>Password</label>
                                        <input
                                            className='w-full border-2 border-gray-100 outline-sky-200 rounded-xl p-4 mt-1 bg-transparent'
                                            placeholder="Enter your password"
                                            type={"password"}
                                        />
                                    </div>
                                    <div className="mt-8 flex flex-col gap-y-4">
                                        <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-sky-300 rounded-xl text-white font-bold text-lg'>Sign in</button>
                                    </div>
                                    <div className='mt-8 flex justify-center items-center'>
                                        <p className='font-medium text-base'>Don't have an account?</p>
                                        <button className='ml-2 font-medium text-base text-sky-200' onClick={changeAuthMode}>Sign up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="hero bg-[url('./assets/images/2913130.jpg')] is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="w-11/12 max-w-[700px] px-10 py-10 rounded-3xl bg-gray-900 border-2 border-gray-700">
                        <div className="flex justify-center items-center pb-6">
                                    <img src={logo} className="h-16 mr-3" alt="Conquer.io Logo" />
                                    <span className="self-center lg:text-6xl font-semibold whitespace-nowrap text-white">Conquer.io</span>
                                </div>
                            <form className="">
                                <p className="has-text-centered"></p>
                                <div className='flex flex-col'>
                                    <label className='text-lg font-medium'>Username</label>
                                    <input type="text"
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        placeholder="Enter your username" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-lg font-medium'>Email</label>
                                    <input type="text"
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        placeholder="Enter your email" />
                                </div>
                                <div className='flex flex-col mt-4'>
                                    <label className='text-lg font-medium'>Password</label>
                                    <input
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        placeholder="Enter your password"
                                        type={"password"}
                                    />
                                </div>
                                <div className='flex flex-col mt-4'>
                                    <label className='text-lg font-medium'>Confirm Password</label>
                                    <input
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        placeholder="Confirm your password"
                                        type={"password"}
                                    />
                                </div>
                                <div className="mt-8 flex flex-col gap-y-4">
                                    <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-sky-300 rounded-xl text-white font-bold text-lg'>Sign up</button>
                                </div>
                                <div className='mt-8 flex justify-center items-center'>
                                    <p className='font-medium text-base'>Already have an account?</p>
                                    <button className='ml-2 font-medium text-base text-sky-200' onClick={changeAuthMode}>Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



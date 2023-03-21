import React, { useState } from "react";
import logo from "../assets/images/Shield_ClassicViking.png";
import { useAtom } from "jotai";
import { userAtom } from "../utils/state";
import { useNavigate } from "react-router-dom";

export default function (props) {
    let [authMode, setAuthMode] = useState("signin");
    const [user, setUser] = useAtom(userAtom);
    const nav = useNavigate()

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })
    // is user logged in or not
    // const [loggedIn, setLoggedIn] = useState(false)

    const signUp = (e) => {
        e.preventDefault();
        console.log("input", input);

        //ideally, do some input validation here, optional
        fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-Type': "application/json"
            }
        }).then(res => res.json()).then(res => {
            setUser(res)// ormaybe use the username and password, so you know who is logged in
        })
    }

    const logIn = (e) => {
        e.preventDefault();
        fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email: input.email, password: input.password }),
            headers: {
                'Content-Type': "application/json"
            }
        }).then(res => res.json()).then(res => {
            setUser(res.user)// ormaybe use the username and password, so you know who is logged in
        })
    }

    const handleInputChange = ({ target: { name, value } }) => {
        setInput({ ...input, [name]: value })
    }

    if(user) {
        nav("/dashboard")
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
                                <form id="signIn">
                                    <p className="has-text-centered"></p>
                                    <div className='flex flex-col'>
                                        <label className='text-lg font-medium text-white'>Email</label>
                                        <input type="email"
                                            onChange={handleInputChange}
                                            name="email"
                                            value={input.email}
                                            id="email-login"
                                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                            placeholder="Enter your email" />
                                    </div>
                                    <div className='flex flex-col mt-4 text-white'>
                                        <label className='text-lg font-medium'>Password</label>
                                        <input id="password-login"
                                            onChange={handleInputChange}
                                            name="password"
                                            value={input.password}
                                            className='w-full border-2 border-gray-100 outline-sky-200 rounded-xl p-4 mt-1 bg-transparent'
                                            placeholder="Enter your password"
                                            type={"password"}
                                        />
                                    </div>
                                    <div className="mt-8 flex flex-col gap-y-4">
                                        <button type="submit" onClick={logIn} className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-sky-300 rounded-xl text-white font-bold text-lg'>Sign in</button>
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
                            <form id="signUp">
                                <p className="has-text-centered"></p>
                                <div className='flex flex-col'>
                                    <label className='text-lg font-medium'>Username</label>
                                    <input type="text"
                                        id="user-signup"
                                        name="username"
                                        value={input.username}
                                        onChange={handleInputChange}
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        placeholder="Enter your username" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-lg font-medium'>Email</label>
                                    <input
                                        id="email-signup"
                                        name="email"
                                        type="email"
                                        value={input.email}
                                        onChange={handleInputChange}
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        placeholder="Enter your email" />
                                </div>
                                <div className='flex flex-col mt-4'>
                                    <label className='text-lg font-medium'>Password</label>
                                    <input
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        placeholder="Enter your password"
                                        name="password"
                                        value={input.password}
                                        onChange={handleInputChange}
                                        type={"password"}
                                        id="password-signup"
                                    />
                                </div>
                                <div className='flex flex-col mt-4'>
                                    <label className='text-lg font-medium'>Confirm Password</label>
                                    <input
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        name="passwordConfirm"
                                        value={input.passwordConfirm}
                                        onChange={handleInputChange}
                                        placeholder="Confirm your password"
                                        type={"password"}
                                    />
                                </div>
                                <div className="mt-8 flex flex-col gap-y-4">
                                    <button onClick={signUp} type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-sky-300 rounded-xl text-white font-bold text-lg'>Sign up</button>
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
import React, { useState } from "react"

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form font-bold">
          <div>
            <h3 className="title">Sign In</h3>
            <div>
              Not registered yet?{" "}
              <span className="underline" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className = "m-3.5 p-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className = "m-3.5 p-1"
                placeholder="Enter password"
              />
            </div>
            <div>
              <button type="submit" className="bg-blue-500 p-1.5 rounded" >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form font-bold">
        <div>
          <h3 className="title">Sign Up</h3>
          <div>
            Already registered?{" "}
            <span className="underline" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className = "m-3.5 p-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className = "m-3.5 p-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className = "m-3.5 p-1"
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit" className="bg-blue-500 p-1.5 rounded">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
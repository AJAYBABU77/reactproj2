import React from 'react';
import './Login.css'; // Custom CSS file

export default function Login() {
  return (
    <div className="main container-fluid">
      <div className="row h-100">
        <div className="col-md-6 mt-5">
          <h1 id='EE'>
            WELCOME TO<br />
            <span className="text-warning">OUR PLATFORM</span><br />
          </h1>
          <h6 className="par mt-3" id='GH'>
            Please sign in to access your account and enjoy personalized services tailored just for you. Whether you're here to manage your profile, explore exclusive content, or engage with our community, we're thrilled to have you with us.
            <br /> Already a member? <br />
            Enter your credentials below to get started:
            <br /> *Username / Email Address:
            <br /> *Password:
            <br /> *Forgot your password? No worries! Click [here] to reset it.
          </h6>
          <button className="btn btn-warning mt-3">
            <a href="#" className="text-dark text-decoration-none" id='IK'>Know More</a>
          </button>
        </div>
       
        <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center">
          <div className="form p-4 bg-dark text-white rounded">
            <h4 className="text-warning text-center mb-4">Login Now</h4>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter email or User Name"
            />
            <input
              type="password"
              className="form-control mb-4"
              placeholder="Password"
            />
            <button className="btn btn-warning w-100 mb-3">
              <a href="#" className="text-dark text-decoration-none">Login</a>
            </button>
            <p className="text-center">
              Don’t have an account?<br />
              <span className="text-info">
                <a href="#" className="text-info text-decoration-none">Create new account</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col text-center">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6 max-w-md mx-auto">
                        Access your personalized book dashboard and continue exploring your reading journey. Don't have an account? Sign up to get started!
                    </p>
                    {/* <NavLink to='/' className="btn btn-ghost bg-cyan-700 text-white mt-4">Home</NavLink> */}
                </div>

                {/* Login Form */}
                <div className="card w-full max-w-lg bg-base-100 shadow-2xl p-6">
                    <div className="card-body">
                        <div className="form-control">
                            <label htmlFor="email" className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="password" className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

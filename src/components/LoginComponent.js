import React from "react";
import {Link} from "react-router-dom";

const LoginComponent = () =>
    <div className="container">
        <h1>Sign In</h1>
        <div className="rounded border border-secondary bg-white">
            <form className="m-4">
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="username"
                               placeholder="Alice"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control wbdv-field wbdv-password"
                               id="password" placeholder="123qwe#$%"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <Link className="btn btn-primary btn-block wbdv-login"
                              to="/profile">Sign in
                        </Link>
                        <div className="row">
                            <div className="col-6">
                                <a href="#" className="wbdv-link wbdv-forgot-password">Forgot Password?</a>
                            </div>
                            <div className="col-6">
                                <Link className="float-right wbdv-link wbdv-register"
                                      to="/register">Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

export default LoginComponent;

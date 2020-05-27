import React from "react";
import {Link} from "react-router-dom";

const ProfileComponent = (user) => {
    return (
        <div className="container">
            <h1>Profile</h1>

            <div className="alert alert-success wbdv-message" role="alert">
                Profile successfully updated!
            </div>

            <div className="rounded border border-secondary bg-white">
                <form className="m-4">
                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="username">
                            Username
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <input id="username"
                                   className="form-control wbdv-field wbdv-username"
                                   value={user.username}
                                   type="text"
                                   placeholder="Username"
                                   title="Use this username to login"
                                   disabled/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="password">
                            Password
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <input id="password"
                                   className="form-control wbdv-field wbdv-password"
                                   type="password"
                                   placeholder="Enter password"
                                   value={user.password}
                                   title="Password for this account"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="phone">
                            Phone
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <input id="phone"
                                   className="form-control wbdv-field wbdv-phone"
                                   type="text"
                                   placeholder="Phone number"
                                   value={user.phone}
                                   title="Phone number"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="email">
                            Email
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <input id="email"
                                   className="form-control wbdv-field wbdv-email"
                                   type="text"
                                   placeholder="Email address"
                                   value={user.email}
                                   title="Email for this account"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="dob">
                            Date of birth
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <input className="form-control wbdv-field wbdv-dob"
                                   id="dob"
                                   type="date"
                                   value={user.dob}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-2 col-sm-6 col-form-label"
                               htmlFor="role">
                            Role
                        </label>
                        <div className="col-lg-10 col-sm-6">
                            <select className="form-control custom-select wbdv-field wbdv-role" id="role">
                                <option selected={user.role === "FACULTY"} value="FACULTY">Faculty</option>
                                <option selected={user.role === "STUDENT"} value="STUDENT">Student</option>
                                <option selected={user.role === "ADMIN"} value="ADMIN">Admin</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <Link className="btn btn-success btn-block wbdv-button wbdv-update"
                               to="/profile">
                                Update
                            </Link>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <Link className="btn btn-danger btn-block wbdv-button wbdv-logout"
                               to="/">
                                Logout
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>);
};

export default ProfileComponent;

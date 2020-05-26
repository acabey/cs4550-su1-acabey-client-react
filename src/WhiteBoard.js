import React from "react";

import './Whiteboard.css';
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import {LoginComponent} from "./components/LoginComponent";
import {ProfileComponent} from "./components/ProfileComponent";
import {RegisterComponent} from "./components/RegisterComponent";
import CourseListContainer from "./containers/CourseListContainer";
import CourseEditorComponent from "./components/CourseEditorContainer";


const WhiteBoard = () => {
    return(
        <BrowserRouter>
            <div>
                <Route
                    path='/'
                    exact={true}
                    component={HomeComponent}/>

                <Route
                    path="/login"
                    exact={true}
                    component={LoginComponent}/>

                <Route
                    path="/profile"
                    exact={true}
                    component={ProfileComponent}/>

                <Route
                    path="/register"
                    exact={true}
                    component={RegisterComponent}/>

                <Route
                    path='/courses'
                    exact={true}
                    component={CourseListContainer}/>

                <Route
                    path='/:layout/courses'
                    exact={true}
                    component={CourseListContainer}/>

                <Route
                    path='/editor'
                    exact={true}
                    component={CourseEditorComponent}/>

            </div>
        </BrowserRouter>
    )
}

export default WhiteBoard;

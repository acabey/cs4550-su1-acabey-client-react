import React from "react";

import './Whiteboard.css';
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";
import ProfileComponent from "./components/ProfileComponent";
import CourseManagerContainer from "./containers/CourseManagerContainer";
import RegisterComponent from "./components/RegisterComponent";
import CourseEditorContainer from "./containers/CourseEditorContainer";


const WhiteBoard = () => {
    return(
        <BrowserRouter>
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
                component={CourseManagerContainer}/>

            <Route
                path='/:layout/courses'
                exact={true}
                component={CourseManagerContainer}/>

            <Route
                path='/editor'
                exact={true}
                component={CourseEditorContainer}/>

            <Route
                path={['/editor/:courseId', '/editor/:courseId/modules/:moduleId']}
                exact={true}
                component={CourseEditorContainer}/>

            <Route
                path='/error'
                exact={true}
                component={HomeComponent}/>

        </BrowserRouter>
    )
};

export default WhiteBoard;

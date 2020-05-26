import React from "react";

import './Whiteboard.css';
import {BrowserRouter, Route} from "react-router-dom";
import CourseManagerContainer from "./containers/CourseManagerContainer";
import HomeComponent from "./components/HomeComponent";


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
                    component={CourseEditor}/>

            </div>
        </BrowserRouter>
    )
}

export default WhiteBoard;

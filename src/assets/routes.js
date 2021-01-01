import React from "react";
import {Redirect} from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import withAuthentication from "../authentication/higherOrderComponents/withAuthentication";
import Dashboard from "../pages/Dashboard";
import AuthenticationScreen from "../authentication/AuthenticationScreen";

export default [{
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard"/>
}, {
    path: "/dashboard",
    layout: DefaultLayout,
    component: withAuthentication(Dashboard)
},{
    path: "/login",
    layout: DefaultLayout ,
    noFooter: true,
    noNavbar: true,
    component: AuthenticationScreen
}];
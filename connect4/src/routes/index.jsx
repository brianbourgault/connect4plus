import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { H1 } from "../components/styles/h1";

const Home = lazy(() => import("../pages/Connect4LandingPage"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Room = lazy(() => import("../pages/Room"));
const Rooms = lazy(() => import("../pages/rooms"));
const Profile = lazy(() => import("../pages/profile"));

const Routes = () => (
    <Switch>
        <Suspense fallback={<H1>Loading Page...</H1>}>
            <Route exact path="/r" component={Rooms} />
            <Route path="/r/:roomId" component={Room} />
            <Route path="/u/:userId" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/" component={Home} />
        </Suspense>
    </Switch>
);

export default Routes;

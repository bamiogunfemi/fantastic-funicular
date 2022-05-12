import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ProtectedRoute } from "./protectedRoute";

// Pages
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));

const Routes = () => {
  return (
    <Router forceRefresh={true}>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/login" component={() => <Login />} />
          <ProtectedRoute exact path="/" component={() => <Home />} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;

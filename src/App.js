import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Entry from './entry/pages/Entry';
import EntryCard from './entry/pages/EntryCard';
import NewEntry from './entry/pages/NewEntry';
import UpdateEntry from './entry/pages/UpdateEntry';
import Login from './user/pages/Login';
import SignUp from './user/pages/SignUp';
import { AuthContext } from './shared/context/auth-context';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/:userId/entry/" exact>
          <Entry />
        </Route>
        <Route path="/:userId/entry/:entryId" exact>
          <EntryCard />
        </Route>
        <Route path="/entry/new" exact>
          <NewEntry />
        </Route>
        <Route path="/entry/:entryId" exact>
          <UpdateEntry />
        </Route>
        <Redirect to="/any1/entry/" />
      </React.Fragment>
    );
  }
  else {
    routes = (
      <React.Fragment>
        <Route path="/any1/entry" exact>
          <Entry />
        </Route>
        <Route path="/any1/entry/:entryId" exact>
          <EntryCard />
        </Route>
        <Route path="/entry/new" exact>
          <NewEntry />
        </Route>
        <Route path="/auth/signup" exact>
          <SignUp />
        </Route>
        <Route path="/auth/" exact>
          <Login />
        </Route>
        <Redirect to="/auth/" />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            {routes}
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider >
  );
};

export default App;

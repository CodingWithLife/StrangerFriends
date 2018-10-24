import React from 'react';
import { Route, Switch} from "react-router-dom";
import $ from "jquery";

import Signin from './components/Signin.js';
import Home from './components/Home.jsx';
import Chat from './components/Chat.jsx';
import Survey from './components/Survey.jsx';
import Nav from './components/NavigationBar.jsx';
import Profiles from './components/Profiles.jsx';
import Revolutionary from "./components/archetypes/revolutionary.jsx";
import Sage from "./components/archetypes/sage.jsx";
import Ruler from "./components/archetypes/ruler.jsx";
import Magician from "./components/archetypes/magician.jsx";
import Lover from "./components/archetypes/lover.jsx";
import Jester from "./components/archetypes/jester.jsx";
import Innocent from "./components/archetypes/innocent.jsx";
import Hero from "./components/archetypes/hero.jsx";
import Explorer from "./components/archetypes/explorer.jsx";
import Everyperson from "./components/archetypes/everyperson.jsx";
import Creator from "./components/archetypes/creator.jsx";
import Caregiver from "./components/archetypes/caregiver.jsx";

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <main>
    <Nav />
      <Switch>
        <Route  path={`${match.path}chat`} component={Chat} />
        <Route exact path={`${match.path}`} component={Home} />
        <Route  path={`${match.path}survey`} component={Survey} />
        <Route  path={`${match.path}profiles`} component={Profiles} />
        <Route  path={`${match.path}revolutionary`} component={Revolutionary} />
        <Route  path={`${match.path}jester`} component={Jester} />
        <Route  path={`${match.path}lover`} component={Lover} />
        <Route  path={`${match.path}caregiver`} component={Caregiver} />
        <Route  path={`${match.path}everyperson`} component={Everyperson} />
        <Route  path={`${match.path}innocent`} component={Innocent} />
        <Route  path={`${match.path}ruler`} component={Ruler} />
        <Route  path={`${match.path}sage`} component={Sage} />
        <Route  path={`${match.path}magician`} component={Magician} />
        <Route  path={`${match.path}hero`} component={Hero} />
        <Route  path={`${match.path}creator`} component={Creator} />
        <Route  path={`${match.path}explorer`} component={Explorer} />

      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;

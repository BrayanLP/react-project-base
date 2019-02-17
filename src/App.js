import React, { Component, Fragment, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
 
import routes from './routes';
import DemoComponent from './views/Demo/index';

const Home = lazy(() => import('./views/Home'));

class App extends Component {
  render() {
    return (
      <Fragment>
        <Suspense
          // fallback={<Preload />}
          fallback={<p>Loading...</p>}
        >
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.demo} component={DemoComponent} />
            {/* <Route path="/topics" component={Topics} /> */}
          </Switch>
        </Suspense>
      </Fragment>
    );
  }
}

export default App;

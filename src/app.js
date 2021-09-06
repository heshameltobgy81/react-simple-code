import React, { Suspense} from 'react';
import { Route, Switch, HashRouter} from 'react-router-dom';
import ErrorFallback from './Components/ErrorFallback';
import {ErrorBoundary} from 'react-error-boundary';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = React.lazy(() => import('./home'));

const App = () => {
   
  return (

    <HashRouter>
      <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // reset the state of your app so the error doesn't happen again
          }}>
        <div className="page-wrapper">
            <Header />
            <Suspense fallback={<div></div>}>
              <Switch>
                  <Route exact path="/" render={ props =>
                      <Home {...props} />
                  }/>
              </Switch>
            </Suspense>
        </div>
        </ErrorBoundary>
      </HashRouter>
  
    );
  }


export default App


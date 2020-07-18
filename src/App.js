import React, { useContext, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout'
import Spinner from './components/UI/Spinner/Spinner'


const Homepage = React.lazy(() => {
  return import('./components/Homepage/Homepage')
})

const app = props => {
  let routes = (
    <Switch>
      <Route exact path="/" render={() => <Homepage />} />
      <Redirect to="/" />
    </Switch>
  )
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        {routes}
      </Suspense>
    </Layout>
  );
}

export default withRouter(app);
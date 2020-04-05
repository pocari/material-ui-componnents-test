import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Sample from 'components/sample'
import Home from 'components/home'
import Buttons from 'components/buttons'
import { BrowserRouter } from 'react-router-dom';

const AppRouter: FC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sample" component={Sample} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter

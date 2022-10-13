import React from 'react'
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'
import FlexBox from './pages/FlexBox'
import MainPage from './pages/MainPage'
import NavBar from './pages/NavBar'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'

function App() {
  return <HashRouter>
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/page1" exact>
        <Page1 />
      </Route>
      <Route path="/page2" exact>
        <Page2 />
      </Route>
      <Route path="/page3" exact>
        <Page3 />
      </Route>
      <Route path="/page4" exact>
        <Page4 />
      </Route>
      <Route path="/page5" exact>
        <Page5 />
      </Route>
      <Route path="/flexbox" exact>
        <FlexBox />
      </Route>
      <Route path="/nav" exact>
        <NavBar />
      </Route>
      <Redirect to="/" />
    </Switch>
  </HashRouter >
}

export default App

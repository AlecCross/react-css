import React from 'react'
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'
import CssEffects from './pages/CssEffects'
import CssSelectors from './pages/CssSelectors'
import CSSunitsOfMeasurement from './pages/CSS_units_of_measurement'
import FlexBox from './pages/FlexBox'
import FooterBottomOfPage from './pages/FooterBottomOfPage'
import MainPage from './pages/MainPage'
import MultiButtonMenu from './pages/MultiButtonMenu'
import NavBar from './pages/NavBar'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import PseudoClasses from './pages/PseudoClasses'

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
      <Route path="/multi-button-menu" exact>
        <MultiButtonMenu />
      </Route>
      <Route path="/CSSunitsOfMeasurement" exact>
        <CSSunitsOfMeasurement />
      </Route>
      <Route path="/FOOTER_BOTTOM_OF_PAGE" exact>
        <FooterBottomOfPage />
      </Route>
      <Route path="/CssSelectors" exact>
        <CssSelectors />
      </Route>
      <Route path="/PseudoClasses" exact>
        <PseudoClasses />
      </Route>
      <Route path="/CssEffects" exact>
        <CssEffects />
      </Route>
      <Redirect to="/" />
    </Switch>
  </HashRouter >
}

export default App

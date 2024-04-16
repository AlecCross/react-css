import React from 'react'
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'
import {
  Animation,
  CssEffects,
  CssSelectors,
  CssTransformsTransitions,
  CSSunitsOfMeasurement,
  Debugging,
  FlexBox,
  FooterBottomOfPage,
  MainPage,
  MultiButtonMenu,
  NavBar,
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  PreprocessorsSassScssStylus,
  PseudoClasses
} from './pages'
import ProgressBar from './pages/ProgressBar'

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
      <Route path="/CssTransformsTransitions" exact>
        <CssTransformsTransitions />
      </Route>
      <Route path="/Animation" exact>
        <Animation />
      </Route>
      <Route path="/PreprocessorsSassScssStylus" exact>
        <PreprocessorsSassScssStylus />
      </Route>
      <Route path="/Debugging" exact>
        <Debugging />
      </Route>
      <Route path="/ProgressBar" exact>
        <ProgressBar percentage={9999} />
      </Route>
      <Redirect to="/" />
    </Switch>
  </HashRouter >
}

export default App

import { BrowserRouter, Switch, Route } from "react-router-dom"

import Navbar from "./components/layouts/Navbar"
import Home from "./components/Home"
import Periods from "./components/Periods"
import Categories from "./components/Categories"

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/periods">
            <Periods />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App

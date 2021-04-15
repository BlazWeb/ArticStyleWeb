import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'styles/global/theme.scss'
import General from 'pages/general';
import Home from 'pages/home';
import FooterComponent from 'components/footer';
import Login from 'pages/login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
            <FooterComponent />
          </Route>
          <Route path="/login" exact><Login/></Route>
          <Route path="/register" exact>Registro</Route>
          <General />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

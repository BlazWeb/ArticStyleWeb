import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'styles/global/theme.scss'
import General from 'pages/general';
import Home from 'pages/home';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/login" exact>Login</Route>
          <Route path="/registro" exact>Registro</Route>
          <General />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

import { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import 'styles/global/theme.scss'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      usuarios: {}
    }
  }

  consulta() {
    // axios.post('http://192.168.47.106:8000/api/usuarios/').then((response) => {
    //   console.log(response);
    // })

  }

  componentDidMount() {
    this.consulta()
  }


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>Login</Route>
          <Route path="/registro" exact>Registro</Route>
          <Route path="/">
            <div>
              <Link to="/">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/colab">Colab</Link>
            </div>
            <Switch>
              <Route path="/" exact>Home</Route>
              <Route path="/explore" exact>Explorar</Route>
              <Route path="/colab" exact>Colaborar</Route>
            </Switch>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

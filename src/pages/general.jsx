import BarraNavegacion from 'components/barraNavegacion'
import { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import style from 'styles/general.module.scss'
import FooterComponent from 'components/footer'
import Explorar from 'pages/explorar'
import Error404 from 'pages/404'
import Profile from './profile'

export default class General extends Component {

    constructor(props) {
        super(props)

        this.state = {
            myuser: "blazester"
        }

    }

    render() {
        return (
            <Route path="/">
                <section className={style.site__section}>
                    <div className={style.container__section}>
                        <BarraNavegacion />
                        <div className={style.content__section}>
                            <Switch>
                                <Route path="/explore" component={Explorar} exact></Route>
                                <Route path="/explore/:id" component={Explorar} exact></Route>
                                <Route path="/colab" exact>Colaborar</Route>
                                <Route path="/addon" exact>Extension</Route>
                                <Route path="/terms" exact>Terminos y condiciones</Route>
                                <Route path="/help" exact>Centro de ayuda</Route>
                                <Route path="/help/report" exact>Reportar error</Route>
                                <Route path="/help/opensource" exact>Librerias Open source</Route>
                                <Route path="/profile" exact><Redirect to={`/profile/${this.state.myuser}`}/></Route>
                                <Route path="/profile/:id" render={(props) => <Profile key={props.match.params.id} {...props} MyUser={this.state.myuser}/>}></Route>
                                <Error404 />
                            </Switch>
                        </div>
                        <FooterComponent />
                    </div>
                </section>
            </Route>
        )
    }
}
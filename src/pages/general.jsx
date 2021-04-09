import BarraNavegacion from 'components/barraNavegacion'
import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import style from 'styles/general.module.scss'
import FooterComponent from 'components/footer'
import Explorar from 'pages/explorar'

export default class General extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {
        return (
            <Route path="/">
                <section className={style.site__section}>
                    <div className={style.container__section}>
                        <BarraNavegacion/>
                        <div className={style.content__section}>
                            <Switch>
                                <Route path="/explore" exact><Explorar/></Route>
                                <Route path="/colab" exact>Colaborar</Route>
                                <Route path="/addon" exact>Extension</Route>
                                <Route path="/terms" exact>Terminos y condiciones</Route>
                                <Route path="/help" exact>Centro de ayuda</Route>
                                <Route path="/help/report" exact>Reportar error</Route>
                                <Route path="/help/opensource" exact>Librerias Open source</Route>
                            </Switch>
                        </div>
                        <FooterComponent />
                    </div>
                </section>
            </Route>
        )
    }
}
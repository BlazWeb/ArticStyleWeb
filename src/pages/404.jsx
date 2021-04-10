import { Component } from 'react'
import { Route } from 'react-router-dom'
import style from 'styles/errorcuatro.module.scss'
import logo from 'image/logo.png'

export default class Error404 extends Component {

    render() {
        return (
            <Route path="*">
                <div className={style.container__404}>
                    <div className={style.container}>
                        <div className={style.logo}>
                            <img src={logo} alt="" />
                            <h1>Artic<span>Style</span> </h1>
                        </div>
                        <h2>404</h2>
                        <p>La URL solicitada {window.location.pathname} no se encontró en este servidor.</p>

                    </div>
                </div>
            </Route>
        )
    }
}
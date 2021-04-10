import { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import style from 'styles/container__404.module.scss'

export default class Error404 extends Component {

    render() {
        return (
            <Route path="*">
                <div className={style.container__404}>
                    <h1>404</h1>
                    <p>La pagina <Link to={window.location.pathname}>{window.location.href}</Link> no existe</p>
                </div>
            </Route>
        )
    }
}
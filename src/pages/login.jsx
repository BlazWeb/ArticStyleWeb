import { Button } from '@material-ui/core'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import style from 'styles/login.module.scss'
import Logo from 'image/logo.png'

export default class Login extends Component {


    render() {
        return (
            <div className={style.site__login}>
                <div className={style.col_izq}>
                    <img src={Logo} alt="" />
                </div>
                <div className={style.col_der}>
                    <div className={style.registrate}>
                        <p>¿No tienes cuenta? <Link to="/register">Registrate</Link></p>
                    </div>
                    <div className={style.login}>
                        <h1>Entra a ArticStyle</h1>
                        <div className={style.container__btn__login}>
                            <Button href="/" variant="contained" color="primary">Entra con google</Button>
                            <Button href="/" variant="contained" >G</Button>
                        </div>
                        <div className={style.separador}></div>
                        <form>
                            <div className={style.usuarioInput}>
                                <p>Usuario o Correo electrónico</p>
                                <input type="text" />
                            </div>
                            <div className={style.passwordInput}>
                                <p>Contraseña</p>
                                <input type="password" />
                            </div>
                            <Button className={style.btn__login} variant="contained" color="primary">Iniciar Sesión</Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
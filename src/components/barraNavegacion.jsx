import { Component } from 'react'
import style from 'styles/components/barraNavecion.module.scss'
import Logo from 'image/logo.png'
import { Button } from '@material-ui/core'

export default class BarraNavegacion extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className={style.barra__navegacion}>
                <div className={style.container__barra__navegacion}>
                    <div className={style.logo}>
                        <img src={Logo} alt="" />
                    </div>
                    <div className={style.navegacion}>
                        <Button href="/" >Inicio</Button>
                        <Button href="/explore" >Explorar</Button>
                        <Button href="/colab" >Colaborar</Button>
                        <Button href="/addon" >Extensión</Button>
                    </div>
                    <div className={style.btn__login}>
                        <Button variant="contained" href="/login">Entrar</Button>
                    </div>
                </div>
            </div>
        )
    }
}
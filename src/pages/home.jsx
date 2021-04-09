import { Component } from 'react'
import style from 'styles/home.module.scss'
import { Button } from '@material-ui/core'
import Logo from 'image/logo.png'
import chrome from 'image/icon/chrome.svg'
import edge from 'image/icon/edge.svg'
import opera from 'image/icon/opera.svg'
import firefox from 'image/icon/firefox.svg'

import bowser from 'bowser'

const Browser = bowser.getParser(window.navigator.userAgent).getBrowser()

export default class Home extends Component {

    renderBotonExtension() {
        if (Browser.name === 'Microsoft Edge') {
            return (
                <Button variant="contained" href="#">
                    <img src={edge} alt="ArticStyle edge" />
                            Descargar para microsoft edge
                </Button>
            )
        } else if (Browser.name === 'Chrome') {
            return (
                <Button variant="contained" href="#">
                    <img src={chrome} alt="ArticStyle chrome" />
                            Descargar para chrome
                </Button>
            )
        } else if (Browser.name === 'Opera') {
            return (
                <Button variant="contained" color="secondary" href="#">
                    <img src={opera} alt="ArticStyle opera" />
                            Descargar para opera
                </Button>
            )
        }else if (Browser.name === 'Firefox') {
            return (
                <Button variant="contained" href="#">
                    <img src={firefox} alt="ArticStyle firefox" />
                            Descargar para firefox
                </Button>
            )
        }else {
            return (
                <Button variant="contained" disabled href="#">
                    Extension en desarrollo
                </Button>
            )
        }
    }

    render() {
        return (
            <header className={style.site__header}>
                <div className={style.container__header}>
                    <div className={style.bar__header}>
                        <div className={style.Logo__header}>
                            <img src={Logo} alt="ArticStyle"/>
                        </div>
                        <div className={style.navegacion}>
                            <Button href="/">Inicio</Button>
                            <Button href="/explore">Explorar</Button>
                            <Button href="/colab">Colaborar</Button>
                            <Button href="/addon">Extension</Button>
                        </div>
                        <div className={style.btn__login}>
                            <Button variant="contained" color="primary" href="/login">Entrar</Button>
                        </div>
                    </div>
                    <div className={style.content__header}>
                        <h1>Tu personalizad tu estilo</h1>
                        <p>ArticStyle te permite modificar y adaptar los temas de cada pagina, con los estilos creados por nuestra comunidad mundial de desarrolladores web preparados para hacerte disfrutar de una preciosa experiencia</p>
                        <p>Además, crea todo tipo de estilos y compite contra los demás miembros de la comunidad</p>
                        {
                            this.renderBotonExtension()
                        }
                        
                    </div>
                </div>
            </header>
        )
    }
}
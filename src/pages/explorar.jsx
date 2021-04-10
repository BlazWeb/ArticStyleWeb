import { Component } from 'react'
import style from 'styles/explorar.module.scss'
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'

import DownloadIcon from 'image/icon/download.svg'
import HeartIcon from 'image/icon/heart.svg'

export default class Explorar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className={style.explorar}>
                <div className={style.container__explorar}>
                    <div className={style.bar__buscador}>
                        <select name="cars" id="cars">
                            <option value="all">Sin filtro</option>
                            <option value="youtube">Youtube</option>
                            <option value="twitter">Twitter</option>
                            <option value="instagram">Instagram</option>
                            <option value="facebook">Facebook</option>
                            <option value="whatsapp">Whatsapp</option>
                            <option value="gdrive">Google Drive</option>
                            <option value="gmail">Gmail</option>
                            <option value="github">Github</option>
                            <option value="twitch">Twitch</option>
                            <option value="amazon">Amazon</option>
                            <option value="slack">Slack</option>
                            <option value="discord">Discord</option>
                            <option value="other">Otros</option>
                            <hr />
                            <option value="@">Usuarios</option>
                        </select>
                        <div className={style.container__buscar}>
                            <input type="text" placeholder="Buscar" />
                            <Button variant="contained" disableElevation>Ordenar por mas popular</Button>
                        </div>
                    </div>
                    <div className={style.row__search}>
                        <div className={style.card}>
                            <div className={style.image}>
                                <div className={style.icon__type__page}>
                                    <img src="" alt="" />
                                </div>
                                <img src="https://cdn.discordapp.com/attachments/417053964425756673/829867264361889810/unknown.png" alt="" />
                            </div>
                            <div className={style.container__info}>
                                <div className={style.letras}>
                                    <Link to="">Titulo de la tarjeta</Link>
                                    <Link to=""><p>Creador</p></Link>
                                </div>
                                <div className={style.container__btn}>
                                    <Button disableElevation><img src={HeartIcon} alt="" /></Button>
                                    <Button disableElevation><img src={DownloadIcon} alt="" /></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
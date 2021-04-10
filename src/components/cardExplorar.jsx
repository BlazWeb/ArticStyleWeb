import { Component } from 'react'
import style from 'styles/components/cardExplorar.module.scss'
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'

import DownloadIcon from 'image/icon/download.svg'
import HeartIcon from 'image/icon/heart.svg'

export default class CardExplorar extends Component {
    render() {
        return (
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
        )
    }
}
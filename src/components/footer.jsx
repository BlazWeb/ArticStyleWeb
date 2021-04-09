import style from 'styles/components/footer.module.scss'
import logo from 'image/logo.png'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import LinkMaterial from '@material-ui/core/Link'

import FacebookIcon from 'image/icon/facebook.svg'
import InstagramIcon from 'image/icon/instagram.svg'
import TwitterIcon from 'image/icon/twitter.svg'
import DiscordIcon from 'image/icon/discord.svg'

export default function FooterComponent() {

    return (
        <div className={style.footer}>
            <div className={style.container__footer}>
                <div className={style.col_izq}>
                    <div className={style.ArticStyle}>
                        <h2>ArticStyle</h2>
                        <nav>
                            <Link to='/terms'>Terminos y condiciones</Link>
                            <Link to='/explore'>Explorar</Link>
                            <Link to='/colab'>Hazte affiliado</Link>
                        </nav>
                    </div>
                    <div className={style.help}>
                        <h2>Ayuda</h2>
                        <nav>
                            <Link to='/help'>Centro de ayuda</Link>
                            <Link to='/help/report'>Reportar fallo</Link>
                        </nav>
                    </div>
                    <div className={style.comunidad}>
                        <h2>Comunidad</h2>
                        <nav>
                            <LinkMaterial href='https://articsolutions.ga' target='_blank'>Artic Solutions</LinkMaterial>
                            <Link to='/help/report'>Opensource</Link>
                        </nav>
                    </div>
                </div>
                <div className={style.col_der}>
                    <h1>Redes Sociales</h1>
                    <nav>
                        <Button href="/" target="_blank"><img src={FacebookIcon} alt=""/></Button>
                        <Button href="/" target="_blank"><img src={InstagramIcon} alt=""/></Button>
                        <Button href="/" target="_blank"><img src={TwitterIcon} alt=""/></Button>
                        <Button href="/" target="_blank"><img src={DiscordIcon} alt=""/></Button>
                    </nav>
                </div>
            </div>
            <div className={style.subcontainer__footer}>
                <div className={style.subcontainer}>
                    <div className={style.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <Button href="/login">Entrar</Button>
                </div>
            </div>
        </div>
    )
}
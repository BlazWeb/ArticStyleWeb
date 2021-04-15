import LoadingScreen from 'components/loading'
import { Component } from 'react'
import style from 'styles/profile.module.scss'
import { Avatar, Button } from '@material-ui/core'
import Heart from 'image/icon/heart.svg'
import Star from 'image/icon/star.svg'
import Eye from 'image/icon/eye.svg'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import PostsProfile from './profile/posts'
import SaveProfile from './profile/save'
import HomeProfile from './profile/home'

export default class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            myuser: this.props.MyUser.toLowerCase(),
            profile: this.props.match.params.id,
            exist: true,
            loading: true

        }

        setTimeout(() => {
            this.setState({
                loading: false
            })
            console.log("Cargado 1");

            // setTimeout(() => {
            //     this.setState({
            //         loading2: false
            //     })
            //     console.log("Cargado 2");

            // }, 3000)
        }, 1000)

    }


    RenderizarNavegacion() {

        let url = window.location.pathname

        if (url === `/profile/${this.state.profile}/posts`) {
            return (
                <nav>
                    <Link id="iniciobtnprofile" to={`/profile/${this.state.profile}`}>Inicio</Link>
                    <Link className={style.active} id="postsbtnprofile" to={`/profile/${this.state.profile}/posts`}>Publicaciones</Link>
                    <Link id="savedbtnprofile" to={`/profile/${this.state.profile}/saved`}>Guardados</Link>
                    <Link id="followbtnprofile" to={`/profile/${this.state.profile}/follow`}>Seguidos</Link>
                </nav>
            )

        } else if (url === `/profile/${this.state.profile}/saved`) {
            return (
                <nav>
                    <Link id="iniciobtnprofile" to={`/profile/${this.state.profile}`}>Inicio</Link>
                    <Link id="postsbtnprofile" to={`/profile/${this.state.profile}/posts`}>Publicaciones</Link>
                    <Link className={style.active} id="savedbtnprofile" to={`/profile/${this.state.profile}/saved`}>Guardados</Link>
                    <Link id="followbtnprofile" to={`/profile/${this.state.profile}/follow`}>Seguidos</Link>
                </nav>
            )

        } else if (url === `/profile/${this.state.profile}/follow`) {
            return (
                <nav>
                    <Link id="iniciobtnprofile" to={`/profile/${this.state.profile}`}>Inicio</Link>
                    <Link id="postsbtnprofile" to={`/profile/${this.state.profile}/posts`}>Publicaciones</Link>
                    <Link id="savedbtnprofile" to={`/profile/${this.state.profile}/saved`}>Guardados</Link>
                    <Link className={style.active} id="followbtnprofile" to={`/profile/${this.state.profile}/follow`}>Seguidos</Link>
                </nav>
            )

        } else if (url === `/profile/${this.state.profile}`) {
            return (
                <nav>
                    <Link className={style.active} id="iniciobtnprofile" to={`/profile/${this.state.profile}`}>Inicio</Link>
                    <Link id="postsbtnprofile" to={`/profile/${this.state.profile}/posts`}>Publicaciones</Link>
                    <Link id="savedbtnprofile" to={`/profile/${this.state.profile}/saved`}>Guardados</Link>
                    <Link id="followbtnprofile" to={`/profile/${this.state.profile}/follow`}>Seguidos</Link>
                </nav>
            )
        }




    }

    renderizarDatos() {
        if (this.state.loading) {
            return (
                <div className={style.container__profile}>
                    <LoadingScreen />
                </div>
            )
        }
        return (
            <div className={style.container__profile}>
                <div className={style.header__profile}>
                    <div className={style.container__image}>
                        <Avatar className={style.banner} alt="Remy Sharp" src="https://media.discordapp.net/attachments/821016295654686730/825733056966557696/Banner_Twitch.png" />
                    </div>
                    <div className={style.navegation__profile__first}>
                        <div className={style.datosProfileStats}>
                            <div className={style.stats}>
                                <img src={Heart} alt="" />
                                <p>154</p>
                            </div>
                            <div className={style.stats}>
                                <img src={Star} alt="" />
                                <p>154</p>
                            </div>
                            <div className={style.stats}>
                                <img src={Eye} alt="" />
                                <p>154</p>
                            </div>
                        </div>
                        <div className={style.avatar}>
                            <Avatar className={style.avatarImage} alt="Remy Sharp" src="https://cdn.discordapp.com/attachments/821016295654686730/826624881885315112/Logo_de_Blazester.png" />
                        </div>
                        <div className={style.btns_container}>
                            <h1>{this.state.profile}</h1>
                            <div className={style.btns}>
                                <Button>Seguir</Button>
                                <div className={style.separador}></div>
                                <Button className={style.edit}>E</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.content__profile}>
                    <input type="text" placeholder="Comenta algo en este perfil" />
                    <div className={style.contenedor__perfil}>
                        <div className={style.navegador}>
                            {this.RenderizarNavegacion()}
                        </div>
                        <div className={style.contenido__perfil}>
                            <Switch>
                                <Route path={`/profile/${this.state.profile}`} exact><HomeProfile /></Route>
                                <Route path={`/profile/${this.state.profile}/posts`} exact><PostsProfile /></Route>
                                <Route path={`/profile/${this.state.profile}/saved`} exact><SaveProfile /></Route>
                                <Route path={`/profile/${this.state.profile}/follow`} exact>Seguidos</Route>
                                <Route path={`*`}><Redirect to="/404" /></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    render() {

        if (this.state.exist) {

            return (
                <div className={style.site__profile}>
                    {this.renderizarDatos()}
                </div>
            )
        } else {
            return (
                <div className={style.site__profile}>
                    <div className={style.container__profile__not__exist}>
                        <h1>El usuario no existe</h1>
                    </div>
                </div>
            )
        }


    }

}
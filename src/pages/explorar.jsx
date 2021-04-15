import { Component } from 'react'
import style from 'styles/explorar.module.scss'
import { Button } from '@material-ui/core'
import { Pagination } from '@material-ui/lab/'
import CardExplorar from 'components/cardExplorar'
import LoadingScreen from 'components/loading'

export default class Explorar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pages: 4,
            loading: true
        }
        if (parseInt(this.props.match.params.id)) {
            if (this.state.pages < parseInt(this.props.match.params.id)) {
                window.location.href = `/explore`
            }
        }

        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    setPage() {
        if (parseInt(this.props.match.params.id)) {
            return parseInt(this.props.match.params.id)
        } else {
            return 1
        }

    }


    handleChange = (event, value) => {
        if (value === 1) {
            window.location.href = `/explore`
        } else {
            window.location.href = `/explore/${value}`
        }
    };

    renderPagination() {
        if (this.state.pages !== 1) {
            return (
                <div className={style.pag__nav}>
                    <Pagination count={this.state.pages} page={this.setPage()} onChange={this.handleChange} />
                </div>
            )
        }
    }

    renderData() {
        if (this.state.loading) {
            return (
                <div className={style.explorar}>
                    <LoadingScreen />
                </div>
            )
        }

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
                        <CardExplorar />
                        <CardExplorar />
                        <CardExplorar />
                        <CardExplorar />
                        <CardExplorar />
                        <CardExplorar />
                        <CardExplorar />
                        <CardExplorar />
                    </div>
                    {this.renderPagination()}
                </div>
            </div>
        )
    }

    render() {

        return this.renderData()

    }
}
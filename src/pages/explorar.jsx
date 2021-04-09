import { Component } from 'react'
import style from 'styles/explorar.module.scss'
import { Button } from '@material-ui/core'

export default class Explorar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            age: ''
        }

    }


    handleChange = (event) => {
        this.setState({
            age: event.target.value
        })
    };

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
                            <Button variant="contained" disableElevation></Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
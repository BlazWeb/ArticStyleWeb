import { Component } from 'react'
import style from 'styles/components/loading.module.scss'
import { CircularProgress } from '@material-ui/core'


export default class LoadingScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className={style.pantalla__carga}>
                <CircularProgress color="secondary" />
            </div>
        )
    }
}
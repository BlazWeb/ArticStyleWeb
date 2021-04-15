import LoadingScreen from 'components/loading'
import { Component } from 'react'
import style from 'styles/HomeProfile.module.scss'

export default class HomeProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }

        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    renderData() {
        if (this.state.loading) {
            return <LoadingScreen />
        }


        return (
            <div>Home</div>
        )
    }

    render() {
        return (
            <div>
                {this.renderData()}
            </div>
        )
    }
}
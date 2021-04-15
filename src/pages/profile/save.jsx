import { Component } from 'react'
import LoadingScreen from 'components/loading'

export default class SaveProfile extends Component {

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
            <div>Guardados</div>
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
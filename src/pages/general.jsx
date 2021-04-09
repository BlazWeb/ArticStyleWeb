import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

export default class General extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            
        }

    }

    render() {
        return (
            <Route path="/">
                <Switch>
                    <Route path="/explore" exact>Explorar</Route>
                    <Route path="/colab" exact>Colaborar</Route>
                </Switch>
            </Route>
        )
    }
}
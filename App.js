import React from 'react'
import {Rocket} from './rocket'
import {Counter} from './counter'
import {Amount}  from "./amount"

const rocket1 = {
    height: '100px'
}

export class App extends React.Component {

    constructor(props){
        super()
        this.state = {
            cash: 5000,
            betValue: 0
        }
    }

    removeValue = (event) => {
        this.setState({
            cash:this.state.cash - this.state.betValue
        })
    }
    changeBet = (event) => {
        let betValue = event.target.value;
        if (betValue<0){
            betValue = 0
        }
        this.setState({
            betValue: betValue
        })
    }
    onPlayerStop = (multiplier) => {
        this.setState({
            cash: this.state.cash + multiplier * this.state.betValue
        })
    }

    render() {
        return (
            <div>
                <Counter limit={99} onStop={this.onPlayerStop}/>
                <Rocket st={rocket1}/>

                <Amount changeBet={this.changeBet}
                        onBet={this.removeValue}
                        cash={this.state.cash}
                        value={this.state.betValue}/>
            </div>
        )
    }
}


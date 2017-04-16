import React from 'react'
export class Amount extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.cash}
                <input type="number"
                       value={this.props.value}
                       onChange={this.props.changeBet}/>
                <button onClick={this.props.onBet}>PlaceBet</button>
            </div>
        )
    }
}


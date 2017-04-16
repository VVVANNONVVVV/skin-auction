import React from 'react'

export class Counter extends React.Component {
    constructor(props) {
        super()
        this.state = {
            multiplier: 1
        }
        this.limit = props.limit || 2;
        this.increaseMultiplier();
    }

    increaseMultiplier = () => {
        const interval = setInterval(() => {
            this.setState({
                multiplier: this.state.multiplier + 0.01
            })
            if (this.state.multiplier.toFixed(2) === this.limit.toFixed(2)) {
                clearInterval(interval)
            }
        }, 100)


    }

    render() {
        return (
            <div>
                {this.state.multiplier.toFixed(2)}x
                <button
                    onClick={() => this.props.onStop(this.state.multiplier)}>
                    STOP
                </button>
            </div>
        )
    }
}
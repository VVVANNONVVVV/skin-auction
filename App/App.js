import React from 'react'
import {Rocket} from '../rocket'
import {Counter} from '../counter'
import {Amount}  from "../amount"
import {Skin} from '../skin/skin'
import {Menu} from '../menu/menu'
import {Footer} from "../footer/footer"

const rocket1 = {
    height: '100px'
}

const skins = [
    {
        name: 'Bayonet-Tigertooth',
        img: "https://steamimages.opskins.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmcjgOrzUhFRe-sR_jez--YXygED6_0o4ZjildoDBdVA_ZguC-gO9yeq90Je4vZuYwHdguSgm5H7am0TkhAYMMLKzxtQfiA/256fx256f",
        price: 300
    },
    {
        name: 'StatTrak™ Glock-18 | Water Elemental',
        img: "https://steamimages.opskins.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRd4cJ5nqeQoN3w0QHgrhdoMjylJo7GIVU7ZAzQqQC6k-rs1JHotZvNzSRgvHFx-z-DyPzurK-U/256fx256f",
        price: 19.95
    }
]

export class App extends React.Component {

    constructor(props) {
        super()
        this.state = {
            cash: 5000,
            betValue: 0
        }
    }

    removeValue = (event) => {
        this.setState({
            cash: this.state.cash - this.state.betValue
        })
    }
    changeBet = (event) => {
        let betValue = event.target.value;
        if (betValue < 0) {
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
                {/*<Counter limit={99} onStop={this.onPlayerStop}/>*/}
                {/*<Rocket st={rocket1}/>*/}
                {/*<Amount changeBet={this.changeBet}*/}
                {/*onBet={this.removeValue}*/}
                {/*cash={this.state.cash}*/}
                {/*value={this.state.betValue}/>*/}
                <Menu></Menu>
                <div className="skins">
                    {skins.map((skin, key) => {
                        return <Skin name={skin.name}
                                     img={skin.img}
                                     price={skin.price}
                                     key={key}/>
                    })}
                </div>
                <Footer></Footer>
            </div>
        )
    }
}


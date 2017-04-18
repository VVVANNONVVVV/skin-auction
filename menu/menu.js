import React from 'react'
import './menu.scss'

export class Menu extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="menu">
                <img className="logo" src="https://vignette2.wikia.nocookie.net/gtawiki/images/9/9a/PlayStation_1_Logo.png/revision/latest?cb=20100130082645" alt=""/>
            <div className="my-profile">
                My Profile
            </div>
                <div className="sell-skins">
                    Sell Skins
                </div>
                <div className="faq">
                    FAQ
                </div>
                <div className="help">
                    Help
                </div>
            </div>
        )
    }
}
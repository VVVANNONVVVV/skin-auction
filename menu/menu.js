import React from 'react'
import './menu.scss'
import {Link} from 'react-router-dom'
import {Login} from '../Login/Login'

export class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="menu">
                <Login />
                <img className="logo"
                     src="https://vignette2.wikia.nocookie.net/gtawiki/images/9/9a/PlayStation_1_Logo.png/revision/latest?cb=20100130082645"
                     alt=""/>
                <div className="my-profile">
                    <Link to="/">My Profile</Link>
                </div>
                <div className="sell-skins">
                    <Link to="/sell-skins">Sell Skins</Link>
                </div>
                <div className="faq">
                    <Link to='/faq'>FAQ</Link>
                </div>
                <div className="help">
                    <Link to='/help'>Help</Link>
                </div>
            </div>
        )
    }
}
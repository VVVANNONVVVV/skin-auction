import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Home} from './Home/Home'
import {Faq} from './Faq/Faq'
import {Help} from './Help/Help'

const SellSkins = () => (
    <div>
        <h2>Sell-Skins</h2>
    </div>
)



const Routing = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/sell-skins" component={SellSkins}/>
            <Route path="/faq" component={Faq}/>
            <Route path="/help" component={Help}/>
        </div>
    </Router>
)
export default Routing
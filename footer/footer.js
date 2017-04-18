import React from 'react'
import './footer.scss'

export class Footer extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
        <div className="footer">
            <span className="footer-item"> Jak to dziala </span>
            <span className="footer-item"> API </span>
        </div>
        )
    }
}
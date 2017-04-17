import React from 'react'
import './Skin.scss';

export class Skin extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="skin">
                <div className="name">
                    {this.props.name}
                </div>
                <img src={this.props.img} alt=""/>
                <div className="price">
                {'$' + this.props.price.toFixed(2)}
            </div>
                <div className="actions">
                    <div className="btn inspect">
                        Inspect</div>
                    <div className="btn add-to-cart">
                        Add to Cart
                    </div>
                </div>
            </div>

        )
    }


}
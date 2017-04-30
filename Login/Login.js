import React from 'react';

export class Login extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            login: '',
            password: ''
        }
    }

    loginChanged = (e) => {
        this.setState({
            login: e.target.value
        })
    }
    passwordChanged = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    getInfo = () => {
        alert(`login: ${this.state.login} password: ${this.state.password}`)
    }

    render(){
        return (
            <div>
                <form>
                    <input onChange={this.loginChanged} value={this.state.login}/>
                    <input type="password" onChange={this.passwordChanged} value={this.state.password}/>
                    <button type="button" onClick={this.getInfo}>login</button>
                </form>
            </div>
        )
    }
}


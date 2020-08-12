import React, { Component } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {ConnectionSuccessNotify, ConnectionErrorNotify} from './Toast'

class Connection extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users: [
                {id: 1, firstname: "issa1", email: "chrisissifou1@gmail.com", password: "1111"},
                {id: 2, firstname: "issa2", email: "chrisissifou2@gmail.com", password: "2222"},
                {id: 3, firstname: "issa3", email: "chrisissifou3@gmail.com", password: "3333"}
            ],
            email: "",
            password: ""
        }

        this.checkUser = ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.checkUser = this.state.users.filter(user => 
            (user.email === this.state.email) && (user.password === this.state.password)
            )
        
        if(this.checkUser.length === 0) {
            ConnectionErrorNotify()
        } else {
        
            ConnectionSuccessNotify(this.checkUser[0].firstname)
            this.setState({
                email: "",
                password: ""
            })
        }

    }
    
    render() {
        const { email, password } = this.state
    
        return (
            <div className="col-6">
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="email" >Email address</label>
                        <input type="email" className="form-control" id="email" 
                            onChange={this.handleChange} value={email} name="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" >Password</label>
                        <input type="password" className="form-control" id="password" 
                            onChange={this.handleChange} value={password} name="password" required/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">VALIDER</button>
                </form>
            </div>
        )
    }
}

export default Connection

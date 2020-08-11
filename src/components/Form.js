import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            users: ["issa", "kodjo"]
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            message: false
            
        })

        this.check = ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.check = this.state.users.filter(value => value === this.state.name)
        if(this.check.length === 0) {
            this.setState({
                users: [...this.state.users, this.state.name],
                name: ""
            })
        } else {
            this.setState({
                message: true
            })
        }
        
    }
    

    render() {
        const { users, name , message} = this.state

        let sendMessage;
        if(message) {
            sendMessage =<div className="alert alert-danger" role="alert">Cet utilisateur existe déjà</div>
        } else {
            sendMessage =  <div className="alert alert-success" role="alert">Votre nom a été bien enregistré</div>
        
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" >Votre nom</label>
                        <input type="text" className="form-control" id="name" 
                            onChange={this.handleChange} value={name} name="name" required/>
                    </div>
    
                    <button type="submit" className="btn btn-primary">VALIDER</button>
                </form>

                { sendMessage }

                <div>
                    <ul className="list-group">
                            {
                                users.map((user, index) =>
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="badge badge-info badge-pill">{user} </span>
                                    </li>
                                )
                            }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Form

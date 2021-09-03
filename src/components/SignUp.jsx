import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'first_name':'',
            'last_name':'',
            'email':'',
            'password':'',

        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            this.setState({
              [name]: value    });
    }

    submitSignup = (e) => {
        fetch('http://localhost:8000/api/accounts/signup/', {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(
                        {
                            "email": this.state.email,
                            "first_name": this.state.first_name, 
                            "last_name": this.state.last_name, 
                            "password": this.state.password
                        })
                    })
                    .then(response => response.json())
                    .then( (data) => {
                            if (data.status === 400)
                                alert("user already exist")
                            console.log(data)
                    });
       e.preventDefault();
    }

    render() {
        return (
            <div className="m-5"> 
                <fieldset>
                    <legend>New User Signup</legend>
                        <div className="form-group">
                            <label>FirstName</label>
                            <input  type="text" name="first_name"
                                value = {this.state.first_name}
                                onChange={this.handleInputChange} />
                        </div>
                
                        <div className="form-group">
                            <label>Last Name</label>
                            <input  type="text" name="last_name" 
                                value = {this.state.last_name}
                                onChange={this.handleInputChange} />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input  type="email" name="email" 
                                value = {this.state.email}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input  type="password" name="password" 
                                value = {this.state.password}
                                onChange={this.handleInputChange}/>
                        </div>
                        <button className="btn" onClick={this.submitSignup} >Signup</button>
                    </fieldset>   
            </div>
        );
    }
}

export default SignUp;

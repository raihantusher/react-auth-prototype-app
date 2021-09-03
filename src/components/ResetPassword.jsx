import React, { Component } from 'react';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code:'',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    resetPassword = (e) => {
        fetch('http://localhost:8000/api/accounts/password/reset/verified/', {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(
                        {
                            "code" : this.state.code,
                            "password" : this.state.password,
                        })
                    })
                    .then(response => response.json())
                    .then( (data) => {
                        
                        console.log(data)
                    });
       e.preventDefault();
    }


    handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            this.setState({
              [name]: value    });
    }

    render() {
        return (
            <div className="m-5">
                <fieldset>
                    <legend>Reset Password</legend>
                        <div className="form-group">
                            <div className="form-group">
                                <label>Code</label>
                                <input type="text" name="code" 
                                    value={this.state.code}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input  type="password" 
                                    name="password" 
                                    value={this.state.password}
                                    onChange={this.handleInputChange} />
                            </div>
                           
                            
                        </div>
                        <button className="btn" onClick={this.resetPassword} >Reset Password</button>
                    </fieldset>
            </div>
        );
    }
}

export default ResetPassword;

import React, { Component } from 'react';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "email":''
        }

        this.handleInputChange = this.handleInputChange.bind(this); 
    }
    
    submitEmail = (e) => {
            
       fetch('http://localhost:8000/api/accounts/password/reset/', {
                       method: 'POST',
                       mode: 'cors',
                       headers: {
                           'Accept': 'application/json, text/plain, */*',
                           'Content-Type': 'application/json',
                       },
                   body: JSON.stringify(
                       {
                           "email" : this.state.email,
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
                    <legend>Forgot Password</legend>
                        <div className="form-group">
                            <label>Email: </label>
                            <input  type="email" name="email" 
                                value={this.state.email}
                                onChange={this.handleInputChange} />
                        </div>
                     
                        <button className="btn" onClick={this.submitEmail}>Reset Password</button>
                    </fieldset>
            </div>
        );
    }
}

export default ForgotPassword;

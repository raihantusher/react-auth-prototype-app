import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password:'',
            isLoggedIn :false,
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    

    login = (e) => {
        fetch('http://localhost:8000/api/accounts/login/', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(
                {
                    email : this.state.email,
                    password : this.state.password,
                })
            })
            .then(response => response.json())
            .then( (data) => {
                    this.setToken(data.token);
                    console.log(this.getToken())
                    console.log(data)

                    this.setState({isLoggedIn:true})
            });
       e.preventDefault();
    }

    handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            this.setState({
              [name]: value    });
            console.log(this.state); 
  }

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
      }
    
      getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
      }
    
      deleteToken() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
      }

      logout = (e) => {
       this.deleteToken();
       this.setState({isLoggedIn:false})
       console.log(this.state)
         e.preventDefault();
      }


    render() {
     
        return (
            <div className="m-5" >       
                    <fieldset>
                        <legend>Login Form</legend>
                        <div className="form-group">
                            <label>Email: </label>
                            <input  type="email" name="email" 
                            value={this.state.email}
                             onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input  type="password" name="password" 
                            value={this.state.password}
                            onChange={this.handleInputChange} />
                        </div>
                        <button className="btn" onClick={this.login} >Login</button>
                        
                       { this.state.isLoggedIn &&
                            <button className="btn" onClick={this.logout}>Logout</button>
                       }
                            
                        
                    </fieldset>
            </div>
        );
    }
}

export default Login;

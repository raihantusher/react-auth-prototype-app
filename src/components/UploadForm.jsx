
import React, { Component } from 'react';

class UploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_file: null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    upload = (e) => {
        const formData = new FormData();
    
        // Update the formData object
        formData.append(
            "img",
            this.state.selected_file,
            this.state.selected_file.name
        );

        console.log(formData)
        console.log(this.state.selected_file)
        fetch('http://localhost:8000/image', {
                method: 'POST',
                mode: 'cors',
                headers: {
          
                },
            body: formData
            })
            .then(response => response.json())
            .then( (data) => {
                  //  this.setToken(data.token);
                   // console.log(this.getToken())
                    console.log(data)

                    //this.setState({isLoggedIn:true})
            });

       e.preventDefault();
    }

    handleInputChange(event) {
      
       
        this.setState({
          selected_file: event.target.files[0]   });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <input type="file"
                         name="file"
                        value={this.state.file} 
                        onChange={this.handleInputChange}/>
                    <button className="btn" onClick={this.upload}>Upload</button>
                </div>
            </div>
        );
    }
}

export default UploadForm;

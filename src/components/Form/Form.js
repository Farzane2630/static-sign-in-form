import React from "react";
import "./Form.css";

export default class App extends React.Component {

      constructor(props){
        super (props)

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',

            submitted: false,

            allValid: false
        }

        this.submitHandler = this.submitHandler.bind(this)
        this.successHandler = this.successHandler.bind(this)
        this.clearInputs = this.clearInputs.bind(this)
      }
    

    firstNameChange(e){
        this.setState({firstNameData: e.target.value})
    }

    lastNameChange(e){
        this.setState({lastNameData: e.target.value})
    }

    emailChange(e){
        this.setState({emailData: e.target.value})
    }


    submitHandler(event){
        event.preventDefault()
        this.setState({submitted: 'true' })
        this.successHandler()
    }

    successHandler(){
        setTimeout(() => {
            this.setState({submitted: false})
            this.clearInputs()
        }, 3000)
    }

    clearInputs (){
        this.setState({
            firstNameData: '',
            lastNameData: '',
            emailData: '',
        })
    }

    render() {
        return (
            <div className="form-container">
                <form className="register-form" onSubmit={this.submitHandler} submitted={this.state.submitted} autoComplete="off">
                    {/* Uncomment the next line to show the success message */}
                    {this.state.submitted &&
                    this.state.firstNameData&&
                    this.state.lastNameData&&
                    this.state.emailData&&
                    <div className="success-message">Success! Thank you for registering</div>
                    }
                    
                    <input
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstNameData}
                        onChange={e => this.firstNameChange(e)}
                    />
                   
                     {
                        this.state.submitted &&
                        !this.state.firstNameData && 
                        <span id="first-name-error">Please enter a first name</span>
                    }
                   
                    <input
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastNameData}
                        onChange={(e)=> this.lastNameChange(e)}
                    />
                   
                   {
                        this.state.submitted &&
                        !this.state.lastNameData && 
                        <span id="last-name-error">Please enter a last name</span>
                    }
                    
                    <input
                        id="email"
                        className="form-field"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={this.state.emailData}
                        onChange={(e)=> this.emailChange(e)}
                    />
                    
                    {
                        this.state.submitted &&
                        !this.state.emailData && 
                        <span id="email-error">Please enter a email name</span>
                    }
                    <button className="form-field" type="submit">
                        Register
                    </button>
                </form>
            </div>

        )
    }
}

import React, {Component} from "react";

class App extends Component{
    constructor(){
        super()
        this.state={
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favoriteFood: '',
            yourself: '',
            nameCard: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event){
        event.preventDefault()
        this.setState(prevState => {
            return{
                ...prevState,
                nameCard: [
                    ...prevState.nameCard,
                    prevState.firstName, 
                    prevState.lastName, 
                    prevState.email,
                    prevState.placeOfBirth,
                    prevState.phone,
                    prevState.favoriteFood,
                    prevState.yourself
                    // this.state.firstName, 
                    // this.state.lastName, 
                    // this.state.email,
                    // this.state.placeOfBirth,
                    // this.state.phone,
                    // this.state.favoriteFood,
                    // this.state.yourself
                ]
            }
        })
        console.log('handle submit, worked')
    }

    // handleSubmit(event){
    //     event.preventDefault()
    //     this.setState(prevState => {
    //         return{
    //             ...prevState,
    //             nameCard: {
    //                 firstName,
    //                 lastName,
    //                 email,
    //                 placeOfBirth,
    //                 phone,
    //                 favoriteFood,
    //                 yourself
    //             },
    //             nameCard:[
    //                 prevState.nameCard,
    //                 nameCard,
    //             ]
    //         }
    //     })
    // }

    render(){
        return(
            <div>
                <form>
                    <div>
                        <input
                            type='text'
                            value={this.state.firstName}
                            name='firstName'
                            placeholder='First Name'
                            minLength='3'
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type='text'
                            value={this.state.lastName}
                            name='lastName'
                            placeholder='Last Name'
                            minLength='3'
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            value={this.state.email}
                            name='email'
                            placeholder='Email'
                            minLength='3'
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type='text'
                            value={this.state.placeOfBirth}
                            name='placeOfBirth'
                            placeholder='Place of Birth'
                            minLength='3'
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='tel'
                            pattern='[0-9]+'
                            value={this.state.phone}
                            name='phone'
                            placeholder='10 Digit Phone Number'
                            minLength='10'
                            maxLength='10'
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type='text'
                            value={this.state.favoriteFood}
                            name='favoriteFood'
                            placeholder='Favorite Food'
                            minLength='3'
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <textarea
                            type='text'
                            value={this.state.yourself}
                            name='yourself'
                            placeholder='Tell us about yourself'
                            minLength='3'
                            onChange={this.handleChange}
                            required
                    />
                    <br/>
                    <button onClick={this.handleSubmit}>submit</button>
                </form>
                <div>
                    {this.state.nameCard.map(newCard => {
                        return(
                            <div>
                                {newCard}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App;
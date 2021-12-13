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
        this.setState({
            ...this.state,
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favoriteFood: '',
            yourself: '',
            nameCard: [
                ...this.state.nameCard,
                {
                    firstName: this.state.firstName, 
                    lastName: this.state.lastName, 
                    email: this.state.email,
                    placeOfBirth: this.state.placeOfBirth,
                    phone: this.state.phone,
                    favoriteFood: this.state.favoriteFood,
                    yourself: this.state.yourself
                }
            ]
        })
        console.log('handle submit, worked')
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
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
                    <button type='submit'>submit</button>
                </form>
                <div>
                    {this.state.nameCard.map(newCard => {
                        return(
                            <div>
                                <div className={'badgeHeaderDiv'}>
                                    <h1 className={'badgeHeader'}>Badge:</h1>
                                </div>
                                <div>
                                    <span className={'badgeSpan'}>
                                        <h2 className={'badgeContent'}>{`Name: ${newCard.firstName} ${newCard.lastName}`}</h2>
                                        <h2 className={'badgeContent'}>{`Phone: ${newCard.phone}`}</h2>
                                    </span>
                                </div>
                                <div>
                                    <span className={'badgeSpan'}>
                                        <h2 className={'badgeContent'}>{`Place of Birth: ${newCard.placeOfBirth}`}</h2>
                                        <h2 className={'badgeContent'}>{`Favorite Food: ${newCard.favoriteFood}`}</h2>
                                    </span>
                                </div>
                                <div>
                                    <span className={'badgeSpan'}>
                                        <h2 className={'badgeContent'}>{`Email: ${newCard.email}`}</h2>
                                    </span>
                                </div>
                                <div>
                                    <p className={'badgeContent aboutYou'}>
                                        {`Tell Us About You: ${newCard.yourself}`}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App;
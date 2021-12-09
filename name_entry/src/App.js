import React, { Component } from "react";

class App extends Component{
    constructor(){
        super()
        this.state={
            name: '',
            nameList: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.nameSubmitClick = this.nameSubmitClick.bind(this)
    }

    nameSubmitClick(event){
        event.preventDefault()
        this.setState(prevState => {
                return{
                    ...prevState,
                    nameList: [...prevState.nameList, prevState.name]
                }
            })
    }


    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
                <form>
                    <input
                        type='text'
                        value={this.state.name}
                        name='name'
                        placeholder='Name'
                        onChange={this.handleChange}
                    />
                    <button onClick={this.nameSubmitClick}>Submit</button>
                </form>
                <h1>{this.state.name}</h1>
                <div>
                    <ul>
                        {this.state.nameList.map(newName => {
                            return(
                                <li>{newName}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;
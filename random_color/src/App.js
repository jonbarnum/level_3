import React, { Component } from "react";
import axios from 'axios';
import './stylesheet.css'

class App extends Component{
    constructor(){
        super()
        this.state= {
            color: null
        }
    }

        componentDidMount(){
            axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(response => {
                this.setState({
                    color: response.data
                })
                console.log(this.state.color.new_color)
            })

        }


    render(){
        const styles = {
            width: '250px',
            height: '250px',
            border: '2px solid black',
            backgroundColor: `#${this.state.color?.new_color}`
        }
        return(
            <div style={styles} className="box">
                <h1>Hello</h1>
            </div>
        )
    }
}

export default App;
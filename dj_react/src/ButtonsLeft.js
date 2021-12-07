import React, { Component } from "react";
import colors from "./colors";

class ButtonsLeft extends Component{
    constructor(){
        super()
        this.state = {
            colors: colors
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick (){
        this.setState( prevState => {
            return{
                colors: prevState.colors[0] + prevState.colors[1], 
            }
        })
    }

    render(){
        return(
            <div>
                <div>
                    <button onClick={this.handleClick} className={'button'}>DJ Small</button>
                </div>
                <div>
                    <button className={'button'}>Pro DJ 1</button>
                </div>
                <div>
                    <button className={'button'}>Big Time DJ 1</button>
                </div>
                <div>
                    <button className={'button'}>Big Time DJ 3</button>
                </div>
                <div>
                    <button className={'button'}>Great DJ</button>
                </div>
            </div>
        )
    }
}

export default ButtonsLeft;
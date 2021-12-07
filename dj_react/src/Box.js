import React, { Component } from "react";

class Box extends Component{
    render(){
        return(
            <div>
                <p className={this.props.box + ' box'}></p>
            </div>
        )
    }
}

export default Box;
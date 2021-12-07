import React, { Component } from "react";
import ButtonsLeft from "./ButtonsLeft";
import ButtonsRight from "./ButtonsRight";

class Buttons extends Component{
    render(){
        return(
            <div className={'buttonDiv'}>
                <div>
                    <ButtonsLeft/>
                </div>
                <div>
                    <ButtonsRight/>
                </div>
            </div>
        )
    }
}

export default Buttons;
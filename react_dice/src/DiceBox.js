import React, { Component } from "react";

class DiceBox extends Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.randomNumberGenerator = this.randomNumberGenerator.bind(this);
    }

    randomNumberGenerator() {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        let randomNumber3 = Math.floor(Math.random() * 6) + 1;
        let randomNumber4 = Math.floor(Math.random() * 6) + 1;
        let randomNumber5 = Math.floor(Math.random() * 6) + 1;

        this.setState({
            num1: randomNumber1,
            num2: randomNumber2,
            num3: randomNumber3,
            num4: randomNumber4,
            num5: randomNumber5,
        })
    }


    render(){
        return(
            <div>
                <span className={'diceSpan'}>
                    <div>
                        <h1 className={'number'}>{this.state.num1}</h1>
                    </div>
                    <div>
                        <h1 className={'number'}>{this.state.num2}</h1>
                    </div>
                    <div>
                        <h1 className={'number'}>{this.state.num3}</h1>
                    </div>
                    <div>
                        <h1 className={'number'}>{this.state.num4}</h1>
                    </div>
                    <div>
                        <h1 className={'number'}>{this.state.num5}</h1>
                    </div>
                </span>
                <div className={'buttonDiv'}>
                    <button onClick={this.randomNumberGenerator}>Press Me</button>
                </div>
            </div>
        )
    }
}

export default DiceBox;
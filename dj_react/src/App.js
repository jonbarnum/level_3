import React, {Component} from "react";
import colors from './colors';
import Box from "./Box";


class App extends Component{
    constructor(){
        super()
        this.state = {
            colors: colors
        }
        this.djSmallClick = this.djSmallClick.bind(this);
        this.partyDJClick = this.partyDJClick.bind(this);
        this.proDJOneClick = this.proDJOneClick.bind(this);
        this.proDJTwoClick = this.proDJTwoClick.bind(this);
        this.bigTimeDJOneClick = this.bigTimeDJOneClick.bind(this);
        this.bigTimeDJTwoClick = this.bigTimeDJTwoClick.bind(this);
        this.bigTimeDJThreeClick = this.bigTimeDJThreeClick.bind(this);
        this.bigTimeDJFourClick = this.bigTimeDJFourClick.bind(this);
        this.makeNoiseClick = this.makeNoiseClick.bind(this);
    }

    djSmallClick(){
        if(
            colors[0] === 'white' &&
            colors[1] === 'black' &&
            colors[2] === "black" &&
            colors[3] === 'black'
        ){
            colors[0] = 'black'
            colors[1] = 'white'
            colors[2] = 'white'
            colors[3] = 'white'
        }else{
            colors[0] = 'white'
            colors[1] = 'black'
            colors[2] = 'black'
            colors[3] = 'black'
        }
        this.setState({
            colors: this.state.colors
        })
    }

    partyDJClick(){
        colors[0] = 'purple';
        colors[1] = 'purple';
        this.setState({
            colors: this.state.colors
        })
    }

    proDJOneClick(){
        colors[2] = 'blue';
        this.setState({
            colors: this.state.colors
        })
    }

    proDJTwoClick(){
        colors[3] = 'blue';
        this.setState({
            colors: this.state.colors
        })
    }

    bigTimeDJOneClick(){
        colors[0] = 'red';
        this.setState({
            colors: this.state.colors
        })
    }

    bigTimeDJTwoClick(){
        colors[1] = 'green';
        this.setState({
            colors: this.state.colors
        })
    }

    bigTimeDJThreeClick(){
        colors[2] = 'yellow';
        this.setState({
            colors: this.state.colors
        })
    }

    bigTimeDJFourClick(){
        colors[3] = 'orange';
        this.setState({
            colors: this.state.colors
        })
    }

    makeNoiseClick(){
        colors[0] = 'white';
        colors[1] = 'black';
        colors[2] = 'black';
        colors[3] = 'white';
        this.setState({
            colors: this.state.colors
        })
    }

    render(){
        const singleBox = this.state.colors.map((box, index) =>{
            return <Box box={box}/>
        })

        return(
            <div className={'boxGrid'}>
                {singleBox}
                <div>
                    <div>
                        <button onClick={this.djSmallClick} className={'button'}>DJ Small</button>
                    </div>
                    <div>
                        <button onClick={this.proDJOneClick} className={'button'}>Pro DJ 1</button>
                    </div>
                    <div>
                        <button onClick={this.bigTimeDJOneClick} className={'button'}>Big Time DJ 1</button>
                    </div>
                    <div>
                        <button onClick={this.bigTimeDJThreeClick} className={'button'}>Big Time DJ 3</button>
                    </div>
                    <div>
                        <button onClick={this.makeNoiseClick} className={'button'}>Great DJ</button>
                    </div>
                </div>
                <div>
                    <div>
                        <button onClick={this.partyDJClick} className={'button'}>Party DJ</button>
                    </div>
                    <div>
                        <button onClick={this.proDJTwoClick} className={'button'}>Pro DJ 2</button>
                    </div>
                    <div>
                        <button onClick={this.bigTimeDJTwoClick} className={'button'}>Big Time DJ 2</button>
                    </div>
                    <div>
                        <button onClick={this.bigTimeDJFourClick} className={'button'}>Big Time DJ 4</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
import React, { Component } from "react";
import './stylesheet.css'

class App extends Component {
    constructor(){
        super()
        this.state={
            characters: []
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                characters: data
            })
        })
    }

    render(){
        // let mappedCharacters = this.state.characters.map(character => {
        //     return(
        //         <div>
        //             {character.name},
        //             <img src={character.image} alt={'character name'}/>
        //         </div>
        //     )
        // })
        return(
            // <h1>{mappedCharacters}</h1>
            <div>
                <h1>Hit List</h1>
                {this.state.characters.map(character => (
                    <div>
                        <h1>{character.name}</h1>
                        <img className={'img'} src={character.image} alt='character name'/>
                    </div>
                    
                ))}
            </div>
        )
    }
}

export default App; 
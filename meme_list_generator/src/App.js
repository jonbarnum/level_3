import React, { Component } from "react";
import axios from 'axios';
import './stylesheet.css';

class App extends Component{
    constructor(){
        super()
        this.state={
            memeList: [],
            savedMemes: [],
            image: null,
            topText: '',
            bottomText: '',
            topEditText: '',
            bottomEditText: '',
            previewActive: false,
            editActive: false,
            id: ''
        }
        this.randomImageGenerator = this.randomImageGenerator.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.preview = this.preview.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleEditSubmit = this.handleEditSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSavedMemeText = this.handleSavedMemeText.bind(this)
    }

    componentDidMount(){
        axios.get('https://api.imgflip.com/get_memes')
        .then(response => {
            this.setState({
                memeList: response.data.data.memes,
                image: response.data.data.memes[0]?.url,
                id: response.data.data.memes[0]?.id
            })
        })
    }

    randomImageGenerator(){
        let randomImageNumber = Math.floor(Math.random() * 101)
        this.setState({
            image: this.state.memeList[randomImageNumber]?.url,
            id: this.state.memeList[randomImageNumber]?.id
        })
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
            previewActive: false
        })
    }

    preview(event){
        event.preventDefault()
        this.setState({
            topText: this.state.topText,
            bottomText: this.state.bottomText,
            previewActive: true
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState({
            topText: '',
            bottomText: '',
            savedMemes: [
                ...this.state.savedMemes,
                {
                    image: this.state.image,
                    topText: this.state.topText,
                    bottomText: this.state.bottomText,
                    id: this.state.id,
                    editState: {
                        editActive: false,
                        topText: this.state.topEditText,
                        bottomText: this.state.bottomEditText,
                        image: this.state.image
                    }
                }
            ]
        })
    }

    handleEdit(index){
        this.state.savedMemes[index].editState.editActive = !this.state.savedMemes[index].editState.editActive
        this.setState(this.state)
    }


    handleEditSubmit(event, index){
        event.preventDefault()
        // const savedMeme = this.state.savedMemes.find((meme) => meme.id === id)
        // savedMeme.editState.editActive = false
        // savedMeme.topText = savedMeme.editState.topText
        // savedMeme.bottomText = savedMeme.editState.bottomText

        // this.setState({
        //     ...this.state,
        //     savedMemes: [
        //         ...this.state.savedMemes.slice(0, index),
        //         savedMeme,
        //         ...this.state.savedMemes.slice(index + 1),
        //     ]
        // })
        
        
        this.state.savedMemes[index].editState.editActive = false
        this.state.savedMemes[index].topText = this.state.savedMemes[index].editState.topText
        this.state.savedMemes[index].bottomText = this.state.savedMemes[index].editState.bottomText
        this.setState(this.state)
        
    }



    handleDelete(event, index){
        event.preventDefault()
        // let deletingMeme = event.currentTarget
        // this.setState({

        // })
        // this.setState(prevState => ({
        //     savedMemes:[
        //         ...prevState.savedMemes
        //     ]
        // }))
    }

    handleSavedMemeText(event, index){
        this.state.savedMemes[index].editState[event.target.name] = event.target.value
        this.setState(this.state)
    }

    render(){
        return(
            <div>
                <div>
                    <div>
                        <button className="newImageButton" onClick={this.randomImageGenerator}>New Image</button>
                    </div>
                    <div className="memeBox">
                        {this.state.previewActive ? (                            
                            <h2 className="topText">{this.state.topText}</h2>
                        ) : null}
                        <img 
                            className="memeImage" 
                            src={this.state.image} 
                            alt="meme"
                        />
                        {this.state.previewActive ? (
                            <h2 className="bottomText">{this.state.bottomText}</h2>
                        ) : null}
                    </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type='text'
                                value={this.state.topText}
                                name="topText"
                                placeholder="Top Text"
                                onChange={this.handleChange}
                                className="topTextInput"
                            />
                            <input
                                type='text'
                                value={this.state.bottomText}
                                name="bottomText"
                                placeholder="Bottom Text"
                                onChange={this.handleChange}
                                className="bottomTextInput"
                            />
                            <button onClick={this.preview}>Preview</button>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div>
                    {this.state.savedMemes.map((savedMeme, index) => {
                        return(
                            <div key={savedMeme?.id}>
                                <div className="savedMemesContainer" >
                                    {<h2 className="topText">{savedMeme.topText}</h2>}
                                    <img className="memeImage" src={savedMeme.image} alt="meme list"/>
                                    {<h2 className="bottomText">{savedMeme.bottomText}</h2>}
                                    <button onClick={() => this.handleEdit(index)} className="button">Edit</button>
                                    <button onClick={this.handleDelete} className="button">Delete</button>
                                </div>
                                <div>
                                    {savedMeme.editState.editActive ? (                            
                                        <div className="editInputDiv">
                                            <form id={savedMeme.id} onSubmit={(event) => this.handleEditSubmit(event, index)}>
                                                <input
                                                    type='text'
                                                    value={savedMeme.editState.topText}
                                                    name="topText"
                                                    placeholder="Top Text"
                                                    onChange={(event) => this.handleSavedMemeText(event, index)}
                                                    className="topTextInput"
                                                />
                                                <input
                                                    type='text'
                                                    value={savedMeme.editState.bottomText}
                                                    name="bottomText"
                                                    placeholder="Bottom Text"
                                                    onChange={(event) => this.handleSavedMemeText(event, index)}
                                                    className="bottomTextInput"
                                                />
                                                <button type="submit">Submit</button>
                                            </form>
                                        </div>
                                    ) : null}
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
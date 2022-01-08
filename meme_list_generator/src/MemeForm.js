import React, { Component } from "react";
import axios from 'axios';
import './stylesheet.css';
import MemeFormComponent from './MemeFormComponent'

class MemeForm extends Component{
    constructor(){
        super()
        this.state={
            memeList: [],
            savedMemes: [],
            image: null, //speficies the initial state rather than the loaded image reference
            topText: '',
            bottomText: '',
            topEditText: '',
            bottomEditText: '',
            previewActive: false,
            editActive: false,
            id: ''
        }
        this.randomImageGenerator = this.randomImageGenerator.bind(this) //'this' represents the current scope of the instance of MemeForm
        this.handleChange = this.handleChange.bind(this)
        this.preview = this.preview.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleEditSubmit = this.handleEditSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSavedMemeText = this.handleSavedMemeText.bind(this)
    }

    componentDidMount(){
        axios.get('https://api.imgflip.com/get_memes') //using the http .get verb/method and fetching from url. POST will allow for a body on the request. Body can be information that you want to send to the server. axios will return a promise. A promise can have a .then chained onto it. Also a .catch for catching an error
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
            [event.target.name]: event.target.value, //target is the actual dom node that triggered the event. [code] allows for dynamic changes as opposed to static 
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

    handleEdit(index, id){
        const savedMeme = this.state.savedMemes.find((meme) => meme.id === id) //if true it will return the first item that the function returns true on
        savedMeme.editState.editActive = !savedMeme.editState.editActive
        // savedMeme.topText = savedMeme.editState.topText
        // savedMeme.bottomText = savedMeme.editState.bottomText

        this.setState({
            ...this.state,
            savedMemes: [
                ...this.state.savedMemes.slice(0, index),
                savedMeme,
                ...this.state.savedMemes.slice(index + 1),
            ]
        })


        // to use this while changing state directly put index as a parameter prior to id
        // this.state.savedMemes[index].editState.editActive = !this.state.savedMemes[index].editState.editActive
        // this.setState(this.state)
        // const savedMemes[index].editState.editActive = !this.state.savedMemes[index].editState.editActive
    }


    handleEditSubmit(event, index, id){
        event.preventDefault()
        const savedMeme = this.state.savedMemes.find((meme) => meme.id === id)
        savedMeme.editState.editActive = false
        savedMeme.topText = savedMeme.editState.topText
        savedMeme.bottomText = savedMeme.editState.bottomText

        this.setState({
            ...this.state,
            savedMemes: [
                ...this.state.savedMemes.slice(0, index),
                savedMeme,
                ...this.state.savedMemes.slice(index + 1),
            ]
        })
        
        // to use this for changing state directly take out id as a parameter 
        // this.state.savedMemes[index].editState.editActive = false
        // this.state.savedMemes[index].topText = this.state.savedMemes[index].editState.topText
        // this.state.savedMemes[index].bottomText = this.state.savedMemes[index].editState.bottomText
        // this.setState(this.state)
        
    }



    handleDelete(event, index){
        event.preventDefault()
        this.setState({
            ...this.state,
            savedMemes: [
                ...this.state.savedMemes.slice(0, index),
                ...this.state.savedMemes.slice(index + 1)
            ]
        })
    }
    //this is used if changing state directly
    // handleSavedMemeText(event, index){
    //     this.state.savedMemes[index].editState[event.target.name] = event.target.value
    //     this.setState(this.state)
    // }

    handleSavedMemeText(event, index, id){
        const savedMeme = this.state.savedMemes.find((meme) => meme.id === id)
        savedMeme.editState[event.target.name] = event.target.value
        
        this.setState({
            ...this.state,
            savedMemes: [
                ...this.state.savedMemes.slice(0, index),
                savedMeme,
                ...this.state.savedMemes.slice(index + 1),
            ]
        })
    }

    render(){ //render function renders the code to the dom, runs over and over. the render function will compare its changes to the virtual dom. if there are changes then it will render the changes to the dom
        return(
            <MemeFormComponent
                randomImageGenerator={this.randomImageGenerator}
                handleChange={this.handleChange}
                preview={this.preview}
                handleSubmit={this.handleSubmit}
                handleEdit={this.handleEdit}
                handleEditSubmit={this.handleEditSubmit}
                handleDelete={this.handleDelete}
                handleSavedMemeText={this.handleSavedMemeText}
                data={this.state}
            />
        )
    }
}

export default MemeForm;
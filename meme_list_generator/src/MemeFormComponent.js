import React from "react";

function MemeFormComponent(props){
    return(
        <div>
            <div>
                <div>
                    <button className="newImageButton" onClick={props.randomImageGenerator}>New Image</button>
                </div>
                <div className="memeBox">
                    {props.data.previewActive ? (                            
                        <h2 className="topText">{props.data.topText}</h2>
                    ) : null}
                    <img 
                        className="memeImage" 
                        src={props.data.image} 
                        alt="meme"
                    />
                    {props.data.previewActive ? (
                        <h2 className="bottomText">{props.data.bottomText}</h2>
                    ) : null}
                </div>
                <div>
                    <form onSubmit={props.handleSubmit}>
                        <input
                            type='text'
                            value={props.data.topText}
                            name="topText"
                            placeholder="Top Text"
                            onChange={props.handleChange}
                            className="topTextInput"
                        />
                        <input
                            type='text'
                            value={props.data.bottomText}
                            name="bottomText"
                            placeholder="Bottom Text"
                            onChange={props.handleChange}
                            className="bottomTextInput"
                        />
                        <button onClick={props.preview}>Preview</button>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div>
                {props.data.savedMemes.map((savedMeme, index) => {
                    return(
                        <div key={savedMeme.id}>
                            <div className="savedMemesContainer" >
                                {<h2 className="topText">{savedMeme.topText}</h2>}
                                <img className="memeImage" src={savedMeme.image} alt="meme list"/>
                                {<h2 className="bottomText">{savedMeme.bottomText}</h2>}
                                <button onClick={() => props.handleEdit(index, savedMeme.id)} className="button">Edit</button>
                                {/* to use the handleEdit while changing state directly use index as a argument prior to savedMeme.id */}
                                <button onClick={(event) =>props.handleDelete(event, index)} className="button">Delete</button>
                            </div>
                            <div>
                                {savedMeme.editState.editActive ? (                            
                                    <div className="editInputDiv">
                                        <form id={savedMeme.id} onSubmit={(event) => props.handleEditSubmit(event, index, savedMeme.id)}>
                                            {/* to use the handleEditSubmit with changing state directly take out savedMeme.id after index */}
                                            <input
                                                type='text'
                                                value={savedMeme.editState.topText}
                                                name="topText"
                                                placeholder="Top Text"
                                                onChange={(event) => props.handleSavedMemeText(event, index, savedMeme.id)}
                                                className="topTextInput"
                                            />
                                            <input
                                                type='text'
                                                value={savedMeme.editState.bottomText}
                                                name="bottomText"
                                                placeholder="Bottom Text"
                                                onChange={(event) => props.handleSavedMemeText(event, index, savedMeme.id)}
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

export default MemeFormComponent;
import React from "react";

function BlogPost(props){
    return(
        <div className={'bodyDiv'}>
            <div>
                <button className={'authorButton'}>
                    <h1 className={'bodyText'}>{props.blog.title}</h1>
                    <h2 className={'subBodyText'}>{props.blog.subTitle}</h2>
                </button>
            </div>
            <div>
                <h3>
                    <span className={'authorText'}>{`Post by `} <button className={'author'}>{props.blog.author}</button>{` on ${props.blog.date}`}</span>
                </h3>
            </div>
            <hr className={'horizontalLine'}/>
        </div>
    )
}

export default BlogPost;
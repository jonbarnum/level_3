import React from "react";
import BlogPost from './BlogPost'
import blogdata from "./blogData";

function BlogList(){
    const blogEntry = blogdata.map((blog) => (
        <BlogPost key={blog.title} blog={blog}/>
    ))

    return(
        <div>
            {blogEntry}
            <div className={'olderPost'}>
            <button className={'olderPostText'}>Older Post</button>
            </div>
            <hr/>
        </div>
    )
}

export default BlogList;
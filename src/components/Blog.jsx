import React from 'react'
import "../styles/Blog.css"

export default function Blog() {
    return (
        <div id='blog'>
            <div className="blog-cont">
                <h1 className="header">Blogs</h1>
                <div className="data-cont">
                    <div className="data">
                        <div className="data-body">
                            <div className="img"></div>
                        
                            <h2 className='title'>Title One</h2>
                            <p className='text'>
                            is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing and typesetting industry.s simply dummy text of the printing and typesetting industry.is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <button className='view-blog'>View Blog &#62;&#62;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


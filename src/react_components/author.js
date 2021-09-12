import React from 'react'

const Author = ({authorName, githubUsername}) => {
    return (
        <div className='author'>
            Autor: <a href={'https://github.com/' + githubUsername}>{authorName}</a>
        </div>
    )
}

export default Author

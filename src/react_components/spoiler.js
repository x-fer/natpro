import React from 'react';
const {useState} = React;

const Spoiler = ({text}) => {
    const [shown, setShown] = useState(false)

    return (
        <span onClick={() => setShown(!shown)} className={'react-spoiler-' + (shown ? 'shown' : 'hidden')}>
            {text}
        </span>
    )
}

export default Spoiler

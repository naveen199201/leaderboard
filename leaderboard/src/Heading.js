import React from 'react'
import'./Heading.css';

const Heading = () => {
    return (
        <div className='hoader'>
            <div className='hoader-left'>
                <hr className='left-line1' />
                <hr className='left-line2' />
                <hr className='left-line3' />
            </div>
            <div className='hoader-text'>
                FASTEST OF TODAY
            </div>
            <div className='hoader-right'>
                <hr className='right-line1' />
                <hr className='right-line2' />
                <hr className='right-line3' />
            </div>
        </div>
    )
}

export default Heading
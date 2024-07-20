import React from 'react'
import './Chip.css';
import { FaTrophy } from "react-icons/fa";
import { BiSolidTimer } from "react-icons/bi";
const Chip = ({ item, index, prize, isHeader }) => {
    const pad = (num) => (num < 10 ? '0' + num : num);

    return (
        <>
            {!isHeader ?
                <div className='board-data' >
                    <div className='index' >
                        {index}
                    </div>
                    <div className='name'>
                        {item.name}
                    </div>
                    <div className='prize'>
                        {index < 4 ? <span>&#x20B9;</span> : null}
                        {prize}
                    </div>
                    <div className='time'>
                        {pad(item.time.hours)}: {pad(item.time.minutes)}: {pad(item.time.seconds)}
                    </div>
                </div>
                :
                <div className='header-chip' >
                    <div className='cup' >
                        <FaTrophy />
                    </div>
                    <div className='name'>
                        <h3>NAME</h3>
                    </div>
                    <div className='prize'>

                    </div>

                    <div className='time'>
                        <h3><BiSolidTimer className='' />TIME</h3>
                    </div>
                </div>
            }
        </>
    )
}

export default Chip
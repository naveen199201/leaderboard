import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Chip from './Chip';
import Heading from './Heading';
import './Board.css';

const getTotalSeconds = (time) => {
    return time.hours * 3600 + time.minutes * 60 + time.seconds;
};

const Board = () => {
    const formDataList = useSelector((state) => state.leaderList.formDataList);
    const [latestEntryIndex, setLatestEntryIndex] = useState(-1);
    const newEntryRef = useRef(null);
    const sortedList = [...formDataList].sort((a, b) => getTotalSeconds(a.time) - getTotalSeconds(b.time));
    const prizeMoney = ['50000', '5000', '500'];

    useEffect(() => {
        const lastEntryDate = formDataList.length ? formDataList.at(-1).date : null;
        const index = sortedList.findIndex(item => item.date === lastEntryDate);
        setLatestEntryIndex(index);
    }, [formDataList, sortedList]);

    useEffect(() => {
        if (newEntryRef.current) {
            newEntryRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [latestEntryIndex]);

    return (
        <div className='board'>
            <div className='board-heading'><Heading /></div>
            <div className='board-header'>
                <Chip isHeader={true} />
            </div>
            <div className='board-items'>
                {sortedList.map((item, index) => (
                    <div
                        key={item.date}
                        ref={index === latestEntryIndex ? newEntryRef : null}
                        className={`chip-container ${index === latestEntryIndex ? 'new-entry' : ''}`}
                    >
                        <Chip
                            index={index + 1}
                            isHeader={false}
                            item={item}
                            prize={index < 3 ? prizeMoney[index] : null}
                        />
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Board;

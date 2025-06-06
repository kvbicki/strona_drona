import React, { useState, useRef } from 'react';
import '../styles/flipcard.css';

const FlipCard = ({awers, rewers}) => {
    const [flipped, setFlipped] = useState(false);
    const [animClass, setAnimClass] = useState('');

    const handleClick = () => {
        if (animClass !== '') return;

        if (!flipped) {
            setAnimClass('animate-forward');
        } else {
            setAnimClass('animate-backward');
        }
    };

    const handleAnimationEnd = () => {
        if (animClass === 'animate-forward') {
            setFlipped(true);
        } else if (animClass === 'animate-backward') {
            setFlipped(false);
        }
        setAnimClass('');
    };
    const containerClasses = [
        'flip-container',
        animClass,
        flipped ? 'flipped' : ''
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={containerClasses} onClick={handleClick}>
            <div className="flipper" onAnimationEnd={handleAnimationEnd}>
                <div className="front">
                    {awers}
                </div>
                <div className="back">
                    {rewers}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;

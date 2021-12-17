import React from 'react';

const QueryConjunctor = ({conjunctor, handleClick}) => {
    const handleTogglerClick = (e) => {
        handleClick(e.target.id);
    }
    return (
        <div className='toggle-container' onClick={handleTogglerClick}>
            <button id='and' className={conjunctor === 'and' ? 'toggle-active': 'toggle'}>AND</button>
            <button id='or' className={conjunctor === 'and' ? 'toggle': 'toggle-active'}>OR</button>
        </div>
    )
};

export default QueryConjunctor;
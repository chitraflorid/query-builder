import React from 'react';
import EnterpretButton from '../common/EnterpretButton';

const QueryAddFilterButton = ({grpId, handleClick}) => {
    return (
        <EnterpretButton 
            id={grpId}
            className="add-btn"
            handleClick={handleClick}
        >
            + Add filter
        </EnterpretButton>
    )
};

export default QueryAddFilterButton;





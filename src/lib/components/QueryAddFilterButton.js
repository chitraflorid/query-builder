import React, {memo} from 'react';
import {EnterpretButton} from '../../common/components';

const isEq = (next, prev) => {
    return next.grpId === prev.grpId;
};

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

export default memo(QueryAddFilterButton, isEq);





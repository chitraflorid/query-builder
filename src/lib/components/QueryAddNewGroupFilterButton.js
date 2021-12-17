import React from 'react';
import { EnterpretButton } from '../../common/components';

const QueryAddNewGroupFilterButton = ({grpId, handleClick}) => {
    return (
        <EnterpretButton 
            id={grpId}
            className="add-grp-btn" 
            handleClick={handleClick}
        >
            + Add new group filter
        </EnterpretButton>
    )
};

export default QueryAddNewGroupFilterButton;

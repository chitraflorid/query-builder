import React from 'react';
import { EnterpretButton } from '../../common/components';

const QueryBuilderFooter = ({handleCancel, handleSubmit}) => {
    return (
        <div className='query-footer'>
            <EnterpretButton 
                type={'reset'}
                className="add-btn"
                handleClick={handleCancel}
            >
                Back
            </EnterpretButton>
            <EnterpretButton 
                type={'submit'}
                className="add-btn"
                handleClick={handleSubmit}
            >
                Finish
            </EnterpretButton>
        </div>
    )
};

export default QueryBuilderFooter;





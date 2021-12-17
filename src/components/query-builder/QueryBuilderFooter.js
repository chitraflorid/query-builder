import React from 'react';
import EnterpretButton from '../common/EnterpretButton';

const QueryBuilderFooter = ({handleCancel, handleSubmit}) => {
    return (
        <div className='query-footer'>
            <EnterpretButton 
                key={'root-cancel'}
                type={'reset'}
                className="add-btn"
                handleClick={handleCancel}
            >
                Back
            </EnterpretButton>
            <EnterpretButton 
                key={'root-submit'}
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





import React, {useContext, useCallback} from 'react';
import { EnterpretDropdown } from '../../common/components';
import {EnterpretButton} from '../../common/components';
import { QueryContext } from '../context/queryContext';

const QueryFilterItem = ({
    parentGrpFilterId,
    filterIndx,
    filter,
}) => {
    const { filterFieldOptions, updateFilter, removeFilter } = useContext(QueryContext);
    
    const handleFilterChange = useCallback((e) => {
         e.preventDefault();
        e.stopPropagation();
        
       const target = e.target;
       updateFilter({
           parentGrpFilterId,
           filterId: e.target.name,
           key: target.id,
           value: target.value
       });
    }, []);
        
    const handleRemoveFilterBtnClick = useCallback((e) => {
       removeFilter(parentGrpFilterId, e.target.id);
    }, []);
    
    return (
        <>
          {  filterFieldOptions.map(({ labelText, key, options }) => {
                return (
                    <div className={'flex-column'}>
                        <EnterpretDropdown
                            key={`${filter.id}-labelText`}
                            id={key} 
                            name={filter.id}
                            placeHolderText={'Select field'}  
                            className={'dropdown'} 
                            labelText={labelText} 
                            data={options} 
                            onChange={handleFilterChange}
                        />
                    </div>
                );
            })
}
            
{
filterIndx > 0 && <div className={'flex-column'}>
<EnterpretButton 
                        id={filter.id} 
                        type={'icon'} 
                        handleClick={handleRemoveFilterBtnClick} 
                        type={'delete'}
                    >
                        Delete
                    </EnterpretButton>
            </div>
}
</>

    );
};

export default QueryFilterItem;

 
 
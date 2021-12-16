import React, {useContext} from 'react';
import QueryConjunctor from './QueryConjunctor';
import QueryFilterItem from './QueryFilterItem';
import QueryAddFilterButton from './QueryAddFilterButton';
import QueryAddNewGroupFilterButton from './QueryAddNewGroupFilterButton';

import { QueryContext } from './context/queryContext';

const QueryGroupFilter = ({ grpFilter, className = ''}) => {
    console.log("@QueryGroupFilterEditor!!");
    console.log(grpFilter);    
    const { 
        addFilter,
        updateFilter,
        removeFilter,
        addNewGroupFilter,
        setQueryConjunctor,
        updateQuery,
    } = useContext(QueryContext);
    
    let { filters, id, conjunctor } = grpFilter;
    
    const handleAddNewGroupBtnClick = (e) => {
      console.log("add new GRoup Filter Btn Clicked!!"); 
      addNewGroupFilter(id);
    };
    
    const handleFilterChange = (e) => {
       const target = e.target;
       const selectedOpt = target.options[target.selectedIndex].value;
       updateFilter({
           parentGrpFilterId: id,
           filterId: e.currentTarget.id,
           key: target.id,
           value: selectedOpt
       });
    };
        
    const handleRemoveFilterBtnClick = (e) => {
       removeFilter(id, e.target.id);
    };
    
    const renderFilter = () => {
        return filters.map((filter, index) => {
            if (Array.isArray(filter.filters) && filter.filters.length > 0) {
                return (
                    <li key={filter.id}>
                        <QueryGroupFilter className={'child-grp'} grpFilter={filter} />
                    </li>
                )
            } else {
                return (
                    <QueryFilterItem
                        parentGrpFilterId={id}
                        handleFilterChange={handleFilterChange} 
                        handleRemoveFilterBtnClick={handleRemoveFilterBtnClick} 
                        key={filter.id} 
                        field={filter.field} 
                        condition={filter.condition} 
                        filterId={filter.id}
                        filterIndx={index}
                        value={filter.value} />
                );
            }
      });
    };
    
    const handleConjunctorToggle = (isAndChecked) => {
        setQueryConjunctor(id, isAndChecked);
    };
    
    const handleAddFilterBtnClick = (e) => {
       addFilter(id);
    };

    return ( 
            <ul className={`grp-container ${className}`} key={id}>
                <li className='no-line' key={`${id}-conj`}>
                    <QueryConjunctor conjunctor={conjunctor} handleClick={handleConjunctorToggle} />
                </li>
                { renderFilter() }
                <li className='no-line' key={`${id}-addfltrbtn`}>
                    <QueryAddFilterButton
                        grpId={id}
                        handleClick={handleAddFilterBtnClick} />
                </li>
                <li className='no-line' key={`${id}-addgrpbtn`}>
                    <QueryAddNewGroupFilterButton
                        grpId={id}
                        handleClick={handleAddNewGroupBtnClick} />
                </li>
</ul>
    );
    
};

export default QueryGroupFilter;
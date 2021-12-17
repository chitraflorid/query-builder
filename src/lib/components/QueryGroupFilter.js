import React, {memo, useCallback, useContext} from 'react';
import QueryConjunctor from './QueryConjunctor';
import QueryFilterItem from './QueryFilterItem';
import QueryAddFilterButton from './QueryAddFilterButton';
import QueryAddNewGroupFilterButton from './QueryAddNewGroupFilterButton';

import { QueryContext } from '../context/queryContext';

const QueryGroupFilter = ({filter, className='' }) => {
    const { 
        addFilter,
        addNewGroupFilter,
        setQueryConjunctor,
        updateQuery,
        groupFilter,
    } = useContext(QueryContext);
    
    let { filters, id, conjunctor } = filter ? filter : groupFilter;
    
    const handleAddNewGroupBtnClick = useCallback((e) => {
      addNewGroupFilter(id);
    },[]);
    
    const handleConjunctorToggle = useCallback((isAndChecked) => {
        setQueryConjunctor(id, isAndChecked);
    },[]);
    
    const handleAddFilterBtnClick = useCallback((e) => {
       addFilter(id);
    }, []);
    
    const renderFilter = () => {
        return filters.map((filter, index) => {
            if (Array.isArray(filter.filters) && filter.filters.length > 0) {
                return (
                    <li key={filter.id}>
                        <QueryGroupFilter 
                            className={'child-grp'}
                            filter={filter} 
                        />
                    </li>
                )
            } else {
                return (
                    <li 
                        className={'flex-container no-line container query-grp-item'} key={filter.id} 
                >
                    <QueryFilterItem
                        key={filter.id}
                        parentGrpFilterId={id}
                        filter={filter}
                        filterIndx={index}
                    />
                    </li>
                );
            }
      });
    };
    
    return ( 
            <ul 
                className={`grp-container ${className}`} 
                key={id}
            >
                <li 
                    className={'no-line'}
                    key={`${id}-conj`}
                 >
                    <QueryConjunctor 
                        conjunctor={conjunctor}
                        handleClick={handleConjunctorToggle}
                    />
                </li>
                { renderFilter() }
                <li 
                    className={'no-line'}
                    key={`${id}-addfltrbtn`}
                >
                    <QueryAddFilterButton
                        grpId={id}
                        handleClick={handleAddFilterBtnClick} 
                    />
                </li>
                <li 
                    className={'no-line'}
                    key={`${id}-addgrpbtn`}
                >
                    <QueryAddNewGroupFilterButton
                        grpId={id}
                        handleClick={handleAddNewGroupBtnClick}
                    />
                </li>
            </ul>
        );
};

export default QueryGroupFilter;
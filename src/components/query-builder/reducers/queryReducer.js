export const queryReducer = (state, action) => {
  switch (action.type) {
    case 'SEND_QUERY_REQEST':
          break;
    case'ADD_FILTER': {
        const newState = {
            groupFilter: addFilter(action, state.groupFilter)
        };
        
        newState.query = updateQuery(
                            newState.groupFilter.filters, newState.groupFilter.conjunctor
                         );
        
        return newState;
    }
    case 'UPDATE_FILTER': {
        const newState = {
            groupFilter: updateFilter(action, state.groupFilter)
        };
        
        newState.query = updateQuery(
                            newState.groupFilter.filters,                         newState.groupFilter.conjunctor
                        );
        
        return newState;
    }
    case'REMOVE_FILTER': {
        const newState = {
            groupFilter: removeFilter(action, state.groupFilter)      
        };   
        
        newState.query = updateQuery(
                            newState.groupFilter.filters, newState.groupFilter.conjunctor
                         );
        
        return newState;
    }
    case'SET_CONJUNCTOR': {
        const newState = {
            groupFilter: updateConjunctor(action, state.groupFilter)
        }
        
        newState.query = updateQuery(
                            newState.groupFilter.filters, newState.groupFilter.conjunctor
                         );
        return newState;
    }
    case 'ADD_NEW_GROUP_FILTER': {
        const newState = {
            groupFilter: addGroupFilter(action, state.groupFilter)
        }
        
        newState.query = updateQuery(
                            newState.groupFilter.filters,                         newState.groupFilter.conjunctor
                         );
        
        return newState;
    }
    default:
      return state;
  }
};

// helper functions 
/***
  ** function to update the new filter item to 
  ** existing filter list for the given group.
***/
const addNewFilterItem = ({filterId, condition, value, field}, grpFilter) => ([
    ...grpFilter.filters,
    {
        id: filterId,
        condition,
        value,
        field
    }
]);

/***
  ** function to update the new group filter to 
  ** existing filter list for the given group.
***/
const addNewGroupFilterItem = (action, groupFilter) => {
    return [
        ...groupFilter.filters,
        {
            id: action.grpFilterId,
            filters: addNewFilterItem(action, {filters: []}),
            conjunctor: groupFilter.conjunctor
        }
    ];
};

// function to update the new filter item either to root level group 
// or to the deeply nested level for the given group filter
const addFilter = (action, groupFilter) => {
     return { 
        id: groupFilter.id,
        filters: groupFilter.id === action.parentGrpFilterId ?
            addNewFilterItem(action, groupFilter) : 
            groupFilter.filters.map(item => {
                if (Array.isArray(item.filters) && item.filters.length > 0) {
                    return addFilter(action, item);
                } else {
                    return item;
                }
            }),
        conjunctor: groupFilter.conjunctor  
    };
};

/***
  ** function to add the new group filter either to root level or 
  ** to the deeply nested inner group filter as a child group filter.
  ** Recursively loop the filters list and add the group filter
  ** to the mapped parent group. 
***/
const addGroupFilter = (action, groupFilter) => {
    return {
      id: groupFilter.id,
      filters: groupFilter.id === action.parentGrpFilterId ? 
                addNewGroupFilterItem(action, groupFilter) :
                groupFilter.filters.map(item => {
                    if (Array.isArray(item.filters) && item.filters.length > 0) {
                        return addGroupFilter(action, item);
                    } else {
                        return item;
                    }
                }),
     conjunctor: groupFilter.conjunctor
    };
};

/***
  ** function to update the filter either to root level or 
  ** to the deeply nested inner group filter.
  ** Recursively loop through the filters list and update the                   ** filter/criteria/condition value to the mapped parent group. 
***/
const updateFilter = (action, groupFilter) => {
        return { 
            id: groupFilter.id,
            filters: groupFilter.filters.map(item => {
                if (action.parentGrpFilterId === groupFilter.id && item.id === action.filterId) {
                    return {
                        ...item,
                        [action.key]: action.value
                    };
                } else if (Array.isArray(item.filters) && item.filters.length > 0) {
                    return updateFilter(action, item);
                } else {
                    return item;
                }
            }),
            conjunctor: groupFilter.conjunctor  
        };
};

/***
  ** Remove the filter from the given group filter
***/
const removeFilter = (action, groupFilter) => {
    return { 
        id: groupFilter.id,
        filters: groupFilter.id === action.parentGrpFilterId ?
            groupFilter.filters.filter(qryFilter => qryFilter.id !== action.filterId) :
            groupFilter.filters.map(item => {
                if (Array.isArray(item.filters) && item.filters.length > 0) {
                    return removeFilter(action, item)
                } else {
                    return item;
                }
            }),
        conjunctor: groupFilter.conjunctor  
    };
};

/***
  ** Handle the conjunctor toggling and update the relevant 
  ** group filter
***/
const updateConjunctor = (action, groupFilter) => {
    return groupFilter.id === action.grpFilterId ? 
        {
            ...groupFilter,
            conjunctor: action.conjunctorOp
        } : 
        {
            id: groupFilter.id,
            filters: groupFilter.filters.map(item => {
                if (Array.isArray(item.filters) && item.filters.length > 0) {
                    return updateConjunctor(action, item);
                } else {
                    return item;
                }
            }),
            conjunctor: groupFilter.conjunctor
        };
};

/***
  ** Update the query string 
***/
const updateQuery = (filters, conjunctor) => {
    const query = filters.reduce((queryStr, filter, indx) => {
       if (Array.isArray(filter.filters)  && filter.filters.length > 0) {
            queryStr += `${indx === 0 ? '(' : ''}`;
            queryStr += ` ${updateQuery(filter.filters, filter.conjunctor)} `;
            queryStr += `${indx < filter.filters.length - 1 ? conjunctor : ''}`;
            queryStr += `${indx === filter.filters.length - 1 ? ')': ''}`;
       } else {           
            queryStr += ` (field.${filter.field}) ${filter.condition} \\"${filter.value}\\" `;
            queryStr += `${indx < filters.length -1 ? conjunctor : ''}`;
        }
       return queryStr;    
    }, '');
    
    return `( ${query} )`;
}


import React, { useReducer } from 'react';
import { QueryContext } from '../context/queryContext';
import { queryReducer } from '../reducers/queryReducer';

const QueryProvider = ({ children }) => {
    const uuid = (prefix) => `${prefix}-${(new Date().getTime()).toString(36)}`;

    const initialState = {
        query: '',
        groupFilter: {id: 'root', filters: [{id: uuid('f'), field: '', condition: '=', value: ''}], conjunctor: 'and'}
    };
    
    const [state, dispatch] = useReducer(queryReducer, initialState);

    const addFilter = (parentGrpFilterId) => {
        dispatch({
            type: 'ADD_FILTER',
            parentGrpFilterId,
            filterId: uuid('f'),
            field: '',
            condition: '=',
            value: ''
        });
    };
    
    const updateFilter = ({parentGrpFilterId, filterId, key, value}) => {
        dispatch({
            type: 'UPDATE_FILTER',
            parentGrpFilterId,
            filterId,
            key,
            value
        }); 
    };
    
    const removeFilter = (parentGrpFilterId, filterId) => {
        dispatch({
            type:'REMOVE_FILTER',
            parentGrpFilterId, filterId
        });   
    };
    
    const updateQuery = ({parentGrpFilterId, filterId, key, value}) => {
        dispatch({
            type: 'UPDATE_QUERY',
            parentGrpFilterId,
            filterId,
            key,
            value
        });
    };
    
    const addNewGroupFilter = (parentGrpFilterId) => {
        dispatch({
            type: 'ADD_NEW_GROUP_FILTER',
            parentGrpFilterId,
            grpFilterId: uuid('g'),
            filterId: uuid('f') + Math.random() * (10 - 2) + 2,
            field: 'name', 
            condition: '=', 
            value: 'offers',
            conjunctor: 'and'
        });
    };
    
    const updateQuerySubmit = (resp) => {
        dispatch({type: 'SUBMIT_QUERY_RESPONSE', response: resp});
    };
    
    const cancelQuery = () => {
        dispatch({type: 'CANCEL_QUERY'});
    };
    
    const setQueryConjunctor = (grpFilterId, conjunctorOp) => {
        dispatch({
            type:'SET_CONJUNCTOR',
            grpFilterId, 
            conjunctorOp
        });
    };
    
    return (
        <QueryContext.Provider
            value={{
                query: state.query,
                groupFilter: state.groupFilter,
                addFilter,
                updateFilter,
                removeFilter,
                updateQuery,
                addNewGroupFilter,
                updateQuerySubmit,
                cancelQuery,
                setQueryConjunctor,
            }}
        >
            {children}
        </QueryContext.Provider>
    );
};

export default QueryProvider;